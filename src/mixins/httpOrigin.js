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
    /*
    *   提示框
    * */
    toast( msg ){
        wx.showToast({ title : msg , icon : "none" });
    }
    /*
    *   成功toast
    * */
    succToast( msg ){
        wx.showToast({ title : msg , icon : "success" });
    }
    /*
    *   确认弹窗
    * */
    confirmModal( msg ){
        return new Promise(( resolve , reject ) => {
            wx.showModal({
                title: "提示",
                content: msg ,
                success( res ) {
                    if ( res.confirm ) {
                        resolve( "ok" );
                    } else if ( res.cancel ) {
                        resolve("cancel");
                    }
                }
            })
        })
    }
}
