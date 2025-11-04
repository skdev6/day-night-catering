<script setup>
import Layout from "../components/layout/index.vue";
import productGallery from "@/components/UI/productGallery.vue";
import badge from "@/components/UI/badge.vue";
</script>

<template>
	<Layout>
		<div
			class="lg:grid container lg:px-4 mx-auto grid-cols-5 gap-x-14 ff-noto py-14"
		>
			<!-- Left Content -->
			<div class="w-full col-span-3">
				<productGallery
					class="hidden lg:block nav-none"
					thumbDirection="vertical"
				/>
				<productGallery class="lg:hidden" />
				<div class="mt-9 px-4 lg:px-0 hidden lg:block">
					<ProductDescription />
				</div>
				<ProductSmallSlide
					:products="productDetails"
					title="可以搭配的產品"
					class="mt-9"
				/>
				<ProductSmallSlide
					:products="productDetails"
					title="你可能喜歡"
					class="mt-9"
				/>
				<ProductSmallSlide
					:products="productDetails"
					title="你可能喜歡"
					class="mt-9"
				/>
			</div>
			<!-- Right Content -->
			<div class="mt-6 lg:mt-0 px-4 lg:px-0 col-span-2">
				<div
					class="flex flex-wrap lg:flex-col items-center lg:items-start gap-2 mb-3"
				>
					<badge class="bg-[#212121] text-[#FFC300]">70% OFF</badge>
					<h1 class="title-lg font-bold">日夜經典到會套餐 120人</h1>
				</div>
				<h4 class="text-[18px] font-semibold text-[#EA3E3E]">
					<small>$</small>16560 <s class="text-[#616161] text-[14px]">$19733</s>
				</h4>
				<div class="flex items-center gap-5 my-4 text-sm">
					<badge class="bg-[#FFDFD0] text-[#7E4A31] badge-2">幫你慳咗</badge>
					<span>$3173</span>
					<span class="flex items-center gap-1 text-[#616161]">
						<svg
							width="15"
							height="12"
							viewBox="0 0 15 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.95 6.75C12.7949 7.38126 13.55 8.97065 13.55 9.94996C13.55 10.2551 13.3274 10.5024 13.0528 10.5024H12.75M9.55 4.16251C10.0966 3.84634 10.4643 3.2554 10.4643 2.57857C10.4643 1.90174 10.0966 1.3108 9.55 0.99463M1.24718 10.5024H10.0052C10.2798 10.5024 10.5024 10.2551 10.5024 9.94996C10.5024 8.03222 8.9002 6.47759 5.62619 6.47759C2.35218 6.47759 0.75 8.03222 0.75 9.94996C0.75 10.2551 0.972595 10.5024 1.24718 10.5024ZM7.45476 2.57857C7.45476 3.58846 6.63608 4.40714 5.62619 4.40714C4.6163 4.40714 3.79762 3.58846 3.79762 2.57857C3.79762 1.56868 4.6163 0.75 5.62619 0.75C6.63608 0.75 7.45476 1.56868 7.45476 2.57857Z"
								stroke="#616161"
								stroke-width="1.5"
								stroke-linecap="round"
							/>
						</svg>
						120
					</span>
					<span class="flex items-center gap-1 text-[#616161]">
						<svg
							width="14"
							height="11"
							viewBox="0 0 14 11"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.88793 8.38636C4.88793 9.32358 4.14688 10.0833 3.23276 10.0833C2.31863 10.0833 1.57759 9.32358 1.57759 8.38636M4.88793 8.38636C4.88793 7.44915 4.14688 6.68939 3.23276 6.68939C2.31863 6.68939 1.57759 7.44915 1.57759 8.38636M4.88793 8.38636H8.61207M1.57759 8.38636H0.75V1.41667C0.75 1.04848 1.04848 0.75 1.41667 0.75H8.61207V8.38636M12.3362 8.38636C12.3362 9.32358 11.5952 10.0833 10.681 10.0833C9.76691 10.0833 9.02586 9.32358 9.02586 8.38636M12.3362 8.38636C12.3362 7.44915 11.5952 6.68939 10.681 6.68939C9.76691 6.68939 9.02586 7.44915 9.02586 8.38636M12.3362 8.38636H12.75V4.99242L10.681 2.87121H8.61207V8.38636M9.02586 8.38636H8.61207"
								stroke="#616161"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						免運費
					</span>
				</div>
				<div class="flex items-center flex-wrap gap-2 lg:gap-5 mt-5 text-sm">
					<badge class="bg-[#FFFAEA] text-[#212121] badge-2 whitespace-nowrap"
						>🏠家庭聚餐</badge
					>
					<badge class="bg-[#FFFAEA] text-[#212121] badge-2 whitespace-nowrap"
						>☕️下午茶</badge
					>
					<badge class="bg-[#FFFAEA] text-[#212121] badge-2 whitespace-nowrap"
						>📅公司茶聚</badge
					>
					<badge class="bg-[#FFFAEA] text-[#212121] badge-2 whitespace-nowrap"
						>🥣午餐會</badge
					>
				</div>
				<addSlide class="mt-6" />
				<hr class="text-[#E0E0E0] my-[30px]" />
				<div class="flex items-center">
					<h4 class="title-md">
						選擇菜式
						<span class="text-[#616161] text-sm ml-2"
							>還有<span class="text-[#212121]">12</span>個選項未選</span
						>
					</h4>
					<badge
						class="bg-[#F8F8F8] text-[#212121] ml-auto badge-lg border border-[#E0E0E0]"
					>
						<span
							class="absolute bottom-full translate-y-[20%] text-white bg-[#212121] left-0 rounded-corner p-1 text-sm"
							>MENU</span
						>
						查看餐單
					</badge>
				</div>
				<div class="mt-8 flex flex-col gap-4">
					<InlineCard
						v-for="(box, index) in optionBox"
						:key="index"
						:title="box.title"
						:count="box.count"
						:badgeTitle="box.badgeTitle"
					/>
					<div
						class="bottom__panel gap-3 w-full py-5 justify-center hidden lg:inline-flex p-4 border border-[#E0E0E0] rounded-xl"
					>
						<inputCount class="w-[185px]" />
						<buttonMain class="w-full">立即落單</buttonMain>
					</div>
				</div>
			</div>
		</div>
	</Layout>
	<sideWidgets
		class="fixed right-0 lg:right-5 top-14 lg:top-[50%] lg:translate-y-[-50%] z-50"
	/>
	<div
		class="flex gap-3 fixed w-full bottom-0 py-5 justify-center bottom__panel lg:hidden"
	>
		<inputCount class="w-[124px]" />
		<buttonMain>立即落單</buttonMain>
	</div>
</template>

<script>
import { ref } from "vue";
import sideWidgets from "@/components/UI/sideWidgets.vue";
import addSlide from "@/components/UI/addSlide.vue";
import inputCount from "@/components/UI/inputCount.vue";
import buttonMain from "@/components/UI/buttonMain.vue";
import Popup from "@/components/UI/popup.vue";
import ProductSmallSlide from "@/components/UI/productSmallSlide.vue";
import productThumbnail from "@/assets/img/prod-img.png";
import InlineCard from "@/components/UI/cards/inlineCategoryCard.vue";
import ProductDescription from "@/components/UI/productDescription.vue";

const optionBox = ref([
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "9選6",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "5選1",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "9選6",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "9選6",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "5選1",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "9選6",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "9選6",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "9選6",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "5選1",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "9選6",
		badgeTitle: "必選",
	},
	{
		id: 1,
		title: "廚師秘制沙律",
		count: "9選6",
		badgeTitle: "必選",
	},
]);

const productDetails = ref([
	{
		id: 1,
		title: "日夜經典到會套餐 120人",
		price: "$16560",
		priceSm: "$19733",
		badgeTitle: "70% OFF",
		count: 120,
		freeShip: true,
		tags: ["🏠家庭聚餐", "☕️下午茶", "📅公司茶聚", "🥣午餐會"],
		thumbnail: productThumbnail,
	},
	{
		id: 2,
		title: "日夜經典到會套餐 120人",
		price: "$16560",
		priceSm: "$19733",
		badgeTitle: "70% OFF",
		count: 120,
		freeShip: true,
		tags: ["🏠家庭聚餐", "☕️下午茶", "📅公司茶聚", "🥣午餐會"],
		thumbnail: productThumbnail,
	},
	{
		id: 3,
		title: "日夜經典到會套餐 120人",
		price: "$16560",
		priceSm: "$19733",
		badgeTitle: "70% OFF",
		count: 120,
		freeShip: true,
		tags: ["🏠家庭聚餐", "☕️下午茶", "📅公司茶聚", "🥣午餐會"],
		thumbnail: productThumbnail,
	},
	{
		id: 4,
		title: "日夜經典到會套餐 120人",
		price: "$16560",
		priceSm: "$19733",
		badgeTitle: "70% OFF",
		count: 120,
		freeShip: true,
		tags: ["🏠家庭聚餐", "☕️下午茶", "📅公司茶聚", "🥣午餐會"],
		thumbnail: productThumbnail,
	},
	{
		id: 1,
		title: "日夜經典到會套餐 120人",
		price: "$16560",
		priceSm: "$19733",
		badgeTitle: "70% OFF",
		count: 120,
		freeShip: true,
		tags: ["🏠家庭聚餐", "☕️下午茶", "📅公司茶聚", "🥣午餐會"],
		thumbnail: productThumbnail,
	},
	{
		id: 2,
		title: "日夜經典到會套餐 120人",
		price: "$16560",
		priceSm: "$19733",
		badgeTitle: "70% OFF",
		count: 120,
		freeShip: true,
		tags: ["🏠家庭聚餐", "☕️下午茶", "📅公司茶聚", "🥣午餐會"],
		thumbnail: productThumbnail,
	},
	{
		id: 3,
		title: "日夜經典到會套餐 120人",
		price: "$16560",
		priceSm: "$19733",
		badgeTitle: "70% OFF",
		count: 120,
		freeShip: true,
		tags: ["🏠家庭聚餐", "☕️下午茶", "📅公司茶聚", "🥣午餐會"],
		thumbnail: productThumbnail,
	},
	{
		id: 4,
		title: "日夜經典到會套餐 120人",
		price: "$16560",
		priceSm: "$19733",
		badgeTitle: "70% OFF",
		count: 120,
		freeShip: true,
		tags: ["🏠家庭聚餐", "☕️下午茶", "📅公司茶聚", "🥣午餐會"],
		thumbnail: productThumbnail,
	},
]);

export default {
	components: {
		Popup,
	},
	data() {
		return {
			showPopup: false,
		};
	},
};
</script>
<style>
.bottom__panel {
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) 13.82%,
		#ffffff 100%
	);
}
</style>
