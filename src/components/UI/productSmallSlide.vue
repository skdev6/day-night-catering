<template>
  <div class="inline-slide-wrapper relative" :class="randomSlideClass">
    <div class="flex items-center" v-if="title != ''">
        <h2 class="title-lg font-medium mb-4 mt-1">{{title}}</h2>
    </div>
    <swiper
      :modules="[Navigation, FreeMode]"
      :slides-per-view="4"
      :space-between="12"
      :navigation="{
        nextEl: `.${randomSlideClass} .v-slide__next`,
        prevEl: `.${randomSlideClass} .v-slide__prev`,
      }"
      :breakpoints="{
            0: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 15,
            }
      }"
    >
      <swiper-slide
        v-for="(product, index) in products"
        :key="index"
      >
        <ProductSmallCard
          :thumbnail="product.image"
          :badgeTitle="product.labelSm"
          :title="product.name"
          :price="product.price"
          :priceSm="product.originalPrice"
        />
      </swiper-slide>
    </swiper>
    <div class="slide__nav-wrap flex items-center gap-2 absolute top-0 right-2">
      <button class="v-slide__prev slide-btn-2">
        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 21.4141L1 11.4141L11 1.41406" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="v-slide__next slide-btn-2">
        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.41406 21.4141L11.4141 11.4141L1.41406 1.41406" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation } from "swiper/modules";
import ProductSmallCard from "./cards/productSmallCard.vue";
import { getUniqueId } from "@/helper/functions";
// import {defineProps} from "vue"; 
const randomSlideClass = "slide__"+getUniqueId()+getUniqueId(); 
const props = defineProps({
  products: { type: Array, required: true },
  title:String
});

</script>

<style>
/* Optional custom styles */
</style>