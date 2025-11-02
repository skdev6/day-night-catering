<template>
    <header class="header__area relative z-9999"> 
        <div class="bg-white pt-[60px] border-b border-b-[#E0E0E0] z-10">
            <div class="container mx-auto">
                <div class="flex items-center relative justify-end">
                    <a href="#" class="logo inline-block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] outline-0"><img :src="logo" alt="Logo"/></a>
                    <ul class="navbar-icon list-none p-0 m-0 flex items-center">
                        <li>
                            <a href="#">
                                <span class="icon relative">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4375 11C18.9898 11 19.4375 10.5523 19.4375 10C19.4375 9.44772 18.9898 9 18.4375 9V10V11ZM19 10H18C18 14.4183 14.4183 18 10 18V19V20C15.5228 20 20 15.5228 20 10H19ZM10 19V18C5.58172 18 2 14.4183 2 10H1H0C0 15.5228 4.47715 20 10 20V19ZM1 10H2C2 5.58172 5.58172 2 10 2V1V0C4.47715 0 0 4.47715 0 10H1ZM10 1V2C14.4183 2 18 5.58172 18 10H19H20C20 4.47715 15.5228 0 10 0V1ZM10 19V18C9.78721 18 9.50566 17.9056 9.16241 17.5738C8.81434 17.2373 8.45521 16.7021 8.13192 15.9631C7.48665 14.4882 7.0625 12.3807 7.0625 10H6.0625H5.0625C5.0625 12.5898 5.51979 14.9823 6.29961 16.7648C6.68887 17.6545 7.1782 18.4373 7.77228 19.0117C8.37118 19.5907 9.12548 20 10 20V19ZM6.0625 10H7.0625C7.0625 7.61928 7.48665 5.51177 8.13192 4.03686C8.45521 3.29792 8.81434 2.76272 9.16241 2.42621C9.50566 2.09436 9.78721 2 10 2V1V0C9.12548 0 8.37118 0.409315 7.77228 0.988315C7.1782 1.56266 6.68887 2.34548 6.29961 3.23522C5.51979 5.01767 5.0625 7.41015 5.0625 10H6.0625ZM10 19V20C10.8745 20 11.6288 19.5907 12.2277 19.0117C12.8218 18.4373 13.3111 17.6545 13.7004 16.7648C14.4802 14.9823 14.9375 12.5898 14.9375 10H13.9375H12.9375C12.9375 12.3807 12.5133 14.4882 11.8681 15.9631C11.5448 16.7021 11.1857 17.2373 10.8376 17.5738C10.4943 17.9056 10.2128 18 10 18V19ZM13.9375 10H14.9375C14.9375 7.41015 14.4802 5.01767 13.7004 3.23522C13.3111 2.34548 12.8218 1.56266 12.2277 0.988315C11.6288 0.409315 10.8745 0 10 0V1V2C10.2128 2 10.4943 2.09436 10.8376 2.42621C11.1857 2.76272 11.5448 3.29792 11.8681 4.03686C12.5133 5.51177 12.9375 7.61928 12.9375 10H13.9375ZM1 10L1 11L18.4375 11V10V9L1 9L1 10Z" fill="#212121"/>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon relative">
                                    <span class="bg-[#FFC300] rounded-full flex items-center justify-center text-[12px] absolute bottom-2/5 left-2/4 h-[18px] text-[#212121] w-[18px]">0</span>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.6355 7.04826L8.46633 1.77826C9.41753 0.74058 11.0535 0.740579 12.0047 1.77826L16.8355 7.04826M19.433 8.34524L16.701 17.1452C16.5711 17.5636 16.184 17.8487 15.7459 17.8487H4.79107C4.3552 17.8487 3.96953 17.5664 3.83782 17.1509L1.04828 8.35091C0.843902 7.70618 1.32518 7.04874 2.00153 7.04874H18.478C19.1518 7.04874 19.6328 7.70168 19.433 8.34524Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon relative">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 10.5557C11.3722 10.5557 13.4711 11.0084 14.9395 11.6973C16.4872 12.4234 17 13.2289 17 13.7783C16.9998 14.4746 16.6205 15.2354 15.3896 15.877C14.1255 16.5358 12.0584 17 9 17C5.94161 17 3.87454 16.5358 2.61035 15.877C1.37952 15.2354 1.00016 14.4746 1 13.7783C1 13.2289 1.51284 12.4234 3.06055 11.6973C4.52885 11.0084 6.62782 10.5557 9 10.5557ZM9 1C10.484 1 11.8184 2.4463 11.8184 4.00977C11.8183 5.52535 10.5293 6.875 9 6.875C7.4707 6.875 6.1817 5.52535 6.18164 4.00977C6.18164 2.4463 7.51601 1 9 1Z" stroke="#212121" stroke-width="2"/>
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="navbar-list list-none p-0 m-0 pt-[50px] flex items-center justify-between">
                    <li
                        v-for="(nav, index) in navItems"
                        :key="index"
                        :class="nav?.subMenu ? 'has-sub-menu' : ''"
                        @mouseenter="(e) => openMegamenu(e, nav?.subMenuId)"
                        @mouseleave="handleMouseLeave"
                    >
                        <a :href="nav.url">
                            {{ nav.name }}
                            <svg v-if="nav.subMenu" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.70703 0.707109L4.70703 4.70711L0.707031 0.707108" stroke="#212121" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="megamenu-1" class="megamenu-wrap bg-white absolute bottom-0 left-0 w-full -z-10"
            @mouseenter="cancelHide"
            @mouseleave="removeMegamenu"
        >
            <div class="container mx-auto py-9">
                <slideByCat/>
            </div>
        </div>
        <div id="megamenu-2" class="megamenu-wrap bg-white absolute bottom-0 left-0 w-full -z-10"
            @mouseenter="cancelHide"
            @mouseleave="removeMegamenu"
        >

        </div>
    </header>
</template>
<script setup>
    import logo from "@/assets/img/logo.svg";
    import slideByCat from "../UI/slideByCat.vue";
    import { ref } from "vue";

    const navItems = [
    { name: "家庭聚會", url: "#", subMenu: false },
    { name: "商務活動", url: "#", subMenu: false },
    { name: "到會單點", url: "#", subMenu: false },
    { name: "到會套餐", url: "#", subMenu: false },
    { name: "到會活動", url: "#", subMenu: false },
    { name: "BBQ燒烤", url: "#", subMenu: true, subMenuId: "#megamenu-1" },
    { name: "小朋友生日會", url: "#", subMenu: true, subMenuId: "#megamenu-2" },
    { name: "到會餐單", url: "#", subMenu: false },
    { name: "周邊產品", url: "#", subMenu: false },
    { name: "客人回圖", url: "#", subMenu: false },
    { name: "聯絡我們", url: "#", subMenu: false },
    ];

    let hideTimeout = null;

    function openMegamenu(e, menuId) {
    if (!menuId) return;
    clearTimeout(hideTimeout);

    const megaMenu = document.querySelector(menuId);
        if (megaMenu) {
            document.querySelectorAll(".megamenu-wrap.active").forEach((el) => {
            el.classList.remove("active");
            });
            megaMenu.classList.add("active");
        }
    }
    function handleMouseLeave() {
        hideTimeout = setTimeout(() => {
            removeMegamenu();
        }, 100); 
    }
    function removeMegamenu() {
    document
        .querySelectorAll(".megamenu-wrap.active")
        .forEach((el) => el.classList.remove("active"));
    }

    function cancelHide() {
        clearTimeout(hideTimeout);
    }
</script>
