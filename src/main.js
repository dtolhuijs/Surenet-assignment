import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import './assets/style.css';
import './index.css';
import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

window.axios = axios;
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    pinia
}).$mount('#app');
