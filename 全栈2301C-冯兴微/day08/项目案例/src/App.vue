<template>
  <van-tabbar v-model="active" router>
  <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/Lists">分类</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="Shopcar">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/my">个人中心</van-tabbar-item>
</van-tabbar>
  <router-view/>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
</style>
