/**
 * SPA Pageview 埋点对象
 */
export default {
    onPageViewFired(page){
        if(window && window.dataLayer){
            let dataLayer = window.dataLayer;
            dataLayer.push({
                'spapagename': page, //会员登录方式有mail、facebook两种，这里填写facebook
                'event': 'spa_pageview'
            })
        }
    }
}