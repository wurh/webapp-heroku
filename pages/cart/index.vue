<template>
  <section class="container">
        <mt-header fixed title="购物车">
           <div @click="onHistory"  slot="left">
                <mt-button icon="back">back</mt-button>
            </div>
        </mt-header>
         <div id="car-ul" class="product-li-detail car-list car-ul">
                <div class="bag-list-detail bag-items" data-sku-id="V0012476505001" data-ska-id="V0012476505" data-quantity="1" data-remaintime="2395312" hastimer="true" data-label="151436531543900">
                    <div v-for="item in carts" :key="item.productSkuId"  class="product-detail-box">
                        <div class="product-detail-image">
                            <div :data-id="item.productSkuId" class="item-img-wrap">
                                <img :src="item.imgUrl" alt="">
                            </div>
                        </div>
                        <div class="product-detail-info">
                            <div class="product-wrap">
                                <p class="product-detail-name">{{item.title}}</p>
                                <a href="javascript:;" @click="onDel(item.productSkuId)" class="product-edit" data-row="0" data-col="0"><i class="far fa-window-close"></i></a>
                            </div>
                            <p class="produc-detail-price-box">
                                    <span class="price-now">${{item.sellPrice}}</span>
                                    <span class="price-old">${{item.marketPrice}}</span>
                            </p>
                            <p>
                                <span>numbers x {{item.quantity}}</span>
                            </p>    
                        </div>
                    </div>
                </div>
            </div>
            <section class="cart-footer">
                <div class="btn-wrap">
                    <div class="checkout-info">
                            <p class="total-money">
                                Total: <em>${{totalPrice}}</em>
                            </p>
                    </div> 
                    <a href="javascript:void(0)" @click="toCheckout" class="btn-checkout">Checkout&nbsp;({{cartTotal}})</a>
                </div>
        </section>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      cartTotal: 0,
      totalPrice: 0
    };
  },
  computed: {
    carts() {
      return this.$store.state.cart.list;
    }
  },
  created() {
    console.log(this.carts);
  },
  mounted() {
    let resobj = this.getCartTotal(this.carts);
    this.cartTotal = resobj.totalNum;
    this.totalPrice = resobj.totalPrice;
  },
  methods: {
    onHistory() {
      window.history.go(-1);
    },
    getCartTotal(list) {
      let totalPrice = 0;
      let totalNum = 0;
      for (let i = 0; i < list.length; i++) {
        totalNum = parseInt(totalNum) + parseInt(list[i].quantity);
        totalPrice = (parseFloat(totalPrice) + parseFloat(list[i].totalPrice)
        ).toFixed(2);
      }
      return {
        totalPrice,
        totalNum
      };
    },
    onDel(id) {
      this.$store.commit("cart/remove", id);
      let resobj = this.getCartTotal(this.carts);
      this.cartTotal = resobj.totalNum;
      this.totalPrice = resobj.totalPrice;
    },
    toCheckout(){
       this.$router.push({ path: '/checkout' })
    }
  }
};
</script>

<style scoped>
.car-list {
  margin-top: 60px;
}
.car-list {
  padding-bottom: 0.74rem;
}
.product-detail-box.product-detail-box {
  padding-bottom: 0;
}
.product-detail-box {
  padding: 0.75rem;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.product-detail-box.product-detail-box .product-detail-image {
  position: relative;
  width: 5.13rem;
  height: 6.48rem;
  padding-right: 0;
  margin-right: 0.75rem;
}
.product-detail-box .product-detail-image {
  width: 5.88rem;
  height: 7.43rem;
  padding-right: 0.75rem;
  text-align: center;
}
.product-detail-box .product-detail-image img {
  width: 100%;
  height: 100%;
}
.product-detail-box .product-detail-info {
  -webkit-flex: 1 0 0;
  flex: 1 0 0;
  width: 13rem;
}
.product-detail-box.product-detail-box .product-detail-info .product-wrap {
  width: 100%;
  overflow: hidden;
  display: flex;
}
.product-detail-box.product-detail-box
  .product-detail-info
  .product-wrap
  .product-detail-name {
  flex: 1;
  margin-right: 0.68rem;
  line-height: 0.88rem;
  height: 0.88rem;
  margin-bottom: 0;
}
.product-detail-box.product-detail-box
  .product-detail-info
  p.product-detail-name {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: -o-box;
  display: box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
}
.product-detail-box.product-detail-box .product-detail-info p {
  line-height: 0.94rem;
  margin-bottom: 0.75rem;
}
.product-detail-box .product-detail-info .product-detail-name {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: -o-box;
  display: box;
  overflow: hidden;
}
.product-brand-name,
.product-detail-box .product-detail-info .product-brand-name,
.product-detail-box .product-detail-info .product-detail-name,
.ware-house-info .ware-house-name {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
}
.product-detail-box .product-detail-info p {
  display: -webkit-box;
  font-size: 0.81rem;
  line-height: 0.88rem;
  margin-bottom: 0.7rem;
  color: #666;
}
.product-detail-box.product-detail-box .product-detail-info .product-wrap a {
  display: inline;
  justify-content: flex-end;
  line-height: 1rem;
  color: #666;
}
.product-edit .icon-deit {
  width: 1.25rem;
  height: 0.25rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
  color: #666;
}
.product-detail-box.product-detail-box
  .product-detail-info
  p.product-detail-attribute {
  margin-top: 0.5rem;
  display: block;
}
.product-detail-box.product-detail-box .product-detail-info p {
  line-height: 0.94rem;
  margin-bottom: 0.75rem;
}
.product-detail-box .product-detail-info .product-detail-attribute {
  margin-top: 1rem;
}
.product-detail-box .product-detail-info p {
  display: -webkit-box;
  font-size: 0.81rem;
  line-height: 0.88rem;
  margin-bottom: 0.7rem;
  color: #666;
}
.product-detail-box.product-detail-box
  .product-detail-info
  p.produc-detail-price-box {
  height: 1rem;
  line-height: 1rem;
}
.product-detail-box.product-detail-box .product-detail-info p {
  line-height: 0.94rem;
  margin-bottom: 0.75rem;
}
.product-detail-box .product-detail-info p {
  display: -webkit-box;
  font-size: 0.81rem;
  line-height: 0.88rem;
  margin-bottom: 0.7rem;
  color: #666;
}
.produc-detail-price-box {
  -webkit-box-flex: 1;
  box-flex: 1;
}
.product-detail-box .product-detail-info .price-now {
  color: #333;
  font-size: 0.88rem;
  font-weight: 700;
}
.product-detail-box .product-detail-info .price-old {
  color: #999;
  text-decoration: line-through;
}
.product-detail-box.product-detail-box
  .product-detail-info
  .product-detail-count-select {
  display: -webkit-box;
  display: box;
  -webkit-box-align: center;
  box-align: center;
}
.product-detail-box.product-detail-box
  .product-detail-info
  .produc-detail-count-box {
  position: relative;
  display: -webkit-box;
  display: box;
  -webkit-box-align: center;
  box-align: center;
  height: 1.5rem;
  -webkit-box-flex: 1;
}
.product-detail-box.product-detail-box
  .product-detail-info
  .produc-detail-count-box
  .produc-detail-count-num {
  background-color: #f4f4f4;
  min-width: 2.56rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  display: block;
}
.product-detail-box.product-detail-box
  .product-detail-info
  .produc-detail-count-box
  .produc-detail-count-icon-down {
  background-color: #eaeaea;
  width: 1.5rem;
  height: 1.5rem;
  display: -webkit-box;
  display: box;
  -webkit-box-align: center;
  box-align: center;
}
.icon-down {
  display: block;
  width: 0.63rem;
  height: 0.38rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 0.5rem;
}
.del-btn {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 1rem;
  top: 1rem;
}
.btn-wrap {
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  height: 3.75rem;
  padding-right: 0.5rem;
  line-height: 3.75rem;
  font-size: 0.88rem;
  background: #fff;
}
.btn-wrap,
.header-theme-1 {
  position: fixed;
  width: 100%;
}
.btn-wrap .checkout-info {
  flex: 1;
  margin: auto 0.56rem;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}
.btn-wrap .checkout-info p {
  font-size: 0.75rem;
  line-height: 0.88rem;
  color: #666;
}
.btn-wrap .checkout-info p.total-money em {
  font-size: 1.13rem;
  line-height: 1.44rem;
  color: #333;
  font-weight: 700;
  font-style: normal;
}
.btn-wrap .btn-checkout {
  display: inline-block;
  justify-content: flex-end;
  padding: 0 0.75rem;
  height: 2.75rem;
  line-height: 2.75rem;
  vertical-align: middle;
  text-align: center;
  margin: auto 0.5rem auto 0;
  color: #fff;
  background: #ec008c;
}
</style>