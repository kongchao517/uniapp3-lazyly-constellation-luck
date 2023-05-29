/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-25 16:30:49
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 11:27:15
 */
import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import 'vue-global-api';
import '@static/iconfont/iconfont.css';
import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();

  app.use(pinia);
  return {
    app,
  };
}
