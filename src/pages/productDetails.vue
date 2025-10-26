<script setup>
    import Layout from '../components/layout/index.vue';
    import productGallery from '@/components/UI/productGallery.vue';
    import badge from '@/components/UI/badge.vue';
</script>

<template>                                                                                                                                                                                                                                                                                                                                                             
    <Layout>                                                                                                                                                                                                                                                                                                                                                             
        <div class="lg:grid container px-4 mx-auto grid-cols-2 gap-x-14 ff-noto pt-14">
            <div class="w-full">
                <productGallery class="hidden lg:block nav-none" thumbDirection="vertical"/>
                <productGallery class="lg:hidden"/>
                <div class="hidden lg:block">
                    <h3 class="mt-6 title-md">產品介紹</h3>                                                                                                                                                                                                                                                                                                                                                             
                    <p>套餐附送相應人數餐具 (叉，紙碟，紙巾，食物夾)【2025皇牌之選】日夜經典到會套餐，精選超過90款環球美食，涵蓋經典沙律、特色熱葷、精緻小食、滋味意粉飯類及甜品，滿足各種口味需求。無論是派對、公司聚餐或家庭聚會，這款套餐都能帶來極致美食享受，讓你的宴會更添驚喜與奢華！</p>
                    <h3 class="mt-6 title-md">服務與注意事項</h3>
                </div>
            </div>
            <div class="mt-6 lg:mt-0">
                <div class="flex flex-wrap lg:flex-col items-center lg:items-start gap-2 mb-3">
                    <badge class="bg-[#212121] text-[#FFC300]">70% OFF</badge>
                    <h1 class="title-lg font-bold">日夜經典到會套餐 120人 </h1>
                </div>
                <h4 class="text-[18px] font-semibold text-[#EA3E3E]"><small>$</small>16560 <s class="text-[#616161] text-[14px]">$19733</s></h4>
                <div class="flex items-center gap-5 my-4 text-sm">
                    <badge class="bg-[#FFDFD0] text-[#7E4A31] badge-2">幫你慳咗</badge>
                    <span>$3173</span>
                    <span class="flex items-center gap-1 text-[#616161]">
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.95 6.75C12.7949 7.38126 13.55 8.97065 13.55 9.94996C13.55 10.2551 13.3274 10.5024 13.0528 10.5024H12.75M9.55 4.16251C10.0966 3.84634 10.4643 3.2554 10.4643 2.57857C10.4643 1.90174 10.0966 1.3108 9.55 0.99463M1.24718 10.5024H10.0052C10.2798 10.5024 10.5024 10.2551 10.5024 9.94996C10.5024 8.03222 8.9002 6.47759 5.62619 6.47759C2.35218 6.47759 0.75 8.03222 0.75 9.94996C0.75 10.2551 0.972595 10.5024 1.24718 10.5024ZM7.45476 2.57857C7.45476 3.58846 6.63608 4.40714 5.62619 4.40714C4.6163 4.40714 3.79762 3.58846 3.79762 2.57857C3.79762 1.56868 4.6163 0.75 5.62619 0.75C6.63608 0.75 7.45476 1.56868 7.45476 2.57857Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round"/></svg>
                        120
                    </span>
                    <span class="flex items-center gap-1 text-[#616161]">
                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.88793 8.38636C4.88793 9.32358 4.14688 10.0833 3.23276 10.0833C2.31863 10.0833 1.57759 9.32358 1.57759 8.38636M4.88793 8.38636C4.88793 7.44915 4.14688 6.68939 3.23276 6.68939C2.31863 6.68939 1.57759 7.44915 1.57759 8.38636M4.88793 8.38636H8.61207M1.57759 8.38636H0.75V1.41667C0.75 1.04848 1.04848 0.75 1.41667 0.75H8.61207V8.38636M12.3362 8.38636C12.3362 9.32358 11.5952 10.0833 10.681 10.0833C9.76691 10.0833 9.02586 9.32358 9.02586 8.38636M12.3362 8.38636C12.3362 7.44915 11.5952 6.68939 10.681 6.68939C9.76691 6.68939 9.02586 7.44915 9.02586 8.38636M12.3362 8.38636H12.75V4.99242L10.681 2.87121H8.61207V8.38636M9.02586 8.38636H8.61207" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        免運費
                    </span>
                </div>
                <div class="flex items-center gap-3 lg:gap-5 mt-5 text-sm">
                    <badge class="bg-[#FFFAEA] text-[#212121] badge-2 whitespace-nowrap">🏠家庭聚餐</badge>
                    <badge class="bg-[#FFFAEA] text-[#212121] badge-2 whitespace-nowrap">☕️下午茶</badge>
                    <badge class="bg-[#FFFAEA] text-[#212121] badge-2 whitespace-nowrap">📅公司茶聚</badge>
                    <badge class="bg-[#FFFAEA] text-[#212121] badge-2 whitespace-nowrap">🥣午餐會</badge>
                </div>
                <addSlide class="mt-6"/>
                <hr class="text-[#E0E0E0] my-[30px]"/>
                <div class="flex items-center">
                    <h4 class="title-md">選擇菜式 <span class="text-[#616161] text-sm ml-2">還有<span class="text-[#212121]">12</span>個選項未選</span></h4>
                    <badge class="bg-[#F8F8F8] text-[#212121] ml-auto badge-lg border border-[#E0E0E0]">
                        <span class="absolute bottom-full translate-y-[20%] text-white bg-[#212121] left-0 rounded-corner p-1 text-sm">MENU</span>
                        查看餐單
                    </badge>
                </div>
                <div class="mt-8 flex flex-col gap-4">
                    <div v-for="box in optionBox" class="title-box bg-[#F8F8F8] text-[#212121] p-[17px] border border-[#E0E0E0] rounded-xl flex items-center gap-3">
                        <span class="text-white bg-[#212121] rounded-lg px-3 py-1">9選6</span>
                        廚師秘制沙律
                        <badge class="border-2 border-[#FFC300] gap-2 ml-auto">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7Z" fill="#FFC300" stroke="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.67442 10L4.77519 9.32258L5.78295 7.53226L4 6.70968L4.34109 5.6129L6.24806 6.08065L6.43411 4H7.56589L7.73643 6.08065L9.65891 5.6129L10 6.70968L8.18605 7.53226L9.22481 9.32258L8.32558 10L7.00775 8.40323L5.67442 10Z" fill="#212121"/></svg>
                            必選
                        </badge>
                    </div>
                </div>
            </div>
        </div> 
    </Layout>
    <sideWidgets class="fixed right-0 lg:right-5 top-14 lg:top-[50%] lg:translate-y-[-50%] z-50" />
    <inputCount class="w-[124px]"/>
</template>

<script>
    import {ref} from 'vue';
    import sideWidgets from '@/components/UI/sideWidgets.vue';
    import addSlide from '@/components/UI/addSlide.vue';
    import inputCount from '@/components/UI/inputCount.vue';

    const optionBox = ref([
        {
            id:1,
            title:"廚師秘制沙律",
            badgeTitle:"9選6",
            badgeTitle2:"必選",
        },
        {
            id:1,
            title:"廚師秘制沙律",
            badgeTitle:"9選6",
            badgeTitle2:"必選",
        },
        {
            id:1,
            title:"廚師秘制沙律",
            badgeTitle:"9選6",
            badgeTitle2:"必選",
        },
        {
            id:1,
            title:"廚師秘制沙律",
            badgeTitle:"9選6",
            badgeTitle2:"必選",
        }
    ]);
    export default {

    }
</script>
<style lang="">


</style> 