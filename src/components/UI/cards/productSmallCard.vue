<template>
    <div class="product-sm-card">
        <img :src="thumbnail" alt="" class="thumbnail border border-[#EEEEEE] rounded-lg w-full"/>
        <span class="text-white bg-[#EA3E3E] left-0 rounded-corner px-[6px] py-[4px] text-[11px] leading-3 inline-block mt-2 mb-2">{{ badgeTitle }}</span>
        <h3 class="text-[14px] font-semibold mb-3 text-[#232323] leading-[135%]">{{ title }}</h3>
        <div class="flex items-center">
            <h4 class="price font-bold text-[16px] leading-4">${{ price }} <small class="text-[#EA3E3E] block font-semibold">原價 ${{ priceSm }}</small></h4>
            <inputCount class="count-small ml-auto"/>
        </div>
    </div>
</template>
<script setup>
import inputCount from '../inputCount.vue'; 
const props = defineProps({
    thumbnail:String,
    badgeTitle:String,
    title:String,
    price:String,
    priceSm:String,
    count:Function
})
</script>
<style lang="">
    
</style>