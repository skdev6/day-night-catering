<template>
    <div class="pt-9 lg:pt-20">
        <div class="container px-4 mx-auto">
            <div class="xl:grid xl:grid-cols-12 gap-5">
                <div class="col-span-8">
                    <div class="bg-white rounded-xl p-7">
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
                    <CartPaymentInfo class="xl:hidden my-5"/>
                    <ProductsTabByCat class="mt-4 bg-white rounded-xl p-7"/>
                </div>
                <div class="col-span-4">
                    <CartPaymentInfo class="hidden xl:block"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import buttonMain from '@/components/UI/buttonMain.vue';
    import productCart from '@/components/UI/productCart.vue';
    import products from '@/data/products';
    import ButtonMain from '@/components/UI/buttonMain.vue';
    import CartPaymentInfo from '@/components/cartPaymentInfo.vue';
    import ProductsTabByCat from '@/components/productsTabByCat.vue';
</script>
<style>
    body{
        background-color: #F7F7F7;
    }
</style>