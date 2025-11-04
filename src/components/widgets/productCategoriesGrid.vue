<template lang="">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 lg:gap-5">
        <ProductCardSmInline
            v-for="(cat, index) in productCategories"
            :title="cat.title"
            :image="cat.image"
            :key="index"
            :href="cat.url"
        />
    </div>
</template>
<script setup>
    import ProductCardSmInline from '../UI/cards/ProductCardSmInline.vue';
    import {productCategories} from '@/data/navbar';
</script>
<style lang="">
      
</style>