import {request} from "./request";
export function getNewsMutidata(type,page) {
 return request({
    url:"https://www.mxnzp.com/apinews/list",
    params:{
      app_id:"tkilvmkqykbpjode",
      app_secret:"Vk0xY0hOVTN5eTh5ZVo0SzBNQ0Z2UT09",
      typeId:type,
      page:page
    }
  })
}
