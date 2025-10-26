<template>
  <div class="add-box-slide">
    <swiper
      :modules="[Pagination, FreeMode]"
      :slides-per-view="1"
      :space-between="10"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      pagination
    >
      <swiper-slide
        v-for="(item, index) in info"
        :key="index"
      >
        <div class="flex items-center bg-[#363233] text-white rounded-lg p-4 gap-3">
            <img :src="item.icon" alt="" />
            <div class="text">
                <h3 class="font-semibold text-xl mb-1" v-html="item.title"></h3>
                <p class="text-sm" v-html="item.des"></p>
            </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import glass from "@/assets/img/glass-icon.svg";

const info = ref([
  {
    title: `每日<span class="text-green">16:00</span>前落單美味即日送到！`,
    des: `*節日及假期請先查詢客服，離島，禁區及部份偏遠地區除外`,
    icon: glass,
  },
  {
    title: `每日<span class="text-green">16:00</span>前落單美味即日送到！`,
    des: `*節日及假期請先查詢客服，離島，禁區及部份偏遠地區除外`,
    icon: glass,
  },
  {
    title: `每日<span class="text-green">16:00</span>前落單美味即日送到！`,
    des: `*節日及假期請先查詢客服，離島，禁區及部份偏遠地區除外`,
    icon: glass,
  },
]);

function onSwiper(swiper) {
  console.log("Swiper instance:", swiper);
}

function onSlideChange() {
  console.log("Slide changed");
}
</script> 
<style>
.add-box-slide .swiper-pagination-bullets{
    bottom: 0; 
}
.add-box-slide .swiper-pagination-bullets .swiper-pagination-bullet{
    width: 10px;
    height: 4px; 
    border-radius:10px;
}
.add-box-slide .swiper-pagination-bullets .swiper-pagination-bullet-active{
    background-color:#363233;  
}
.add-box-slide .swiper-wrapper{
    padding-bottom: 28px;
}
</style>