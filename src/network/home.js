import {request} from "./request";
export function getHomeMutidata() {
 return request({
    url:"https://www.mxnzp.com/api/image/girl/list/random",
    params:{
      app_id:"tkilvmkqykbpjode",
      app_secret:"Vk0xY0hOVTN5eTh5ZVo0SzBNQ0Z2UT09",
    }
  })
}
