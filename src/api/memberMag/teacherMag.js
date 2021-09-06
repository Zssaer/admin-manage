import request from '../../utils/request'

export function getTeacherList(params) {
    return request({
      url: '/teacher',
      method: 'get',
      params
    })
  }

export function editTeacher(params) {
  return request({
    url: '/teacher',
    method: 'put',
    data:params
  })
}  

export function createTeacher(params) {
  return request({
    url: '/teacher',
    method: 'post',
    data:params
  })
}  

export function delTeacher(params) {
  return request({
    url: '/teacher',
    method: 'delete',
    params
  })
}  


export function getTeacherName(params) {
  return request({
    url: '/page/teacher/all',
    method: 'get',
    params
  })
}


   