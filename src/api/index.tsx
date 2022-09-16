import axios from 'axios'
import { constants } from 'http2'

type UserForm = {
    oldpassword: string,
    password: string,
    passConfirm: string
  }

  const API = axios.create({baseURL: 'http://localhost:5000'})

  API.interceptors.request.use((req) => {
      if(localStorage.getItem('key')){
         req.headers!.Authorization = `Bearer ${localStorage.getItem('key')}`
      }

      return req
  })

  export const fetchChangePassword = (formData: UserForm) => API.put('/users/change_password', formData)


