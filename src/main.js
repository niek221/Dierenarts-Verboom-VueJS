import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// // Redirect all HTTP traffic to HTTPS
// if (location.protocol !== 'https:') {
//   location.replace(`https:${location.href.substring(location.protocol.length)}`)
// }

app.use(router).mount('#app')