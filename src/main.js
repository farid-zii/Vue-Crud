import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

//Import Bootstrap,popper, jQuery
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'

const app=createApp(App)

//menggunakan router
app.use(router)

app.mount('#app')

