import { createApp } from 'vue'

// Import SCSS styles
import './style.scss';

// Importing Vue Router
import { router } from "./route";

// Import Vue root component
import App from './App.vue'

createApp(App).use(router).mount('#app');
