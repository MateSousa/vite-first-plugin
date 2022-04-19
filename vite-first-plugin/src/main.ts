import { createApp } from 'vue'
import App from './App.vue'
import ViewPlugin from './ViewPlugin'



const app = createApp(App)
   
app.use(ViewPlugin)
app.mount('#app')
