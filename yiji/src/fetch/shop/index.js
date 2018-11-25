import {FetchGet} from "../get.js"

export function shopFetch(city,page){
  var result = FetchGet(`/api/shop?city=${city}&page=${page}`);
  return result;
}
