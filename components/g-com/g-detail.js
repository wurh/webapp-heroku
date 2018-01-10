/**
 * 登录GA 代码
 */
export default {
    /**
     * 列表加载触发统计埋码时间
     * @param {*} event 
     * @param {*} items 
     */
    onDetailLoadFire(items){
        if(window && window.dataLayer){
            let dataLayer = window.dataLayer;
            dataLayer.push({
                'event': 'load',
                'ecommerce': {
                    'detail':{
                        'products':items
                    }
                }
            })
        }
    },
}