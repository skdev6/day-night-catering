<template>
    <a v-if="href" :href="href" class="badge inline-flex items-center"><slot/></a>
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

<style lang="scss">
    .badge {
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        padding:3px 9px;
        border-radius: 4px;
        font-weight: 700;
        &.badge-sm{
          font-size: 10px;
          padding: 2px 7px; 
          line-height: 13px; 
        }
        &.rounded-corner {
          border-radius: 8px 0 8px 0;
        }
    }
    .badge-2{
      padding: 4px 12px;
      @media (max-width:991px){
        padding: 3px 8px; 
      }
    }
    .badge-lg {
        padding: 8px 11px;
    }
</style>
