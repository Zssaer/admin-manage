import request from '../../utils/request'
import {baseURL} from '../../utils/request'

export function getPaperList(params) {
  return request({
    url: '/paper',
    method: 'get',
    params
  })
}

export function delPaper(params) {
  return request({
    url: '/paper',
    method: 'delete',
    params
  })
}

export function editPaper(params) {
  return request({
    url: '/paper',
    method: 'put',
    data:params
  })
}

export function createPaper(params) {
  return request({
    url: '/paper',
    method: 'post',
    data:params
  })
}

export function inputPapers(params) {
  return request({
    url: '/paper/import',
    method: 'post',
    data:params
  })
}

export function getPapersFile(params) {
  // return request({
  //   url: '/paper/export',
  //   method: 'get',
  //   responseType:'blob'
  // })
  let a = document.createElement('a')
  a.href =baseURL+"/paper/export"
  a.click();
}

export function getTemplate() {
  let a = document.createElement('a')
  a.href =baseURL+"/paper/template"
  a.click();
}




