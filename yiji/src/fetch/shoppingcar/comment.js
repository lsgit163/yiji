import {post} from "../post.js"

export function submitCommentData(obj){
  var result = post('/api/usercomment',obj);
  return result;
}
