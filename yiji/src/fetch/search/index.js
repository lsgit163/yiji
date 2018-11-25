// import * as get from "../get.js"
//
// export function getSearchList(city,page,keywords){
//   var result = get.FetchGet(`/api/search?city=${city}&page=${page}&keywords=${keywords}`);
//   return result;
// }
//
// export function getFreeSearchList(city,page){
//   var result = get.FetchGet(`/api/free/search?city=${city}&page=${page}`);
//   return result;
// }
//------------------------------------------------------------------------------------------------
import {FetchGet} from "../get.js"

export function getSearchList(city,page,keywords){
  var result = FetchGet(`/api/search?city=${city}&page=${page}&keywords=${keywords}`);
  return result;
}

export function getFreeSearchList(city,page){
  var result = FetchGet(`/api/free/search?city=${city}&page=${page}`);
  return result;
}
