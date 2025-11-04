<template lang="">
    <div class="flex gap-4 justify-between bg-white p-5 rounded-2xl border border-[#E0E0E0]">
        <img :src="car" alt="car">
        <div class="text-[20px] font-semibold">
            運費$200
            <span class="block text-[14px] text-[#EA3E3E]">還差$1400免運費</span>
        </div>
        <ButtonMain class="btn-dark">去湊單</ButtonMain>
    </div>
</template>
<script setup>
import ButtonMain from '../buttonMain.vue';
import car from "@/assets/img/car.svg"

    
</script>
<style lang="">
    
</style>