<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="blue">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img :src="item.picUrl" alt="" class="img" />
      </van-swipe-item>
    </van-swipe>

    <!-- 商品列表 -->

    <div class="shop">
      <h3>///商品列表///</h3>
      <ul class="ul">
        <li v-for="(item, index) in goods" :key="index">
          <img :src="item.pic" alt="" class="spimg" />
          <p class="name">{{ item.name }}{{ item.characteristic }}</p>
          <p class="price">
            ￥{{ item.minPrice }} <span>￥{{ item.originalPrice }} </span>
          </p>
          <button class="btn">购买</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { homeApi, goodApi } from "../http/api";
import { ref, reactive } from "vue";

//轮播图
const banner = ref({});
//获取banner数据
const gethome = () => {
  homeApi().then((res) => {
    // console.log(res);
    banner.value = res.data.data;
  });
};
gethome();

//获取商品列表
const goods = ref({});
const page =ref(1)
const pageSize=ref(10) 

const getgoods = () => {
  goodApi().then((res) => {
    console.log(res);
    goods.value = res.data.data.result;
  });
};
getgoods();
</script>
<style lang='scss' scoped>
.home {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background-color: #f8f8f8;
}
.img {
  width: 100%;
  height: 50.66666667vw;
}
.shop {
  width: 100%;
  height: 13vw;
  background-color: #fff;
  margin-top: 2.66666667vw;
  h3 {
    padding-top: 2.33333333vw;
    text-align: center;
  }

  .ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2.66666667vw;
    li {
      width: 49%;
      background-color: #fff;
      border-radius: 2.33333333vw;
      position: relative;
      margin-top: 2.66666667vw;
      padding-bottom: 2.33333333vw;

      .spimg {
        width: 100%;
        border-radius: 1.33333333vw;
      }
      .price {
        font-size: 4.33333333vw;
        color: #3ac28f;
        padding-top: 1.33333333vw;
        span {
          text-decoration: line-through;
          color: #ccc;
          font-size: 4.33333333vw;
        }
      }
      .name {
        padding: 0 1.66666667vw;
        box-sizing: border-box;
        width: 170px;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        overflow: hidden;
      }
    }
  }
}
.btn {
  width: 15.66666667vw;
  height: 6.66666667vw;
  border: 1px solid #3ac28f;

  background-color: #fff;
  border-radius: 1.33333333vw;
  color: #3ac28f;
  position: absolute;
  left: 31.66666667vw;
  top: 63.66666667vw;
}
</style>