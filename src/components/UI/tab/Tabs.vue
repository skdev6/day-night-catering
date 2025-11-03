<!-- Tabs.vue -->
<script setup>
import { ref, provide, watch, onMounted, nextTick } from 'vue'

const props = defineProps({
  value: { type: String, default: null }
})
const emit = defineEmits(['update:value'])

const active = ref(props.value || '')
const firstTabValue = ref(null)

// Context for children
provide('tabsContext', {
  active,
  setActive: (v) => {
    active.value = v
    emit('update:value', v)
  },
  registerFirstTab: (value) => {
    if (!firstTabValue.value) firstTabValue.value = value
  }
})

// Sync external value
watch(() => props.value, (v) => {
  if (v !== null) active.value = v
})

// Auto-activate first tab
onMounted(async () => {
  await nextTick()
  if (!active.value && firstTabValue.value !== null) {
    active.value = firstTabValue.value
    emit('update:value', active.value)
  }
})
</script>

<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<style scoped>
.tabs {
  font-family: system-ui, sans-serif;
}
</style>