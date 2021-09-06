import request from '../../utils/request'

export function getRoleList(params) {
  return request({
    url: '/roles',
    method: 'get',
    params
  })
}

export function editRole(params) {
  return request({
    url: '/roles',
    method: 'put',
    data:params
  })
}

export function createRole(params) {
  return request({
    url: '/roles',
    method: 'post',
    data:params
  })
}

export function delRole(params) {
  return request({
    url: '/roles',
    method: 'delete',
    params
  })
}



