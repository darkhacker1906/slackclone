export const playNotificationSound = () => {
    const audio = new Audio(new URL('./notification-sound.mp3', import.meta.url).href);
    audio.play().catch(error => console.error("Audio play error:", error));
};
