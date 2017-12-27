<template>
  <section class="container">
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
            <div class="buttom-item">
                <mt-button class="btn-item" type="default">Shop Cart</mt-button>
            </div>
            <div class="buttom-item">
                <mt-button class="btn-item" type="danger">Add to Bag</mt-button>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import detailFunc from "../../mock/detailData"
export default {
    data(){
        return{
           detailObj:{}
        }
    },
    created(){
        //console.log(this.$route.params.id)
        if(this.$route.params && this.$route.params.id){
            let detailId = this.$route.params.id;
            this.detailObj = detailFunc.getDetailById(detailId);
        }
        console.log(this.detailObj);
    },
    methods:{
     
    }
}
</script>

<style>
 .detail-img-block{
     width: 320px;
     height: 404px;
     text-align: center;
     margin: 0 auto;
 }
  .detail-img-block img{
      width: 100%
  }
.goods-info {
    position: relative;
    padding-bottom: .625rem;
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
    padding: 0 .75rem;
    border-bottom: .71rem solid #EAEAEA;
}

.goods-info .goods-name {
    padding-top: 1rem;
}
.goods-info .goods-name .brand-name, .goods-info .goods-name .product-name {
    font-size: .88rem;
    line-height: 1.31rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
}
.goods-info .goods-name .brand-name {
    padding-bottom: .13rem;
}
.goods-info .goods-name .brand-name, .goods-info .goods-name .product-name {
    font-size: .88rem;
    line-height: 1.31rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
}
.goods-info .price-info {
    position: relative;
    padding-top: .75rem;
    color: #333;
}
.goods-info .price-info .price {
    -webkit-box-flex: 1;
    box-flex: 1;
    padding-bottom: .25rem;
    font-size: 1.63rem;
}
.goods-info .price-info .market-price {
    color: #999;
    font-size: .88rem;
    font-weight: initial;
}
.goods-info .price-info .discount:last-child {
    margin-left: .29rem;
}
.goods-info .price-info .discount {
    display: inline-block;
    vertical-align: middle;
    padding: .13rem .25rem;
    margin-left: .36rem;
    border-radius: .14rem;
    color: #fff;
    background: #ec008c;
    font-size: .75rem;
    line-height: .88rem;
}
.goods-info .detail-time-wrap.active, .goods-info .detail-time-start-wrap.active {
    display: block;
}
.goods-info .detail-time-wrap, .goods-info .detail-time-start-wrap {
    display: none;
    padding-top: .88rem;
    padding-bottom: .375rem;
    color: #333;
    height: 1rem;
    font-size: .88rem;
}

.button-gropu{
    position: fixed;
    bottom: 0;
    height: 40px;
    width: 100%;
    display: -webkit-box;
}

.buttom-item{
    -webkit-box-flex: 1;
    width: 0;
    line-height: 40px;
}

.btn-item{
    width: 100%;
}
</style>