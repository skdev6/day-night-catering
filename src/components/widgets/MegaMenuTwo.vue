<template>
	<div :class="['megamenu', { 'megamenu-active': isActive }]">
		<div class="megamenu-inner">
			
		</div>
	</div>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
	items: { type: Array, default: () => [] },
	isActive: { type: Boolean, default: false },
});



</script>
