<template>
  <div>
    <div class="log_bg">
      <div class="top">
        <div class="logo"><a href="Index.html"><img src="../assets/images/logo.png" /></a></div>
      </div>
      <div class="login">
        <div class="log_img"><img src="../assets/images/l_img.png" width="611" height="425" /></div>
        <div class="log_c">
          <form>
            <table border="0" style="width:370px; font-size:14px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr height="50" valign="top">
                <td width="55">&nbsp;</td>
                <td>
                  <span class="fl" style="font-size:24px;">登录</span>
                  <span class="fr">还没有商城账号，<a href="Regist.html" style="color:#ff4e00;">立即注册</a></span>
                </td>
              </tr>
              <tr height="70">
                <td>用户名</td>
                <td><input type="text" value="ws" class="l_user" v-model="username"></td>
              </tr>
              <tr height="70">
                <td>密&nbsp; &nbsp; 码</td>
                <td><input type="password" value="bb" class="l_pwd" v-model="password"></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="font-size:12px; padding-top:20px;">
                	<span style="font-family:'宋体';" class="fl">
                    	<label class="r_rad"><input type="checkbox" /></label><label class="r_txt">请保存我这次的登录信息</label>
                    </span>
                  <span class="fr"><a href="#" style="color:#ff4e00;">忘记密码</a></span>
                </td>
              </tr>
              <tr height="60">
                <td>&nbsp;</td>
                <td><input type="button" v-on:click="login" value="登录" class="log_btn" style="background: #FF4E00"/></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
    <!--End Login End-->
    <!--Begin Footer Begin-->
    <div class="btmbg">
      <div class="btm">
        备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
        <img src="../assets/images/b_1.gif" width="98" height="33" /><img src="../assets/images/b_2.gif" width="98" height="33" /><img src="../assets/images/b_3.gif" width="98" height="33" /><img src="../assets/images/b_4.gif" width="98" height="33" /><img src="../assets/images/b_5.gif" width="98" height="33" /><img src="../assets/images/b_6.gif" width="98" height="33" />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return{
               username:'',
               password:'',
            }
        },
        methods: {
           login () {
               //验阵是否输入用户名和密码
               if (!this.username) {
                  alert('请输入用户名')
                   return;
               }
               if (!this.password) {
                   alert('请输入密码')
                   return;
               }
               //用axios将值传到后台login方法，并且返回数据
               axios.post(this.url+'/auth/login',{
                   name:this.username,
                   password:this.password,
               })
                   //返回验证结果
                   .then(res=>{
                      console.log(res)
                       //当返回值为error 提示用户名或密码错误，否侧直接跳转到登录页面
                       if (res.data.token_type=='error'){
                         alert('用户名或密码错误')
                       }else{
                           //将name存在本地
                           // localStorage.setItem("name",res.data.access_token);
                           localStorage.setItem("name",res.data.name);
                           localStorage.setItem("access_token",res.data.access_token);
                           this.$router.push({name:'Show'});
                           //跳转到展示页面
                       }
                   })
           }
        },

    }
</script>

<style scoped>

</style>
