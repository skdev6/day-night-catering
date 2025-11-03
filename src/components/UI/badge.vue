<template>
    <RouterLink v-if="href" :to="href" class="badge inline-flex items-center"><slot/></RouterLink>
    <span v-else class="badge inline-flex items-center"><slot/></span>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  props: {
    title: String,
    href: String
  }
}
</script>

<style>
    .badge {
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        padding: 2px 9px;
        border-radius: 4px;
        font-weight: 700;
        position: relative;
    }
    .badge-2{
      padding: 4px 12px;
    }
  .badge-lg {
      padding: 8px 11px;
  }
</style>
