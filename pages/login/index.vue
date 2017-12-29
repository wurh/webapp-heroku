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
export default {
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {
    onLogin() {
      let userId = new Date().getTime();
      let store = window.localStorage;
      localStore.set(store, "userid", userId);
      localStore.set(store, "user", {
        username: this.username,
        password: this.password,
        email: this.email,
        id: userId
      });
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