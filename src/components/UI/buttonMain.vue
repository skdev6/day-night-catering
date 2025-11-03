<template>
    <RouterLink v-if="href" :to="href" class="btn__main inline-flex gap-2 items-center justify-center"><slot/></RouterLink>
    <button v-else class="btn__main inline-flex gap-2 items-center justify-center"><slot/></button>
</template>
<script>
import { RouterLink } from 'vue-router';

</script>
<style lang="scss">
    .btn__main {
        background-color: #FFC300;
        color: #212121;
        padding:13px 23px;
        border-radius: 10px;
        cursor: pointer; 
        transition: all .25s; 
        border: 1px solid transparent; 
        white-space: nowrap;
        font-weight: 600;
        svg{
            min-width: 1em;
        }
        &:hover{
            background-color: #ffc400ef;
        }
        &.btn-gray{
            background-color: #F7F7F7;
            color: #232323;
        }
        &.btn-gray:hover{
            background-color: #212121;
            color: #fff; 
        }
        &.btn-sm {
            padding:6px 15px;
            font-size: 14px;
            border-radius: 4px; 
        }
        &.btn-transparent{
            background-color: transparent;
            &:hover{
                background-color: #ede5e5;
            }
        }
        &.btn-gray-outline {
            background-color: transparent;
            border-color: #D9D9D9;
            &:hover{
                background-color: #ede5e5;
            }
        }
    }
</style>