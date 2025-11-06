<template>
  <div class="flex gap-3 md:gap-5 product-v-tab">
    <!-- Tab List -->
    <ul class="cat-navbar list-none p-0 m-0 w-[70px] lg:w-[90px]">
      <li
        v-for="(cat, index) in categories"
        :key="index"
        @click="activeIndex = cat.id"
        class="cursor-pointer px-3 py-4 text-center transition-all text-[14px] font-normal"
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
        <img class="mt-6" :src="cat.banner" alt="Banner"/> 
        <inlineCategoryCard 
            :title="cat?.name" 
            :count="cat?.label" 
            :badgeTitle="cat?.label2"
            class="card-borderless my-[16px]"
            v-if="productShow !== 'card'"
        />
        <h2 class="text-[16px] my-[14px] font-semibold" v-if="productShow === 'card'">{{ cat?.name }}</h2> 
        <productInlineCard
            v-for="(product, pIndex) in getProductsByIds(products, cat.productIds)"
            v-if="productShow !== 'card'"
            :key="pIndex"
            :title="product.name"
            :thumbnail="product.image"
            :gallery="product.gallery"
        />
        <div class="grid grid-cols-2 md:grid-cols-3 gap-x-[10px] gap-y-[12px]" v-if="productShow === 'card'">
          <ProductSmallCard
            v-for="(product, pIndex) in getProductsByIds(products, cat.productIds)"
            :key="pIndex"
            :thumbnail="product.image"
            :badgeTitle="product.labelSm"
            :title="product.name"
            :price="product.price"
            :priceSm="product.originalPrice"
          />
        </div>
      </div>
    </div>
  </div> 
</template>

<script setup>
import { ref } from "vue";
import productInlineCard from "./cards/productInlineCard.vue";
import { getProductsByIds } from '@/helper/productHelper';
import products from "@/data/products";
import inlineCategoryCard from "./cards/inlineCategoryCard.vue";
import ProductSmallCard from '@/components/UI/cards/productSmallCard.vue';

const props = defineProps({
  tabContent: {
    type: Array,
    required: true
  },
  activeId:Number,
  categories:Array,
  productShow:{
    type:String,
    default:""
  }
});

const activeIndex = ref(props.activeId);
</script>

<style lang="scss">
.tab-item {
  animation: fadeIn 0.3s ease;
}
.cat-navbar li.active{
  font-weight: 500;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

</style>
