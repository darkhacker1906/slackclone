import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
  state() {
    return {
      data: [], // Stores job data
      loading:false,
      notifications: [],
      newMessages: [],
    };
  },
  mutations: {
    // Add a new job to the data array
    addJob(state, job) {
      console.log(job,'===============');
      state.data.push(job);
      state.newMessages.push(job);
    },

    // Set the entire job data array (useful for bulk updates)
    setJobs(state, jobs) {
      state.data = jobs;
    },
    setLoader(state,loader){
      state.loading=loader;
    }
  },
actions: {
  async fetchJobs({ commit }, payload) {
    console.log(payload,'payloadpayload');

    const jobConfig = {
      node: { categories: ["nodejs", "node.js", "express.js", "expressjs", "nest.js", "nestjs"], commitKey: "upwork_feed_node" },
      python: { categories: ["python", "scraping", "flask", "django"], commitKey: "upwork_feed_python" },
      vue: { categories: ["vue.js", "vuejs"], commitKey: "upwork_feed_vuejs" },
      react: { categories: ["react.js", "reactjs", "reactnative"], commitKey: "upwork_feed_react" },
      "ai-ml": { categories: ["Finetunning", "AI Agents", "AI", "LLM"], commitKey: "upwork_feed_aiml" },
      devops: { categories: ["devops"], commitKey: "upwork_feed_devops" },
      shopify: { categories: ["shopify"], commitKey: "upwork_feed_shopify" },
    };

    const { categories, commitKey } = jobConfig[payload] || jobConfig.shopify; 

    try {
      commit("setLoader",true);
      console.log(store.state.loading,'loadingggggggggg');
      let allJobs = [];
      const baseurl = import.meta.env.VITE_BASE_URL;
      for (const category of categories) {
        const response = await axios.get(`${baseurl}?category=${category}`);
        allJobs = [...allJobs, ...response.data[commitKey]];
      }
      commit("setJobs", allJobs);
      commit("setLoader",false);
      console.log(store.state.loading,'loadingggggggggg');
    } catch (error) {
      console.error("Error fetching jobs:", error);
      commit("setLoader",false);
    }
  },

  addJob({ commit }, job) {
    commit("addJob", job);
  },
},

  getters: {
    // Get unique categories from job data
    category: (state) => {
      console.log(...new Set(state.data.map(item => item.category)));
      return [...new Set(state.data.map(item => item.category))];
    },

    // Get all job data
    getData: (state) => {
      return state.data;
    },
    getDataLength: (state)=>{
      console.log(state.data.length,'==========');
      return state.data.length;
    }
  },
});
