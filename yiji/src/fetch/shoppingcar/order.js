import {FetchGet} from "../get.js"

export function shoppingOrder(username){
  var result = FetchGet(`/api/order?username=${ username }`);
  return result;
}
