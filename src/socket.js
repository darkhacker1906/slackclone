import { store } from './store';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
let socket;
let reconnectTimeout = null;
let heartbeatInterval = null;
// Function to establish WebSocket connection
function setupWebSocket() {
  socket = new WebSocket(SOCKET_URL);

  socket.onopen = () => {
    console.log('Connected to WebSocket server');
    const audio = new Audio('/notification-sound2.wav');
    audio.play().catch(error => {
      console.error("Audio playback failed:", error);
    });

    // Start sending pings every 30 seconds
    heartbeatInterval = setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send('ping');
      }
    }, 30000);
  };

  socket.onmessage = (event) => {
    const message = event.data;

    if (message === 'pong') return; // Ignore 'pong' messages

    try {
      const parsedMessage = JSON.parse(message);
      if (parsedMessage.type === 'new_job') {
        console.log(parsedMessage.data, 'Received new job');
        store.dispatch('addJob', parsedMessage.data);
        toast.success("New Jobs Coming", {
          position: "bottom-right",
          autoClose: 3000,
        });
        // Play notification sound
        const audio = new Audio('/notification-sound2.wav');
         audio.play().catch(error => {
      console.error("Audio playback failed:", error);
    });
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed, attempting to reconnect...');
    
    clearInterval(heartbeatInterval); // Stop heartbeat
    
    // Attempt to reconnect after 5 seconds
    reconnectTimeout = setTimeout(() => {
      setupWebSocket();
    }, 5000);
  };
}

// Auto-initialize WebSocket connection when this module is imported
setupWebSocket();

// Function to manually close the connection if needed
export function closeWebSocket() {
  if (socket) {
    clearInterval(heartbeatInterval);
    clearTimeout(reconnectTimeout);
    socket.close();
  }
}

export default socket;
