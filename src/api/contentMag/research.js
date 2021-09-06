import request from '../../utils/request'
import {baseURL} from '../../utils/request'

export function getResearchList(params) {
  return request({
    url: '/research',
    method: 'get',
    params
  })
}


export function delResearch(params) {
  return request({
    url: '/research',
    method: 'delete',
    params
  })
}


export function editResearch(params) {
  return request({
    url: '/research',
    method: 'put',
    data:params
  })
}


export function createResearch(params) {
  return request({
    url: '/research',
    method: 'post',
    data:params
  })
}


export function inputResearche(params) {
  return request({
    url: '/research/import',
    method: 'post',
    data:params
  })
}


export function outputResearches() {
  let a = document.createElement('a')
  a.href =baseURL+"/research/export"
  a.click();
}


export function getTemplate() {
  let a = document.createElement('a')
  a.href =baseURL+"/research/template"
  a.click();
}


