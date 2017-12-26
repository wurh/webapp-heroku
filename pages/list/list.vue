<template>
  <section class="container">
        <mt-header fixed title="电商应用"></mt-header>
     <section id="list-list" class="list-list">
        <ul class="list-ul clearfix">
          <li v-for="item in items" :key="item.productId" data-remaintime="" data-productcount="11 " data-issoldout="1" :data-productid="item.productId">
              <div @click="onDetail" :data-productid="item.productId">
                  <div class="imgBox">
                      <div>
                          <div class="layoutImg off">VIPshop</div>
                      </div>
                      <div>
                          <img :src="item.originalImage"  data-width="224" data-height="283" :alt="item.productName" style="display: inline-block;">
                      </div>
                  </div>
                  <div class="list-flex">
                      <div class="list-flex01">
                                  <p class="goodsTitle"><span class="goodsPrice">${{item.sellPrice}}</span><span class="pastPrice">${{item.marketPrice}}</span></p>
                          <span class="price-off">-{{item.discount}}</span>
                      </div>
                      <p class="goodsName">{{item.productName}}</p>
                  </div>
              </div>
          </li>
        </ul>
    </section>
  </section>
</template>

<script>
import listData from "../../mock/list"
export default {
    data(){
        return{
            items:listData.items
        }
    },
    methods:{
        onDetail(){
            console.log('to Detail!!');
        }
    }
}
</script>

<style>
.list-list {
    position: relative;
    margin-top: 60px;
}
.list-list .list-ul {
    font-size: 0;
    -webkit-overflow-scrolling: touch;
    padding: .75rem;
    display: flex;
    flex-wrap: wrap;
}
.list-list .list-ul li:nth-child(2n+1) {
    padding-right: .35rem;
}
.list-list .list-ul li {
    box-sizing: border-box;
}
.list-list li:nth-of-type(-n+2) {
    margin-top: 0;
}
.list-list li {
    margin-top: 8px;
    display: inline-block;
    vertical-align: top;
    width: 50%;
    font-size: .8125rem;
}
.list-list li a {
    display: block;
}
a, button, input {
    outline: 0;
}
a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
}
.imgBox {
    position: relative;
    z-index: 0;
    width: 100%;
    margin: 0 auto;
}
.imgBox {
    width: 170px;
    height: 214.7767857142857px;
}
.layoutImg.off {
    display: none;
}
.layoutImg {
    color: #ccc;
    background: #efefef;
    font-size: 1.5625rem;
    font-weight: 700;
    text-align: center;
}
.layoutImg {
    width: 170px;
    height: 214.7767857142857px;
    line-height: 214.7767857142857px;
}
.imgBox img {
    display: none;
    width: 100%;
}
.imgBox img {
    width: 170px;
    height: 214.7767857142857px;
}
.list-ul img {
    width: 170px;
    height: 214.7767857142857px;
}
.list-flex01 {
    display: -webkit-box;
    padding-top: 0;
    color: #000;
    padding: .4rem;
}
.list-flex01 .goodsTitle {
    -webkit-box-flex: 1;
}
.list-flex .goodsName {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    min-height: 1.5rem;
    line-height: 1rem;
    overflow: hidden;
    color: #999;
    font-size: .75rem;
    font-weight: 400;
    -webkit-line-clamp: 2;
    word-break: break-word;
    margin-bottom: 1.5rem;
    padding-top: .5rem;
}
.goodsPrice {
    color: #333;
    font-size: 1rem;
    font-weight: 700;
    display: block;
    line-height: 1.19rem;
    margin-bottom: .13rem;
}
.goodsTitle .pastPrice {
    color: #999;
    text-decoration: line-through;
}
.price-off {
    font-size: .88rem;
    color: #ec008c;
}
</style>