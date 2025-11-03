<template>
	<div :class="['language-modal', { 'language-modal-active': show }]">
		<div class="modal-overlay" @click="close"></div>

		<div class="language-modal__inner">
			<div class="language-modal-content">
				<div class="modal-content__header">
					<p>選擇語言</p>
					<button class="close-btn" @click="close">
						<i class="ph-bold ph-x"></i>
					</button>
				</div>

				<div class="modal-image text-center">
					<img :src="language" alt="Language" />
				</div>
				<div
					class="items-center gap-[8px] flex-wrap flex"
				>
					<button
						@click="setActive('zh')"
						:class="[
							'py-[14px]! px-[24px]! flex-1 text-[14px] text-[#212121] font-semibold rounded-[10px] transition-all ease-in-out duration-300 border-2 border-solid',
							activeLang === 'zh'
								? 'border-[#212121] bg-[#ffffff]'
								: 'border-transparent bg-[#ffffff]',
						]"
					>
						定製報價
					</button>

					<button
						@click="setActive('en')"
						:class="[
							'py-[14px]! px-[24px]! flex-1 text-[14px] text-[#212121] font-semibold rounded-[10px] transition-all ease-in-out duration-300 border-2 border-solid',
							activeLang === 'en'
								? 'border-[#212121] bg-[#ffffff]'
								: 'border-transparent bg-[#ffffff]',
						]"
					>
						English
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
import language from "@/assets/img/language.png";

const props = defineProps({
	show: { type: Boolean, required: true },
});

const emit = defineEmits(["close"]);

const close = () => emit("close");
const activeLang = ref("zh");

const setActive = (lang) => {
	activeLang.value = lang;
};
</script>
