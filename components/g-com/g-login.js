/**
 * 登录GA 代码
 */
export default {
    onLoginFire(loginType,userid){
        if(window && window.dataLayer){
            let dataLayer = window.dataLayer;
            dataLayer.push({
                'memberId': userid,
                'signInType': loginType, //会员登录方式有mail、facebook两种，这里填写facebook
                'event': 'signIn'
            })
        }
    }
}