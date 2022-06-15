<template>
    <Nav></Nav>
        <Login v-show="isShow" ref="login"></Login>
</template>
 
 
<script lang='ts' setup>
import {provide, ref} from 'vue'
import Login from './Login.vue'
import Nav from './Nav.vue'
let isShow = ref<boolean>(false)
provide('isShow',isShow)

</script>
 

<style>

</style>
