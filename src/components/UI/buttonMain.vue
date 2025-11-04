<template>
    <RouterLink v-if="href" :to="href" class="btn__main inline-flex gap-2 items-center justify-center"><slot/></RouterLink>
    <button v-else class="btn__main inline-flex gap-2 items-center justify-center"><slot/></button>
</template>
<script>
import { RouterLink } from 'vue-router';

</script>
<style lang="scss">

</style>