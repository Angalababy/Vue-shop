/**
 * Created by lenovo on 2019/3/21.
 */
import Vue from 'vue'
import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_COUNT,
  DECREMENT_COUNT
} from '../mutations-types'
import {
  reqGoods,
  reqRatings,
  reqInfo
} from '../../api'
const state={
  goods:[],//商品列表
  ratings:[],//商家评论列表
  info:{},//商家信息
  cartFoods:[]
}
const mutations={
  [RECEIVE_GOODS](state,goods){
  state.goods=goods
  },
  [RECEIVE_INFO](state,info){
    state.info=info
  },
  [RECEIVE_RATINGS](state,ratings){
    state.ratings=ratings
  },
  [INCREMENT_COUNT](state,food){
    if(food.count){
      food.count++
    }else {
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }
  },
  [DECREMENT_COUNT](state,food){
    if(food.count){
      food.count--
      if(!food.count){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  }
}
const actions={
//获取异步商家信息
  async getShopInfo({commit}){
    const result=await reqInfo()
    if(result.code===0){
      const info=result.data
      commit(RECEIVE_INFO,info )
    }
  },
  //异步获取商家评价列表
  async getShopRatings({commit},callback){
    const result =await reqRatings()
    if(result.code===0){
      const ratings=result.data
      commit(RECEIVE_RATINGS,ratings)
    }
    typeof callback==='function'&&callback()

  },
  //异步获取商家商品列表
  async getShopGoods({commit},callback){
    const result = await reqGoods()
    if(result.code===0){
      const goods=result.data
      commit(RECEIVE_GOODS,goods)
    }
    typeof callback==='function'&&callback()
  },

  updateFoodCount({commit},{food,isAdd}){
    if(isAdd){
      commit(INCREMENT_COUNT,food)

    }else {
      commit(DECREMENT_COUNT,food)
    }
  }

}
const getters={
  totalCount(state){
    return state.cartFoods.reduce((pre,food)=>pre+food.count,0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((pre,food)=>pre+food.count*food.price,0)
  },
  goodTotalCount(state){
    return state.ratings.reduce((pre,rating)=>pre+(rating.rateType===0?1:0),0)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
