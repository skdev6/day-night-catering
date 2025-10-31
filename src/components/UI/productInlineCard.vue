<template lang="">
    <div class="flex items-center gap-x-5 mb-4">
        <img :src="thumbnail" alt="" class="thumbnail border border-[#EEEEEE] w-[60px] rounded-lg"/>
        <h3 class="title-sm font-semibold">{{title}}</h3>
        <inputCount class="count-small ml-auto"/>
    </div>
</template>
<script setup>
    import inputCount from './inputCount.vue';
    const props = defineProps({
        thumbnail:String,
        title:String,
        count:Function
    })
</script>
<style lang="">
    
</style>