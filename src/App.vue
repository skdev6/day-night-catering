<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
	<div class="layout__area">
		<Header />

		<main class="layout__content pt-[93px] xl:pt-[245px]">
			<RouterView /> 
		</main>

		<Footer />   
	</div>
</template>
