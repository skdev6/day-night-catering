<template>
    <div class="pt-6 bg-[#F7F7F7] h-screen">
        <div class="container px-4 mx-auto">
            <div class="grid grid-cols-4 gap-5">
                <div class="bg-white rounded-xl p-7 col-span-3">
                    <div class="flex items-center justify-between border-b-[1px] border-b-[#E0E0E0] pb-6">
                        <h3 class="title-lg font-bold">購物車</h3>
                        <buttonMain class="btn-gray btn-sm">清空</buttonMain>
                    </div>
                    <productCart
                        v-for="cart in products"
                        :title="cart.name"
                        :thumbnail="cart.image"
                        :components="cart.components"
                        :price="cart.price"
                        :originalPrice="cart.originalPrice"
                    />
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
import productCart from '@/components/UI/productCart.vue';
import products from '@/data/products';

</script>
<style>
    
</style>