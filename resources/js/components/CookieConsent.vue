<template>

    <div v-if="show" class="notification is-info">
        <button class="delete" @click="cancel"></button>
        <div class="columns is-vcentered">
            <div class="column is-three-quarters">
                Cookies! På vår sidan används bara funktionella cookies. Vi använder dem för att sidan ska fungera.</div>
            <div class="column is-one-quarters">
                <button class="button is-link" @click="consentCookies">Ok</button></div>
        </div>
    </div>
    
</template>

<script>

export default {
    data: function() {
        return {
            cookieName: "padel-cookie",
            show: false
        }
        
    },

    created: function () {
        if(!this.getCookie(this.cookieName)){
            this.show = true;
        };
    },

    methods: {
        getCookie(name) {
            let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return v ? v[2] : null;
        },

        setCookie(name, value, days) {
            let d = new Date;
            d.setTime(d.getTime() + 24*60*60*1000*days);
            document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
        },

        consentCookies() {
            this.setCookie(this.cookieName, 1, 365);
        },
        
        cancel() {
            this.show = false;
        }
        
    }
    
}
</script>