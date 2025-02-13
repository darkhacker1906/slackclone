<template>
  <div>
    <div class="flex "> 
      <sidebar :jobsData="jobsData"/>
      <div style="width: 100%;overflow:hidden">
        <navbar/>
        <div style="padding:15px; height: calc(100vh - 60px); overflow-y: auto;display:flex">
        <router-view/>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
import sidebar from '@/components/sidebar.vue'
import Navbar from '@/components/navbar.vue'
import axios from 'axios'; 
import socket from '@/socket';
export default {
  components: { sidebar, Navbar },
  data(){
    return{
     baseUrl:import.meta.env.VITE_BASE_URL,
     jobsData:[...this.$store.state.data]
    }
  },
mounted(){
  // this.fetchJobs(); 
  // console.log(this.$store.state,'=========');
  // console.log(import.meta.env.VITE_BASE_URL,'=============');
  // const baseURL = import.meta.env.VITE_BASE_URL; 
  // axios.get(`${baseURL}/jobs`).then(response => {
  //       console.log('API Response:', response.data);
  //       this.jobsData = response.data;
  //       console.log(this.jobsData,"this is jobs data========")
  //     })
  //     .catch(error => {
  //       console.error('Error fetching jobs:', error.message);
  //     });

},
watch:{
  // handleNewJob(val,newVal){
  //   console.log(val,"====================",newVal);
  //   this.handleNewJob=newVal;
  // }
},
// beforeDestroy() {
//   window.removeEventListener('newJob', this.handleNewJob);
//   },
methods:{
  // fetchJobs() {
  //     this.$store.dispatch('fetchJobs'); // Dispatch the fetchJobs action
  //   }

}
}
</script>

<style></style>