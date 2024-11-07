import { createApp } from 'vue'
import nuxtUI from '@nuxt/ui/vue-plugin'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(nuxtUI)
app.mount('#app')
