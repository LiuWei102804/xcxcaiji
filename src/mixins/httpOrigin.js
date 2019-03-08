import wepy from "wepy";

export default class HttpOrigin extends wepy.mixin {

    data = {
        httpOrigin : "http://localhost:8999"
    }
    methods = {

    }
    /*
    *   页面跳转
    * */
    pageTo( page ) {
        wx.navigateTo({
            url : page
        });
    }
    /*
    *   loading加载
    * */
    showLoading( title = "加载中..." ){
        wx.showLoading({
            title : title
        });
    }
    /*
    *   hideLoading
    * */
    hideLoading(){
        wx.hideLoading();
    }
}
