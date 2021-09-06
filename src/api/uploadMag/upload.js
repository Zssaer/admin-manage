import request from '../../utils/request'

export function updateFile(params){
  return request({
    url: '/upload',
    method: 'post',
    data:params
  })
}

export function deleteFile(params) {
  return request({
    url: '/deleteFile',
    method: 'delete',
    params
  })
}