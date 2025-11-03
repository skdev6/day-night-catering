<template>
	<div :class="['cart-modal', { 'cart-modal-active': show }]">
		<div class="modal-overlay" @click="close"></div>

		<div class="cart-modal-wrapper">
			<div class="modal-content__header">
				<p class="capitalize">購物車</p>
				<button class="close-btn" @click="close">
					<i class="ph-bold ph-x"></i>
				</button>
			</div>

			<div class="cart-modal__inner">
				<div
					v-for="item in cartItems"
					:key="item.id"
					class="cart-modal__single"
				>
					<div class="item__image">
						<RouterLink to="/product-details">
							<img :src="item.image" :alt="item.name" />
						</RouterLink>
					</div>

					<div class="item__content">
						<div class="item__content-intro">
							<RouterLink to="/product-details">{{ item.name }}</RouterLink>
							<button @click="removeItem(item.id)">
								<i class="ph-bold ph-trash"></i>
							</button>
						</div>

						<div class="item__component">
							<p class="text-[10px] text-[#767676] font-bold">Components:</p>
							<ul v-if="item.components.length > 1">
								<li v-for="(comp, index) in item.components" :key="index">
									{{ comp }}
								</li>
							</ul>
							<p v-else>{{ item.components[0] }}</p>
						</div>

						<div class="item__cta">
							<div class="item__price">
								<p>
									${{ item.price }}
									<span>${{ item.originalPrice }}</span>
								</p>

								<div class="items-center gap-[8px] flex">
									<RouterLink
										v-if="item.editable"
										to="/"
										class="flex items-center gap-[4px]"
									>
										<i class="ph-bold ph-pencil-simple-line"></i>
										重選菜式
									</RouterLink>

									<div class="item__quantity-wrapper">
										<div
											class="decrease-item"
											@click="decreaseQuantity(item.id)"
										>
											<i class="ph-bold ph-minus"></i>
										</div>
										<p class="item-quantity">{{ item.quantity }}</p>
										<div
											class="increase-item"
											@click="increaseQuantity(item.id)"
										>
											<i class="ph-bold ph-plus"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="cart-modal__footer">
				<div class="cart-modal__footer-one">
					<p>
						滿 <span>$2000</span> 免運費, 還差
						<span>${{ freeShippingLeft }}</span>
					</p>
				</div>

				<div class="cart-modal__footer-two">
					<div class="cart-modal__footer-two-header mb-[12px]!">
						<p>小計</p>
						<h5>
							$<span>{{ total }}</span>
						</h5>
					</div>

					<RouterLink
						to="/cart"
						class="py-[13px]! px-[16px]! text-center bg-[#f7f7f7] font-semibold border-[1.3px] border-solid border-[#e0e0e0] rounded-[10px] w-full transition-all ease-in-out duration-300 hover:bg-[#ede5e5] hover:text-[#212121]"
					>
						查看購物車
					</RouterLink>

					<RouterLink
						to="/checkout"
						class="mt-[12px]! mb-[16px]! py-[13px]! px-[16px]! text-center text-white bg-[#212121] border-[1.3px] border-solid border-[#212121] rounded-[10px] w-full transition-all ease-in-out duration-300 hover:bg-[#ede5e5] font-semibold hover:text-[#212121] hover:border-[#e0e0e0]"
					>
						下一選項
					</RouterLink>

					<div class="cart-modal__foter-payment">
						<p class="text-[14px] font-semibold text-[#212121] text-center">
							我們支持
						</p>

						<div
							class="flex items-center justify-center flex-wrap gap-[8px] max-w-[310px] mx-auto! mt-[12px]!"
						>
							<img :src="one" alt="Payment" width="70" height="28" />
							<img :src="two" alt="Payment" width="47" height="28" />
							<img :src="three" alt="Payment" width="56" height="28" />
							<img :src="four" alt="Payment" width="56" height="28" />
							<img :src="five" alt="Payment" width="56" height="28" />
							<img :src="six" alt="Payment" width="28" height="28" />
							<img :src="seven" alt="Payment" width="28" height="28" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import productsData from "@/data/products.js";
import { defineProps, defineEmits } from "vue";
import one from "@/assets/img/payment/paypal.png";
import two from "@/assets/img/payment/mastercard.png";
import three from "@/assets/img/payment/visa.png";
import four from "@/assets/img/payment/stripe.png";
import five from "@/assets/img/payment/cash.png";
import six from "@/assets/img/payment/check.png";
import seven from "@/assets/img/payment/local.png";

const props = defineProps({
	show: { type: Boolean, required: true },
});

const emit = defineEmits(["close"]);
const close = () => emit("close");

const cartItems = ref([...productsData]);

const increaseQuantity = (id) => {
	const product = cartItems.value.find((item) => item.id === id);
	if (product) product.quantity++;
};

const decreaseQuantity = (id) => {
	const product = cartItems.value.find((item) => item.id === id);
	if (product && product.quantity > 1) product.quantity--;
};

const removeItem = (id) => {
	cartItems.value = cartItems.value.filter((item) => item.id !== id);
};

const total = computed(() =>
	cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const freeShippingLeft = computed(() =>
	total.value >= 2000 ? 0 : 2000 - total.value
);
</script>
