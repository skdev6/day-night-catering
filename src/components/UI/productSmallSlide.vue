<template>
  <div class="inline-slide-wrapper">
    <div class="flex items-center" v-if="title != ''">
        <h2 class="title-lg font-medium mb-4">{{title}}</h2>
    </div>
    <swiper
      :modules="[Navigation, FreeMode]"
      :slides-per-view="4"
      :space-between="12"
      navigation
      :breakpoints="{
            0: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            }
      }"
    >
      <swiper-slide
        v-for="(product, index) in products"
        :key="index"
      >
        <ProductSmallCard
          :thumbnail="product.thumbnail"
          :badgeTitle="product.badgeTitle"
          :title="product.title"
          :price="product.price"
          :priceSm="product.priceSm"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, FreeMode, Navigation } from "swiper/modules";
import ProductSmallCard from "./productSmallCard.vue";
// import {defineProps} from "vue"; 

const props = defineProps({
  products: { type: Array, required: true },
  title:String
});

</script>

<style>
/* Optional custom styles */
</style>