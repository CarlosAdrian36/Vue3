import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'


import router from './router'
import store from './store/store'

store.startLoadingPokemons();



const app = createApp(App)

// app.use(VueQueryPlugin)

VueQueryPlugin.install(app,{
    queryClientConfig: {
        defaultOptions: {
            queries: {
            gcTime:1000 * 120,
            refetchOnReconnect: 'always',
            }
        }
    }
})

app.use(router)

app.mount('#app')
