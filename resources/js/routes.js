import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Registrations from './components/Registrations.vue';
import Login from './components/PadelLogin.vue';
import NotFound from './components/NotFound.vue';

import store from './store'

export default {
    mode: 'history',
    linkActiveClass: 'is-active',

    routes: [
        {
            path: '*',

            component: NotFound
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/sign-up',
    
            component: Signup
        },

        {
            path: '/registrations',
            name: 'registrations',
            component: Registrations,
            beforeEnter: (to, from, next) => {
                if(!store.getters['auth/authenticated']){
                    return next({
                        'name': 'login'
                    })
                }
                
                next()

            }
        },

        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
};