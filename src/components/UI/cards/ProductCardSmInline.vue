<template lang="">
    <a :href="url" class="flex items-center gap-[16px] p-[12px] hover:bg-[#F7F7F7] rounded-sm"> 
        <img :src="image"/>
        <h3 class="title-sm">{{title}}</h3>
    </a>
</template>
<script setup>
    const props = defineProps({
        image:String,
        title:String,
        url:String
    });
</script>
<style lang="">
    
</style>