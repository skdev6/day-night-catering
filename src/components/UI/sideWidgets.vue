<template>
    <div class="flex flex-col gap-3">
        <div class="side-widget-wrap border bg-white border-[#E0E0E0] px-2 py-3 text-center w-[81px] rounded-2xl flex flex-col gap-4">
            <a to="#" class="item" @click="()=>popupStore.menuPopup(true)">
                <img :src="icon" class="mx-auto mb-1 lg:mb-2" alt="">
                <div class="text-sm hidden lg:block">查看餐單</div>
            </a>
            <a to="#" class="item" @click="()=>popupStore.menuPopup(true)">
                <img :src="icon" class="mx-auto mb-1 lg:mb-2" alt="">
                <div class="text-sm hidden lg:block">查看餐單</div>
            </a>
            <a to="#" class="item">
                <img :src="whatsapp" class="mx-auto mb-1 lg:mb-2" alt="">
                <div class="text-sm hidden lg:block">查看餐單</div>
            </a>
        </div>
        <div class="side-widget-wrap border bg-white border-[#E0E0E0] px-2 py-3 text-center w-[81px] rounded-2xl flex flex-col gap-3">
            <button class="item" @click="()=>goToScroll(0)">
                <img :src="arrowTop" class="mx-auto" alt="">
                <div class="text-sm hidden lg:block">回到頂部</div>
            </button>
        </div>
    </div>
</template>
<script setup>
import icon from '@/assets/img/book-icon.svg';
import whatsapp from '@/assets/img/whatsapp.svg';
import arrowTop from '@/assets/img/arrow-top.svg';
import { usePopupStore } from '@/stores/popup';
import { goToScroll } from '@/helper/functions';

const popupStore = usePopupStore();


</script>
<style>
    @media (max-width:991px){
        .side-widget-wrap {
            border-radius: 8px 0 0 8px;
            padding: 8px;
            max-width: 41px;
        }
    }
</style>