<template>
    <div @click="showPopup = true">
        <inlineCategoryCard 
            :title="title" 
            :count="count" 
            :badgeTitle="badgeTitle"
        />
    </div>
    <Popup v-model="showPopup" :title="title">
        <productCatTab :categories="productCategories" :activeId="catId"/>
        <div class="py-[20px] px-[30px] prod-tab-footer">
            <buttonMain class="w-full justify-between!" @click="()=>{
                showMoreProductPopup = true;
            }">
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
    <Popup v-model="showMoreProductPopup" :title="title">
        <productCatTab :categories="productCategories2" :activeId="productCategories2[0].id" productShow="card"/>
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
    import productCategories2 from '@/data/productCategories2';
    import buttonMain from '../buttonMain.vue';
    import Popup from '../popup/popup.vue';
    import inlineCategoryCard from './inlineCategoryCard.vue';
    import { ref } from 'vue';

    const showPopup = ref(false);
    const showMoreProductPopup = ref(false);
    
    const props = defineProps({
        title: Number,    
        count:String,
        badgeTitle:String,
        catId:Number,
    });

</script>
<style lang="">
    
</style>