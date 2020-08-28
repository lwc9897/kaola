<template>
    <main class="wrap">
        <div class="o1">
            <mt-header>
                <router-link to="/first" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <img width="50%" class="one" src="../assets/images/log1.png" alt="">
        <input type="text" placeholder="请输入手机号" class="one1">
        <div class="o2">
        <input type="text" placeholder="请输入验证码" class="one1">
        <div class="one3">
            <p > 获取验证码</p>
        </div>
        </div>
        
        <button class="one2">登录</button>
        <p class="one4">使用验证码登录</p>
        <p class="one5">其他登录方式 <img width="4%" src="../assets/images/log2.png" alt=""> </p>
        <p class="one6">注册/登录即代表同意
         <a href="https://you.kaola.com/common/page.html?spm=a2v0d.b37698948.0.0.c9c32bceqOq3fo&key=Privacy_policy&hideNav=1&_h5da=true&kpm=MjAxOA%3D%3D.aHR0cHM6Ly9hY2NvdW50Lmthb2xhLmNvbS93YXAvbG9naW4uaHRtbA%3D%3D.Xw%3D%3D.Xw%3D%3D%40%40Xw%3D%3D&p_kpm=MjAxOA%3D%3D.aHR0cHM6Ly9tLmthb2xhLmNvbS8%3D.Xw%3D%3D.Xw%3D%3D%40%40Xw%3D%3D">隐私政策</a>
         和
         <a href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other202003231515_29928.html?spm=a2v0d.b37698948.0.0.c9c32bcecrrPUg&_h5da=true&kpm=MjAxOA%3D%3D.aHR0cHM6Ly9hY2NvdW50Lmthb2xhLmNvbS93YXAvbG9naW4uaHRtbA%3D%3D.Xw%3D%3D.Xw%3D%3D%40%40Xw%3D%3D&p_kpm=MjAxOA%3D%3D.aHR0cHM6Ly9tLmthb2xhLmNvbS8%3D.Xw%3D%3D.Xw%3D%3D%40%40Xw%3D%3D">服务条款</a>
         </p>
    </main>
</template>
<style  scoped>

    .one{
        margin-top: 10%;
        margin-left:25% ;
    }
    .o2{
        height: 60px;
        overflow: hidden;
    }
    .one1{
        width: 90%;
        height: 30px;
        border-radius: 30px;
        margin-left:2%;   
        padding: 4px 0px 4px 15px; 
        font-size: 20px;
        margin-top: 5%;
        background:#f0f0f0 ;
        border: none;
    }
    .one2{
        width: 93%;
        height: 40px;
        border-radius: 30px;
        margin-left:3%;   
        font-size: 20px;
        margin-top: 5%;
        background:#ff2a54 ;
        border: none;
        color: white;
    }
    .one3{
            color: red;
            float: left;
            right: 20px;
            top: 215px;
            height: 20px;
            line-height: 20px;
            padding-left: 10px;
            padding-right: 10px;
            border-left: 1px solid #d5d5d5;
            position: absolute;
    }
    .one4{
        color: gray;
        float: right;
        margin-right: 5%;
        margin-top: 2%;
        font-weight: 100;
        font-size: 13px;
    }
    .one5{
        color: rgba(128, 128, 128, 1);
        text-align: center;
        margin-right: 5%;
        margin-top: 30%;
        font-size: 15px;
    }
    .one6{
        color: gray;
        text-align: center;
        margin-top: 50%;
        font-size: 12px;
    }
    .mint-header{
        background: white;
        color: black;
    }
</style>