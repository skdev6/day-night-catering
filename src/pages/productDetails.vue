<script setup>
    import Layout from '../components/layout/index.vue'
    import productGallery from '@/components/UI/productGallery.vue';
    import budge from '@/components/UI/budge.vue';
</script>

<template>
    <Layout>
        <div class="grid container px-4 mx-auto grid-cols-2 gap-x-14 ff-noto">
            <div>
                <productGallery />
            </div>
            <div>
                <budge title="70% OFF" class="bg-[#212121] text-[#FFC300]" />
                <h1 class="text-3xl font-bold mt-4">日夜經典到會套餐 120人 </h1>
                <budge>Hello</budge>
            </div>
        </div>
    </Layout>
</template>

<script>
    export default {

    }
</script>
<style lang="">

</style> 