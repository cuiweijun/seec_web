// 统一管理我们的开发 接口 api
import axios from "axios"
let instance = axios.create({
    baseURL:"/api",  //基准地址
    timeout:5000
})
// 请求响应拦截
instance.interceptors.request.use((config) => {
    // 请求拦截
    console.log(config)
    config.headers.Authorization = "Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InhpYW9xaWFuZyIsImlhdCI6MTY1NzcwOTE1MSwiZXhwIjoxNjYwMzAxMTUxfQ.wiFau8K2iQjrEl8adboFFlkHcEEnVATnWgnWgBXBZCk"
    return config
})
instance.interceptors.response.use(response => {
    // response 是后台发回的响应数据
    return response
})

export default instance