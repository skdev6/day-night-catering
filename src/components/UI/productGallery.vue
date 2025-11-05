<template>
  <div ref="galleryRef">
    <div :class="'product__gallery h-[400px] lg:h-[500px] flex gap-4 relative ' + (isV ? 'flex-row' : 'pb-[60px] lg:pb-[95px]')">
      <!-- Thumbnail Gallery -->
      <div :class="'swiper__wrapper product__gallery-thumbs px-3 lg:px-0 ' + (isV ? 'h-full' : '!absolute bottom-0 left-0 w-full gap-5')+' '+randomThumbClass">
        <swiper
          class="h-full"
          :modules="[FreeMode, Thumbs, Navigation]"
          :space-between="10"
          :slides-per-view="'auto'" 
          :direction="thumbDirection === 'vertical' ? 'vertical' : 'horizontal'"
          free-mode
          watch-slides-progress
          @swiper="setThumbsSwiper"
          :navigation="{
            nextEl: `.${randomThumbClass} .v-slide__next`,
            prevEl: `.${randomThumbClass} .v-slide__prev`,
          }"
        >
          <swiper-slide
            v-for="(img, i) in images"
            :key="'thumb-' + i"
            class="cursor-pointer overflow-hidden"
          >
            <img
              :src="img"
              :alt="'Thumbnail ' + (i + 1)"
              class="object-cover bg-[#E0E0E0] rounded-lg border-0 p-1 transition w-full h-full object-cover"
            />
          </swiper-slide>
        </swiper>
        <button class="v-slide__prev">
          <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 21.4141L1 11.4141L11 1.41406" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="v-slide__next">
          <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.41406 21.4141L11.4141 11.4141L1.41406 1.41406" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="whitespace-nowrap text-sm underline" v-if="!isV">
          全部圖片
        </div>
      </div>
      <!-- Main Gallery -->
      <swiper
        class="product__gallery-main swiper__wrapper w-full h-full"
        :class="randomSlideClass"
        :modules="[Thumbs]"
        :space-between="10"
        :thumbs="{ swiper: thumbsSwiper }"
        ref="bannerWrapRef"
      >
        <swiper-slide
          v-for="(img, i) in images"
          :key="i"
          class="lg:rounded-lg overflow-hidden"
        >
          <div class="thumbnail bg-cover bg-center w-full h-full cursor-pointer" :style="{ backgroundImage: `url(${img})` }" :data-fancybox="galleryId" :data-src="img"></div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="pl-[100px] flex items-center justify-center mt-6 gap-2" v-if="isV">
      <badge class="bg-[#F8F8F8] text-[#212121] badge-lg border cursor-pointer border-[#E0E0E0]" @click="()=>openGallery(images)">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9387 12.0334L14.833 14.8334M13.8997 7.36671C13.8997 10.975 10.9746 13.9 7.36634 13.9C3.75808 13.9 0.833008 10.975 0.833008 7.36671C0.833008 3.75845 3.75808 0.833374 7.36634 0.833374C10.9746 0.833374 13.8997 3.75845 13.8997 7.36671Z" stroke="#212121" stroke-width="1.66667" stroke-linecap="round"/>
          <path d="M7.5 9.16663V7.29163M7.5 7.29163V5.41663M7.5 7.29163H5.625M7.5 7.29163H9.375" stroke="#212121" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </badge>
      <badge class="bg-[#F8F8F8] text-[#212121] badge-lg border border-[#E0E0E0] cursor-pointer">
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
  import badge from "./badge.vue";
  import { openGallery, useFancybox } from "../useFancybox";
  import productBanner from "@/data/productBanner";
  import { getUniqueId } from "@/helper/functions";
  const galleryRef = ref(null);
  const images = ref(productBanner);

  const randomThumbClass = "slide__"+getUniqueId()+getUniqueId(); 
  const randomSlideClass = "slide__"+getUniqueId()+getUniqueId();

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


  const isV = computed(() => props.thumbDirection === 'vertical')

  const galleryId = `gallery-${getUniqueId()}`;

  useFancybox(galleryRef, `[data-fancybox="${galleryId}"]`, {
    loop: false,
    Thumbs: { autoStart: true },
    Toolbar: { display: ['close'] },
  })

</script>

<script setup>

</script>

<style lang="scss" scoped>
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

.product__gallery-thumbs{
  display: flex;
  align-items: center;
}
.thumbnail-abs{
  @media (min-width:1350px){
    .product__gallery-thumbs{
      position: absolute;
      height: 100%;
      right: 100%;
      margin-right: 20px;
    }
  }
}
@media (max-width:991px){
  .product__gallery-thumbs{
    font-size: 50px; 
  }
}
</style>
