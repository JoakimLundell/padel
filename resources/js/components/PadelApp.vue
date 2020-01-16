<template>
    <div class="container">

        <padel-menu></padel-menu>
            

            <div class="section">
                
                <div class="columns">
                
                
                    <div class="column">
                       
                            <router-view></router-view>
                        
                    </div>

                    <div class="column">
                    

                        <div class="columns is-multiline">
                            
                           
                            <div class="column is-one-third">
                                <figure class="image is-1by1">
                                    <img src="/img/padel3.jpg">
                                </figure>
                            </div>

                            <div class="column is-one-third">
                                <figure class="image is-1by1">
                                    <img src="/img/costa-blanca.jpg">
                                </figure>
                            </div>
                           
                            <div class="column is-one-third">
                                <figure class="image is-1by1">
                                    <img src="/img/padeltennis.jpg">
                                </figure>
                            </div>
                            

                            <div class="column is-one-third">
                                <figure class="image is-1by1">
                                    <img src="/img/la-mata-beach.jpg">
                                </figure>
                            </div>


                            <div class="column is-one-third">
                                <figure class="image is-1by1">
                                    <img src="/img/flag_spain.png">
                                </figure>
                            </div>

                            <div class="column is-one-third">
                                <figure class="image is-1by1">
                                    <img src="/img/padel.jpg">
                                </figure>
                            </div>

                           

                            <div class="column is-one-third">
                                <figure class="image is-1by1">
                                    <img src="/img/map.png">
                                </figure>
                            </div>

                           

                            <div class="column is-one-third">
                                <figure class="image is-1by1">
                                    <img src="/img/padel2.jpeg">
                                </figure>
                            </div>

                            <div class="column is-one-third">
                                <figure class="image is-1by1">
                                    <img src="/img/walk.jpg">
                                </figure>
                            </div>
                            
                            
                          
                        </div>
                            
                       
                    </div>

                </div>

                <cookie-consent></cookie-consent>
                
            </div>

    </div>
</template>

<script>
import PadelMenu from './PadelMenu.vue';
import CookieConsent from './CookieConsent.vue';
    
export default {
    components: {
        PadelMenu,
        CookieConsent
    },
    
}
</script>