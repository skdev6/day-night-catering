<template lang="">
    <div class="flex items-center gap-x-[12px] mb-3">
        <img :src="thumbnail" alt="" class="thumbnail border border-[#EEEEEE] w-[56px] rounded-lg" :class="gallery ? 'cursor-pointer transition hover:border-[#b9b5b5]' : ''" @click="()=>{
            if(gallery){
                openGallery(gallery);
            }
        }"/>
        <h3 class="text-[13px] font-medium">{{title}}</h3>
        <inputCount class="count-small ml-auto"/>
    </div>
</template>
<script setup>
    import { onMounted } from 'vue';
    import inputCount from '../form/inputCount.vue';
    import { openGallery } from '@/components/useFancybox';
    
    const props = defineProps({
        thumbnail:String,
        title:String,
        count:Function,
        gallery:Array
    });

</script>
<style lang="">
    
</style>