
import './bootstrap';
import { createApp } from 'vue';

import router from './routes.js';
import app from './layouts/App.vue';

createApp(app)
    .use(router)
    .mount('#app');
