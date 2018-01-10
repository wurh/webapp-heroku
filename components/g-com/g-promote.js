/**
 * 广告打点对象
 */
export default {

  //banner营销点击
  onPromoteFired(data) {
    if (window && window.dataLayer) {
      let dataLayer = window.dataLayer;
      dataLayer.push({
        'event': 'promotionClick',
        'ecommerce': {
          'promoClick': {
            'promotions': [{
              'id': data.id,
              'name': data.name,
              'creative': 'Global',
              'position': '1'
            }]
          }
        }
      });
    }
  },
//banner营销展示
  onPromoteView(items){
    if (window && window.dataLayer) {
      let dataLayer = window.dataLayer;
      dataLayer.push({
        'ecommerce': {
          'promoView': {
            'promotions': items
          }
        }
      });
    }
  }
}
