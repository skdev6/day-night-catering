<template>
  <div class="product__gallery h-[500px] flex gap-4">
    <!-- Thumbnail Gallery -->
    <swiper
      class="product__gallery-thumbs px-4 h-full"
      :modules="[FreeMode, Thumbs]"
      :space-between="10"
      :slides-per-view="'auto'"
      :direction="'vertical'"
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

  const images = ref([product, product, product, product, product,product, product, product, product, product]);

  // Must be initialized before usage
  const thumbsSwiper = ref(null);

  function setThumbsSwiper(swiper) {
    thumbsSwiper.value = swiper;
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
