<template>
  <div ref="galleryRef">
    <div :class="'product__gallery h-[400px] lg:h-[500px] flex gap-4 relative ' + (isV ? 'flex-row' : 'pb-[60px] lg:pb-[95px]')">
      <!-- Thumbnail Gallery -->
      <div :class="'product__gallery-thumbs px-3 lg:px-0 ' + (isV ? 'h-full' : '!absolute bottom-0 left-0 w-full gap-5')">
        <swiper
          class="h-full"
          :modules="[FreeMode, Thumbs, Navigation]"
          :space-between="10"
          :slides-per-view="'auto'" 
          :direction="thumbDirection === 'vertical' ? 'vertical' : 'horizontal'"
          free-mode
          watch-slides-progress
          @swiper="setThumbsSwiper"
          navigation
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
        <div class="whitespace-nowrap text-sm underline" v-if="!isV">
          全部圖片
        </div>
      </div>
      <!-- Main Gallery -->
      <swiper
        class="product__gallery-main w-full h-full"
        :modules="[Thumbs]"
        :space-between="10"
        :thumbs="{ swiper: thumbsSwiper }"
      >
        <swiper-slide
          v-for="(img, i) in images"
          :key="i"
          class="lg:rounded-lg overflow-hidden"
        >
          <div class="bg-cover bg-center w-full h-full" :style="{ backgroundImage: `url(${img})` }"></div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="pl-[100px] flex items-center justify-center mt-6 gap-2" v-if="isV">
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
  </div>
</template>

<script setup>
  import { ref, onMounted, computed } from "vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Thumbs, FreeMode } from "swiper/modules";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/thumbs";
  import "swiper/css/free-mode";

  import product from "@/assets/img/product.webp";
  import badge from "./badge.vue";

  const images = ref([product, product, product, product, product,product, product, product, product, product,product, product, product, product, product,product, product, product, product, product]);

  // Must be initialized before usage
  const thumbsSwiper = ref(null);

  function setThumbsSwiper(swiper) {
    thumbsSwiper.value = swiper;
  }

  const props = defineProps({
    thumbDirection: {
      type: String,
      default: 'horizontal'
    }
  })

  const galleryRef = ref(null)

  const isV = computed(() => props.thumbDirection === 'vertical')


</script>

<script setup>

</script>

<style>
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
.product__gallery .swiper-button-prev, .product__gallery .swiper-button-next {
    z-index: 50;
    background-color: #fff;
    border-radius: 500px;
    border: 1px solid #E0E0E0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    width: 40px;
    height: 40px;
    font-size:10px;   
    color: #000000;   
} 
/* .product__gallery .swiper-button-prev::before, .product__gallery .swiper-button-next::before{
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 80px;
  width: 80px;  
  left: 0;
}.product__gallery .swiper-button-next::before{
  left: auto; 
  right: 0; 
} */
.product__gallery .swiper-button-prev svg, .product__gallery .swiper-button-next svg{
    width: 1em;
    height: auto;
}
.product__gallery .swiper-button-prev svg path, .product__gallery .swiper-button-next svg path{
    fill: currentColor; 
}
.nav-none .swiper-button-prev, .nav-none .swiper-button-next {
    display: none;
}
.product__gallery-thumbs{
  display: flex;
  align-items: center;
}
.swiper-button-disabled {
    display: none;
}
@media (max-width:991px){
  .product__gallery-thumbs{
    font-size: 50px; 
  }
}
</style>
