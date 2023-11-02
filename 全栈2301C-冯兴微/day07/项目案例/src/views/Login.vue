<template>
  <div class="zhang">
    <h2>账号密码登录</h2>
    <p class="zh">为了您的账号安全，请用手机登录</p>
    <van-cell-group inset>
      <van-field v-model="value" label="中国+86" placeholder="请输入手机号" />
      <van-cell-group inset>
        <van-field v-model="value"  placeholder="请输入密码"  right-icon="closed-eye"/>
      </van-cell-group>
    </van-cell-group>
    <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang='scss' scoped>
.zhang{
    width: 100%;
    h2{
        margin-left: 9vw;
        margin-top: 4vw;
    }
    .zh{
        font-size: 3.33333333vw;
        color: #ccc;
        margin-left: 9vw;
    }
}
</style>