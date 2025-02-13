import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import socket from "@/socket";
import {store} from './store';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)
app.provide("socket", socket);
app.use(Vue3Toastify);

app.use(router)
app.use(store)

app.mount('#app')
