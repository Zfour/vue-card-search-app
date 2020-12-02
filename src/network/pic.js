import {request} from "./request";
export function getHomeMutidata() {
  return request({
    url:"https://helloacm.com/api/images-compressor/",
    params:{
      key:"tkilvmkqykbpjode",
      secret:"Vk0xY0hOVTN5eTh5ZVo0SzBNQ0Z2UT09",
    }
  })
}
