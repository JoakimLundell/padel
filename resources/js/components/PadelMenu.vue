<template>
    <div class="tabs">
                
        <ul>
            <li v-bind:class="{ 'is-active': this.$route.path === '/' }">
                <router-link to="/">Info</router-link></li>
            <li v-bind:class="{ 'is-active': this.$route.path == '/sign-up' }">
                <router-link to="/sign-up" class="is-active">Anmäl dig</router-link></li>
            
            
            <template v-if="authenticated">
                <li v-bind:class="{ 'is-active': this.$route.path == '/registrations' }">
                <router-link to="/registrations">Alla anmälda</router-link></li>
                <li><a href="" @click.prevent="logout">Logout</a></li>
            </template>
            <template v-else>
                <li v-bind:class="{ 'is-active': this.$route.path == '/login' }">
                <router-link to="/login">Login</router-link></li>
                
            </template>
        </ul>

    </div>
    
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {

        data: function() {
            return {
                currentRoute: this.$router.currentRoute
            }
        },

        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },

        methods: {
            ...mapActions({
                logoutAction: 'auth/signout'
            }),

            logout() {
                this.logoutAction().then(()=> {
                    this.$router.replace({
                        'name': 'home'
                    })
                })
            }
        }
    }
</script>

<!--style>

.logo {
    height: 30px;
}
</style-->