<template lang="">
    <div class="cart-prod-card py-[35px] border-b-[1px] border-b-[#E0E0E0] last:border-b-0">
        <div class="title-h5 cart-item flex items-start gap-3 lg:gap-5 relative"> 
            <div class="flex items-center gap-3 lg:gap-5">
                <div class="checkbox-item">
                    <input type="checkbox" class="form__checkbox"/>
                </div>
                <div v-if="thumbnail"><img :src="thumbnail" class="product-img w-[64px] md:w-[81px] max-w-full rounded-sm lg:rounded-[17px] border-2 border-[#EEEEEE]" alt=""></div>
            </div>
            <div class="product-info">
                <h4 class="text-[14px] lg:text-[16px] text-[#232323] mb-2 font-semibold max-lg:pr-[45px]">{{title}}</h4>
                <div class="text-[#767676] text-[10px] lg:text-[13px] leading-[120%]">
                    Components:
                    <ul class="list-disc pl-[25px] mt-1"> 
                    <li v-for="component in components">{{component}}</li>
                    </ul>
                </div>
                <div class=" flex gap-2 mt-3 max-md:ml-[-30px] max-sm:ml-[-50px]">
                    <h5 class="text-[16px] font-bold text-[#EA3E3E] flex items-center gap-1.5 mr-auto">${{price}} <small class="text-[#616161] text-[12px] font-normal"><s>${{originalPrice}}</s></small></h5>
                    <buttonMain class="btn-sm btn-gray-outline lg:!hidden max-lg:gap-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.06646 10.7355H11.0665M0.666504 10.7355L3.57716 10.149C3.73168 10.1178 3.87356 10.0417 3.98498 9.93026L10.5008 3.4109C10.8132 3.09834 10.813 2.59168 10.5003 2.27937L9.12001 0.900651C8.80748 0.588473 8.30108 0.588686 7.98881 0.901126L1.47235 7.42116C1.36114 7.53243 1.2852 7.67402 1.25404 7.82822L0.666504 10.7355Z" stroke="#232323" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        重選菜式
                    </buttonMain>
                    <InputCount class="count-sm count-outline-gray lg:!hidden"/>
                </div>
            </div>
            <div class=" flex gap-2 ml-auto lg:pt-4 max-lg:absolute right-0 top-0">
                <buttonMain class="btn-sm btn-gray-outline !hidden lg:!flex max-lg:gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.06646 10.7355H11.0665M0.666504 10.7355L3.57716 10.149C3.73168 10.1178 3.87356 10.0417 3.98498 9.93026L10.5008 3.4109C10.8132 3.09834 10.813 2.59168 10.5003 2.27937L9.12001 0.900651C8.80748 0.588473 8.30108 0.588686 7.98881 0.901126L1.47235 7.42116C1.36114 7.53243 1.2852 7.67402 1.25404 7.82822L0.666504 10.7355Z" stroke="#232323" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    重選菜式
                </buttonMain>
                <InputCount class="count-sm count-outline-gray !hidden lg:!flex"/>
                <buttonMain class="btn-sm btn-transparent">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1580_13357)">
                        <path d="M3 3.33331V14.6666H13V3.33331H3Z" stroke="#333333" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.6665 6.66669V11" stroke="#333333" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.3335 6.66669V11" stroke="#333333" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.3335 3.33331H14.6668" stroke="#333333" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.3335 3.33331L6.42983 1.33331H9.59253L10.6668 3.33331H5.3335Z" stroke="#333333" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1580_13357">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </buttonMain>
            </div>
        </div>
    </div>
</template>
<script setup>
    import InputCount from './form/inputCount.vue';
    import buttonMain from './buttonMain.vue';
    const props = defineProps({
        title:String,
        thumbnail:String,
        components:Array,
        price:String,
        originalPrice:String
    });
</script>
