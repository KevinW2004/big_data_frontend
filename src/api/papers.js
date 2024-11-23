import {axios, url_head} from './request'
export const search_papers = (query) => { 
    return axios.get(`${url_head}/papers/search`, {params: {keyword: query}})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const get_paper_by_title = (title) => {  
    return axios.get(`${url_head}/papers/get_by_title`, {params: {title: title}})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}