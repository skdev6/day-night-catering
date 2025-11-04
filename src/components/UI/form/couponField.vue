<template lang="">
    <div>
        <h4 class="flex items-center gap-1 text-[16px] mb-2">
            <img :src="wallet"/>
            優惠券
        </h4>
        <div class="flex gap-3">
            <input type="text" class="form__input" placeholder="折價碼"/>
            <ButtonMain>使用</ButtonMain>
        </div>
    </div>
</template>
<script setup>
    import wallet from "@/assets/img/wallet.svg";
import ButtonMain from "../buttonMain.vue";
    
</script>
<style lang="">
    
</style>