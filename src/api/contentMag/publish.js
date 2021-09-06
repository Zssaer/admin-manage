import request from '../../utils/request'

export function getPublishes(params) {
  return request({
    url: '/publish',
    method: 'get',
    params
  })
}

export function editPublish(params) {
  return request({
    url: '/publish',
    method: 'put',
    data:params
  })
}


export function createPublish(params) {
  return request({
    url: '/publish',
    method: 'post',
    data:params
  })
}

export function delPublish(params) {
  return request({
    url: '/publish',
    method: 'delete',
    params
  })
}
