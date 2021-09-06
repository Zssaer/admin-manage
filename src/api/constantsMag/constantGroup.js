import request from '../../utils/request'

export function getConstantGroupList(params) {
  return request({
    url: '/ConstantGroup',
    method: 'get',
    params
  })
}

export function editConstantGroup(params) {
  return request({
    url: '/ConstantGroup',
    method: 'put',
    data:params
  })
}

export function createConstantGroup(params) {
  return request({
    url: '/ConstantGroup',
    method: 'post',
    data:params
  })
}

export function getConstantList(params) {
  return request({
    url: '/constant',
    method: 'get',
    params
  })
}

export function createConstant(params) {
  return request({
    url: '/constant',
    method: 'post',
    data:params
  })
}

export function editConstant(params) {
  return request({
    url: '/constant',
    method: 'put',
    data:params
  })
}

export function delConstant(params) {
  return request({
    url: '/constant',
    method: 'delete',
    params
  })
}



