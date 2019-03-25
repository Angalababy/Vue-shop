/**
 * Created by lenovo on 2019/3/21.
 */
import {
  RECEIVE_USER,
  RESET_USER
} from '../mutations-types'
import {
  reqUser,
  reqLogout
} from '../../api'
const state={
  user:{},//用户信息
}
const mutations={
  [RECEIVE_USER](state,user){
    state.user=user
  },
  [RESET_USER](state){
    state.user={}
  },
}
const actions={
  saveUser({commit},user){
    commit(RECEIVE_USER,user)
  },
  async logout({commit}){
    const result=await reqLogout()
    if(result.code===0){
      commit(RESET_USER)
    }else {
      alert('退出失败')
    }
  },
  async getUser({commit}){
    const result=await reqUser()
    if(result.code===0){
      const user=result.data
      commit(RECEIVE_USER,user)
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
