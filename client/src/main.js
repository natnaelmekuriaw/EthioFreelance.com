createApp(App).use(store).use(router).mount('#app')

import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from 'axios'
import "./assets/fontawsome/css/all.min.css";
import "./assets/css/fonts@google.css";
import "./assets/css/admin.min.css";


createApp({
    created(){
        const userString = localStorage.getItem('user')
        if (userString) {
            const userData = JSON.parse(userString)
            this.$store.commit('SET_USER_DATA', userData)
        }
        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    this.$store.dispatch('logout')
                }
                return Promise.reject(error)
            }
        )
    },
    render: () => h(App),
  }).use(store).use(router).mount('#app')