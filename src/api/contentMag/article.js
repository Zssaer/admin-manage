import request from '../../utils/request'
import {baseURL} from '../../utils/request'

export function getArticleList(params) {
  return request({
    url: '/article',
    method: 'get',
    params
  })
}

export function addArticle(params) {
  return request({
    url: '/article',
    method: 'post',
    data:params
  })
}

export function delArticles(params) {
  return request({
    url: '/article',
    method: 'delete',
    params
  })
}

export function editArticle(params) {
  return request({
    url: '/article',
    method: 'put',
    data:params
  })
}

export function inputArticle(params) {
  return request({
    url: '/article/import',
    method: 'post',
    data:params
  })
}

export function getTemplate() {
  let a = document.createElement('a')
  a.href =baseURL+"/article/template"
  a.click();
}

export function getArticlesFile() {
  let a = document.createElement('a')
  a.href =baseURL+"/article/export"
  a.click();
}

export function getNewsShow(params) {
  return request({
    url: '/search/article',
    method: 'get',
    params
  })
}

