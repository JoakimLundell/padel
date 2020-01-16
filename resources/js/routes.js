import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Registrations from './components/Registrations.vue';
import NotFound from './components/NotFound.vue';

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
    
            component: Home
        },

        {
            path: '/sign-up',
    
            component: Signup
        },

        {
            path: '/registrations',

            component: Registrations
        }
    ]
};