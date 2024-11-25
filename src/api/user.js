import {axios, url_head} from "@/api/request";

export const get_login=(loginInfo)=>{
    return axios.post(`${url_head}/user/login`,loginInfo,{headers: {'Content-Type': 'application/json'}})
        .then(res=>{
            return res
        })
}
export const get_register=(registerInfo)=>{
    return axios.post(`${url_head}/user/register`,registerInfo,{headers:{"Content-Type":'application/json'}})
        .then(res=>{
            return res
        })
}
export const get_current_user=()=>{
    return axios.get(`${url_head}/user`)
        .then(res=>{
            return res
        })
}
export const get_upgrade=()=>{
    return axios.get(`${url_head}/user/upgrade`)
        .then(res=>{
            return res
        })
}
