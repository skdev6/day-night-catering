<template>
  <teleport to="body">
    <div v-if="modelValue" class="popup__wrapper flex items-end lg:items-center justify-center fixed h-full w-full top-0 left-0" :class="class">
      <div class="popup__overlay absolute inset-0 -z-10" @click="close" :class="{opening:!closing,closing:closing}"></div> 
      <div class="popup__content" :class="{opening:!closing,closing:closing}">
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
  data(){
    return{
      closing:false
    }
  },
  emits: ["update:modelValue"],
  methods: {
    close() {
      this.closing = true;
      setTimeout(() => {
        this.$emit("update:modelValue", false);
        this.closing = false; 
      }, 150); 
    }
  }
};
</script>

<style lang="scss" scoped>
.popup__wrapper{
  z-index: 9999;
}
.popup__content {
  background: #fff;
  border-radius: 25px;
  position: relative;
  max-width:580px;
  width: 100%;
  box-shadow:0 10px 30px rgb(0 0 0 / 3%); 
}
.popup__content.opening{
  animation: popupIn .53s cubic-bezier(.19,1,.22,1); 
}
.popup__content.closing{
  animation: popupOut .3s ease-out;
}
.popup__overlay.opening{
  animation: PopupOverlayFadeIn .3s ease-out; 
}
.popup__overlay.closing{  
  animation: PopupOverlayFadeOut .3s ease-out; 
}
.popup__overlay{
  background-color: rgba(33, 33, 33, 0.4);
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
  0% {
    transform: translateY(120%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes popupOut {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(120%);
  }
}   
@keyframes PopupOverlayFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes PopupOverlayFadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
</style>
