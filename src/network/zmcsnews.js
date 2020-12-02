import {request} from "./request";
export function getThgNewsMutidata(typenum) {
 return request({
    url:"https://thg.igsk.fun/wp-json/wp/v2/posts",
    params:{
      categories:typenum
    }
  })
}
