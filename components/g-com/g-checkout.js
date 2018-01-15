/**
 * checkout对象
 */
export default {

  onCheckoutFired(items) {
    if (window && window.dataLayer) {
      let dataLayer = window.dataLayer;
      dataLayer.push({
        'event': 'checkout',
        'ecommerce': {
          'checkout': {
            'actionField': {
              'step': 1,
              'option': 'paypal'
            },
            'products': this.getCheckoutProducts(items)
          }
        }
      })
    }
  },

  getCheckoutProducts(items){
    let arr = [];
    for(let i = 0 ; i <items.length; i++){
        let item = items[i]
        arr.push({
            'name': item.title,
            'id': item.productId,
            'price': item.sellPrice,
            'brand': item.brandName,
            'category': item.categoryName || "",
            'variant': item.variant || "",
            'quantity':item.quantity || 1,
            'skuId':item.productId,
            'position': 1,
            'dimension1': item.dimension == 'Y' ? 'Promotion' : 'Normal'
        })
    }
    return arr;
  }
}
