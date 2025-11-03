<!-- Tab.vue -->
<script setup>
import { inject, computed, onMounted } from 'vue'

const props = defineProps({
  value: { type: String, required: true }
})

const { active, setActive, registerFirstTab } = inject('tabsContext')

onMounted(() => {
  registerFirstTab(props.value)
})

const isActive = computed(() => active.value === props.value)
</script>

<template>
  <button
    :id="`tab-${value}`"
    role="tab"
    :aria-selected="isActive"
    :aria-controls="`panel-${value}`"
    :class="{ active: isActive }"
    class="tab"
    @click="setActive(value)"
  >
    <slot />
  </button>
</template>

<style scoped>
.tab {
  background: none;
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;
}

.tab:hover {
  color: #374151;
}

.tab.active {
  color: #212121;
  border-bottom-color: #212121;
  font-weight: 600;
}
</style>