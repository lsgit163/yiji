import * as actionTypes from '../contants/userinfo.js'

export function login(data){
  return{
    type:actionTypes.LOGIN,
    data
  }
}
