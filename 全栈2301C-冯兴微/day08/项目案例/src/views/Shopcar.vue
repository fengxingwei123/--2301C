<template>
    <div>
        <van-empty description="登录后才能看到您的购物车" />
        <button class="login" @click="go">去登录</button> 
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const go=()=>{
     router.push('/Login')
}
const router = useRouter()
</script>
<style lang='scss' scoped>
.login{
    width: 70px;
    height: 30px;
    color: #fff;
    text-align: center;
    border-radius: 20px;
    background-color: #0f9884;
    border: 0;
    margin-left: 130px;
}
</style>