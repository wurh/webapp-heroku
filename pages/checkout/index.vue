<template>
  <section class="container">
        <mt-header fixed title="支付确认页">
           <div @click="onHistory"  slot="left">
                <mt-button icon="back">back</mt-button>
            </div>
        </mt-header>
        <div class="shipping-wrap">
            <ul class="product-list">
                <li class="product">
                    <div class="inner-right">
                        <p class="title">Black Plain Stitching Balance Men's Shoes</p>
                        <div class="feature">
                            Black / 40
                            <p class="amount press-color">x 1</p>
                        </div>
                        <div class="money">
                            <span class="now press-color">$72</span>
                            <span class="default">$32.99</span>
                        </div>
                    </div>
                    <div class="product-img" style="background-image: url(https://img-global.vip.com/product/V0017977601-1-224X283-1508412585349.jpg);">
                    </div>
                </li>
            </ul>
        </div>
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
    }
  }
};
</script>

<style scoped>
.product-list{
    margin-top: 60px;
}
.shipping-wrap .product-list {
    border-top: 1px solid #E4E4E4;
    border-bottom: 1px solid #E4E4E4;
    padding: .75rem .75rem 0;
}
.shipping-wrap .product-list .product {
    position: relative;
    color: #666;
    margin-bottom: .75rem;
    min-height: 4.38rem;
}
.shipping-wrap .product-list .product .inner-right {
    margin-left: 4.5rem;
    padding-left: 0;
}
.shipping-wrap .product-list .product .inner-right>* {
    margin-bottom: .5rem;
}
.shipping-wrap .product-list .product .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.shipping-wrap .product-list .product .inner-right>* {
    margin-bottom: .5rem;
}
.shipping-wrap .product-list .product .amount {
    float: right;
}
.shipping-wrap .press-color {
    color: #333;
    font-weight: 700;
}
.shipping-wrap .product-list .product .inner-right>* {
    margin-bottom: .5rem;
}
.shipping-wrap .press-color {
    color: #333;
    font-weight: 700;
}
.shipping-wrap .product-list .product .money .default {
    text-decoration: line-through;
    font-size: .75rem;
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
.product-img img{
    position: absolute;
    background-position: center;
    background-size: cover;
    left: 10px;
    top: 60px;
    width: 3.44rem;
    height: 4.38rem;
}
</style>