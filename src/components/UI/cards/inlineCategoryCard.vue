<template>
    <div class="title-box bg-[#F8F8F8] text-[#212121] hover:border-[#000] transition cursor-pointer p-[17px] border border-[#E0E0E0] rounded-xl flex items-center gap-2"
        @click="showPopup = true"
    >
        <span class="text-white bg-[#212121] rounded-lg px-2 py-1 leading-[14px] text-[12px]">{{count}}</span>
        <h3 class="text-[14px] font-semibold">{{title}}</h3>
        <badge class="border-2 border-[#FFC300] gap-2 ml-auto text-[12px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7Z" fill="#FFC300" stroke="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.67442 10L4.77519 9.32258L5.78295 7.53226L4 6.70968L4.34109 5.6129L6.24806 6.08065L6.43411 4H7.56589L7.73643 6.08065L9.65891 5.6129L10 6.70968L8.18605 7.53226L9.22481 9.32258L8.32558 10L7.00775 8.40323L5.67442 10Z" fill="#212121"/></svg>
            {{badgeTitle}}
        </badge>
    </div>
    <Popup v-model="showPopup" :title="title">
        <productCatTab :categories="productCategories" :activeId="catId"/>
        <div class="py-[20px] px-[30px] prod-tab-footer">
            <buttonMain class="w-full justify-between!">
                <div class="left-text text-left">
                    $16560
                    <small class="block">已幫妳優惠 <span>$230</span></small>
                </div>
                <div class="right-text text-right">
                    加入購物車
                </div>
            </buttonMain>
        </div>
    </Popup>
</template>
<script setup>
    import badge from '../badge.vue';
    import productCatTab from '../productCatTab.vue';
    import productCategories from '@/data/productCategories';
    import buttonMain from '../buttonMain.vue';
    import Popup from '../popup/popup.vue';
    import { ref } from 'vue';

    const showPopup = ref(false);
    
    const props = defineProps({
        title: Number,    
        count:String,
        badgeTitle:String,
        catId:Number,
    });

</script>
<style lang="">
    
</style>