import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import router from './router'
import store from './store'
const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.use(store)
app.use(router)
app.mount('#app')
