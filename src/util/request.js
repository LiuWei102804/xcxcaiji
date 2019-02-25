import wepy from "wepy";

const request = ( url , method = "get" , data ) => {
    return wepy.request({
        url : url
    })
}
