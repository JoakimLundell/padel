<template>
    <div class="container">

        <padel-header>
            
            <padel-menu></padel-menu>
        
        </padel-header>
            
        <div class="section">
                
            <div class="columns">
                
                <div class="column">
                       
                    <router-view></router-view>
                        
                </div>

                <div class="column">
                    
                    <padel-images></padel-images>
                                   
                </div>

            </div>

            <div class="fixed">
                <cookie-consent></cookie-consent></div>
                
        </div>

    </div>
</template>

<script>
import PadelHeader from './PadelHeader';
import PadelMenu from './PadelMenu.vue';
import CookieConsent from './CookieConsent.vue';
import PadelImages from './PadelImages.vue';
    
export default {
    components: {
        PadelHeader,
        PadelMenu,
        CookieConsent,
        PadelImages
    },
    
}
</script>

<style scoped>
    .fixed {
       
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
    }
</style>