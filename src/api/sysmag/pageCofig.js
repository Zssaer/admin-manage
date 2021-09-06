import request from '../../utils/request'

export function getPageConfigList(params) {
  return request({
    url: '/sysconfig/pageconfig',
    method: 'get',
    params
  })
}

export function getSysConfigList(params) {
  return request({
    url: '/sysconfig',
    method: 'get',
    params
  })
}
