import { defineStore } from "pinia";


export const usePopupStore = defineStore("popup", {
    state:()=>({
        openMenuPopup:false
    }),
    actions:{
        menuPopup(bool){
            this.openMenuPopup = bool;
        }
    }
})