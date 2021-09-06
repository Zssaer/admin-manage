import request from '../../utils/request'

export function getDirectionList(params) {
  return request({
    url: '/researchDirection',
    method: 'get',
    params
  })
}


export function editDirection(params) {
  return request({
    url: '/researchDirection',
    method: 'put',
    data:params
  })
}

export function addDirection(params) {
  return request({
    url: '/researchDirection',
    method: 'post',
    data:params
  })
}

export function delDirectionList(params) {
  return request({
    url: '/researchDirection',
    method: 'delete',
    params
  })
}