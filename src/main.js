import { createApp } from 'vue';
import App from './App.vue';
import './CSS/tailwind.css';
import router from '../src/Router';
import axios from 'axios';

// Set up axios globally
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/', // Update with your backend API URL
});

const app = createApp(App);

// Provide the axios instance globally
app.config.globalProperties.$axios = axiosInstance;

app
  .use(router)
  .mount('#app');
