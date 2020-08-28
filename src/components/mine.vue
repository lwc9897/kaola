<template>
    <main><div class="wrap">
        <div class="one">
            <p class="one1" >我的考拉</p>
            <img  src="../assets/images/a102.png" alt="" class="o1">
            <img  src="../assets/images/a103.png" alt="" class="one2">
            <p class="one3">手机用户5921</p>
        </div>
        <div class="two">
            <ul class="two1">
                <li><img  src="../assets/images/m1.png" alt=""><p class="two3">待付款</p></li>
                <li><img  src="../assets/images/m2.png" alt=""><p class="two3">待发货</p></li>
                <li><img  src="../assets/images/m3.png" alt=""><p class="two3">待收货</p></li>
                <li><img  src="../assets/images/m4.png" alt=""><p class="two3">退款退货</p></li>
                <li><img  src="../assets/images/m5.png" alt=""><p class="two3">全部订单</p></li>
            </ul>
            <ul class="two4">
                <li><img  src="../assets/images/m6.png" alt="">  <p class="two5">优惠券</p></li>
                <li><img  src="../assets/images/m7.png" alt="">  <p class="two5">红包</p></li>
                <li><img  src="../assets/images/m8.png" alt="">  <p class="two5">考拉豆</p></li>
            </ul>
            <ul class="three">
                <li><img  src="../assets/images/m9.png" alt=""><p class="three1">收藏</p></li>
                <li><img  src="../assets/images/m10.png" alt=""><p class="three1">领劵中心</p></li>
                <li><img  src="../assets/images/m11.png" alt=""><p class="three1">会员中心</p></li>
                <router-link to='/downlond'>
                <li><img width="40%" src="../assets/images/m12.png" alt=""><p class="three1">App下载</p></li>
                </router-link>
            </ul>
            <img src="../assets/images/m13.png" alt="" class="pic">
        </div>
    </div>

<div class="bottom-bar">
    <mt-tabbar v-model="selected">

        <router-link to='/first'>     
            <mt-tab-item id="one">
                <img   src="../assets/images/first12.png">
            </mt-tab-item>
        </router-link>

        <router-link to='/classification'>            
            <mt-tab-item id="two">
                <img   src="../assets/images/first22.png">
            </mt-tab-item> 
        </router-link>

        <router-link to='/car'>   
            <mt-tab-item id="three">
                <img   src="../assets/images/first32.png">
            </mt-tab-item>
        </router-link>

        <router-link to='/mine'>            
            <mt-tab-item id="four">
                <img   src="../assets/images/first42.png">
            </mt-tab-item>
        </router-link>

    </mt-tabbar>
</div>



    </main>
</template>

<script>
export default {
   name:"app",
   data(){
       return{
           selected:''
       }
   }
}
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 580px;
    background:#f0f0f0 ;
}
 .one{
     width: 100%;
     height: 180px;
     background:#fd424d ;
     overflow: hidden;
     position: relative;
 }
.one1{
    color: white;
    text-align: center;
    margin-top:20px;  
}
.one2{
    width: 50px;
    position: absolute;
    margin-top: 20px;
    margin-left: -30px;
}
.one3{
    color: white; 
    margin-left:80px ;
    margin-top: -10px;
    position: fixed;
    float: left;
}
.o1{
    width: 50px;
}

.two{
    width:90%;
    height: 400px;
    float: left;
    position: fixed;
    margin-left:5%;
    margin-top: -50px;
    overflow: hidden;
}
.two1{
    width: 100%;
    height: 20%;
    background: white;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 10px;
}
.two1 li{
    float: left;
    width: 20%;
    height: 40px;
    text-align: center;
    margin-top: 20px;
}
.two1 li img{
    width: 25px;
}
.two3,.two5{
    font-size: 10px;
     margin-top: 3px;
}
.two4{
    width: 100%;
    height: 20%;
    background: white;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 10px;
}
.two4 li{
    float: left;
    width: 33.3%;
     height: 40px;
    text-align: center;
    margin-top: 20px;
}
.two4 li img{
    width: 25px;
}
.three{
    width: 100%;
    height: 20%;
    background: white;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 10px;
}
.three li{
    float: left;
    width: 25%;
     height: 40px;
    text-align: center;
    margin-top: 20px;
}
.pic{
    width: 100%;
}
.three li img{
    width: 25px;
}
.three1{
    font-size: 10px;
     margin-top: 3px;
     color: gray;
}
.bottom-bar img{
        width:40px;  
       
    }
   .mint-tabbar a{
       width: 36%;
       height: 50px;
       margin-left: 6%;}
</style>