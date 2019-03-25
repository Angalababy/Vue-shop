import axios from 'axios'


export default function sendAjax(url,data={},method='GET') {
  let promise
  return new Promise((resolve,reject)=>{
    if(method==='GET'){
      promise=axios.get(url,{
        params:data
      })
    }else {
      promise=axios.post(url,data)
    }
    promise
      .then(response=>{
        resolve(response.data)
      })
      .catch(err=>{
        alert('请求失败')
      })
  })
}
