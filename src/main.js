import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import BaseClient from './api/BaseClient';
import store from './store/index';

const app = createApp(App);
const client = new BaseClient();

client.instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 403) {
      await router.push('/');
    }
    return error;
  },
);

app.use(router);
app.use(store);
app.mount('#app');
app.config.globalProperties.apiClient = client;
