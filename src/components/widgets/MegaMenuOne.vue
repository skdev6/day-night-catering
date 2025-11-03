<template>
	<div :class="['megamenu', { 'megamenu-active': isActive }]">
		<div class="megamenu-inner">
			<div class="megamenu__single" v-for="item in items" :key="item.id">
				<div class="mega-image">
					<RouterLink to="/product-details">
						<img :src="item.image" :alt="item.title" />
					</RouterLink>
				</div>
				<div class="mega-content">
					<RouterLink to="/product-details">{{ item.title }}</RouterLink>
				</div>
			</div>
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

<!-- <div
									v-if="item.subMenu"
									:id="item.subMenuId"
									class="megamenu"
								>
									<div class="megamenu-inner">
										<div
											class="megamenu__single"
											v-for="item in megaMenuItems"
											:key="item.id"
										>
											<div class="mega-image">
												<RouterLink to="/product-details">
													<img :src="item.image" :alt="item.title" />
												</RouterLink>
											</div>
											<div class="mega-content">
												<RouterLink to="/product-details">{{
													item.title
												}}</RouterLink>
											</div>
										</div>
									</div>
								</div> -->
