import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { installUnauthorizedHandler } from './services/http'
import { getStoredUser } from './helpers/session'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/fonts@google.css";
import "./assets/css/admin.min.css";
import "./assets/css/theme.css";


createApp({
    created(){
        const userData = getStoredUser()
        if (userData) {
            this.$store.commit('SET_USER_DATA', userData)
        }
        installUnauthorizedHandler(() => this.$store.dispatch('logout'))
    },
    render: () => h(App),
  }).use(store).use(router).mount('#app')
