<template>
  <div v-if="messages.length">
    <ul>
      <div v-for="(job, index) in messages" :key="index" class="rounded overflow-hidden shadow-lg bg-white">
        <div class="px-6 py-4 hover:bg-[#b0aeae2e]" style="padding: 20px;">
          <div class="text-gray-500">{{ job.posted }}</div>
          <h2 class="text-xl font-semibold text-gray-800" style="padding: 5px;">{{ job.title }}</h2>
          <div style="font-size: 13px; padding-left: 6px;">{{ job.skills }}</div>
          <div class="text-xl font-semibold text-gray-800" style="padding: 5px;">{{ job.category }}</div>
          <p class="text-gray-700 mt-2" style="padding: 5px;">{{ job.description }}</p>
          <a :href="job.link" target="_blank" class="text-blue-500 hover:text-blue-700 text-sm font-semibold" style="padding: 5px;">Learn More</a>
        </div>
      </div>
    </ul>
  </div>
  <div v-else>No new messages</div>
</template>

<script>
export default {
  name: 'Threads',
  data() {
    return {
      toastTriggered: false, // Flag to track if toast has been triggered
    };
  },
  computed: {
    messages() {
      const messages = this.$store.state.newMessages || [];

      // Check if there are new messages and trigger toast if not done already
      if (messages.length && !this.toastTriggered) {
        const firstJobTitle = messages[0].title;

        // Trigger the toast with the title of the first job
        this.$toast.success(`New message: ${firstJobTitle}`, {
          position: "top-right",
          autoClose: 3000,
        });

        // Set the flag to avoid showing the toast multiple times
        this.toastTriggered = true;
      }

      return messages;
    }
  },
  watch: {
    // Reset the toast flag when messages change to allow toast again
    'messages': function() {
      this.toastTriggered = false; // Allow the toast to trigger again when messages change
    }
  }
}
</script>

<style scoped>
a {
  color: blue !important;
  text-decoration: underline;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f1f1f1;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>
