<template>
    <main>
       <div class="one">
           <h1><img src="../assets/images/logo.png" alt=""></h1>
           <div class="p1">
                <p>新人送168元购物礼包</p>
                <p class="p2">下载考拉APP领取</p>
           </div>   
               
       </div>
        <div class="oner">
            <router-link to='/downlond'>
            <p>立即领取</p> 
            </router-link>
        </div>
        <div class="oneb">
            <i class="onec"><img src="../assets/images/searsh.png" alt="" width="20px" height="20px"></i>
            <input type="text" placeholder="面膜" class="oneb1">
            <router-link to='/login'>
            <button class="oned">登录/注册</button>
            </router-link>

        </div>
        <div class="two">
             <mt-swipe :show-indicators="true"> 
                <mt-swipe-item><img src="../assets/images/pic1.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic3.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic4.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic5.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic6.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic7.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic8.jpg" alt=""></mt-swipe-item>
                
            </mt-swipe>
        </div>
        <img src="../assets/images/pic9.png" alt="" class="two2">
       <ul class="box">
                <li><img src="../assets/images/p1.png" alt=""></li>
                 <li><img src="../assets/images/p2.png" alt=""></li>
                <li><img src="../assets/images/p3.png" alt=""></li>
                <li><img src="../assets/images/p4.png" alt=""></li>
                <li><img src="../assets/images/p5.png" alt=""></li>
                <li><img src="../assets/images/p6.png" alt=""></li>
                <li><img src="../assets/images/p7.jpg" alt=""></li>
                <li><img src="../assets/images/p8.png" alt=""></li>
                <li><img src="../assets/images/p9.png" alt=""></li>
                <li><img src="../assets/images/p10.png" alt=""></li>
       </ul>
       <div class="three-c">       
            <img src="../assets/images/p11.gif" alt="" width="50%">
            <img src="../assets/images/p12.jpg" alt="" width="50%" height="45%" class="three-r">
            <img src="../assets/images/p13.gif" alt="" width="50%" height="45%" class="three-l">
     </div>
     <div class="le">
         <p class="p3">硬核补贴</p>
         <p class="p41">大牌低价补贴</p>
         <img src="../assets/images/p15.jpg" alt="" width="50%" height="50%" class="picl">
         <img src="../assets/images/p16.jpg" alt="" width="50%" height="50%" class="picr">
     </div>
     <div class="rt">
         <p class="p3">排行榜</p>
         <p class="p42">跟着买就对了</p>
          <img src="../assets/images/p17.jpg" alt="" width="50%" height="50%" class="picl">
         <img src="../assets/images/p18.jpg" alt="" width="50%" height="50%" class="picr">
     </div>
     <img src="../assets/images/p19.png" alt="" width="100%">
     
    <ul class="box2">
        <router-link to='/details'>
        <li v-for="(item,index) in list">
            <img v-bind:src="item.src" alt="">
            <p class="des">{{item.des}}</p>
            <p>
                <span class="mon">{{item.s}}</span>

            </p>
        </li>
        </router-link>
    </ul>
    <div class="footer">
        <img src="../assets/images/a101.png" alt="" width="4%" height="25%" class="footer-l">
        <p class="footer-p">别拉了，到底啦~</p>
    </div>
    
    <div class="di">
        <ul>
            <li>首页</li>
            <li> 客户端</li>
            <li>登录</li>
            <li>注册</li>
        </ul>
        <p class="di1" >阿里巴巴版权所有@2003-2020</p>
    </div>
    


 <div class="bottom-bar">
        <mt-tabbar v-model="selected">
            <router-link to='/first'> 
                <mt-tab-item id="one">
                    <img  src="../assets/images/first11.png">
                </mt-tab-item>
            </router-link>

            <router-link to='/classification'>
                <mt-tab-item id="two">
                    <img  src="../assets/images/first22.png">
                </mt-tab-item> 
            </router-link>

            <router-link to='/car'>
                <mt-tab-item id="three">
                    <img  src="../assets/images/first32.png">
                </mt-tab-item>
            </router-link>

            <router-link to='/mine'>  
                <mt-tab-item id="four">
                    <img  src="../assets/images/first42.png">
                </mt-tab-item>
            </router-link>

        </mt-tabbar>
 </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
                selected:'',
                list:[
                {
                    src:'./src/assets/images/a1.jpg',
                    des:'【单盒低至23】韩国JMsolution面膜燕窝水母蜗牛蜂蜜急救珍珠面膜夏季保湿补水【不支持备注下单】',
                    s:'￥37'
                },
                {
                    src:'./src/assets/images/a2.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                    s:'￥135'
                },
                {
                    src:'./src/assets/images/a3.jpg',
                    des:'ESTĒE LAUDER 雅诗兰黛小棕瓶面部精华 特润修护肌透精华露 50毫升',
                    s:'￥545'
                },
                {
                    src:'./src/assets/images/a4.jpg',
                    des:'Dior 迪奥 新烈艳蓝金唇膏 3.5克 必备经典 气场满分',
                    s:'新人价￥199'
                },
                {
                    src:'./src/assets/images/a5.jpg',
                    des:'【七夕礼物】【包邮多色可选】【新款尤雾弹 泫雅色】MAC 魅可 子弹头口红唇膏 3g/1.8g',
                    s:'￥65'
                },
                {
                    src:'./src/assets/images/a6.jpg',
                    des:'【修颜提亮】LΛNEIGE 兰芝 雪纱丝柔防晒新款隔离霜 30毫升',
                    s:'￥159'
                },
                {
                    src:'./src/assets/images/a7.jpg',
                    des:'【YSL小金条】YSL 圣罗兰 雾面哑光细管口红 气质调 超显白',s:'￥139'
                },
                {
                    src:'./src/assets/images/a8.jpg',
                    des:'【阚清子同款】Kiehls 科颜氏 亚马逊白泥面膜125毫升 专柜当家明星',s:'￥249'
                },
                {
                    src:'./src/assets/images/a9.jpg',
                    des:'SHISEIDO 资生堂安热沙小金瓶防晒露SPF50+PA++++  60毫升 新老版本随机发货',s:'￥205'
                },
                {
                    src:'./src/assets/images/a10.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥179'
                },
                {
                    src:'./src/assets/images/a11.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥409'
                },
                {
                    src:'./src/assets/images/a12.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥269'
                },
                {
                    src:'./src/assets/images/a13.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥268'
                },
                {
                    src:'./src/assets/images/a14.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥269'
                },
                {
                    src:'./src/assets/images/a15.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥299'
                },
                {
                    src:'./src/assets/images/a16.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥125'
                },
                {
                    src:'./src/assets/images/a17.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥69'
                },
                {
                    src:'./src/assets/images/a18.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥29'
                },
                {
                    src:'./src/assets/images/a19.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥739'
                },
                {
                    src:'./src/assets/images/a20.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥329'
                },
                {
                    src:'./src/assets/images/a21.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥169'
                },
                {
                    src:'./src/assets/images/a22.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥299'
                },
                {
                    src:'./src/assets/images/a23.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥549'
                },
                {
                    src:'./src/assets/images/a24.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥127'
                },
                {
                    src:'./src/assets/images/a25.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥39.9'
                },
                {
                    src:'./src/assets/images/a26.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥103'
                },
                {
                    src:'./src/assets/images/a27.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥10.9'
                },
                {
                    src:'./src/assets/images/a28.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥979'
                },
                {
                    src:'./src/assets/images/a29.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥329'
                },
                {
                    src:'./src/assets/images/a30.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥1099'
                },
                {
                    src:'./src/assets/images/a31.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥19.9'
                },
                {
                    src:'./src/assets/images/a32.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥142'
                },
                {
                    src:'./src/assets/images/a33.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥69'
                },
                {
                    src:'./src/assets/images/a34.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥42'
                },
                {
                    src:'./src/assets/images/a35.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥429'
                },
                {
                    src:'./src/assets/images/a36.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥358'
                },
                {
                    src:'./src/assets/images/a37.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥59'
                },
                {
                    src:'./src/assets/images/a38.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥115'
                },
                {
                    src:'./src/assets/images/a39.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥429'
                },
                {
                    src:'./src/assets/images/a40.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥108'
                },
                {
                    src:'./src/assets/images/a41.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥248'
                },
                {
                    src:'./src/assets/images/a42.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥168'
                },
                {
                    src:'./src/assets/images/a43.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥179'
                },
                {
                    src:'./src/assets/images/a44.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥69'
                },
                {
                    src:'./src/assets/images/a45.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥169'
                },
                {
                    src:'./src/assets/images/a46.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥1099'
                },
                {
                    src:'./src/assets/images/a47.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥35'
                },
                {
                    src:'./src/assets/images/a48.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥269'
                },
                {
                    src:'./src/assets/images/a49.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥14.9'
                },
                {
                    src:'./src/assets/images/a50.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥339'
                },
                {
                    src:'./src/assets/images/a51.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥75'
                },
                {
                    src:'./src/assets/images/a52.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥85'
                },
                 {
                    src:'./src/assets/images/a53.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥218'
                },
                 {
                    src:'./src/assets/images/a54.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥539'
                },
                 {
                    src:'./src/assets/images/a55.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥159'
                },
                 {
                    src:'./src/assets/images/a56.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥186'
                },
                 {
                    src:'./src/assets/images/a57.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥179'
                },
                 {
                    src:'./src/assets/images/a58.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥249'
                },
                 {
                    src:'./src/assets/images/a59.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥135'
                },
                 {
                    src:'./src/assets/images/a60.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥328'
                },
                 {
                    src:'./src/assets/images/a61.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥39'
                },
                 {
                    src:'./src/assets/images/a62.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥168'
                },
                 {
                    src:'./src/assets/images/a63.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥219'
                },
                 {
                    src:'./src/assets/images/a64.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥289'
                },
                 {
                    src:'./src/assets/images/a65.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥416'
                },
                 {
                    src:'./src/assets/images/a66.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥85'
                },
                 {
                    src:'./src/assets/images/a67.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥929'
                }, {
                    src:'./src/assets/images/a68.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥149'
                },
                 {
                    src:'./src/assets/images/a69.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥29'
                },
                 {
                    src:'./src/assets/images/a70.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥75'
                },
                 {
                    src:'./src/assets/images/a71.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥959'
                }, 
                {
                    src:'./src/assets/images/a72.jpg',
                    des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥99'
                }, 
                 
            { src:'./src/assets/images/a73.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥299'
            },
            

            { src:'./src/assets/images/a74.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥149'
            },
            

            { src:'./src/assets/images/a75.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥15.1'
            },
            

            { src:'./src/assets/images/a76.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥125'
            },
            

            { src:'./src/assets/images/a77.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥378'
            },
            
            { src:'./src/assets/images/a78.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥89.9'
            },
            

            { src:'./src/assets/images/a79.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥180'
            },
            

            { src:'./src/assets/images/a80.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥105'
            },
            

            { src:'./src/assets/images/a81.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥205'
            },
            

            { src:'./src/assets/images/a82.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥3888'
            },
            

            { src:'./src/assets/images/a83.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥296'
            },
            

            { src:'./src/assets/images/a84.jpg',

            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥49'
            },
            
            { src:'./src/assets/images/a85.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥139'
            },
            
            { src:'./src/assets/images/a86.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥119.9'
            },
            
            { src:'./src/assets/images/a87.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥115'
            },
            
            { src:'./src/assets/images/a88.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥209'
            },
            
            { src:'./src/assets/images/a89.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥189'
            },
            
            { src:'./src/assets/images/a90.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥169'
            },
            
            { src:'./src/assets/images/a91.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥628'
            },
            
            { src:'./src/assets/images/a92.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥328'
            },
            
            { src:'./src/assets/images/a93.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥1499'
            },
            
            { src:'./src/assets/images/a94.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥338'
            },
            
            { src:'./src/assets/images/a95.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥215'
            },
            
            { src:'./src/assets/images/a96.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'新人价￥259'
            },
            
            { src:'./src/assets/images/a97.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥89'
            },
            
            { src:'./src/assets/images/a98.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥398'
            
            },
            
            { src:'./src/assets/images/a99.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥135'
            
            },
            
            { src:'./src/assets/images/a100.jpg',
            des:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',s:'￥135'
            
            },
            
            ]
        }
        
    }
}
</script>
<style scoped>
    .one{
        float: left;
        width: 66.6%;
        height: 69px;
        overflow: hidden;
        border: 1px solid gray;
        border-right:white;
         border-left: none;
       
    }
    h1>img{
        width: 50px;
        height: 50px;
    }
    .one h1{
        width: 50px;
        height: 48px;
        border: 1px solid gray;
        float: left;
        margin-top: 10px;
        border-radius: 10px;
       
    }
    .p1{
        width: 200px;
        height: 50px;
        margin-top: 15px;
        margin-left: 60pxpx;
    }
    .one .p1{
        
        font-size:15px;
        line-height: 20px;
    }
    .p2{
        color: grey;
        font-weight:100;
    }
    .oner p{
        background: red;
        color: white;
        line-height: 69px;
        width: 33.3%;
        height: 70px;
        float: left;
        text-align: center;
    }
   .oneb{
       width:100%;
       height: 45px;
        position: absolute; 
       margin-top: 70px;
   }
    .oneb1{
        width:50%;
        margin-left: 10px;
        line-height: 20px;
        margin-top: 6px;
        border: 2px solid red;
        border-radius: 20px;
        padding: 5px 25px;}
    .onec{
        position: absolute;
        margin-top: 13px;
        margin-left: 15px;
    }
    .oned{
        width: 30%;
        height: 30px;
        border: 1px solid red ;
        color: red;   
        background: white;  
    }
    .two{
        width: 100%;
        height:200px;
        margin-top: 115px;
        position: absolute;
    }
    .two img{
        width: 100%;
        height: 200px;
    }
    .two2{
        margin-top: 245px;
        width: 100%;      
    }
    .box{
        overflow: hidden;
    }
    .box li{
        float: left;
        width: 20%;
       
    }
   .box li img{
        width: 100%;    
    }
    .three-c{
        width: 100%;
        position: relative;

    }
    .three-r{
        float: right;
       
    }
    .three-l{
        float:right;
        position: absolute;
        margin-left: 50%;
        margin-top: -24%;
       

    }
    .le{
        width: 53%;
        height: 143px;
    }
    .rt{
        width: 47%;
        height: 143px;
        float: right;
        margin-top: -143px;
        margin-right: 10px;
    }
    .le,rt p{
        margin-top: 10px;
        margin-left: 10px;
    }
    .p3{
        font-weight: bold;
    }
    .p41,.p42{
        font-weight:100;
        font-size: 10px;
        float:left;
        
    }
    .p41{
        margin-top: -13px;
        margin-left: 72px;
    }
     .p42{
        margin-top: -13px;
        margin-left: 60px;
    }
    .picr{
        float: right;
    }
    .picl,.picr{
        margin-top: 13%;
    }
    .des{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        color: black;
        font-size: 14px;
        
        margin-top: 10px;
        height: 26px;
        font-weight: 100;
    }
    .box2{
        overflow: hidden;
        background-color: #f6f6f6;
    }
    .box2 li{
        width: 49%;
        float: left;
        background-color: white;
    }
    .box2 li:nth-of-type(2n){
        margin-left: 2%;
        margin-bottom: 2%;
    }
    .box2 li img{
        width: 100%;
        /* margin: 0px 10px; */
    }
    .mon{
        color: red;
        font-size: 10px;
        background-color: white;
    }
    .footer{
        width: 100%;
        height: 8%;
        background:  #f6f6f6;
        position: absolute;
        overflow: hidden;
    }
    .footer .footer-p{
        color: gray;
        text-align: center;
        margin-top: 4%;
        font-size: 10px;
        float: left;
    }
    .footer .footer-l{
        float: left;
        margin-top: 3.5%;
        margin-left: 35%;
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
       margin-left: 6%;
       }
       .di{
           width: 90%;
           height: 100px;
           margin-top: 50px;
           padding: 30px 0 0 30px;
           overflow: hidden;
       }
       .di li{
           float: left;
           margin-left:30px;
           color: gray;
       }
       .di .di1{
           margin-top: 30px;
           text-align: center;
           color: gray;
           font-size: 12px;
       }
</style>