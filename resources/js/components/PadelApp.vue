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

            <cookie-consent></cookie-consent>
                
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