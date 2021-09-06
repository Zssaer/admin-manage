import request from '../../utils/request'

export function editpassword(params) {
  return request({
    url: '/user/editpassword',
    method: 'put',
    data:params
  })
}

