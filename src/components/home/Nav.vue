<template>
 <transition 
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__fadeInDown"
    leave-active-class="animate__fadeOutUp"
    >
     <el-container>
      <el-header>
        <ul class="nav">
                <li style="font-size: 26px;font-weight: 600;margin-right: 90px;">TINYXU</li>
                <li class="index">首页</li>
                <li>学生信息</li>
                <li>学生管理</li>  
                <li>班级信息</li>
                <li>班级管理</li>
                <div class="switch" @click="changeTheme" v-show="flag"><i class="iconfont icon-qingtian"></i></div>
                <div class="switch" @click="changeTheme" v-show="!flag"><i class="iconfont icon-moonbyueliang"></i></div>
                <el-button  type="primary" class="btn" @click="isShow = true"><router-link to="" style="color:#fff">登录</router-link></el-button>
                <!-- <el-button  type="danger" style="padding: 13px 22px;float: right; margin: 6px 0;">退出</el-button> -->
        </ul>
      </el-header>
    </el-container>
</transition> 
</template>
 
 
<script lang='ts' setup>
import 'animate.css';
import { ref , defineEmits, inject} from 'vue'
let flag = ref(true)
let isShow = inject('isShow')
let changeTheme = ():void => {
        if(flag.value){
            flag.value = false
            document.documentElement.style.setProperty("--theme_bg_color", '#2f3133');
            document.documentElement.style.setProperty("--them_bg_body", '#171d20');
            document.documentElement.style.setProperty("--theme_color", '#fff');
            document.documentElement.style.setProperty("--theme_nav", '#404547');
            document.documentElement.style.setProperty("--theme_li", 'rgba(64, 69, 71,0.5)');
        }else{
            flag.value = true
            document.documentElement.style.setProperty("--theme_bg_color", '#fff');
            document.documentElement.style.setProperty("--them_bg_body", '#f4f4f4');
            document.documentElement.style.setProperty("--theme_color", '#4a4a4a');
            document.documentElement.style.setProperty("--theme_nav", '#cfcfcf');
            document.documentElement.style.setProperty("--theme_li", 'rgba(230, 230, 230)');
    }
}

</script>
 
<style scoped>
.nav{
    width: 960px;
    display: flex;
    margin: 5px auto;
    justify-content: space-between;
    align-items: center;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    color:var(--theme_color);
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px);
}
.nav li{
    padding: 0 25px;
    margin: 0 5px;
    line-height: 55px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 4px;
    transition: all 0.5s linear;
    cursor: pointer;
}
.index{
    background-color: var(--theme_nav);
    transition: 0.5s;
}
.index ~ li:hover{
    background-color: var(--theme_li);
}
a{
    text-decoration: none;
    cursor: pointer;
}
.btn{
    width: 80px;
    height: 40px;
    margin-left: 30px;
    color:#fff;
}
.switch{
   display: flex;
   justify-content: center;
   align-items: center;
   width: 60px;
   height: 40px;
   border-radius: 5px; 
   transition: 0.5s;
}

.switch:hover{
   background-color: var(--theme_li);
}
</style>
