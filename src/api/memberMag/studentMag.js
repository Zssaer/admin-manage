import request from '../../utils/request'

export function getStudentList(params) {
    return request({
      url: '/student',
      method: 'get',
      params
    })
}

export function editStudent(params) {
    return request({
      url: '/student',
      method: 'put',
      data:params
    })
}

export function createStudent(params) {
    return request({
      url: '/student',
      method: 'post',
      data:params
    })
}

export function delStudent(params) {
    return request({
      url: '/student',
      method: 'delete',
      params
    })
}
