import {request} from "./request";
export function getHomeMutidata() {
 return request({
    url:"https://www.mxnzp.com/api/image/girl/list/random",
    params:{
      app_id:"",
      app_secret:"",
    }
  })
}
