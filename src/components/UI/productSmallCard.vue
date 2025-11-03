<template>
    <div class="product-sm-card">
        <img :src="thumbnail" alt="" class="thumbnail border border-[#EEEEEE] rounded-lg w-full"/>
        <span class="text-white bg-[#EA3E3E] left-0 rounded-corner p-1 text-sm inline-block leading-1 mt-3 mb-2">勁爆特價</span>
        <h3 class="text-sm font-semibold mb-3">松露白汁芝士焗薯蓉 (2.5磅裝)</h3>
        <div class="flex items-center">
            <h4 class="price font-bold">$208 <small class="text-[#EA3E3E] block font-semibold">原價$231</small></h4>
            <inputCount class="count-small ml-auto"/>
        </div>
    </div>
</template>
<script setup>
import inputCount from './inputCount.vue';
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