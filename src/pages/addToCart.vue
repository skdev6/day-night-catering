<template>
    <div class="pt-6 bg-[#F7F7F7] h-screen">
        <div class="container px-4 mx-auto">
            <div class="grid grid-cols-4 gap-5">
                <div class="bg-white rounded-lg p-7 col-span-3">
                    <div class="flex items-center justify-between">
                        <h3 class="title-lg">購物車</h3>
                        <buttonMain class="btn-gray">清空</buttonMain>
                    </div>
                    <div class="cart-item flex items-start gap-5 mt-3">
                        <div class="flex items-center gap-5">
                            <div class="checkbox-item">
                                <input type="checkbox" class="form__checkbox"/>
                            </div>
                            <img :src="product" class="product-img w-[81px] rounded-lg border-2 border-[#EEEEEE]" alt="">
                        </div>
                        <div class="product-info text-[#767676]">
                            <h4 class="title-md text-[#232323]">【2025皇牌之選】4-5人 日夜經典到會套餐</h4>
                            Components:
                            <ul>
                                <li>車打芝士沙樂美腸麵包卷 (10小件)</li>
                                <li>黑松露玉子蛋卷 (8小件)</li>
                            </ul>
                            <h5 class="title-md font-semibold text-[#EA3E3E]">$888 <small class="text-[#616161]"><s>$1188</s></small></h5>
                        </div>
                    </div>
                </div>
                <div class="grid-span-1">
                    <div class="flex flex-col gap-6">
                        <div class="flex justify-between items-center">
                            <span class="text-[#212121] font-medium">總計</span>
                            <span class="text-xl font-bold text-[#212121]">HK$ 268.00</span>
                        </div>
                        <buttonMain class="w-full">前往結帳</buttonMain>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import buttonMain from '@/components/UI/buttonMain.vue';
 import product from "@/assets/img/product.webp";

</script>
<style>
    
</style>