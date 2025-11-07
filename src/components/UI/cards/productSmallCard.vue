<template>
    <div class="product-sm-card">
        <a :href="url"><img :src="thumbnail" alt="" class="thumbnail border border-[#EEEEEE] rounded-[18px] w-full"/></a>
        <span class="text-white bg-[#EA3E3E] left-0 rounded-corner px-[6px] py-[4px] text-[11px] leading-3 inline-block mt-2 mb-2">{{ badgeTitle }}</span>
        <a :href="url" class="block text-[14px] font-normal lg:font-medium mb-3 text-[#232323] leading-[135%]">{{ title }}</a>
        <div class="flex items-center">
            <h4 class="price font-bold text-[16px] leading-4">${{ price }} <small class="text-[#EA3E3E] block font-semibold text-[10px]">原價 ${{ priceSm }}</small></h4>
            <inputCount class="count-small ml-auto"/>
        </div>
    </div>
</template>
<script setup>
import inputCount from '../form/inputCount.vue'; 
const props = defineProps({
    thumbnail:String,
    badgeTitle:String,
    title:String,
    price:String,
    priceSm:String,
    count:Function,
    url:{
        type:String,
        defaul:"#"
    }
});
</script>
<style lang="">
    
</style> 
