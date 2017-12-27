export const state = () => ({
  list: []
})

export const mutations = {
  add(state, item) { // 添加购物车列表
    state.list.push({
      brandName: item.brandName,
      detailUrl: item.detailUrl,
      discount: item.discount,
      imgUrl: item.originalImage,
      marketPrice: item.marketPrice,
      price: item.sellPrice,
      productSkuId: item.productId,
      quantity: item.quantity,
      sellPrice: item.sellPrice,
      title: item.productName,
      totalPrice: item.totalPrice,
    })
  },
  update(state, item) { //更新购物车列表
    for (let i = 0; i < state.list.length; i++) {
      if (item.productSkuId === state.list[i].productSkuId) {
        state.list[i] = item;
      }
    }
  },
  remove(state, item) {
    //state.list.splice(state.list.indexOf(todo), 1)
    let res = false;
    for (let i = 0; i < state.list.length; i++) {
      if (item.productSkuId === state.list[i].productSkuId) {
        state.list.splice(i, 1)
        res = true;
      }
      return res;
    }
  }
}
