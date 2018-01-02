<template>
  <section class="container">
        <mt-header fixed title="支付确认页">
           <div @click="onHistory"  slot="left">
                <mt-button icon="back">back</mt-button>
            </div>
        </mt-header>
        <div class="shipping-wrap">
            <ul class="product-list">
                <li v-for="item in carts" :key="item.productSkuId" class="product">
                    <div class="inner-right">
                        <p class="title">{{item.title}}</p>
                        <div class="feature">
                            <p class="amount press-color">x {{item.quantity}}</p>
                        </div>
                        <div class="money">
                            <span class="now press-color">${{item.price}}</span>
                            <span class="default">${{item.marketPrice}}</span>
                        </div>
                    </div>
                    <div class="product-img" :style="'background-image: url('+ item.imgUrl + ')'">
                    </div>
                </li>
            </ul>
        </div>
        <div class="py-method-wrap">
            <div class="py-method active" data-id="paypal" data-val="PayPal">
                <div class="py-method-box">
                    <i class="icon-choose"></i>
                    <div class="card-wrap">
                        <!-- <img class="img-payment" src="image/icon-v3.0/paypal@2x.png" alt="PayPal"> -->
                        <i class="icon-pay icon-pay-paypal"></i>
                    </div>
                </div>
            </div>
        </div>
        <section id="payment-wrap" class="payment-wrap" style="">
<div class="total-wrap">
    <ul class="price-list">
        <li>
            <p class="sec-attr">
                All Total (Excluding Tax)
            </p>
            <p class="sec-price fontb">
                    ${{totalPrice}}
            </p>
        </li>
    </ul>
</div>
<div class="bottom-wrap wrap-bottom-tax">
    <p class="text-bottom-tax">
        Total (Excluding Tax)
            ${{totalPrice}}
    </p>
    <div id="goto-stage-2" @click="onPay" class="btn-next-stage">Proceed to Payment</div>
</div>
</section>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import payGA from "../../components/g-com/g-paysuccess";
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
  mounted() {
    let resobj = this.getCartTotal(this.carts);
    this.cartTotal = resobj.totalNum;
    this.totalPrice = resobj.totalPrice;
  },
  created() {
    console.log(this.carts);
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
    onPay(){
      payGA.onPaySuccess({
            'payment': 'paypel', 
            'purchaseTimes': 1, //总购买次数, 
            'purchaseAmount':this.totalPrice, //历史订单总金额 
      },this.carts)
      this.$store.commit("cart/removeAll");
       this.$router.push({ path: '/paysuccess' })
    }
  }
};
</script>

<style scoped>
.product-list {
  margin-top: 60px;
}
.shipping-wrap .product-list {
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding: 0.75rem 0.75rem 0;
}
.shipping-wrap .product-list .product {
  position: relative;
  color: #666;
  margin-bottom: 0.75rem;
  min-height: 4.38rem;
}
.shipping-wrap .product-list .product .inner-right {
  margin-left: 4.5rem;
  padding-left: 0;
}
.shipping-wrap .product-list .product .inner-right > * {
  margin-bottom: 0.5rem;
}
.shipping-wrap .product-list .product .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shipping-wrap .product-list .product .inner-right > * {
  margin-bottom: 0.5rem;
}
.shipping-wrap .product-list .product .amount {
  float: right;
}
.shipping-wrap .press-color {
  color: #333;
  font-weight: 700;
}
.shipping-wrap .product-list .product .inner-right > * {
  margin-bottom: 0.5rem;
}
.shipping-wrap .press-color {
  color: #333;
  font-weight: 700;
}
.shipping-wrap .product-list .product .money .default {
  text-decoration: line-through;
  font-size: 0.75rem;
}
.shipping-wrap .product-list .product .product-img {
  position: absolute;
  background-position: center;
  background-size: cover;
  left: 0;
  top: 0;
  width: 3.44rem;
  height: 4.38rem;
}
.shipping-wrap .product-list .product .product-img {
  position: absolute;
  background-position: center;
  background-size: cover;
  left: 0;
  top: 0;
  width: 3.44rem;
  height: 4.38rem;
}
.product-img img {
  position: absolute;
  background-position: center;
  background-size: cover;
  left: 10px;
  top: 60px;
  width: 3.44rem;
  height: 4.38rem;
}

.py-method-wrap .py-method:last-child {
  border-bottom: none;
}
.py-method-wrap .py-method {
  position: relative;
  border-bottom: 1px solid #e5e5e5;
}
.py-method-wrap .py-method-box {
  display: -webkit-box;
  display: box;
  -webkit-box-align: center;
  box-align: center;
  position: relative;
  padding-left: 0.75rem;
  min-height: 3.4rem;
}
.active .icon-choose {
  background-image: url(https://m-static-global.vip.com/image/icon-v3.0/icon-select-a12ae46aa4.png);
  border: 0;
}
.icon-choose {
  margin: 0.24rem;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 1px solid #999;
  border-radius: 100%;
  box-sizing: border-box;
}
.card-wrap {
  position: relative;
  padding-left: 0.68rem;
  -webkit-box-flex: 1;
}
.card-wrap .icon-pay-paypal,
.card-wrap .icon-pay-qiwi {
  display: block;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.card-wrap .icon-pay-paypal {
  background-image: url(https://m-static-global.vip.com/image/icon-v3.0/paypal@2x-a58fb3d297.png);
  width: 5.44rem;
  height: 1.38rem;
}
.payment-wrap .total-wrap .price-list li .sec-attr {
  -webkit-box-flex: 1;
  box-flex: 1;
  color: #333;
  font-weight: lighter;
}
.payment-wrap .total-wrap .price-list .sec-attr {
  width: 6.6rem;
  color: #a0a0a0;
  text-align: left;
  white-space: nowrap;
}
.payment-wrap .total-wrap .price-list li .fontb {
  color: #333;
  font-weight: 700;
}
.payment-wrap .total-wrap .price-list li .sec-price {
  -webkit-box-flex: 10;
  box-flex: 10;
  font-size: 0.88rem;
  width: auto;
  font-weight: 400;
}
.payment-wrap .total-wrap .price-list .sec-price {
  width: 6.5rem;
  color: #000;
  text-align: right;
  font-weight: 700;
}
.wrap-bottom-tax {
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.06);
  left: 0;
  padding: 0.5rem;
  height: auto;
  line-height: 1.25;
}
.bottom-wrap {
  height: auto;
  padding: 0;
}
.bottom-wrap {
  border-top: none;
}
.bottom-wrap {
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  z-index: 80;
  bottom: 0;
  padding: 0 0.9375rem;
  height: 5.25rem;
  border-top: 1px solid #e5e5e5;
}
.bottom-wrap,
.total {
  width: 100%;
  background: #fff;
}

.bottom-wrap,
.time-wrap {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.wrap-bottom-tax .text-bottom-tax {
  color: #333;
  font-size: 0.88rem;
  text-align: center;
  margin-bottom: 0.2em;
}
.btn-next-stage {
    display: block;
    margin: 0;
    height: 3rem;
    color: #fff;
    background: #ec008c;
    font-size: 1rem;
    text-align: center;
    line-height: 3rem;
}
.payment-wrap .total-wrap .price-list li {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    margin: 0;
    padding-bottom: .5rem;
    min-height: auto;
    height: auto;
}
.payment-wrap .total-wrap .price-list li {
    margin-bottom: .2rem;
    min-height: 1rem;
    line-height: 1rem;
    padding: 1rem
}
</style>