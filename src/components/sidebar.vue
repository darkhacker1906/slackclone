<template>
    <div class="h-[100vh] bg-[#5D2D5F]">
      <!-- Sidebar -->
      <aside class="w-64 shadow-lg h-[100%] overflow-auto w-[250px] rounded" style="padding:2px 10px 2px 10px;">
        <div class="top-sidebar text-white flex justify-center align-middle text-xl" style="padding-top:7px;height:50px;font-weight: 500;">Excellence Technologies</div>
        <div class="p-4">
          <h3 class="text-md font-semibold text-white thread hover:bg-[#cbc9c92e]" @click="$router.push('/home/threads')">Threads</h3>
        </div>
        <div class="p-4">
          <h3 class="text-md font-semibold text-white thread hover:bg-[#cbc9c92e]"  @click="$router.push('/home/huddles')">Huddles</h3>
        </div>
        <div class="p-4">
          <h3 class="text-md font-semibold text-white thread hover:bg-[#cbc9c92e]" @click="$router.push('/home/drafts')">Drafts & Sent</h3>
        </div>
        <div style="margin-top: 10px;">
          <button
            class="flex justify-between w-full px-4 py-2 text-white hover:bg-[#cbc9c92e] thread"
            @click="toggleChannels"
          >
            Technologies
            <span>
              <svg
                v-if="channelsCollapsed"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 15l-7-7-7 7"
                />
              </svg>
            </span>
          </button>
          <ul
            v-if="!channelsCollapsed"
            class="mt-2 space-y-2 text-gray-600"
          >
            <li v-for="jobs in channels" :key="jobs.id" class="pl-8">
              <a href="#" class="block px-4 py-2 hover:bg-[#cbc9c92e] text-white rounded-lg" style="padding-left: 14px; padding-top: 3px;padding-bottom: 3px;" :class="{ 'bg-[#cbc9c92e]': selectedId === jobs.id }" @click="handleClick(jobs)" >
                <i class="pi pi-lock" style="font-size: 12px;"/> {{ jobs.name }} 
              </a>
            </li>
          </ul>
        </div>
        <div style="margin-top: 10px;">
          <button
            class="flex justify-between w-full px-4 py-2 text-white hover:bg-[#cbc9c92e] thread"
            @click="toggleProposals"
          >
            Proposals
            <span>
              <svg
                v-if="propasalCollapsed"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 15l-7-7-7 7"
                />
              </svg>
            </span>
          </button>
          <ul
            v-if="!propasalCollapsed"
            class="mt-2 space-y-2 text-gray-600"
          >
            <li v-for="channel in proposals" :key="channel" class="pl-8">
              <a href="#" class="block px-4 py-2 hover:bg-[#cbc9c92e] text-white rounded-lg" style="padding-left: 14px; padding-top: 3px;padding-bottom: 3px;" @click="handleClick(channel)">
                <i class="pi pi-lock" style="font-size: 12px;"/> {{ channel }} 
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  export default {
    props: {
    jobsData: {
      type: Array,
      required: true,
    },
  },
    data() {
      return {
        channelsCollapsed: true,
        propasalCollapsed: true,
        selectedId: null,
        channels: [
           {name:"vue",id:'1'},
        {name:"python",id:'2'},
        {name:"ai-ml",id:'3'},
        {name:"node",id:'4'},
        {name:"react",id:'5'},
        {name:"devops",id:'6'},
        {name:"shopify",id:'7'}
        ],
        proposals:[
          "proposal",
        ],
      };
    },
    computed: {
      ...mapGetters(['category']) 
  },
  // mounted() {
  //   console.log('Unique Categories:', this.uniqueCategories);
  // },
    methods: {
      toggleChannels() {
        this.channelsCollapsed = !this.channelsCollapsed;
      },
      toggleProposals(){
       this.propasalCollapsed= !this.propasalCollapsed;
      },
      handleClick(channel){
        this.$router.push(`/home/technology/${channel.name}`);
        this.$store.dispatch('fetchJobs',channel.name);
        this.selectedId=channel.id;
        console.log(this.selectedId,'=seeeeelele')
      }
    },
  };
  </script>
  
  <style scoped>
  /* Customize scrollbar for the sidebar if needed */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #d1d5db;
    border-radius: 8px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #9ca3af;
  }
  .thread{
    padding-left: 8px;
    border-radius: 8px;
    padding-right: 10px;
    padding-top:3px;
    padding-bottom:3px;
  }
  </style>