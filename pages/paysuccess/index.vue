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
export default {
  data() {
    return {
    };
  },
  mounted(){
    pageviewGA.onPageViewFired('paysuccess');
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