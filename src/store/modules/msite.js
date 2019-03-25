//首页模块
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
} from '../mutations-types'
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../../api'
const state={
  longitude:"116.36867",//经度
  latitude: "40.10038",//纬度
  address:{},//地址信息对象
  shops:[],//商家数组
  categorys:[],//分类数组
}
const mutations={
  [RECEIVE_SHOPS](state,shops){
    state.shops=shops
  },
  [RECEIVE_ADDRESS](state,address){
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,categorys){
    state.categorys=categorys
  },
}
const actions={
//获取地址的异步action
  async getAddress({commit,state}){
    const {longitude,latitude}=state
    //发异步ajax请求
    const result= await reqAddress(longitude,latitude)
    //根据结果提交的mutation
    if(result.code===0){
      const address=result.data
      commit(RECEIVE_ADDRESS,address)
    }

  },
  //获取分类列表的异步action
  async getCategorys({commit,state}){
    //发异步ajax请求
    const result= await reqCategorys()
    //根据结果提交的mutation
    if(result.code===0){
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }

  },
  //获取商家列表的异步action
  async getShops({commit,state}){
    const {longitude,latitude}=state
    //发异步ajax请求
    const result= await reqShops({longitude,latitude})
    //根据结果提交的mutation
    if(result.code===0){
      const shops=result.data
      commit(RECEIVE_SHOPS,shops)
    }
  },
}
const getters={

}
export default {
  state,
  mutations,
  actions,
  getters
}
