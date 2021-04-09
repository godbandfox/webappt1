import request from './request';

//首页数据的请求
export const GetHomeList = () => request.get('/index/index')
//获取搜索弹出框的数据
export const GetSearchPopupData = () => request.get('/search/index')
// 实时搜索列表  es6简化
export const GetSearchTipsListData = params => request.get('/search/helper', {params})
// 获取搜索商品列表的数据
export const GetGoodsListData = params => request.get('/goods/list', {params})
// 清除历史记录
export const ClearHistory = params => request.post('/search/clearhistory')
