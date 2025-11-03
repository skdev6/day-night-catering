<!-- TabList.vue -->
<script setup></script>

<template>
  <div class="tab-list" role="tablist">
    <slot />
  </div>
</template>

<style scoped>
.tab-list {
  display: flex;
  border-bottom: 2px solid #e5e7eb;
  margin: 0;
  padding: 0;
}
</style>