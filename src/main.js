import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';

const app = create(App);

app.use(router);

createApp({}).mount('#app');
