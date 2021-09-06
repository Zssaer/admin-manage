import request from '../../utils/request'

export function getPermissionAllMenuList(params) {
  return request({
    url: '/rolePermission/listAllMenu',
    method: 'get',
    params
  })
}


export function getPermissionMenuList(params) {
    return request({
      url: '/rolePermission/menu',
      method: 'get',
      params
    })
}

export function SaveMenus(params) {
    return request({
      url: '/rolePermission/saveMenu',
      method: 'post',
      data:params
    })
}


export function getPermissionList(params) {
  return request({
    url: '/rolePermission/role',
    method: 'get',
    params
  })
}

export function getPermissionAllList(params) {
  return request({
    url: '/rolePermission',
    method: 'get',
    params
  })
}

export function savePermissions(params) {
  return request({
    url: '/rolePermission/savePermission',
    method: 'post',
    data:params
  })
}


