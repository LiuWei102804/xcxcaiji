import wepy from "wepy";

export default class HttpOrigin extends wepy.mixin {

    data = {
        httpOrigin : "http://localhost:8999"
    }
    methods = {

    }
    pageTo( page ) {
        wx.navigateTo({
            url : page
        });
    }
    setData( key , data ){
        this[key] = data;
        console.log( this[key])
    }
    getData( key ){
        return this[key];
    }
}
