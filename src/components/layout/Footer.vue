<template>
    <div class="bg-[#FCFCFC] py-[35px] mt-[120px]"><footerTab class="container mx-auto"/></div>
    <footer class="footer__area bg-[#212121] text-white py-[30px] lg:py-[83px]">
        <div class="container mx-auto grid grid-cols-5">
            <div class="col-span-1">
                <a href="#" class="logo"><img :src="logo" alt=""></a>
            </div>
        </div>
    </footer>
</template>
<script setup>
    import logo from "@/assets/img/logo-light.svg"
    import footerTab from "./footerTab.vue";

</script>
<style lang="">
    
</style>