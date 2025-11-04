<template lang="">
    <div>
        <Tabs class="tab__btn" value="product-cat-tab-0">
            <TabList>
                <template v-for="(cat, index) in productCategories" :key="index">
                    <Tab :value="'product-cat-tab-'+index" v-if="index < limit">{{cat.name}}</Tab>
                </template>
            </TabList>
            <TabPanels>
                <template v-for="(cat, cindex) in productCategories" :key="cindex">
                    <TabPanel :value="'product-cat-tab-'+cindex" v-if="cindex < limit">
                        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"> 
                            <ProductSmallCard
                                v-for="(product, index) in getProductsByIds(products, cat.productIds)"
                                :key="index"
                                :thumbnail="product.image"
                                :badgeTitle="product.labelSm"
                                :title="product.name"
                                :price="product.price"
                                :priceSm="product.originalPrice"
                            />
                        </div>
                    </TabPanel>
                </template>
            </TabPanels>
        </Tabs> 
    </div>
</template>
<script setup>
    import Tab from './UI/tab/Tab.vue';
    import TabPanels from './UI/tab/TabPanels.vue';
    import TabPanel from './UI/tab/TabPanel.vue';
    import TabList from './UI/tab/TabList.vue';
    import Tabs from './UI/tab/Tabs.vue';
    import productCategories from '@/data/productCategories';
    import { getProductsByIds } from '@/helper/productHelper';
    import ProductSmallCard from './UI/cards/productSmallCard.vue';
    import products from '@/data/products';
    
    const props = defineProps({
        limit:{
            type:Number,
            default:4
        }
    });
</script>
<style lang="">
    
</style>