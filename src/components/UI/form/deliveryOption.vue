<template>
  <div class="flex items-center gap-3 cursor-pointer">
    <input class="form__checkbox" type="radio" name="deliveryOption" :id="id">
    <label :for="id" class="flex gap-3 w-full">
      <span>
        <span class="block font-semibold text-[14px]">{{ title }}</span>
        <span class="block text-sm text-gray-500 text-[12px]"><slot /></span>
      </span>
      <span class="ml-auto font-semibold text-[16px]"><small>{{ productStore.currency }}</small>{{ price }}</span>
    </label>
  </div>
</template>

<script setup>
import { getUniqueId } from '@/helper/functions'
import { useProductStore } from '@/stores/product'
const productStore = useProductStore();

const props = defineProps({
  title: String,
  price: String
})

const id = `radio-${getUniqueId()}`
</script>
