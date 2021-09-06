import request from '../../utils/request'

export function getCaptcha(params) {
  return request({
    url: '/captcha',
    method: 'get',
    params
  })
}

export function userLogin(params) {
  return request({
    url: '/login',
    method: 'post',
    data:params
  })
}
