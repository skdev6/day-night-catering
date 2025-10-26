<template>
    <a v-if="href" :href="href" class="btn__main inline-flex items-center"><slot/></a>
    <button v-else class="btn__main inline-flex items-center"><slot/></button>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>