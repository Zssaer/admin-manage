import request from '../../utils/request'

export function getPrizeList(params) {
  return request({
    url: '/prize',
    method: 'get',
    params
  })
}

export function delPrize(params) {
  return request({
    url: '/prize',
    method: 'delete',
    params
  })
}

export function editPrize(params) {
  return request({
    url: '/prize',
    method: 'put',
    data:params
  })
}

export function createPrize(params) {
  return request({
    url: '/prize',
    method: 'post',
    data:params
  })
}