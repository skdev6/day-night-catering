<template lang="">
    <Popup v-model="popupStore.openMenuPopup" title="120人 日夜經典到會套餐" class="popup-transparent popup-fade-up">
        <div class="relative z-10 bg-[#FFFEFB] ">
            <div class="absolute inset-0 flex flex-col p-9 -z-10 justify-between">
                <div class="flex justify-between">
                    <img :src="flowerShape"/>
                    <img :src="flowerShape" class="scale-x-[-1]"/>
                </div>
                <div class="flex justify-between">
                    <img :src="flowerShape" class="scale-y-[-1]"/>
                    <img :src="flowerShape" class="scale-x-[-1] scale-y-[-1]"/>
                </div>
            </div>
            <div class="popup__viewport text-center text-[#333333] font-semibold p-12  ff-noto-sc">
                <h4 class="text-[36px] mb-4">Menu</h4>
                <h5 class="text-[16px] underline mb-3">固定菜式</h5>
                <p class="mb-5">
                    車打芝士沙樂美腸麵包卷 (10小件) <br/>
                    黑松露玉子蛋卷 (8小件) <br/>
                </p>
                <h5 class="text-[16px] underline mb-3">沙律及素菜拼盤 / 6選1</h5>
                <p class="mb-5">
                    經典凱撒沙律 (2磅裝) <br/>
                    蜜桃鴨胸沙律伴胡麻醬沙律 (2磅裝) <br/>
                    香脆青蘋果提子沙律 (2磅裝)<br/>
                    泰式鳳爪大蝦沙律 (2磅裝)<br/>
                    煙三文魚羽衣甘藍凱撒沙律 (2磅裝)<br/>
                    藜麥蜜柑田園沙律 (2磅裝)<br/>
                </p>
                <h5 class="text-[16px] underline mb-3">滋味小食拼盤 / 11選1</h5>
                <p class="mb-5">
                    自家秘製瑞士雞翼 (6件)<br/>
                    新奧爾良烤雞翼 (6件)<br/>
                    松露白汁芝士焗薯蓉 (2磅裝)<br/>
                    日式脆炸豚肉餃子 (10件)<br/>
                    炸帶子配蟹鉗 (各5件)<br/>
                    炸物拼盤 (吉列蝦, 越南春卷, 洋蔥圈) (2磅裝)<br/>
                    白酒忌廉煮法國藍青口配蒜蓉多士 (2磅裝)<br/>
                    經典新鮮菠蘿腸仔串 (2磅裝)<br/>
                    蜂蜜香烤金門火腿 (2.5磅裝) (+$90)<br/>
                    開心果抹茶香草燒羊架伴烤新薯 (2.5磅裝) (+$150)<br/>
                    意大利芝士凍肉拼盤 (2.5磅裝) (+$150)<br/>
                </p>
                <h5 class="text-[16px] underline mb-3">沙律及素菜拼盤 / 6選1</h5>
                <p class="mb-5">
                    經典凱撒沙律 (2磅裝) <br/>
                    蜜桃鴨胸沙律伴胡麻醬沙律 (2磅裝) <br/>
                    香脆青蘋果提子沙律 (2磅裝)<br/>
                    泰式鳳爪大蝦沙律 (2磅裝)<br/>
                    煙三文魚羽衣甘藍凱撒沙律 (2磅裝)<br/>
                    藜麥蜜柑田園沙律 (2磅裝)<br/>
                </p>
                <h5 class="text-[16px] underline mb-3">滋味小食拼盤 / 11選1</h5>
                <p class="mb-5">
                    自家秘製瑞士雞翼 (6件)<br/>
                    新奧爾良烤雞翼 (6件)<br/>
                    松露白汁芝士焗薯蓉 (2磅裝)<br/>
                    日式脆炸豚肉餃子 (10件)<br/>
                    炸帶子配蟹鉗 (各5件)<br/>
                    炸物拼盤 (吉列蝦, 越南春卷, 洋蔥圈) (2磅裝)<br/>
                    白酒忌廉煮法國藍青口配蒜蓉多士 (2磅裝)<br/>
                    經典新鮮菠蘿腸仔串 (2磅裝)<br/>
                    蜂蜜香烤金門火腿 (2.5磅裝) (+$90)<br/>
                    開心果抹茶香草燒羊架伴烤新薯 (2.5磅裝) (+$150)<br/>
                    意大利芝士凍肉拼盤 (2.5磅裝) (+$150)<br/>
                </p>
                <h5 class="text-[16px] underline mb-3">沙律及素菜拼盤 / 6選1</h5>
                <p class="mb-5">
                    經典凱撒沙律 (2磅裝) <br/>
                    蜜桃鴨胸沙律伴胡麻醬沙律 (2磅裝) <br/>
                    香脆青蘋果提子沙律 (2磅裝)<br/>
                    泰式鳳爪大蝦沙律 (2磅裝)<br/>
                    煙三文魚羽衣甘藍凱撒沙律 (2磅裝)<br/>
                    藜麥蜜柑田園沙律 (2磅裝)<br/>
                </p>
                <h5 class="text-[16px] underline mb-3">滋味小食拼盤 / 11選1</h5>
                <p class="mb-5">
                    自家秘製瑞士雞翼 (6件)<br/>
                    新奧爾良烤雞翼 (6件)<br/>
                    松露白汁芝士焗薯蓉 (2磅裝)<br/>
                    日式脆炸豚肉餃子 (10件)<br/>
                    炸帶子配蟹鉗 (各5件)<br/>
                    炸物拼盤 (吉列蝦, 越南春卷, 洋蔥圈) (2磅裝)<br/>
                    白酒忌廉煮法國藍青口配蒜蓉多士 (2磅裝)<br/>
                    經典新鮮菠蘿腸仔串 (2磅裝)<br/>
                    蜂蜜香烤金門火腿 (2.5磅裝) (+$90)<br/>
                    開心果抹茶香草燒羊架伴烤新薯 (2.5磅裝) (+$150)<br/>
                    意大利芝士凍肉拼盤 (2.5磅裝) (+$150)<br/>
                </p>
            </div>
        </div>
    </Popup>
</template>
<script setup>
    import { usePopupStore } from '@/stores/popup';
    import Popup from './popup.vue';
    import flowerShape from "@/assets/img/flower-shape.svg"
    
    const popupStore = usePopupStore();

</script>
<style lang="">
    
</style>