<template>
  <div class="list">
    <!-- 分类 -->
    <ul class="fl">
        <li v-for="item,index in list " :key="index" @click="dj(index)">
            <p :class="tabcolor==index?'tabcolor':''" class="left">{{ item.name }} </p>
             
        </li>

        
    </ul>
    <ul class="ul">
        <li v-for="(item, index) in list2" :key="index">
          <img :src="item.pic" alt="" class="spimg" />
          <p class="name">{{ item.name }}{{ item.characteristic }}</p>
          <p class="price">
            ￥{{ item.minPrice }} <span>￥{{ item.originalPrice }} </span>
          </p>
        
        </li>
      </ul>
  </div>
</template>
<script setup lang="ts">
import { ref,reactive } from 'vue'
import { listApi,list2Api } from '../http/api'

const list = ref({})
const list2 = ref({})
const tabcolor = ref(0)
const categoryId = ref(0)
const page = ref(1)
const pageSize = ref(10)
//分类数据
const getlist=()=>{
    listApi().then(res=>{
        console.log(res);
        list.value=res.data.data
    })
}
getlist()

//二级分类
const getlist2=()=>{
    list2Api({page:page.value,categoryId:categoryId.value,pageSize:pageSize.value}).then(res=>{
        console.log(res);
        list2.value=res.data.data.result
    })
}
getlist2()

const dj=(index: any)=>{
    console.log(index);
    tabcolor.value = index
    getlist2()
}
</script>
<style lang='scss' scoped>
.list{
    width: 100%;
    display: flex;
    .fl{
        width: 30%;
        height: 100%;
        background-color:#f8f8f8 ;
        li{
            line-height: 20vw;
            margin-left: 1.33333333vw;

        }
    }
}
.ul {
    list-style: none;
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2.66666667vw;
    li {
 
      background-color: #fff;
      border-radius: 2.33333333vw;
      position: relative;
      margin-top: 2.66666667vw;
      padding-bottom: 2.33333333vw;

      .spimg {
        width: 100px;
        height: 100px;
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
        width: 120px;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        overflow: hidden;
      }
    }
  }


.tabcolor{
    background-color: #fff;
    border-left: 5px solid #4fa095;
}
</style>