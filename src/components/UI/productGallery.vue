<template>
  <div :class="'product__gallery h-[500px] flex gap-4 ' + (isV ? 'flex-row' : 'flex-col-reverse')">
    <!-- Thumbnail Gallery -->
    <swiper
      class="product__gallery-thumbs px-4 h-full"
      :modules="[FreeMode, Thumbs]"
      :space-between="10"
      :slides-per-view="'auto'"
      :direction="thumbDirection === 'vertical' ? 'vertical' : 'horizontal'"
      free-mode
      watch-slides-progress
      @swiper="setThumbsSwiper"
    >
      <swiper-slide
        v-for="(img, i) in images"
        :key="'thumb-' + i"
        class="cursor-pointer overflow-hidden"
      >
        <img
          :src="img"
          :alt="'Thumbnail ' + (i + 1)"
          class="object-cover bg-[#E0E0E0] rounded-lg border-0 p-1 transition"
        />
      </swiper-slide>
    </swiper>
    <!-- Main Gallery -->
    <swiper
      class="product__gallery-main w-full h-full"
      :modules="[Navigation, Thumbs]"
      :space-between="10"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide
        v-for="(img, i) in images"
        :key="i"
        class="rounded-lg overflow-hidden"
      >
        <div class="bg-cover bg-center w-full h-full" :style="{ backgroundImage: `url(${img})` }"></div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="pl-[100px] flex items-center justify-center mt-6 gap-2">
    <badge class="bg-[#F8F8F8] text-[#212121] badge-lg border border-[#E0E0E0]">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9387 12.0334L14.833 14.8334M13.8997 7.36671C13.8997 10.975 10.9746 13.9 7.36634 13.9C3.75808 13.9 0.833008 10.975 0.833008 7.36671C0.833008 3.75845 3.75808 0.833374 7.36634 0.833374C10.9746 0.833374 13.8997 3.75845 13.8997 7.36671Z" stroke="#212121" stroke-width="1.66667" stroke-linecap="round"/>
        <path d="M7.5 9.16663V7.29163M7.5 7.29163V5.41663M7.5 7.29163H5.625M7.5 7.29163H9.375" stroke="#212121" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </badge>
    <badge class="bg-[#F8F8F8] text-[#212121] badge-lg border border-[#E0E0E0]">
      查看餐單
    </badge>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Thumbs, FreeMode } from "swiper/modules";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/thumbs";
  import "swiper/css/free-mode";

  import product from "@/assets/img/product.webp";
  import badge from "./badge.vue";

  const images = ref([product, product, product, product, product,product, product, product, product, product]);

  // Must be initialized before usage
  const thumbsSwiper = ref(null);

  function setThumbsSwiper(swiper) {
    thumbsSwiper.value = swiper;
  }


  
</script>

<script>
  export default {
    props: {
      thumbDirection:{
        type:String,
        default:'horizontal'
      }
    },
    computed:{
      isV(){
        return this.thumbDirection === 'vertical'
      }
    }
  }
</script>

<style scoped>
.product__gallery-main img {
  width: 100%;
  border-radius: 8px;
}

.product__gallery-thumbs .swiper-slide-thumb-active img {
  background-color: #212121; 
}
.product__gallery-thumbs,.product__gallery-main{
    margin: 0; 
}
.product__gallery-thumbs{
    font-size: 80px;
    min-width: 1em;
}
.product__gallery-thumbs .swiper-slide{
    height: 1em;
    width: 1em;
}
</style>
