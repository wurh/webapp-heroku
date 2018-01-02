<template>
  <section class="container">
        <mt-popup v-model="successPop" position="top" class="successPop" :modal="false">
            <p>commint success</p>
        </mt-popup>
        <mt-popup v-model="failPop" position="top" class="failPop" :modal="false">
            <p>commit fail</p>
        </mt-popup>
        <mt-header title="详情页">
            <router-link to="/list/list" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
        </mt-header>
      <div class="detail-page">
        <div class="detail-img-block">
            <img :src="detailObj.originalImage "/>
        </div>
      <section class="goods-info box-theme-0 box-theme-line">
            <div class="goods-name">
                <p class="brand-name">HUANAI</p> 
                <p class="product-name">Red Plain Middle Heeled Medium Warm Women's Martin Boots</p>
            </div>
            <div class="price-info">
                        <h2 class="price">$24.99</h2><del class="market-price">$62</del><span class="discount">-60%</span>
            </div>
        </section>
        <div class="button-gropu">
            <div  @click="toCart" class="buttom-item">
                <mt-button class="btn-item" type="default">Shop Cart [{{cartTotal}}]</mt-button>
            </div>
            <div @click="onAddCart" class="buttom-item">
                <mt-button class="btn-item" type="danger">Add to Bag</mt-button>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import detailFunc from "../../mock/detailData";
import { mapMutations } from "vuex";
import localStore from "../../components/c-util/c-localstore";
import cookie from "../../components/c-util/c-cookie";
export default {
  data() {
    return {
      successPop: false,
      failPop: false,
      cartTotal:0,
      detailObj: {}
    };
  },
  computed: {
    carts() {
      return this.$store.state.cart.list;
    }
  },
  created() {
    if (this.$route.params && this.$route.params.id) {
      let detailId = this.$route.params.id;
      this.detailObj = detailFunc.getDetailById(detailId);
    }
  },
  mounted(){
    let resobj = this.getCartTotal(this.carts)
    this.cartTotal = resobj.totalNum
  },
  watch: {
    successPop(val) {
      if (val) {
        setTimeout(() => {
          this.successPop = false;
        }, 1000);
      }
    },
    failPop(val) {
      if (val) {
        setTimeout(() => {
          this.failPop = false;
        }, 1000);
      }
    }
  },
  methods: {
    getCartTotal(list){
        let totalPrice = 0;
        let totalNum = 0;
        for(let i = 0; i<list.length; i++){
            totalNum = parseInt(totalNum) + parseInt(list[i].quantity);
            totalPrice = parseFloat(totalPrice) + parseFloat(list[i].totalPrice);
        }
        return{
            totalPrice,
            totalNum
        }
    },
    onAddCart() {
      let store = window.localStorage;
      //let userId = localStore.get(store,'userid');
      let userId = cookie.getCookie('userid');
      console.log('userId : '+ userId);
      if(!userId){
         let currentPath = this.$route.path;
         this.$router.push({ path: "/login?redirect=" + currentPath });
         return;
      }
      let id = this.detailObj.productId;
      let result = this.isHas(this.carts, id);
      let item = this.detailObj;
      if (!result) {
        item.quantity = 1;
        item.totalPrice = item.sellPrice;
        this.$store.commit("cart/add", item);
        this.successPop = true;
      } else {
        if (parseInt(result.quantity) > 5) {
          this.failPop = true;
          return;
        }
        item.quantity = parseInt(result.quantity) + 1;
        item.totalPrice =
          parseFloat(result.totalPrice) + parseFloat(item.sellPrice);
        let localItem = {
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
          totalPrice: item.totalPrice
        };
        this.$store.commit("cart/update", localItem);
        this.successPop = true;
      }
        let resobj = this.getCartTotal(this.carts)
        this.cartTotal = resobj.totalNum
    },
    isHas(list, id) {
      let res;
      for (let i = 0; i < list.length; i++) {
        if (id == list[i].productSkuId) {
          res = list[i];
        }
      }
      return res;
    },
    toCart(){
        this.$router.push({ path: "/cart" });
    }
  }
};
</script>

<style>
.detail-img-block {
  width: 320px;
  height: 404px;
  text-align: center;
  margin: 0 auto;
}
.detail-img-block img {
  width: 100%;
}
.goods-info {
  position: relative;
  padding-bottom: 0.625rem;
  border-bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.box-theme-line {
  border-bottom: 1px solid #e5e5e5;
}
.box-theme-0 {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.75rem;
  border-bottom: 0.71rem solid #eaeaea;
}

.goods-info .goods-name {
  padding-top: 1rem;
}
.goods-info .goods-name .brand-name,
.goods-info .goods-name .product-name {
  font-size: 0.88rem;
  line-height: 1.31rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
}
.goods-info .goods-name .brand-name {
  padding-bottom: 0.13rem;
}
.goods-info .goods-name .brand-name,
.goods-info .goods-name .product-name {
  font-size: 0.88rem;
  line-height: 1.31rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
}
.goods-info .price-info {
  position: relative;
  padding-top: 0.75rem;
  color: #333;
}
.goods-info .price-info .price {
  -webkit-box-flex: 1;
  box-flex: 1;
  padding-bottom: 0.25rem;
  font-size: 1.63rem;
}
.goods-info .price-info .market-price {
  color: #999;
  font-size: 0.88rem;
  font-weight: initial;
}
.goods-info .price-info .discount:last-child {
  margin-left: 0.29rem;
}
.goods-info .price-info .discount {
  display: inline-block;
  vertical-align: middle;
  padding: 0.13rem 0.25rem;
  margin-left: 0.36rem;
  border-radius: 0.14rem;
  color: #fff;
  background: #ec008c;
  font-size: 0.75rem;
  line-height: 0.88rem;
}
.goods-info .detail-time-wrap.active,
.goods-info .detail-time-start-wrap.active {
  display: block;
}
.goods-info .detail-time-wrap,
.goods-info .detail-time-start-wrap {
  display: none;
  padding-top: 0.88rem;
  padding-bottom: 0.375rem;
  color: #333;
  height: 1rem;
  font-size: 0.88rem;
}

.button-gropu {
  position: fixed;
  bottom: 0;
  height: 40px;
  width: 100%;
  display: -webkit-box;
}

.buttom-item {
  -webkit-box-flex: 1;
  width: 0;
  line-height: 40px;
}

.btn-item {
  width: 100%;
}

.successPop, .failPop{
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  backface-visibility: hidden;
}

.successPop p ,.failPop p {
  line-height: 50px;
  color: #fff;
}
</style>