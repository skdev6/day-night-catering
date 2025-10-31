<template>
  <div class="flex gap-5">
    <!-- Tab List -->
    <ul class="list-none p-0 m-0 w-[90px]">
      <li
        v-for="(tab, index) in tabContent"
        :key="index"
        @click="activeIndex = index"
        class="cursor-pointer px-3 py-4 text-center transition-all"
        :class="{
          'bg-white font-semibold text-[#212121]': activeIndex === index,
          'bg-[#F7F7F7] text-[#757575]': activeIndex !== index
        }"
      >
        {{ tab.catName }} 
      </li>
    </ul>
    <!-- Tab Content -->
    <div class="tab-content flex-1 w-full pr-5">
      <div
        v-for="(tab, index) in tabContent"
        :key="index"
        v-show="activeIndex === index"
        class="tab-item transition-opacity duration-300"
      >
        <img class="my-6" :src="tab.banner" alt="Banner"/> 
        <div class="title-box text-[#212121] transition cursor-pointer flex items-center gap-3 mb-5">
            <span class="text-white bg-[#212121] rounded-lg px-3 py-1">9選6</span>
            廚師秘制沙律
            <badge class="border-2 border-[#FFC300] gap-2 ml-auto rounded-full flex items-center px-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7Z" fill="#FFC300" stroke="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.67442 10L4.77519 9.32258L5.78295 7.53226L4 6.70968L4.34109 5.6129L6.24806 6.08065L6.43411 4H7.56589L7.73643 6.08065L9.65891 5.6129L10 6.70968L8.18605 7.53226L9.22481 9.32258L8.32558 10L7.00775 8.40323L5.67442 10Z" fill="#212121"/></svg>
                必選
            </badge>
        </div>
        <productInlineCard
            v-for="(product, pIndex) in tab.products"
            :key="pIndex"
            :title="product.title"
            :thumbnail="product.thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import productInlineCard from "./productInlineCard.vue";

const props = defineProps({
  tabContent: {
    type: Array,
    required: true
  }
});

const activeIndex = ref(0);
</script>

<style scoped>
.tab-item {
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
