import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { updateSW } from '@/functions/updateSW'
import 'mindesignsystem'
import '@/sass/main.scss'

const app = createApp(App).use(router).use(store)
app.mount('#app')

updateSW()
store.dispatch('theme/fetch')
