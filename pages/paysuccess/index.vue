<template>
   <section class="container">
        <mt-header fixed title="支付成功页">
        </mt-header>
        <div class="paysuccess-wrap">
            Pay Success!
        </div>
        <div class="paysuccess-btn">
           <mt-button @click="toHome" type="danger">Back To Home</mt-button>
        </div>
    </section>
</template>

<script>
import { mapMutations } from "vuex";
import pageviewGA from "../../components/g-com/g-pageview";
import localStore from "../../components/c-util/c-localstore";
export default {
  data() {
    return {
    };
  },
  mounted(){
   let store = window.localStorage;
   let carts = localStore.get(store, "payproducts");
    pageviewGA.onPageViewFired('paysuccess',carts);
    localStore.remove(store, "payproducts");
  },
  methods: {
      toHome(){
          this.$router.push({ path:'/' });
      }
  }
};
</script>

<style scoped>
.paysuccess-wrap{
    padding: 1rem;
    font-size: 2rem;
    color: #000;
    text-align: center;
    margin-top: 60px;
}
.paysuccess-btn{
    text-align: center;
    margin-top: 60px;
}

</style>