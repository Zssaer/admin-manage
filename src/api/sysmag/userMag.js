import request from '../../utils/request'

export function getUserList(params) {
  return request({
    url: '/user',
    method: 'get',
    params
  })
}

export function editUser(params) {
  return request({
    url: '/user',
    method: 'put',
    data:params
  })
}

export function createUser(params) {
  return request({
    url: '/user',
    method: 'post',
    data:params
  })
}

export function delUser(params) {
  return request({
    url: '/user',
    method: 'delete',
    params
  })
}

export function loginOut(params) {
  return request({
    url: '/user/loginout',
    method: 'get',
    params
  })
}

export function resetPassword(params) {
  return request({
    url: '/user/resetPwd',
    method: 'put',
    data:params
  })
}



