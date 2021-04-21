import{ createApp } from 'vue'
import App from './App.vue'
import auto from './router'
import {createRouter, createWebHistory} from 'vue-router'
import store from './store'

import './modules/projects'
import './modules/users'
let app = createApp(App);
let router = auto(app);


app.use(store).use(router).mount('#app')
