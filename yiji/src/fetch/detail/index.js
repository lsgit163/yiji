import { FetchGet } from "../get.js";

export function getDetailsData(id){
  var result = FetchGet(`/api/detail?id=${id}`)
  return result;
}

export function getCommentData(id){
  var result = FetchGet(`/api/comment?id=${id}`)
  return result;
}
