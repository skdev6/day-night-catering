<template lang="">
    <div class="flex gap-x-[79px]">
        <ul class="slide-nav-wrap list-none p-0 m-0 flex flex-col gap-2">
            <li v-for="(cat, index) in categories" :key="index" class="whitespace-nowrap title-md2 p-[13px] min-w-[180px] rounded-lg cursor-pointer" :class="index === 0 ? 'active' : ''"
                @mouseenter="(e)=>handelSlide(e, index)"
            >
                {{cat.name}}
            </li> 
        </ul>
        <div class="slide-wrap flex overflow-hidden w-full">
            <div v-for="(cat, index) in categories" :key="index" class="slide-item bg-cover bg-center min-w-full rounded-lg overflow-hidden" :style="'background-image:url('+ cat.img +')'">
                <div class="text-white flex flex-col p-9 min-h-[332px] bg-[rgba(0,0,0,0.33)] min-h-full">
                    <div class="top-content mb-auto">
                        <h4 class="title-xl mb-2">{{cat.name}}</h4>
                        <p>{{cat.description}}</p>
                    </div>
                    <a href="#" class="arrow-btn flex items-center justify-center">
                        <span class="icon block relative overflow-hidden">
                            <svg  class="arrow-primary" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3333 1L17 8M17 8L10.3333 15M17 8L1 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg class="arrow-secondary absolute left-0 top-0" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3333 1L17 8M17 8L10.3333 15M17 8L1 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import banner from "@/assets/img/prod-img.png";
    import banner2 from "@/assets/img/products/1.png";
    import { onMounted, ref } from "vue";
    const slideWrapRef = ref(null);


    const categories = [
        {
            name:"家庭/公司聚會",
            img:banner,
            description:"Family/Company Gatherings",
            url:"#"
        },
        {
            name:"派對Pizza大食會",
            img:banner2,
            description:"Family/Company Gatherings",
            url:"#"
        },
        {
            name:"小朋友生日會",
            img:banner,
            description:"Family/Company Gatherings",
            url:"#"
        },
        {
            name:"船p派對",
            img:banner2,
            description:"Family/Company Gatherings",
            url:"#"
        },
        {
            name:"商務聚會",
            img:banner,
            description:"Family/Company Gatherings",
            url:"#"
        },
        {
            name:"輕食茶敘",
            img:banner2,
            description:"Family/Company Gatherings",
            url:"#"
        },
        {
            name:"開幕禮",
            img:banner,
            description:"Family/Company Gatherings",
            url:"#"
        },
    ]

    const handelSlide = (e, index)=>{
        // const slideRef = 
        if(slideWrapRef.value){
            console.log();
            
        }
    }

    onMounted(()=>{
       
    });

</script>
<style lang="">
    
</style>