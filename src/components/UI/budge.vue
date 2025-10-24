<template>
    <a v-if="href" :href="href" class="badge inline-block">{{ title }}</a>
    <span v-else class="badge inline-block">{{ title }}</span>
</template>

<script>
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
    }
</style>
