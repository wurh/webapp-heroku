/**
 * 广告打点对象
 */
export default {
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
  }
}
