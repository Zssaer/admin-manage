import request from '../../utils/request'

export function getOpenSourceList(params) {
    return request({
        url: '/openSource',
        method: 'get',
        params
    })
}


export function delOpenSource(params) {
    return request({
        url: '/openSource',
        method: 'delete',
        params
    })
}


export function editOpenSource(params) {
    return request({
        url: '/openSource',
        method: 'put',
        data: params
    })
}


export function addOpenSource(params) {
    return request({
        url: '/openSource',
        method: 'post',
        data: params
    })
}