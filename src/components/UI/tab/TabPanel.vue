<!-- TabPanel.vue -->
<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  value: { type: String, required: true }
})

const { active } = inject('tabsContext')
const isActive = computed(() => active.value === props.value)
</script>

<template>
  <div
    v-show="isActive"
    :id="`panel-${value}`"
    :aria-labelledby="`tab-${value}`"
    role="tabpanel"
    :class="{ active: isActive }"
    class="tab-panel"
  >
    <slot />
  </div>
</template>

<style scoped>
.tab-panel {
  animation: fadeIn 0.3s ease;
  opacity: 0;
}

.tab-panel.active {
  opacity: 1;
  border-radius: 8px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>