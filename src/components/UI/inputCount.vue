<template>
  <div
    ref="parentRef"
    :class="[
      'input__number flex items-center justify-center bg-[#FFFAEA] border-2 rounded-xl p-3 border-[#FFC300] transition',
      customClass
    ]"
  >
    <!-- Decrease -->
    <div>
      <button
        class="count-btn count-reduce flex items-center justify-center cursor-pointer w-[30px] h-[30px] rounded-full bg-white border border-[#FFF4CF] hover:bg-[#FFF4CF] transition"
        @click="decrease"
      >
        <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4 1L1 1" stroke="#FFE17F" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <!-- Input -->
    <input
      ref="inputRef"
      type="text"
      v-model="localValue"
      @input="handleInput"
      placeholder="00"
      class="block w-full text-center outline-0 bg-transparent transition input-control"
    />

    <!-- Increase -->
    <div>
      <button
        class="count-btn count-increment flex items-center justify-center cursor-pointer w-[30px] h-[30px] rounded-full bg-white border border-[#FFF4CF] hover:bg-[#FFF4CF] transition"
        @click="increase"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1V13M13 7H1" stroke="#FFC300" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

// Props
const props = defineProps({
  default: { type: [Number, String], default: 0 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: Infinity },
  onChange: { type: Function, default: null },
  class: { type: String, default: "" }, // user can pass tailwind classes
});

// Refs
const localValue = ref(Number(props.default) || 0);
const parentRef = ref(null);
const inputRef = ref(null);

// Dynamic classes from prop
const customClass = props.class;

// Emit class update depending on value
const updateClasses = () => {
  if (!parentRef.value || !inputRef.value) return;
  if (localValue.value > 0) {
    parentRef.value.classList.add("active-count");
  } else {
    parentRef.value.classList.remove("active-count");
  }
};

// Input handler
const handleInput = (e) => {
  const val = e.target.value.replace(/[^0-9]/g, "");
  localValue.value = val ? parseInt(val) : 0;
  triggerChange();
};

// Increase / Decrease
const increase = () => {
  if (localValue.value < props.max) {
    localValue.value++;
    triggerChange();
  }
};

const decrease = () => {
  if (localValue.value > props.min) {
    localValue.value--;
    triggerChange();
  }
};

// Trigger onChange event
const triggerChange = () => {
  updateClasses();
  if (props.onChange) props.onChange(localValue.value);
};

watch(localValue, updateClasses);
onMounted(updateClasses);
</script>

<style scoped>
.count-small {
    border-color: transparent;
    background-color: transparent;
    padding: 0;
    max-width: 90px;
}  
.count-small .count-reduce,.count-small .input-control{
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
    transition:var(--base-transition);
}
.active-count.count-small .count-reduce,.active-count.count-small .input-control{
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}
.count-small .count-btn {
    border-color: #E0E0E0;
}
.count-small .count-btn svg path {
    stroke: #767676;
}
</style>
