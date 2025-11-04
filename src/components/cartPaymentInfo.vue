<template lang="">
    <div>
        <DeliveryCard class="mb-4"/>
        <CouponField class="mb-4"/>
        <div class="border-y border-y-[#ddd] py-4">
            <h4 class="text-[24px] font-semibold mb-2">訂單詳情</h4>
            <div class="flex justify-between gap-3">
                <span class="text-[#212121] font-semibold">商品金額</span>
                <span class="text-[#212121] font-semibold">$888</span>
            </div>
            <div class="flex justify-between gap-3 text-[12px] mb-3">
                <span class="text-[#616161]">12個產品</span>
                <span class="text-[#616161]">享受優惠已幫你減去 <span class="text-[#212121] font-medium">$200</span></span>
            </div>
            <DeliveryOption title="送貨上門-運費" class="mb-3" price="200">
                滿<span class="text-[#212121] font-medium">$2000</span>免運費，還差<span class="text-[#212121] font-medium">$1400</span>
            </DeliveryOption>
            <DeliveryOption title="送貨上門-運費" class="mb-3" price="200">
                滿<span class="text-[#212121]">$2000</span>免運費，還差<span class="text-[#212121] font-medium">$1400</span>
            </DeliveryOption>
        </div>
        <div class="flex justify-between gap-3 my-4">
            <span class="text-[#212121] font-semibold">小計</span>
            <span class="text-[#212121] font-semibold"><small>$</small>2200</span>
        </div>
        <ButtonMain class="btn-dark w-full">
            結帳
        </ButtonMain>
        <h4 class="text-[14px] font-semibold mb-2 mt-4">我們支持</h4>
        <div class="flex flex-wrap gap-2 items-start">
            <img :src="payone" class="max-w-[70px]! h-auto" alt="">
            <img :src="paytwo" class="max-w-[46px]! h-auto" alt="">
            <img :src="paythree" class="max-w-[56px]! h-auto" alt="">
            <img :src="payfour" class="max-w-[56px]! h-auto" alt="">
            <img :src="payfive" class="max-w-[56px]! h-auto" alt="">
            <img :src="paysix" class="max-w-[28px]! h-auto" alt="">
            <img :src="payseven" class="max-w-[28px]! h-auto" alt="">
        </div>
    </div>
</template>
<script setup>
    import ButtonMain from '@/components/UI/buttonMain.vue';
    import product from "@/assets/img/product.webp";
    import productCart from '@/components/UI/productCart.vue';
    import products from '@/data/products';
    import DeliveryCard from '@/components/UI/cards/deliveryCard.vue';
    import CouponField from '@/components/UI/form/couponField.vue';
    import DeliveryOption from '@/components/UI/form/deliveryOption.vue';
    import payone from "@/assets/img/payment/paypal.png";
    import paytwo from "@/assets/img/payment/mastercard.png";
    import paythree from "@/assets/img/payment/visa.png";
    import payfour from "@/assets/img/payment/stripe.png";
    import payfive from "@/assets/img/payment/cash.png";
    import paysix from "@/assets/img/payment/check.png";
    import payseven from "@/assets/img/payment/local.png";
</script>
<style lang="">
    
</style>