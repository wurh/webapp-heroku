<template>
   <section class="container">
        <mt-header fixed title="login Page">
        </mt-header>
        <div class="login-form">
            <mt-field label="username" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="password" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="email" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        </div>
        <div class="login-btn">
             <mt-button type="primary" size="large" >Login</mt-button>
        </div>
    </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
        username:'',
        password:'',
        email:''
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
    .login-form{
        margin-top: 60px;
    }
    .login-btn{
        text-align: center;
        margin-top: 20px;
        padding: 1rem;
    }
</style>