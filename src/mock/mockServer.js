
import Mock from 'mockjs'
import shop from './shop.json'
//返回goods的接口
//返回ratings的接口
//返回info的接口
Mock.mock('/goods',{code:0,data:shop.goods})
Mock.mock('/ratings',{code:0,data:shop.ratings})
Mock.mock('/info',{code:0,data:shop.info})


console.log('mockServer');





