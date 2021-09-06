import request from '../../utils/request'

export function getMenuList(params) {
  return request({
    url: '/role/permissions/getMenuList',
    method: 'get',
    params
  })
}


