<template>
    <div class="py-9 lg:py-20 bg-[#F7F7F7]">
        <div class="container px-4 mx-auto">
            <div class="xl:grid xl:grid-cols-12 gap-5">
                <div class="col-span-8">
                    <div class="bg-white rounded-xl p-[16px] xl:p-7">
                        <div class="flex items-center justify-between xl:border-b-[1px] xl:border-b-[#E0E0E0] pb-4 xl:pb-6">
                            <h3 class="title-lg font-bold">購物車</h3>
                            <buttonMain class="btn-gray btn-sm">清空</buttonMain>
                        </div>
                        <DeliveryCard class="no-icon xl:hidden"/>
                        <productCart
                            v-for="cart in products"
                            :title="cart.name"
                            :thumbnail="cart.image"
                            :components="cart.components"
                            :price="cart.price"
                            :originalPrice="cart.originalPrice"
                        />
                    </div>
                    <CartPaymentInfo class="xl:hidden my-5"/>
                    <ProductsTabByCat class="mt-4 bg-white rounded-xl p-[16px] xl:p-7"/>
                </div>
                <div class="col-span-4">
                    <CartPaymentInfo class="hidden xl:block sticky top-[200px]"/>
                </div>
            </div>
        </div>
    </div>
    <div class="fixed_checkout fixed flex items-center gap-2 left-0 bottom-0 w-full z-[999] p-[16px] bg-white xl:hidden">
        <div class="checkbox-item mt-[5px]">
            <input type="checkbox" class="form__checkbox"/>
        </div>
        <div class="font-semibold text-[14px] text-[#222222] mr-auto">全選 <span class="text-[12px]">12</span> <span class="text-[#616161] text-[12px]">個產品</span></div>
        <div class="text-right text-[#212121] text-[12px] leading-[120%] font-semibold">總計: <span class="text-[20px] text-[#EA3E3E]">$1264</span> <span class="block text-[12px] text-[#616161] font-normal">還差$1400免運費</span></div>
        <buttonMain class="btn-sm btn-dark rounded-[0]! py-3!">Check out</buttonMain>
    </div>
</template>
<script setup>
    import buttonMain from '@/components/UI/buttonMain.vue';
    import productCart from '@/components/UI/productCart.vue';
    import products from '@/data/products';
    import CartPaymentInfo from '@/components/cartPaymentInfo.vue';
    import ProductsTabByCat from '@/components/productsTabByCat.vue';
import DeliveryCard from '@/components/UI/cards/deliveryCard.vue';
</script>
<style scoped>
.fixed_checkout{
    border-top: 1px solid #E0E0E0;
    box-shadow: 0px -12px 24px rgba(0, 0, 0, 0.08);
}
</style>