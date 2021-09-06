import request from '../../utils/request'

export function getLogList(params) {
  return request({
    url: '/syslog',
    method: 'get',
    params
  })
}

export function delLog(params) {
  return request({
    url: '/syslog',
    method: 'delete',
    params
  })
}

export function clearAll(params) {
  return request({
    url: '/syslog/clearAll',
    method: 'delete',
    params
  })
}

