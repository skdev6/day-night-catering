<template>                                                                                                                                                                                                                                                                                                                                                             
        <div class="relative container">
            <div class="lg:grid mx-auto grid-cols-5 gap-x-14 ff-noto lg:pt-14">
                <!-- Left Content -->
                <div class="w-full col-span-3">
                    <productGallery class="hidden lg:block thumbnail-abs thumb-vertical" thumbDirection="vertical"/>
                    <productGallery class="lg:hidden mx-[-15px]"/>
                    <ProductDetailsRight class="lg:hidden pt-4 mb-6"/>
                    <ProductDescription/> 
                    <ProductSmallSlide :products="productsData" title="可以搭配的產品" class="mt-9 px-[16px] lg:px-0"/> 
                    <ProductSmallSlide :products="productsData" title="你可能喜歡" class="mt-9 px-[16px] lg:px-0"/>
                    <ProductSmallSlide :products="productsData" title="你可能喜歡" class="mt-9 px-[16px] lg:px-0"/>
                </div>
                <!-- Right Content -->
                <div class="mt-6 lg:mt-0 px-4 lg:px-0 col-span-2">
                    <ProductDetailsRight class="hidden lg:block"/>
                    <ProductDetailsNote class="hidden lg:block mt-[23px]"/>
                </div>
            </div> 
            <div class="2xl:h-full 2xl:absolute 2xl:left-full 2xl:pl-4 2xl:top-20 fixed 2xl:right-auto right-0 top-[130px] lg:top-[250px] z-[999] side__widgets"><sideWidgets class="sticky top-[250px]"/></div>
        </div> 
        <div class="flex gap-3 fixed z-9999 w-full bottom-0 py-5 justify-center bottom__panel lg:hidden"> 
            <inputCount class="w-[124px]"/>
            <buttonMain>立即落單</buttonMain>
        </div>
</template>

<script setup>
    import {ref} from 'vue';
    import sideWidgets from '@/components/UI/sideWidgets.vue';
    import inputCount from '@/components/UI/form/inputCount.vue';
    import buttonMain from '@/components/UI/buttonMain.vue';
    import Popup from '@/components/UI/popup/popup.vue';
    import ProductSmallSlide from '@/components/UI/productSmallSlide.vue'; 
	import ProductDescription from '@/components/UI/productDescription.vue';
    import ProductDetailsRight from '@/components/UI/productDetailsRight.vue';
    import ProductDetailsNote from '@/components/UI/productDetailsNote.vue';
    import productGallery from '@/components/UI/productGallery.vue';
    import productsData from '@/data/products';
    

</script>
<style>
    .bottom__panel{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 13.82%, #FFFFFF 100%);
    }
</style>