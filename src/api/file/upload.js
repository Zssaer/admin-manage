import request from '../../utils/request'
import axios from 'axios'
const baseURL = 'http://192.168.0.190:8085'

const request2 = axios.create({
  baseURL,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' }
})

export function upload(params){
  return request({
    url: '/upload',
    method: 'post',
    data:params
  })
}

export function uploadEditorPic(params){
  return request2({
    url: '/uploadEditorPic',
    method: 'post',
    data:params
  })
}

export function deleteFile(params) {
  return request({
    url: '/deleteFile',
    method: 'delete',
    params
  })
}