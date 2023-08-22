import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//? importamos el router
import Router from './routes'
// import OhVueIcon from './plugins/oh-vue-icons';

//? montamos el router en app
createApp(App).use(Router).mount('#app')
