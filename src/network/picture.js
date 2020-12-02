import {request} from "./request";
export function getPictureMutidata(type,page) {
  return request({
    url:"https://api.vvhan.com/api/acgimg?type=json",
  })
}
