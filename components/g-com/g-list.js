/**
 * 登录GA 代码
 */
export default {
    /**
     * 列表加载触发统计埋码时间
     * @param {*} event 
     * @param {*} items 
     */
    onListLoadFire(event,items){
        if(window && window.dataLayer){
            let dataLayer = window.dataLayer;
            dataLayer.push({
                'event': event,
                'ecommerce': {
                    'impressions': this.listDataChangeGaData(items)
                }
            })
        }
    },

    /**
     * 列表数据项转换
     */
    listDataChangeGaData: function (items) {
        let arr = [];
        for(let i =0 ; i< items.length; i++){
            let item = items[i];
            arr.push({
                'name': item.productName,
                'id': item.productId,
                'price': item.sellPrice,
                'brand': item.brandName,
                'category': item.categoryName || "",
                'variant': item.variant || "",
                'list': 'page list',
                'position': 1,
                'dimension1': item.dimension == 'Y' ? 'Promotion' : 'Normal'
            })
        }
        console.log('length:' + arr.length);
        return arr;
    },

    listClick: function (item,index) {
        dataLayer.push({
            'event': 'productClick',
            'ecommerce': {
                'click': {
                    'actionField': {'list':'page list'},      // Optional list property.
                    'products': [{
                        'name': item.productName,
                        'id': item.productId,
                        'price': item.sellPrice,
                        'brand': item.brandName,
                        'category': item.categoryName || "",
                        'variant': item.variant || "",
                        'position': index + 1,
                        'dimension1': item.dimension == 'Y' ? 'Promotion' : 'Normal'
                    }]

                }
            }
        })
    },
}