<template>
  <div class="login">
    <div class="box">
      <img src="../../public/22.jpg" alt="" class="img" />
      <p class="dl">登录/注册</p>
    </div>

    <ul class="one">
      <li>
        <p>--</p>
        <p>积分</p>
      </li>
      <li>
        <p>--</p>
        <p>优惠券</p>
      </li>
      <li>
        <p>--</p>
        <p>余额</p>
      </li>
    </ul>

    <!-- 我的订单 -->
    <div class="dd">
      <div class="two">
        <h4>我的订单</h4>
        <p>查看所有订单<van-icon name="arrow" /></p>
      </div>
    
      <ul class="fk">
        <li>
          <van-icon name="pending-payment" class="icon"/>
          <p>代付款</p>
        </li>
        <li>
          <van-icon name="tosend" class="icon"/>
          <p>待发货</p>
        </li>
        <li>
          <van-icon name="logistics" class="icon"/>
          <p>待收货</p>
        </li>
        <li>
          <van-icon name="records-o" class="icon"/>
          <p>评价</p>
        </li>
        <li>
          <van-icon name="refund-o" class="icon"/>
          <p>退款/售后</p>
        </li>
      </ul>
      
    </div>

    <!-- 常用功能 -->
    <div class="gn">
        <h4>常用功能</h4>
        <ul class="fk1">
        <li>
          <van-icon name="pending-payment" class="icon"/>
          <p>代付款</p>
        </li>
        <li>
          <van-icon name="point-gift-o" class="icon"/>
          <p>积分兑换</p>
        </li>
        <li>
          <van-icon name="coupon-o" class="icon"/>
          <p>优惠券</p>
        </li>
        <li>
          <van-icon name="location-o" class="icon"/>
          <p>收货地址</p>
        </li>
        <li>
          <van-icon name="refund-o" class="icon"/>
          <p>退款/售后</p>
        </li>
        <li>
          <van-icon name="setting-o" class="icon"/>
          <p>设置</p>
        </li>
        <li>
          <van-icon name="video-o" class="icon"/>
          <p>主题</p>
        </li>
        <li>
          <van-icon name="service-o" class="icon" />
          <p>我的设备</p>
        </li>
      </ul>
    </div>

  </div>
</template>
<script setup lang="ts">
</script>
<style lang='scss' scoped>
.gn{
   width: 95%;
   height: 50vw;
   border-radius: 2.66666667vw;
   margin-left: 2.66666667vw;
   background-color: #fff;
   margin-top: 5.66666667vw;

   
   h4{
    border-bottom: 1px solid #ccc;
    padding-left: 2.66666667vw;
    padding-top: 2.66666667vw;
    padding-bottom: 2.66666667vw;
   }
}
.fk{
  display: flex;
  justify-content: space-around;
  margin-top: 4.66666667vw;
  padding-bottom: 2.66666667vw;
  flex-wrap:wrap ;
  li{
    text-align: center;
    .icon{
      font-size: 6.33333333vw;
    }
    p{
      font-size: 4.33333333vw;
    }
  }
  
}
.fk1{
  display: flex;
  justify-content: space-around;
  margin-top: 4.66666667vw;
  padding-bottom: 2.66666667vw;
  flex-wrap:wrap ;
  li{
    width: 25%;
    padding-top: 2.66666667vw;
    text-align: center;
    .icon{
      font-size: 6.33333333vw;
    }
    p{
      font-size: 4.33333333vw;
    }
  }
  
}

.login {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
}
.box {
  width: 100%;
  height: 40.66666667vw;
  background-color: #50a586;
  padding-left: 2.66666667vw;
  box-sizing: border-box;
  display: flex;

  .dl {
    margin-left: 3.66666667vw;
    color: #fff;
    margin-top: 15.66666667vw;
    font-size: 5vw;
  }
}
.one {
  width: 95%;
  height: 13.33333333vw;
  background-color: #fff;
  border-radius: 2.66666667vw;
  margin-left: 2vw;
  padding: 0 4vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 5.66666667vw;
  li {
    text-align: center;
  }
}
.img {
  width: 20.33333333vw;
  height: 20.33333333vw;
  border-radius: 50%;
  margin-top: 7vw;
}
.dd {
  width: 95%;
  height: 26.66666667vw;
  background-color: #fff;
  border-radius: 2.66666667vw;
  margin-top: 5.66666667vw;
  margin-left: 2.66666667vw;
  padding-bottom: 2.66666667vw;
  .two {
    width: 95%;
    height: 10vw;
    padding-top: 5.66666667vw;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    margin-left: 2vw;
    padding: 1.66666667vw 1vw;
    box-sizing: border-box;
    padding-bottom: 2.66666667vw;
  }
}
</style>