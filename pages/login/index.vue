<template>
   <section class="container">
        <mt-header fixed title="login Page">
        </mt-header>
        <div class="login-form">
            <mt-field label="username" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="password" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="email" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        </div>
        <div @click="onLogin" class="login-btn">
             <mt-button type="primary" size="large" >Login</mt-button>
        </div>
    </section>
</template>

<script>
import { mapMutations } from "vuex";
import localStore from "../../components/c-util/c-localstore";
import cookie from "../../components/c-util/c-cookie";
import loginGA from "../../components/g-com/g-login";
import pageviewGA from "../../components/g-com/g-pageview";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  mounted(){
    pageviewGA.onPageViewFired('login');
  },
  methods: {
    onLogin() {
      let userId = new Date().getTime();
      let store = window.localStorage;
      localStore.set(store, "userid", userId);
      cookie.setCookie('userid',userId,30);
      localStore.set(store, "user", {
        username: this.username,
        password: this.password,
        email: this.email,
        id: userId
      });
      loginGA.onLoginFire('normal',userId)
      let path = "/";
      if (this.$route.query && this.$route.query.redirect) {
        path = this.$route.query.redirect;
      }
      this.$router.push({ path: path });
    }
  }
};
</script>

<style scoped>
.login-form {
  margin-top: 60px;
}
.login-btn {
  text-align: center;
  margin-top: 20px;
  padding: 1rem;
}
</style>