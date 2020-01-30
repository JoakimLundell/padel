<template>
    <div class="tabs">
                
        <ul>
            <li v-bind:class="{ 'is-active': this.$route.path === '/' }">
                <router-link to="/">Info</router-link></li>
            <li v-bind:class="{ 'is-active': this.$route.path == '/sign-up' }">
                <router-link to="/sign-up" class="is-active">Anmäl dig</router-link></li>
            <li v-bind:class="{ 'is-active': this.$route.path == '/registrations' }">
                <router-link to="/registrations">Alla anmälda</router-link></li>
        </ul>
        
    </div>
    
</template>

<script>

export default {

    data: function() {
        return {
            currentRoute: this.$router.currentRoute
        }
    },

    watch: {
   
  }
}
</script>

<!--style>

.logo {
    height: 30px;
}
</style-->