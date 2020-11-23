import {request} from "./request";
export function getNewsMutidata(type,page) {
 return request({
    url:"https://www.mxnzp.com/apinews/list",
    params:{
      app_id:"tkilvmkqykbpjode",
      app_secret:"",
      typeId:type,
      page:page
    }
  })
}
