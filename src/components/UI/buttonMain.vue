<template>
    <a v-if="href" :href="href" class="btn__main inline-flex items-center"><slot/></a>
    <button v-else class="btn__main inline-flex items-center"><slot/></button>
</template>
<script>
export default {
    
}
</script>
<style>
    .btn__main {
        background-color: #FFC300;
        color: #212121;
        padding:13px 23px;
        border-radius: 10px;
        cursor: pointer; 
        transition: all .25s; 
    }
    .btn__main:hover{
        background-color: #ffc400ef;
    }
    .btn-gray{
        background-color: #F7F7F7;
        color: #232323;
    }
    .btn-gray:hover{
        background-color: #212121;
        color: #fff; 
    }
</style>