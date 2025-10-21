<script setup>
    import Header from './Header.vue'
    import Footer from './Footer.vue'
</script>

<template>
    <div class="layout__area">
        <Header/>
        <main class="layout__content">
            <slot/>
        </main>
        <Footer/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>