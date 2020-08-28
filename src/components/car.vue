<template>
    <main class="wrap">

            <ul class="one">
                <p class="one1">购物车（0）</p>
                <li><img src="../assets/images/a103.png" alt=""></li>
                <li><img src="../assets/images/c1.png" alt=""></li>
                
            </ul>
            <!-- <div class="two">
                <img class="one4"  src="../assets/images/c2.png" alt="">
                <p class="one5">购物车空空如也，赶紧去逛逛吧！</p>
                <router-link to='/first'>
                    <button class=" one6">去逛逛</button>
                </router-link>
            </div> -->
            <div class="top">
                <div class="top1">
                    <input type="checkbox" name="" id="top2"><img src="../assets/images/dianpu.png" alt=""><p>uspoloassn男装旗舰店></p>
                </div>
                <div class="top3">
                    <div class="top4">
                        <span class="a">满件减</span>
                        <span class="a-l">以下商品享【满2件享9折】</span>
                        <span class="a-r">去凑单></span>
                        
                    </div>
                    <div class="top5">
                        <input type="checkbox" name="" id="">
                        <ul>
                            <li><img class="a-up" src="../assets/images/yifu.webp" alt=""><span class="a-d">每日限购10件</span></li>
                        </ul>
                        <div class="top6">
                            <span class="s-up">【2020春季期新品】U.S.POLO A...</span>
                            <span class="s">颜色：黑色；尺码：...</span><br>

                            <span @click="change()" class="jia"> <i>-</i>  <u>{{msg}}</u> <i> +</i></span><br>
                            
                            <span class="s-l">￥169</span>
                            <span class="s-r"><img src="../assets/images/sc.png" alt=""></span>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="top">
                <div class="top1">
                    <input type="checkbox" name="" id="top2"><img src="../assets/images/dianpu.png" alt=""><p>uspoloassn男装旗舰店></p>
                </div>
                <div class="top3">
                    <div class="top4">
                        <span class="a">满件减</span>
                        <span class="a-l">以下商品享【满2件享9折】</span>
                        <span class="a-r">去凑单></span>
                        
                    </div>
                    <div class="top5">
                        <input type="checkbox" name="" id="">
                        <ul>
                            <li><img class="a-up" src="../assets/images/yifu.webp" alt=""><span class="a-d">每日限购10件</span></li>
                        </ul>
                        <div class="top6">
                            <span class="s-up">【2020春季期新品】U.S.POLO A...</span>
                            <span class="s">颜色：黑色；尺码：...</span><br>

                            <span @click="change()" class="jia"> <i>-</i>  <u>{{msg}}</u> <i> +</i></span><br>
                            
                            <span class="s-l">￥169</span>
                            <span class="s-r"><img src="../assets/images/sc.png" alt=""></span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="top">
                <div class="top1">
                    <input type="checkbox" name="" id="top2"><img src="../assets/images/dianpu.png" alt=""><p>uspoloassn男装旗舰店></p>
                </div>
                <div class="top3">
                    <div class="top4">
                        <span class="a">满件减</span>
                        <span class="a-l">以下商品享【满2件享9折】</span>
                        <span class="a-r">去凑单></span>
                        
                    </div>
                    <div class="top5">
                        <input type="checkbox" name="" id="">
                        <ul>
                            <li><img class="a-up" src="../assets/images/yifu.webp" alt=""><span class="a-d">每日限购10件</span></li>
                        </ul>
                        <div class="top6">
                            <span class="s-up">【2020春季期新品】U.S.POLO A...</span>
                            <span class="s">颜色：黑色；尺码：...</span><br>

                            <span @click="change()" class="jia"> <i>-</i>  <u>{{msg}}</u> <i> +</i></span><br>
                            
                            <span class="s-l">￥169</span>
                            <span class="s-r"><img src="../assets/images/sc.png" alt=""></span>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="footer">

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
                <img  src="../assets/images/first31.png">
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
           msg:1,
           selected:''
       }
   },
   methods:{
       change(){
           this.msg++
       }
   }
}
</script>
<style  scoped>
.wrap{
    width: 100%;
    height: 600px;
}
    .one{
        width: 100%;
        height: 50px;
        overflow: hidden;
        border-bottom: 1px solid #f0f0f0;       
    }
    ul li{
        float: right;
        width: 10%;
        height: 21px;
        margin-right: 0px;
        margin-top: -20px;
    }
    li img{
        width:25px ;
    }
    .one .one1{   
        text-align: center;
        margin-top:20px; 
    }
    .top{
        display: block;
    width: 100%;
  
    display: flex;
    flex-direction: column;
    padding-bottom: .266667rem;
    margin-bottom: .266667rem;
    position: relative;
    background-color: #fff;
    }
    .top .top1{
        height: 50px;
        
        display: flex;
       align-items: center;
       background:#fafafa ;
       font-size: 13px;
    }
    .top1 img{
        width: 20px;
        margin:0 5px 0px 5px ;
    }
    .top4{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            height: 1.066667rem;
            justify-content: space-between;
    }
    .top4 .a{
        width: 40px;
        height: 14px;
        background: red;
        color: white;
        border-radius: 30px;
        font-size: 12px;
        margin-left: 10px;
        margin-top: 10px;
    }
    .top4 .a-l{
        color: gray;
        font-size: 13px;
    margin-right: 75px;
    margin-top: 10px;
    }
    .top4 .a-r{
        color: red;
        font-size: 13px;
          margin-top: 10px;
    }
    .top5{
        width: 100%;
        height: 127px;
        border-bottom: 1px solid gray;
    }
    .top5 input{
        margin-top: 60px;
    }
    .top5 li{
        width: 80px;
        float: left;
        margin-left: 30px;
    }
    .top5 .a-up{
        width: 80px;
        margin-top: -44px;
    }
    .top5 .a-d{
        color: red;
        font-size:10px ;
        margin-left: 10px;
       
    }
    .top6{
        width: 213px;
        height: 100px;
        float: right;
        margin-top: -65px;
    }
    .s-up{
        font-size: 13px;
    }
    .s-l{
        color: red;
        margin-top:40px;
    }
    .top6 img{
        width: 15px;
        margin-top: 40px;
        margin-left: 131px;
    }
    .top6 .s{
        font-size: 12px;
        color: gray;
    }
    .top6 .jia{
        margin-left: 120px;
    
    }
    .top6 i{
        border: 1px solid gray;
        padding: 5px;
    }
    .top6 u{
        border: 1px solid gray;
         padding: 5px;
    }
    /* .top1 input{
        width: 30px;
    } */


    /* .two img{
        width: 140px;
        margin-left:25%;
       
        margin-top: 40%;

    }
    .one5{
        text-align: center;
        margin-top: 5%;
    }
    .one6{
        background: red;
        width: 100px;
        height: 40px;
        margin-left: 35%;
        margin-top: 5%;
        border: none;
    }
.two{
    width: 300px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
} */
.footer{
    width: 100%;
    height: 41px;
}
.mint-tabbar{
       float: left;
       position: fixed;
       bottom: 0px;
        width: 100%;
        height: 50px;
    }
   .bottom-bar img{
        width: 40px;  
       
    }
   .mint-tabbar a{
       width: 36%;
       height: 50px;
       margin-left: 6%;}
    
    
</style>