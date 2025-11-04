<template>
  <teleport to="body">
    <div v-if="modelValue" class="popup__overlay" :class="class" @click.self="close">
      <div class="popup__content">
        <div class="popup-header flex items-center justify-between gap-5 p-4 border-b border-b-[#E0E0E0]">
          <h4 class="title text-[20px] font-semibold">{{ title }}</h4>
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
    },
    class:String
  },
  emits: ["update:modelValue"],
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    }
  }
};
</script>

<style lang="scss">
.popup__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding-left: 15px;
  padding-right: 15px;
}

.popup__content {
  background: #fff;
  border-radius: 15px;
  position: relative;
  max-width: 650px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: popupIn 0.3s ease;
}
.popup-fade-up{
  .popup__content{
    animation: fadeUp .83s cubic-bezier(0.19, 1, 0.22, 1);
  }
}
.popup-transparent{
  .popup__content{
    background-color: transparent;
    box-shadow: none;
    .popup-header{
      border-bottom: 0;
      .title,.popup__close{
        color: #fff;
      }
    }
  }
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
@keyframes fadeUp {
  from {
    transform:translateY(100%);
    opacity: 0;
  }
  to {
    transform:translateY(0);
    opacity: 1;
  }
}
</style>
