<template>
    <header>
        <div class="container has-text-centered logo-area">
            <!--img src="/img/logo.png" width="183px" height="24px"-->
        </div>
        <slot></slot>
    </header>
    
</template>

<script>

export default {

    data: function() {
        return {
            testheader: true
        }
    
    },

    
}
</script>

<style scoped>
    .logo-area {
        padding: 10px 0 1px;
    }
</style>