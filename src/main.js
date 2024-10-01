import { createApp } from 'vue'
import notifications from '@kyvg/vue3-notification'
import './style.css'
import App from './App.vue'

createApp(App)
  .use(notifications)
  .mount('#app')
