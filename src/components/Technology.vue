<template>
  <div class="flex flex-col w-full gap-6 p-8">
    <div class="h-[100%] flex justify-center items-center" v-if="loading"><loader/></div>
    <div v-else>
              <div>{{getDataLength}}</div>
         <div v-for="(job, index) in filteredJobs" :key="index" class="rounded overflow-hidden shadow-lg bg-white">
      <div class="px-6 py-4 hover:bg-[#b0aeae2e]" style="padding: 20px;">
        <div class="text-gray-500">{{job.posted}}</div>
        <h2 class="text-xl font-semibold text-gray-800" style="padding: 5px;">{{ job.title }}</h2>
        <div style="font-size:13px;padding-left:6px">{{job.skills}}</div>
        <div class="text-xl font-semibold text-gray-800" style="padding: 5px;">{{job.category}}</div>
        <p class="text-gray-700 mt-2"  style="padding: 5px;">{{ job.description }}</p>
        <a :href="job.link" target="_blank" class="text-blue-500 hover:text-blue-700 text-sm font-semibold"  style="padding: 5px;">Learn More</a>
        <!-- <button style="background:blue" @click="handleClick">TestData</button> -->
      </div>

    </div>
    </div>
 
  </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex';
import loader from './loader.vue';
import 'vue-loading-overlay/dist/css/index.css';
import {toast} from "vue3-toastify"

export default {
  components: { loader },
  name: 'Technology',

  computed: {
    ...mapState(['loading']),
    ...mapGetters(['getData','getDataLength']),
    channel() {
      return this.$route.params.channel || '';
    },
    filteredJobs() {
      return this.getData;
    },
    getDataLLength(){
      return this.getDataLength;
    }
  },

  watch: {
    channel(newChannel) {
      console.log("Fetching jobs for category:", newChannel);
    }
  },

  mounted() {
      console.log(this.$toast,'toastssssssssss');
    console.log(this.$store.data?.length(),'lengthhhhhhhhhhhhh');
    this.$store.dispatch('fetchJobs',this.$route.params.channel);
  },
  methods:{
    handleClick(){
      console.log("Click");
        toast.success("This is to test", {
          position: "bottom-right",
          autoClose: 3000,
        });
            const audio = new Audio('/notification-sound2.wav');
        // audio.play();
        audio.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
    }
  }
};

</script>


<style>
</style>
