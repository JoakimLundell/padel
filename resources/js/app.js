import './bootstrap';

import Vue from 'vue';

import VueRouter from 'vue-router';

import routes from './routes';

import PadelApp from './components/PadelApp';

import store from './store/index.js'

Vue.use(VueRouter);

//Logga in igen
store.dispatch('auth/attempt', localStorage.getItem('token')).then(()=> {


    let app = new Vue({
    
        components: {
            PadelApp
        },
        
        router: new VueRouter(routes),
        store,
        render: h => h(PadelApp)
    }).$mount('#app');

    
});

