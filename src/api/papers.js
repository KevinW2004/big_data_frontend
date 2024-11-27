import {axios, url_head} from './request'



export const search_papers = (query) => {
    return axios.get(`${url_head}/papers/search`, {params: {keyword: query}})
        .then(res => {
            if (res.status === 422) { // reject
                return null
            }
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

export const get_papers_by_category = (category) => {
    return axios.get(`${url_head}/papers/get_by_category`, {params: {category: category}})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const get_cited_papers = (title) => {
    return axios.get(`${url_head}/papers/get_citations`, {params: {title: title}})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const get_similar_papers = (title) => {
    return axios.get(`${url_head}/papers/get_similar`, {params: {title: title}})
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}
