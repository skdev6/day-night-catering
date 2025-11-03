<template>
	<header
		class="header__area fixed z-9999 top-0 left-0 right-0 w-full bg-white"
	>
		<div class="bg-white xl:pt-[60px] border-b border-b-[#E0E0E0] z-10">
			<div
				class="w-full max-w-[1580px] mx-auto! px-[16px]! py-[10px]! [@media(min-width:576px)]:pt-[48px]! [@media(min-width:576px)]:pb-[20px]! relative"
			>
				<div
					class="flex items-center justify-between [@media(min-width:1200px)]:justify-end"
				>
					<button
						class="w-[48px] h-[48px] rounded-full bg-[#F4F4F4] hover:bg-[#ede5e5]! inline-flex items-center justify-center [@media(min-width:1200px)]:hidden!"
						@click="isNavbarActive = !isNavbarActive"
					>
						<i class="ph-bold ph-list text-[24px] text-black"></i>
					</button>
					<RouterLink
						to="/"
						class="logo inline-block outline-0 [@media(min-width:576px)]:absolute [@media(min-width:576px)]:left-[50%] [@media(min-width:576px)]:bottom-[0px]! [@media(min-width:576px)]:translate-x-[-50%]"
						><img
							:src="logo"
							alt="Logo"
							class="w-[64px] h-[64px] [@media(min-width:576px)]:w-[88px] [@media(min-width:576px)]:h-[88px]"
					/></RouterLink>
					<div class="flex items-center gap-[8px]">
						<ul class="navbar-icon list-none p-0 m-0 flex items-center">
							<li class="[@media(max-width:576px)]:hidden">
								<button @click="showLanguageModal = true">
									<span class="icon relative">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M18.4375 11C18.9898 11 19.4375 10.5523 19.4375 10C19.4375 9.44772 18.9898 9 18.4375 9V10V11ZM19 10H18C18 14.4183 14.4183 18 10 18V19V20C15.5228 20 20 15.5228 20 10H19ZM10 19V18C5.58172 18 2 14.4183 2 10H1H0C0 15.5228 4.47715 20 10 20V19ZM1 10H2C2 5.58172 5.58172 2 10 2V1V0C4.47715 0 0 4.47715 0 10H1ZM10 1V2C14.4183 2 18 5.58172 18 10H19H20C20 4.47715 15.5228 0 10 0V1ZM10 19V18C9.78721 18 9.50566 17.9056 9.16241 17.5738C8.81434 17.2373 8.45521 16.7021 8.13192 15.9631C7.48665 14.4882 7.0625 12.3807 7.0625 10H6.0625H5.0625C5.0625 12.5898 5.51979 14.9823 6.29961 16.7648C6.68887 17.6545 7.1782 18.4373 7.77228 19.0117C8.37118 19.5907 9.12548 20 10 20V19ZM6.0625 10H7.0625C7.0625 7.61928 7.48665 5.51177 8.13192 4.03686C8.45521 3.29792 8.81434 2.76272 9.16241 2.42621C9.50566 2.09436 9.78721 2 10 2V1V0C9.12548 0 8.37118 0.409315 7.77228 0.988315C7.1782 1.56266 6.68887 2.34548 6.29961 3.23522C5.51979 5.01767 5.0625 7.41015 5.0625 10H6.0625ZM10 19V20C10.8745 20 11.6288 19.5907 12.2277 19.0117C12.8218 18.4373 13.3111 17.6545 13.7004 16.7648C14.4802 14.9823 14.9375 12.5898 14.9375 10H13.9375H12.9375C12.9375 12.3807 12.5133 14.4882 11.8681 15.9631C11.5448 16.7021 11.1857 17.2373 10.8376 17.5738C10.4943 17.9056 10.2128 18 10 18V19ZM13.9375 10H14.9375C14.9375 7.41015 14.4802 5.01767 13.7004 3.23522C13.3111 2.34548 12.8218 1.56266 12.2277 0.988315C11.6288 0.409315 10.8745 0 10 0V1V2C10.2128 2 10.4943 2.09436 10.8376 2.42621C11.1857 2.76272 11.5448 3.29792 11.8681 4.03686C12.5133 5.51177 12.9375 7.61928 12.9375 10H13.9375ZM1 10L1 11L18.4375 11V10V9L1 9L1 10Z"
												fill="#212121"
											/>
										</svg>
									</span>
								</button>
							</li>
							<li>
								<button @click="showCartModal = true">
									<span class="icon relative">
										<span
											class="bg-[#FFC300] rounded-full flex items-center justify-center text-[12px] absolute bottom-2/5 left-2/4 h-[18px] text-[#212121] w-[18px]"
											>0</span
										>
										<svg
											width="21"
											height="19"
											viewBox="0 0 21 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3.6355 7.04826L8.46633 1.77826C9.41753 0.74058 11.0535 0.740579 12.0047 1.77826L16.8355 7.04826M19.433 8.34524L16.701 17.1452C16.5711 17.5636 16.184 17.8487 15.7459 17.8487H4.79107C4.3552 17.8487 3.96953 17.5664 3.83782 17.1509L1.04828 8.35091C0.843902 7.70618 1.32518 7.04874 2.00153 7.04874H18.478C19.1518 7.04874 19.6328 7.70168 19.433 8.34524Z"
												stroke="#212121"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</button>
							</li>
							<li class="[@media(max-width:576px)]:hidden">
								<RouterLink to="/">
									<span class="icon relative">
										<svg
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9 10.5557C11.3722 10.5557 13.4711 11.0084 14.9395 11.6973C16.4872 12.4234 17 13.2289 17 13.7783C16.9998 14.4746 16.6205 15.2354 15.3896 15.877C14.1255 16.5358 12.0584 17 9 17C5.94161 17 3.87454 16.5358 2.61035 15.877C1.37952 15.2354 1.00016 14.4746 1 13.7783C1 13.2289 1.51284 12.4234 3.06055 11.6973C4.52885 11.0084 6.62782 10.5557 9 10.5557ZM9 1C10.484 1 11.8184 2.4463 11.8184 4.00977C11.8183 5.52535 10.5293 6.875 9 6.875C7.4707 6.875 6.1817 5.52535 6.18164 4.00977C6.18164 2.4463 7.51601 1 9 1Z"
												stroke="#212121"
												stroke-width="2"
											/>
										</svg>
									</span>
								</RouterLink>
							</li>
						</ul>
						<div
							class="items-center gap-[8px] flex-wrap hidden [@media(min-width:1200px)]:flex"
						>
							<RouterLink
								to="/"
								class="py-[14px]! px-[24px]! text-[14px] bg-[#ffffff] border border-solid border-[#212121] font-semibold rounded-[10px] transition-all ease-in-out duration-300 hover:bg-[#ede5e5] hover:text-[#212121] hover:border-[#e0e0e0]"
							>
								定製報價
							</RouterLink>
							<RouterLink
								to="/"
								class="py-[14px]! px-[24px]! text-[14px] bg-[#FFC300] border border-solid border-[#FFC300] font-semibold rounded-[10px] transition-all ease-in-out duration-300 hover:bg-[#ede5e5] hover:text-[#212121] hover:border-[#e0e0e0]"
							>
								立即落單
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full max-w-[1580px] mx-auto! px-[16px]! mt-[8px]! relative">
				<nav class="navbar" :class="{ 'navbar-active': isNavbarActive }">
					<div class="item__content-intro [@media(min-width:1200px)]:hidden">
						<div class="intro-inner">
							<div class="rgc">
								<span>D</span>
								<img :src="google" alt="Image" />
							</div>
							<span class="user-name">Daynight</span>
						</div>
						<button @click="closeNavbar">
							<i class="ph-bold ph-x"></i>
						</button>
					</div>
					<div class="navbar__inner">
						<ul>
							<li v-for="(item, index) in navItems" :key="index">
								<RouterLink
									:to="item.url"
									class="nav-item block"
									@click.prevent="
										toggleMenu =
											toggleMenu === item.subMenuId ? null : item.subMenuId
									"
								>
									{{ item.name }}
									<i v-if="item.subMenu" class="ph-bold ph-caret-down"></i>
								</RouterLink>
								<!-- <MegaMenuOne
									v-if="item.subMenuId === '#megamenu-1'"
									:items="megaMenuItems"
									:isActive="
										activeMenu === '#megamenu-1' || toggleMenu === '#megamenu-1'
									"
								/>
								<MegaMenuTwo v-if="item.subMenuId === '#megamenu-2'"
									
									:isActive="
										activeMenu === '#megamenu-2' || toggleMenu === '#megamenu-2'
									" /> -->
							</li>
						</ul>
					</div>
				</nav>
				<div
					class="nav-overlay"
					:class="{ 'nav-overlay-active': isNavbarActive }"
					@click="closeNavbar"
				></div>
			</div>
		</div>
	</header>
	<SwitchLanguage
		:show="showLanguageModal"
		@close="showLanguageModal = false"
	/>
	<SidebarCart :show="showCartModal" @close="showCartModal = false" />
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { navItems } from "@/data/navbar.js";
import { megaMenuItems } from "@/data/mega-one.js";
import SwitchLanguage from "../widgets/SwitchLanguage.vue";
import SidebarCart from "../widgets/SidebarCart.vue";
import logo from "@/assets/img/logo.png";
import google from "@/assets/img/google.png";

import MegaMenuOne from "../widgets/MegaMenuOne.vue";
import MegaMenuTwo from "../widgets/MegaMenuTwo.vue";

const showLanguageModal = ref(false);
const showCartModal = ref(false);

const activeMenu = ref(null);
const toggleMenu = ref(null);
const isNavbarActive = ref(false);

const closeNavbar = () => {
	isNavbarActive.value = false;
};
</script>
