/**
 * 购物车GA埋点对象
 */
export default {
  /**
   * 列表加载触发统计埋码时间
   * @param {*} event 
   * @param {*} items 
   */
  onCartLoadFire(items) {
    if (window && window.dataLayer) {
      let dataLayer = window.dataLayer;
      dataLayer.push({
        'event': 'load',
        'ecommerce': {
          'checkout': {
            'actionField': {
              'step': 1
            },
            'products': this.cartDataChangeGaData(items)
          }
        }
      })
    }
  },

  /**
   * 列表数据项转换
   */
  cartDataChangeGaData: function (item) {
    return {
      'name': item.productName,
      'id': item.productId,
      'price': item.sellPrice,
      'brand': item.brandName,
      'category': item.categoryName || "",
      'variant': item.variant || "",
      'quantity': item.quantity,
      'dimension1': item.dimension == 'Y' ? 'Promotion' : 'Normal'
    }

  },

  /**
   * 添加购物车事件
   */
  addToCart: function (items) {
    dataLayer.push({
      'event': 'addToCart',
      'ecommerce': {
        'add': {
          'products': this.cartDataChangeGaData(items)
        }
      }
    });
  },
}
