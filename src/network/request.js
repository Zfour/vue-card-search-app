import OrignAxios from 'axios'

export function request(config) {
  const instance = OrignAxios.create({
    //基础配置
    baseURL:"https://www.mxnzp.com/api",
    timeout:5000,
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  })
  //拦截器配置
  //拦截器作用
  //1.添加loading动画
  //2.修改不符合规范的数据,判断是否有token
  //3.数据的序列化
  instance.interceptors.request.use(
    config => {
     // console.log(config)
      return config
    },
    error => {
      console.log(error)
      return error
    }
  )
  instance.interceptors.response.use(
    response => {
     // console.log(response)
      return response.data
    },
    error => {
      console.log(error)
      return error
    }
  )
  //返回数据
  return instance(config)
}
