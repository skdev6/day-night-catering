<template>
  <teleport to="body">
    <div v-if="modelValue" class="popup__overlay" @click.self="close">
      <div class="popup__content">
        <div class="flex items-center justify-between gap-5 px-7 py-5 border-b border-b-[#E0E0E0]">
          {{ title }}
          <button class="popup__close leading-5" @click="close">&times;</button>
        </div>
        <div><slot /></div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "Popup",
  props: {
    title:String,
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    }
  }
};
</script>

<style scoped>
.popup__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding-left: 15px;
  padding-right: 15px; 
}

.popup__content {
  background: #fff;
  border-radius: 8px;
  position: relative;
  max-width: 650px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: popupIn 0.3s ease;
}

.popup__close {
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

@keyframes popupIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
