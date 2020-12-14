
require('./bootstrap');

import router from './routes';
import VueRouter from 'vue-router';
//importiamo index component
import Index from './index';
//vue assegnato alla finestra
window.Vue = require('vue');

Vue.use(VueRouter);
// componente istaziato
const app = new Vue({
    el: '#app',
    router,
    components:{
        'index':Index
    }
});
