import './bootstrap';

import Vue from 'vue';

import VueRouter from 'vue-router';

import routes from './routes';

import PadelApp from './components/PadelApp';

Vue.use(VueRouter);

let app = new Vue({
    
    components: {
        PadelApp
    },
    router: new VueRouter(routes),
    render: h => h(PadelApp)
}).$mount('#app');