<template lang="">
    <div class="flex">
        <ul class="list-none p-0 m-0">
            <li v-for="(cat, index) in categories" :key="index">
                {{cat.name}}
            </li>
        </ul>
        <div class="slide-wrap">
            <div v-for="(cat, index) in categories" :key="index" class="slide-item flex items-baseline p-9" :style="'background-image:url('+ cat.img +')'">
                <div class="top-content">
                    <h4 class="">{{cat.name}}</h4>
                    <p>{{cat.description}}</p>
                </div>
                <a :href="cat.url">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3333 1L17 8M17 8L10.3333 15M17 8L1 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
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