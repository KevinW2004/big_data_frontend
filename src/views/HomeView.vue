<template>
  <div class="home">
    <div class="header">
      <el-button type="success" text class="button-text" @click="upgradeVisible=true"><span class="text">升级为VIP</span></el-button>
      <el-button type="success" text class="button-text" @click="handleLogin"><span class="text">登录</span></el-button>
      <el-dialog class="upgrade" :append-to-body='true' v-model="upgradeVisible" title="升级为VIP" width="500">
        <img class="img" style="width: 80%; height: 80%" src="@/assets/pay.jpg"  alt="pay"/>
      </el-dialog>
      <el-dialog class="login" :append-to-body='true' v-model="loginVisible" width="450">
        <h2>{{ this.title }}</h2>
        <el-form class="form" label-width="auto" style="max-width: 600px">
          <el-form-item class="el-form-item">
            <el-input v-model="email" placeholder="请输入邮箱号"/>
          </el-form-item>
          <el-form-item class="el-form-item" v-if="isRegister">
            <el-input type="password" placeholder="用户昵称"/>
          </el-form-item>
          <el-form-item class="el-form-item">
            <el-input v-model="password" type="password" placeholder="请输入密码"/>
          </el-form-item>
          <span class="button-group">
            <el-button class="login-button" type="success">登入</el-button>
          </span>
          <span class="tip" v-if="!isRegister">还未注册？| <span class="register" @click="register">去注册</span></span>
        </el-form>
      </el-dialog>
    </div>
    <paper-search/>
<!--    <button @click="paper"></button>-->
  </div>
</template>

<script>
// @ is an alias to /src
import PaperSearch from '@/components/PaperSearch.vue'
import router from "@/router";


export default {
  name: 'HomeView',
  data(){
    return{
      upgradeVisible:false,
      loginVisible:false,
      email:"",
      password:"",
      title:"登录",
      isRegister:false
    }
  },
  components: {
    PaperSearch
  },
  methods:{
    handleLogin(){
      this.title="登录"
      this.loginVisible=true;
      this.email=""
      this.password=""
      this.isRegister=false;
    },
    register(){
      this.title="注册"
      this.isRegister=true
    },
    paper(){
      router.push("/paper")
    }
  }
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
.header{
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  display: flex;
  gap: 10px; /* 按钮间的间距 */
}
.button-text{
  color: azure;
}
.button-text:hover{
  color: #2c3e50;
}
.text{
  color: inherit;
  transition: border-color 0.5s ease; /* 添加过渡效果 */
}
.img{
  margin-left: 45px;
}

.form{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-form-item{
  width: 80%;
}
.login h2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-button{
  width: 340px;
  margin-bottom: 10px;
}
.tip{
  color: #218838;
  margin-bottom: 10px;
}
.register{
  font-weight: bold;
  cursor: pointer;
}
</style>
