<template>
  <div class="flex gap-3 md:gap-5 product-v-tab">
    <!-- Tab List -->
    <ul class="cat-navbar list-none p-0 m-0 w-[70px] lg:w-[90px]">
      <li
        v-for="(cat, index) in categories"
        :key="index"
        @click="activeIndex = cat.id"
        class="cursor-pointer px-3 py-4 text-center transition-all text-[14px] font-medium"
        :class="{
          'bg-white font-semibold text-[#212121] active': activeIndex === cat.id,
          'bg-[#F7F7F7] text-[#757575]': activeIndex !== cat.id
        }"
      >
        <svg class="check-icon block mx-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z" fill="#0FA87D" stroke="#0FA87D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.8143 6L6.96967 9.84467L5 7.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="mt-1">{{ cat.name }}</div>
      </li>
    </ul>
    <!-- Tab Content -->
    <div class="tab-content flex-1 w-full pr-5">
      <div
        v-for="(cat, index) in categories"
        :key="index"
        v-show="activeIndex === cat.id"
        class="tab-item transition-opacity duration-300"
      >
        <img class="my-6" :src="cat.banner" alt="Banner"/> 
        <div class="title-box text-[#212121] transition cursor-pointer flex items-center gap-2 mb-5">
            <span class="text-white bg-[#212121] rounded-lg px-2 text-[12px] py-1">{{cat?.label}}</span>
            <h4 class="text-[16px] font-semibold">{{cat?.name}}</h4>
            <badge class="border-2 border-[#FFC300] gap-1 font-semibold ml-auto rounded-full flex items-center px-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7Z" fill="#FFC300" stroke="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.67442 10L4.77519 9.32258L5.78295 7.53226L4 6.70968L4.34109 5.6129L6.24806 6.08065L6.43411 4H7.56589L7.73643 6.08065L9.65891 5.6129L10 6.70968L8.18605 7.53226L9.22481 9.32258L8.32558 10L7.00775 8.40323L5.67442 10Z" fill="#212121"/></svg>
                {{cat?.label2}}
            </badge>
        </div>
        <productInlineCard
            v-for="(product, pIndex) in getProductsByIds(products, cat.productIds)"
            :key="pIndex"
            :title="product.name"
            :thumbnail="product.image"
        />
      </div>
    </div>
  </div> 
</template>

<script setup>
import { ref } from "vue";
import productInlineCard from "./cards/productInlineCard.vue";
import { getProductsByIds } from '@/helper/productHelper';
import products from "@/data/products";

const props = defineProps({
  tabContent: {
    type: Array,
    required: true
  },
  activeId:Number,
  categories:Array
});

const activeIndex = ref(props.activeId);
</script>

<style lang="scss">
.tab-item {
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

</style>
