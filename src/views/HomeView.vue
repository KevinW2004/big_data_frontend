<template>
  <div class="home">
    <div class="header">
      <el-button type="success" text class="button-text" @click="handleUpgrade" v-if="!isVip"><span class="text">升级为VIP</span></el-button>
      <el-button type="success" text class="button-text" v-else disabled><span class="text">您已经成为VIP</span></el-button>
      <el-button type="success" text class="button-text" @click="handleLogin" v-if="!hasLogin"><span class="text">登录</span></el-button>
      <el-button type="success" text class="button-text" v-else disabled><span class="text" >欢迎！{{this.currentUserName}}</span></el-button>
      <el-button type="success" text class="button-text" @click="logout" v-if="hasLogin"><span class="text">退出</span></el-button>

      <el-dialog class="upgrade" :append-to-body='true' v-model="upgradeVisible" title="升级为VIP" width="500">
        <img class="img" style="width: 80%; height: 80%" src="@/assets/pay.jpg"  alt="pay"/>
        <div class="buttons">
          <el-button type="success" @click="successUpgrade">已支付</el-button>
          <el-button type="warning" class="cancel" @click="upgradeVisible=false">取消支付</el-button>
        </div>
      </el-dialog>
      <el-dialog class="login" :append-to-body='true' v-model="loginVisible" width="450">
        <h2>{{ this.title }}</h2>
        <el-form class="form" label-width="auto" style="max-width: 600px">
          <el-form-item class="el-form-item">
            <el-input v-model="username" placeholder="用户名"/>
          </el-form-item>
          <el-form-item class="el-form-item" v-if="isRegister">
            <el-input v-model="email" placeholder="请输入邮箱号"/>
          </el-form-item>
          <el-form-item class="el-form-item">
            <el-input v-model="password" type="password" placeholder="请输入密码"/>
          </el-form-item>
          <el-form-item class="el-form-item" v-if="isRegister">
            <label v-if="!isPasswordIdentical" class="error-warn">密码不一致</label>
          <el-input v-model="password2" type="password" placeholder="请再次输入密码"/>
        </el-form-item>
          <span class="button-group">
            <el-button class="login-button" type="success" v-if="!isRegister" @click="login()" :disabled="isLoginButtonDisabled">登入</el-button>
            <el-button class="register-button" type="success" v-else @click="user_register" :disabled="isRegisterButtonDisabled">注册</el-button>
          </span>
          <span class="tip" v-if="!isRegister">还未注册？| <span class="register" @click="handleRegister">去注册</span></span>
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
import {get_current_user, get_login, get_register, get_upgrade} from "@/api/user";
import {ElMessage, ElMessageBox} from "element-plus";


export default {
  name: 'HomeView',
  data(){
    return{
      isVip:false,
      hasLogin:false,
      upgradeVisible:false,
      loginVisible:false,
      username:"",
      email:"",
      password:"",
      password2:"",
      title:"登录",
      isRegister:false,
      currentUserName:"",
      role:""
    }
  },
  computed:{
    isLoginButtonDisabled(){
      return !(this.username&&this.password);
    },
    isRegisterButtonDisabled(){
      return !(this.username&&this.email&&this.password&&this.password2)||(this.password!==this.password2)
    },
    isPasswordIdentical(){
      return (this.password===this.password2)
    }
  },
  components: {
    PaperSearch
  },
  methods:{
    user_register(){
      get_register({username:this.username,email:this.email,password:this.password})
          .then(res=>{
            if(res.status===200){
              ElMessage({
                message:'注册成功,请登录！',
                type:'success',
                center:true,
              })
              this.isRegister=false
            }
          }).catch(()=>{
        ElMessage({
          message: "该用户名已存在！",
          type: 'error',
          center: true,
        })
      })
    },
    login(){
      get_login({username:this.username,password:this.password})
          .then(res=>{
            if(res.status===200){
              ElMessage({
                message: "登录成功！",
                type: 'success',
                center: true,
              })
            }
            const token=res.data.access_token
            console.log(token)
            sessionStorage.setItem('token',token)
            this.loginVisible=false
            this.hasLogin=true
            get_current_user().then(res=>{
              this.currentUserName=res.data.username
              sessionStorage.setItem('current_username',res.data.username)
              sessionStorage.setItem('role',res.data.role)
            })
          })
          .catch(()=>{
            ElMessage({
              message: "用户名或密码错误，请重新输入",
              type: 'error',
              center: true,
            })
          })
    },
    logout(){
      // eslint-disable-next-line no-undef
      ElMessageBox.confirm(
          '确认退出登录吗',
          '退出登录',
      {
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning',
      }
      ).then(()=>{
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('current_username')
        sessionStorage.removeItem('role')
        ElMessage.success('您已成功退出登录');
        this.hasLogin = false;
        this.isVip=false;
        this.currentUserName=sessionStorage.getItem('current_username')
      }).catch(() => {
        // 用户取消登出，不做任何操作
        ElMessage.info('取消退出');
      });
    },
    handleUpgrade(){
      this.upgradeVisible=true
    },
    handleLogin(){
      this.title="登录"
      this.loginVisible=true;
      this.username=""
      this.password=""
      this.isRegister=false;
    },
    handleRegister(){
      this.title="注册"
      this.isRegister=true
      this.username=""
      this.password=""
    },
    successUpgrade(){
     this.upgradeVisible=false;
      get_upgrade().then(res=>{
        if(res.status===200){
          ElMessage({
            message:'升级成功',
            type:'success',
            center:true
          })
          this.isVip=true
          sessionStorage.setItem('role','VIP')
        }
      }).catch(()=>{
        ElMessage({
          message:'升级失败，请先登录！',
          type:'error',
          center:true
        })
      })

    }
  },
  mounted() {
    const token = sessionStorage.getItem('token');
    if (token) {
      // 如果 token 和用户名存在，认为用户已经登录
      this.hasLogin = true;
      this.currentUserName=sessionStorage.getItem('current_username')
    }
    this.role=sessionStorage.getItem('role')
    if(this.role==='VIP'){
      this.isVip=true
    }
  }
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
.error-warn {
  color: red;
  font-size: smaller;
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
.register-button{
  width: 340px;
  margin-bottom: 10px;
}
.buttons{
  display: flex;
  gap:20px;
  justify-content: center;
  align-items: center;
}
.cancel{
  margin-left: 30px;
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
