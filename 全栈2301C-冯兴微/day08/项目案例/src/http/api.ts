import http from './http'
//轮播
export const homeApi = (params: any)=>http.get('/banner/list',{params})
//商品列表
export const goodApi=()=>http.post('/shop/goods/list/v2')
//分类
export const listApi=(params:any)=>http.get('/shop/goods/category/all',{params})
//二级分类
export const list2Api=(params:any)=>http.post('/shop/goods/list/v2',params)
