<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import GlobalPopup from "./components/UI/popup/globalPopup.vue";

</script>

<template>
	<div class="layout__area">
		<Header />

		<main class="layout__content sm:pt-[85px] md:pt-[108px] xl:pt-[183px]">
			<RouterView /> 
		</main>  

		<Footer />   
		<GlobalPopup/>
	</div>
</template>
