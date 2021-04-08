import axios from "axios"
//在src下新建request目录,在request目录下新建request.js
const instance = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8001",
  timeout: 5000
})

instance.interceptors.request.use(config => {
//第一个函数在请求发送前执行
  //在事件前进行判断,用户有没有登录,如果没有登录,直接return,请求就不会成功
  // console.log(config)
  //请求的信息
  return config
}, err => {
  console.log(err)
  //失败的时候
  return Promise.reject(err);
})

instance.interceptors.request.use(res => {
//在接收到响应之前,执行then方法之前执行的
//     console.log(res)
    //服务器响应的信息
    // console.log(res)
    return res;//返回的res被then方法的res形参接收了
  },
  err => {
    return Promise.reject(err);
  }
)
export default instance;
