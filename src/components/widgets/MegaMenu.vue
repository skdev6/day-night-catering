<template lang="">
    <div :id="id" class="megamenu-wrap bg-white absolute bottom-0 left-0 w-full -z-10">
        <div class="container mx-auto py-9">
            <slot/>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        id:String
    })
</script>
<style lang="scss">
    .megamenu-wrap.active{
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, .06);
    }
</style> 