<template lang="">
    <div class="flex gap-x-[79px]">
        <ul class="slide-nav-wrap list-none p-0 m-0 flex flex-col gap-2">
            <li v-for="(cat, index) in categories" :key="index" class="whitespace-nowrap title-md2 p-[13px] min-w-[180px] rounded-lg cursor-pointer" :class="index === 0 ? 'active' : ''">
                {{cat.name}}
            </li> 
        </ul>
        <div class="slide-wrap flex overflow-hidden w-full">
            <div v-for="(cat, index) in categories" :key="index" class="slide-item bg-cover bg-center min-w-full" :style="'background-image:url('+ cat.img +')'">
                <div class="text-white flex flex-col p-9 min-h-[332px] bg-[rgba(0,0,0,0.33)]">
                    <div class="top-content mb-auto">
                        <h4 class="title-xl mb-2">{{cat.name}}</h4>
                        <p>{{cat.description}}</p>
                    </div>
                    <a :href="cat.url" class="arrow-btn flex items-center justify-center">
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
    const categories = [
        {
            name:"Hello Name",
            img:banner,
            description:"Family/Company Gatherings",
            url:"#"
        },
        {
            name:"Hey Name",
            img:banner,
            description:"Family/Company Gatherings",
            url:"#"
        },
        {
            name:"Hello Name",
            img:banner,
            description:"Family/Company Gatherings",
            url:"#"
        },
    ]
</script>
<style lang="">
    
</style>