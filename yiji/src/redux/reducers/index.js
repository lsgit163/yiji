import { combineReducers } from 'redux';
import city from "./sub.js"
import userinfo from './userinfo.js'
import store from './store.js'

const rootReducer = combineReducers({
  city,
  userinfo,
  store
})
export default rootReducer
