// 复制自软工二的项目
import axios from 'axios'

//创建一个axios的实例service
const service = axios.create()

//判断是否登录
function hasToken() {
    return !(sessionStorage.getItem('token') === '')
}

//当前实例的拦截器，对所有要发送给后端的请求进行处理，在其中加入token
service.interceptors.request.use(
    config => {
        if(hasToken()) {
            config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
        }
        return config
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
)

//当前实例的拦截器，对所有从后端收到的请求进行处理，检验http的状态码
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response;
        } else {
            // return Promise.reject();
            console.log(response)
            return response;
        }
    },
    error => {
        console.log(error);
        return error.response;
    }
)

//设置为全局变量
export {
    service as axios
}

export const url_head = 'http://localhost:5000'
