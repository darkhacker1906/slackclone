<template>
  <div class="notifications">
    <div v-for="(notification, index) in notifications" :key="index" class="notification">
      <span>{{ notification.message }}</span>
      <small>{{ notification.timestamp }}</small>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Notification',
  setup() {
    const store = useStore();
    const notifications = computed(() => store.state.notifications);  // Get notifications from Vuex store

    return { notifications };
  }
};
</script>

<style scoped>
.notifications {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 300px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
}

.notification {
  margin-bottom: 10px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
</style>
