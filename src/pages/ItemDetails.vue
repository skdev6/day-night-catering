<script setup>
    import Layout from '../components/layout/index.vue';
    import productGallery from '@/components/UI/productGallery.vue';
    import badge from '@/components/UI/badge.vue';
</script>

<template>                                                                                                                                                                                                                                                                                                                                                             
        <div class="lg:grid container lg:px-4 mx-auto grid-cols-5 gap-x-14 ff-noto lg:pt-14">
            <!-- Left Content -->
            <div class="w-full col-span-3">
                <productGallery class="hidden lg:block nav-none" thumbDirection="vertical"/>
                <productGallery class="lg:hidden"/>
                <ProductDetailsRight class="lg:hidden pt-4 container-space"/>
                <div class="mt-9 px-4 lg:px-0 hidden lg:block">
                    <ProductDescription/>
                </div> 
                <ProductSmallSlide :products="productDetails" title="可以搭配的產品" class="mt-9 px-[16px] lg:px-0"/> 
                <ProductSmallSlide :products="productDetails" title="你可能喜歡" class="mt-9 px-[16px] lg:px-0"/>
                <ProductSmallSlide :products="productDetails" title="你可能喜歡" class="mt-9 px-[16px] lg:px-0"/>
            </div>
            <!-- Right Content -->
            <div class="mt-6 lg:mt-0 px-4 lg:px-0 col-span-2">
                <ProductDetailsRight class="hidden lg:block"/>
                <ProductDetailsNote class="hidden lg:block mt-[23px]"/>
            </div>
        </div> 
    <sideWidgets class="fixed right-0 lg:right-5 top-[120px] lg:top-14 lg:top-[50%] lg:translate-y-[-50%] z-50" />
    <div class="flex gap-3 fixed z-9999 w-full bottom-0 py-5 justify-center bottom__panel lg:hidden">
        <inputCount class="w-[124px]"/>
        <buttonMain>立即落單</buttonMain>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import sideWidgets from '@/components/UI/sideWidgets.vue';
    import inputCount from '@/components/UI/inputCount.vue';
    import buttonMain from '@/components/UI/buttonMain.vue';
    import Popup from '@/components/UI/popup.vue';
    import ProductSmallSlide from '@/components/UI/productSmallSlide.vue'; 
    import productThumbnail from "@/assets/img/prod-img.png";
	import ProductDescription from '@/components/UI/productDescription.vue';
    import ProductDetailsRight from '@/components/UI/productDetailsRight.vue';
    import ProductDetailsNote from '@/components/UI/productDetailsNote.vue';

    const productDetails = ref([
        {
            id:1,
            title:"日夜經典到會套餐 120人",
            price:"$16560",
            priceSm:"$19733",
            badgeTitle:"70% OFF",
            count:120,
            freeShip:true,
            tags:["🏠家庭聚餐","☕️下午茶","📅公司茶聚","🥣午餐會"],
            thumbnail:productThumbnail,
        },
        {
            id:2,
            title:"日夜經典到會套餐 120人",
            price:"$16560",
            priceSm:"$19733",
            badgeTitle:"70% OFF",
            count:120,
            freeShip:true,
            tags:["🏠家庭聚餐","☕️下午茶","📅公司茶聚","🥣午餐會"],
            thumbnail:productThumbnail,
        },
        {
            id:3,
            title:"日夜經典到會套餐 120人",
            price:"$16560",
            priceSm:"$19733",
            badgeTitle:"70% OFF",
            count:120,
            freeShip:true,
            tags:["🏠家庭聚餐","☕️下午茶","📅公司茶聚","🥣午餐會"],
            thumbnail:productThumbnail,
        },
        {
            id:4,
            title:"日夜經典到會套餐 120人",
            price:"$16560",
            priceSm:"$19733",
            badgeTitle:"70% OFF",
            count:120,
            freeShip:true,
            tags:["🏠家庭聚餐","☕️下午茶","📅公司茶聚","🥣午餐會"],
            thumbnail:productThumbnail,
        },
        {
            id:1,
            title:"日夜經典到會套餐 120人",
            price:"$16560",
            priceSm:"$19733",
            badgeTitle:"70% OFF",
            count:120,
            freeShip:true,
            tags:["🏠家庭聚餐","☕️下午茶","📅公司茶聚","🥣午餐會"],
            thumbnail:productThumbnail,
        },
        {
            id:2,
            title:"日夜經典到會套餐 120人",
            price:"$16560",
            priceSm:"$19733",
            badgeTitle:"70% OFF",
            count:120,
            freeShip:true,
            tags:["🏠家庭聚餐","☕️下午茶","📅公司茶聚","🥣午餐會"],
            thumbnail:productThumbnail,
        },
        {
            id:3,
            title:"日夜經典到會套餐 120人",
            price:"$16560",
            priceSm:"$19733",
            badgeTitle:"70% OFF",
            count:120,
            freeShip:true,
            tags:["🏠家庭聚餐","☕️下午茶","📅公司茶聚","🥣午餐會"],
            thumbnail:productThumbnail,
        },
        {
            id:4,
            title:"日夜經典到會套餐 120人",
            price:"$16560",
            priceSm:"$19733",
            badgeTitle:"70% OFF",
            count:120,
            freeShip:true,
            tags:["🏠家庭聚餐","☕️下午茶","📅公司茶聚","🥣午餐會"],
            thumbnail:productThumbnail,
        },
    ]);

    export default{
        components:{
            Popup
        },
        data(){
            return{
                showPopup:false
            }
        }
    }
</script>
<style>
    .bottom__panel{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 13.82%, #FFFFFF 100%);
    }
</style>