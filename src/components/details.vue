<template>
    <main >
       
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

        <div class="one1">
            <mt-swipe :auto="4000">
                <mt-swipe-item><img src="../assets/images/pic12.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic11.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic15.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic13.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic14.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/pic10.jpg" alt=""></mt-swipe-item>
             
            </mt-swipe>
        </div>
        <div class="one2">
            <span class="o1">￥<i class="o2">37</i>起</span>
            <span class="o3">￥99</span>
            <span class="o4">3期免息</span>
            <span class="o5"><img src="../assets/images/2020.jpg" alt=""></span>
        </div>
        <div class="one3">
            <img src="../assets/images/h1.png" alt="" class="a1">
            <span class="a2">开通黑卡, 下单预计省¥4，得30元红包</span>
            <img src="../assets/images/h2.png" alt="" class="a3">
        </div>
        <div class="one4">
            立即开卡
        </div>
        <div class="one5">
            <ul class="T">
                <li class="s">
                    <a href="#"><span class="s2">10片装常规版 | 37元</span></a>
                </li>
                <li class="s1">
                    <a href="#"><span>新款第二件半价 | 59元</span></a>
                </li>
            </ul>
        </div>
        <div class="one6">
            <h4>【单盒低至23】韩国JMsolution面膜燕窝水母蜗牛蜂蜜急救珍珠面膜夏季保湿补水【不支持备注下单】</h4>
            <p>发货以选择规格（加入购物车再下单）为准，不支持备注下单，如收到货后发现规格问题暂不支持退货退款，敬请谅解</p>
        </div>
        <div class="two">
            <img src="../assets/images/g1.png" alt="" class="g" >
            <img src="../assets/images/g2.png" alt="" class="g1"><br><br>
            <span class="g2">￥12.33</span>
            <span class="g3">起X3期免息，预计可免0.85元</span>
            <span class="g4">享免息 去App ></span>
        </div>
        <div class="three">
            <p>请选择：颜色<span>></span></p>
            
            <ul class="T1">
                <span class="c">促销：</span>
                <li>[满件减] 满2件减24，满3件减43，满4件减59</li>
                <li>[加价购] 加入购物车，即可低价换购热销商品</li>
            </ul>
            <span class="c1">></span>
             
             <ul class="T2">
                 <span class="t">配送:</span>
                 <li> 金华 至 <img src="../assets/images/504.jpg" alt=""> 广州市荔湾区</li>
                 <li>16:00前完成支付，预计8月30日（周日）送达</li>
                 <span class="t2">></span>
             </ul>
             <ul class="T3">
                 <li>运费：<span>免运费</span></li>
             </ul>
              <span class="as">说明：</span>
             <ul class="T4">    
                 <li class="txt">商品税费</li>
                 <li class="txt">不支持7天无理由退货</li>
                 <li class="txt">不可使用优惠券</li>
                 <li class="txt">ES海外专营店发货</li>
             </ul>
             <ul class="T5">
                 <li>其他小伙伴们说（14096）<span class="t5">></span></li>
             </ul>    
        </div>
        <div class="four">
            <ul class="T6">
                <li class="itm"><img src="../assets/images/itm1.webp" alt=""><span class="we">1***2</span><p>价格实惠，发货速度快，补水效果强力，喜欢用完会持续...</p></li>
                <li><img class="it" src="../assets/images/itm3.webp" alt=""></li>
                <li class="itm"><img src="../assets/images/itm2.jpg" alt=""><span>1***9</span><p>很不错哦，很滋润，下次还要来买，真心不错</p></li>
            </ul>
            <ul class="T7">
                <img src="../assets/images/IES.webp" alt="">
                <li><p>ES海外专营店</p><br><p>品牌商入驻&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务保障</p></li>
            <hr>
                <span class="a">208</span>
                <span class="b">4.87 <i>高</i> </span><br>
                <span class="c">全部商品</span>
                <span class="d">综合评分</span><br><br><br><br>
                <span class="e">查看分类</span>
                <span class="f">进店看看</span><br><br>
            </ul>
            <ul class="T8">
                <img class="a-1" src="../assets/images/1-1.jpg" alt="">
                <p class="b1">JMsolution</p>
                <p class="b2">在售商品<span class="a-2">485</span></p>
                <button class="a-3">进入品牌</button>
            </ul>
            <ul class="box2">
                <li v-for="(item,index) in list1">
                    <img v-bind:src="item.src" alt="">
                    <p class="des">{{item.des}}</p>
                    <p><span class="mon">{{item.s}}</span></p>
                </li>
            </ul>
            <h3 class="h">小考拉推荐</h3>
            <ul class="box3">
                <li v-for="(item,index) in list2">
                    <img v-bind:src="item.src" alt="">
                    <p class="des">{{item.des}}</p>
                    <p><span class="mon">{{item.s}}</span></p>
                </li>
            </ul>
            <p class="xq">详情介绍</p>
            <img class="v-img" src="../assets/images/xq.jpg" alt="">
            <img  class="v-i" src="../assets/images/xq1.png" alt="">
            <h3 class="v-t" >产品信息</h3>

            <p class="cp1">其他属性</p><br>
            <p class="cp2">功能</p>     <p class="cp6">补水保湿 滋润 提亮肤色</p><br>
            <p class="cp3">用法</p>     <p class="cp7">其他</p><br>
            <p class="cp4">适用年龄</p> <p class="cp7">18-35岁 18岁以下 35-50岁</p><br><br>
            <p class="cp8" >展开^</p>
            <ul class="box4">
                <li v-for="(item,index) in list3">
                    <img v-bind:src="item.src" alt="">
                </li>
            </ul>
            <footer class="bt">
                
                <h1 class="bt1">不同版本信息说明</h1>
                <p class="bt2">由于海淘商品是品牌方交由不同国家的生产厂家生产且出售国家地区不同，因此会出现同一商品多版本情况，不同版本的商品会存在细微的差异
                <span class="bt3">（包括产地信息、批次号、产品包装、外观细节等），请以实物为准。</span></p>
                <p class="bt2">小考拉对每批商品都会经过5道程序仔细核对，确保发到您手中的商品均为正品，假一赔十，请您放心购买</p>         
            </footer>
            
            <p class="bz">包装与生产日期</p>
            
            <p class="bz1">1. 商品若出现新、老版本更替，可能与商详页展示内容细节有所不同（如包装颜色、式样等变化；批次产地不同等），但不影响商品品质</p>
            <p class="bz1">2. 基于环保、便捷等理念，大部分国际一线品牌、奢侈品包装较为简易，无礼品袋、小样等赠送；部分商品包装可能无外盒或盒口无封口贴、未塑封（多见于欧美、日韩化妆品）</p>
            <p class="bz1">3. 经跨国长途运输，商品外包装可能出现压痕、微损、封签（若有）脱开、喷印日期因刮蹭碰撞导致磨损等现象，但通常不影响商品品质 </p>
            <p class="bz1">4. 跨境商品包装上一般不标注保质期限，通常只在产品包装上标注生产日期或到期日，也存在仅标注出厂批号的情况，比如日本、欧洲洗护以及化妆品，但一般可通过批号识别生产或者失效日期。</p>
            <p class="bz1">5. 各国家或地区商品有效期的书写方式，可在考拉pc页面底部-新手指南-常见问题中查看详情。跨境食品一般表示"Best before date"，即最佳赏味日期。该日期不是"最终保质期"，意为在此日期前食用能保证食物新鲜，故在"最佳赏味日期"前食用风味更佳。</p>
            <p class="bz1">考拉海购平台的跨境商品都是符合原产地规定的合格产品。</p><br><br>
        
        <p class="sp">商品购买及服务相关</p><br>
        <p class="sp1">1. 基于跨境属性：1）下单后将无法支持更改地址；2）不支持无理由退货的商品，发货后不支持无理由取消订单及无理由拒签商品。</p>
        <p class="sp1">请您下单前务必仔细核对确认所购商品，并确保收件地址、收件人及联系方式准确无误。</p>
        <p class="sp1">2. 基于跨境属性，七天无理由退货支持与否请以商品详情页提示为准。</p>
        <p class="sp1">3. 跨境商品无法提供发票，并可能因品牌保修限制，无法支持国内保修，无法享受与原产地同等的售后服务，请您知晓并理解。</p>
        <p class="sp1">4. 客服推荐尺码仅基于普通人认知及理解，具体请您查看详情页商品具体参数后进行决策，并以此为准。</p>
        <p class="sp1">5. 订单确认页“给商家留言”版块仅限对商家的温馨提示，若需对订单内容作出实质性变更的，请联系商家沟通并达成一致，否则留言内容将视为无效。</p>
        <p class="sp1">6. 贴身衣类商品建议您清洗后再使用；化妆品类商品因个体肤质不同，请您使用前先在手臂试用，如出现过敏情况请立即停止使用，并视情形及时就医。</p>
        <p class="sp1">7. 保价时效等相关问题详见平台规则。</p>

        <p class="spin">商品发货及运输相关</p><br>
        <p class="spin1">1. 商品发货后，通常预计10-16个工作日到货（跨境运输受地域远近、相关管制等各因素影响，时效可能存在迟延，请随时关注后台物流更新轨迹并以此为准）</p>
        <p class="spin1">2. 请您于签收时开箱查验确认内物商品完好，若出现问题，尽可能完整拍摄外箱及面单、箱内清单及实物问题照片或视频，联系考拉商家为您解决。</p>
        <p class="spin1">更多内容您可查看平台公示的相关规则、服务帮助，或联系考拉客服9510286</p>

        <p class="jg">价格说明</p><br>
        <p class="spin1">1.划线价、参考价：商品展示的划线价或参考价可能是品牌专柜价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在考拉上曾经展示过的销售价；由于地区、时间的差异性和市场行情的波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
        <p class="spin1">2.促销价：如无特殊说明，促销价是销售商在参考价基础上给予的优惠价格。如有疑问，您可以与客服联系。</p>
        <p class="spin1">3.考拉价：考拉非会员用户购买的商品详情页显示的售价，是非会员用户最终决定是否购买该商品的依据。</p>
        <p class="spin1">4.会员价：在考拉价的基础上给予会员用户的优惠价格，仅会员用户可以会员价购买该商品。</p>
        <p class="spin1">5.工厂价：该产品在工厂生产完成后直供考拉全球工厂店，由工厂店销售给用户的价格，该价格已省去品牌溢价、广告成本、中间商差价等费用。</p>
        <p class="spin1">6.折扣：页面显示的“折扣”为考拉价与划线价的对比，该对比值仅供您参考，不作为计算考拉价的依据。 </p>
        <p class="spin1">7.价格异常：因可能存在系统缓存、页面更新延迟等不确定性情况，导致价格显示异常，商品具体售价请以订单结算页价格为准。如您发现异常情况出现，请立即联系我们补正，以便您能顺利购物。</p>


        <p class="xf">消费者告知书</p><br>
        <p class="xf1">尊敬的客户：</p>
        <p class="spin1">您好！为帮助您更好地选购境外商品，<span class="xf2">请您在购买前务必认真、详细阅读并完全理解本告知书的全部内容，并对自身风险承担做出客观判断</span>同意本告知书内容后再下单购买：</p>
        <p><br><br></p>
        <p class="spin1">1.您在考拉海购上购买的跨境商品等同于境外购买，商品本身可能无中文标签，如有需要，您可以通过商品详情页查看相关商品标签中文翻译或联系客服。</p>
        <p class="spin1">2.根据相关法律政策，您选购的跨境商品仅限个人自用，不得进行再次销售。</p>
        <p class="spin1">3.您购买的跨境商品符合原产地有关质量、安全、卫生、环保、标识等标准或技术规范要求，可能与我国标准有所不同，由此可能产生的危害、损失或者其他风险，将由您自行承担。</p>
        <p class="spin1">4.考拉海购为平台经营者，商品均由商家向您提供，由其承担商品质量安全保证责任。</p>
        <p class="spin1">考拉海购精选全球好货，严控每一个环节，为顾客提供正品保障。<br>&nbsp;&nbsp;谢谢！</p>

        <p><img class="cc" src="../assets/images/zx.png" alt=""></p>

        <p class="tl">同类目推荐</p>

        <ul class="box5">
            <li>首页 &nbsp;&nbsp;&nbsp;&nbsp;|</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;客户端&nbsp;&nbsp;&nbsp;&nbsp;|</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;|</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;注册</li>
        </ul><br><br><br><br><br>
        <p class="al">阿里巴巴版权所有@2003-2020</p><br><br><br><br><br>
        </div>

    <div class="bottom-bar">
        <mt-tabbar v-model="selected">
             
                <mt-tab-item id="one">
                    <img  src="../assets/images/dp.jpg">
                </mt-tab-item>
            

            
                <mt-tab-item id="two">
                    <img  src="../assets/images/kf.jpg">
                </mt-tab-item> 
            

            <router-link to='/car'>
                <mt-tab-item id="three">
                    <img  src="../assets/images/gw.jpg">
                </mt-tab-item>
            </router-link>

                <mt-tab-item id="three">
                    <div class="jr">
                        加入购物车
                    </div>
                   
                </mt-tab-item> 

                <mt-tab-item id="four">
                    <div class="lj">
                    立即购买
                </div>
                 
                </mt-tab-item> 


        </mt-tabbar>
</div>



    </main>
</template>
<script>
export default {
    data(){
        return{
            selected:'',
            list1:[
            {    src:'./src/assets/images/jm1.jpg',
                des:'【自营2件装】JMsolution 水光蜂蜜面膜 10片+急救补水针剂面膜10片',
                s:'￥95'
            },
            {    src:'./src/assets/images/jm2.webp',
                des:'【两盒50起】JMsolution肌司研蜂蜜面膜,珍珠面膜三部曲水光针剂急救面膜蜗牛原液面膜（5片10片）/盒',
                s:'￥47'
            },
            {    src:'./src/assets/images/jm3.webp',
                des:'【单盒低至22起】【包邮】韩国JMsolution新款面膜燕窝水母蜗牛面膜蜂蜜深水炸弹急救面膜海洋珍珠面膜',
                s:'￥36'
            },
            
        ],
        list2:[
            {
                 src:'./src/assets/images/xk.webp',
                des:'【6盒装60片】韩国JMsolution面膜燕窝*2+水母*2+急救*2夏季保湿补水滋养润肤',
                s:'￥189'
            },
             {
                 src:'./src/assets/images/xk1.webp',
                des:'【＋9.9换购洗面奶】【3盒】 韩国Dr.Jart+/蒂佳婷面膜补水保湿舒缓清洁面膜女-绿色+蓝色+黑色5片/盒',
                s:'￥109'
            },
             {
                 src:'./src/assets/images/xk2.jpg',
                des:'【3盒】JMsolution 深水炸弹水光针剂急救深层补水保湿玻尿酸面膜 10片',
                s:'￥115'
            }
        ],
        list3:[
            {
                src:'./src/assets/images/8-1.webp'
            },
             {
                src:'./src/assets/images/8-2.webp'
            },
             {
                src:'./src/assets/images/8-3.webp'
            },
             {
                src:'./src/assets/images/8-4.webp'
            }, {
                src:'./src/assets/images/8-5.webp'
            }, {
                src:'./src/assets/images/8-6.webp'
            }, {
                src:'./src/assets/images/8-7.webp'
            }, {
                src:'./src/assets/images/8-8.webp'
            }, {
                src:'./src/assets/images/8-9.webp'
            }, {
                src:'./src/assets/images/8-10.webp'
            }, {
                src:'./src/assets/images/8-11.webp'
            }, {
                src:'./src/assets/images/8-12.webp'
            }, {
                src:'./src/assets/images/8-13.webp'
            }, {
                src:'./src/assets/images/8-14.webp'
            }, {
                src:'./src/assets/images/8-15.webp'
            }, {
                src:'./src/assets/images/8-16.webp'
            }, {
                src:'./src/assets/images/8-17.webp'
            }, {
                src:'./src/assets/images/8-18.webp'
            }, {
                src:'./src/assets/images/8-19.webp'
            }, {
                src:'./src/assets/images/8-20.webp'
            }, {
                src:'./src/assets/images/8-21.webp'
            }, {
                src:'./src/assets/images/8-22.webp'
            }, {
                src:'./src/assets/images/8-23.webp'
            }, {
                src:'./src/assets/images/8-24.webp'
            }, {
                src:'./src/assets/images/8-25.webp'
            }, {
                src:'./src/assets/images/8-26.webp'
            }, {
                src:'./src/assets/images/8-27.webp'
            },
            {
                src:'./src/assets/images/8-28.webp'
            },{
                src:'./src/assets/images/8-29.webp'
            },{
                src:'./src/assets/images/8-31.webp'
            },{
                src:'./src/assets/images/8-32.webp'
            },{
                src:'./src/assets/images/8-33.webp'
            },{
                src:'./src/assets/images/8-34.webp'
            },{
                src:'./src/assets/images/8-35.webp'
            },{
                src:'./src/assets/images/8-36.webp'
            },{
                src:'./src/assets/images/8-37.webp'
            },{
                src:'./src/assets/images/8-38.webp'
            },{
                src:'./src/assets/images/8-39.webp'
            },{
                src:'./src/assets/images/8-40.webp'
            },{
                src:'./src/assets/images/8-41.webp'
            },{
                src:'./src/assets/images/8-42.webp'
            },
        ]
       
        }
        
    }
}
</script>

<style scoped>
main{
    position: relative;
}
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
        width: 100%;
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
    .mint-swipe-indicators{
        bottom: 0px;
    }
    .one1{
        width: 350px;
        height: 345px;
        position: absolute;
        margin-top: 30%;
    }
    .one1 img{
        width: 100%;
    }
   
    .one2{
        width: 100%;
        height: 50px;
        background: #ffdadb;
        position: absolute;
        margin-top: 129%;
        /* overflow: hidden; */

    }
    .o1{
        color: red;
        line-height: 50px;
    }
    .o2{
        font-size: 30px;
        font-weight: bold;
    }
    .o3{
            text-decoration: line-through;
            font-size: 13px;
            color: #999;
    }
    .o4{
            background:#ff9839 ;
            display: inline-block;
            padding: 0 5px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            margin-left: 10px;
            vertical-align: 2px;
            font-size: 11px;
            color: #fff;
            border-radius: 3px
    }
    .o5 img{
        width: 25px;
        height: 40px;
        float: right;
        margin-top: 5px;
        margin-right: 10px;
    }
    .one3{
        width: 100%;
        height: 54px;
        background: #f7f7f7;
        position: absolute;
        margin-top: 145%;
        margin-left: 2.5%;
        
    }
    .a1{
        display: inline-block;
        vertical-align: middle;
        width: 10%;
        height: 15px;
        line-height:15px;
        float: left;
        margin: 1px 8px 0 0;
    }
    .a2{
        overflow: hidden;
        word-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        vertical-align: -12px;
        display: inline-block;
        line-height: 21px;
        height: 21px;
        font-size: 12px;
        float: left;
        color: #333;
    }
    .a3{
        display: inline-block;
        width: 20px;
        height: 13px;
        padding: 4px 10px;
    }
    .one4{
        width: 13%;
        height: 43px;
        margin-top: 507px;
        right: 0;
        position: absolute;
        background: #f3eee3;
        line-height: 17px;
        padding: 12px 0px 0px 15px;
    }
    .one4 .a4{
        width: 55px;
        height: 55px;
        background: #f3eee3;
        position: absolute;
        right: 0; 
        margin-top: 536px;
        
    }
    .a4{
            font-size: 19px;
            color: #333;
            
            font-weight: 100;
    }
    .one5{
        width: 95%;
        height: 50px;
        position: absolute;
        margin-top: 160%;
        margin-left: 2.5%;
        border-bottom: 1px solid #e6e6e6;
    }
    .one5 .T li{
        float: left;
        margin-right: 5px;
        border-radius: 5px;
        padding:4px;
        margin-top: 10px;
    }
.s2{
    color: red;
}
.s{
    
    border: 1px solid red;

}
.s1{
    border: 1px solid gray;
}
.one6{
margin-top: 155%;
float: left;
}
h4{
       line-height: 18px;
    padding-top: 10px;
    margin: 0 10px 6px;
    font-size: 14px;
    color: #333;
    font-weight: 700;
}
.one6 p{
    padding: 0 10px;
    font-size: 13px;
    color: #333;
    line-height: 21px;
}

.two{
    width: 100%;
    height: 60px;
    background: white;
    position: absolute;
    margin-top: 704px;
    overflow: hidden;

}

.two .g{

    width: 107px;
    margin-top: 10px;
    float: left;
    margin-left: 2.5%;
    
}
.two .g1{
width: 60px;
float: left;
 margin-top: 11px;
 margin-left: 5px;
}
.g2,.g3{
    margin-top: 20px;
    font-size: 10px;
    margin-left: 2.5%;
}
.g2{
    font-size: 20px;
    font-weight: bold;
}
.g3{
    margin-left: 0px;
}
.g4{
    float: right;
    color: red;
    font-size: 10px;
    margin-top: 5px;
}
.three{
    width: 100%;
    height: 280px;
    position: absolute;margin-top: 215%;
    border-top: 10px solid #f7f7f7;
}
.three p{
    margin-top: 20px;
    margin-left:2.5% ;
    padding: 0px 0px 20px 0px;
    border-bottom:1px solid gray;
}
.three p span{
    float: right;
    margin-right: 10px;
}
.three .T1 li{
    font-size: 12px;
    color: red;
    line-height: 20px;
    margin-left: 60px;
}
.T1{
    border-bottom: 1px solid gray;
}
.three ul{
    width: 100%;
    height: 50px;
    margin-top: 17px;
    /* border-bottom: 1px solid gray; */
    margin-left: 2.5%;
}
.c{
    float: left;
    margin-left: 2.5%;
    
    
}
.c1{
    float: right;
    margin-top: -40px;
    margin-right: 5px;
}
.T2{
    overflow: hidden;
    border-bottom: 1px solid gray;
}
.three .T2 li{
    font-size: 12px;
    color: gray;
    line-height: 20px;
    margin-left: 60px;
}
.t{
    float: left;
    margin-left:2.5% ;
}
.T2 li img{
    width: 15px;
}
.t2{
    float: right;
     right: 5px;
     margin-top: -36px;
    position: absolute;
}
.T3{
    border-bottom: 1px solid gray;
}
.T3 li{
    margin-left: 2.5%;
}
.T3 span{
    font-size: 10px;
}

.T4 li{
    float: left;
    position: relative;
    margin: 0 10px;
    line-height: 22px;
    font-size: 12px;
    list-style: disc;
    margin-top: -5px;
    margin-left: 15%;
}
.as{
    margin-left: 5%;
}
.T5{
    border-top: 10px solid #e6e6e6;
    padding: 10px;
}
.T5 .t5{
    float: right;
    position: absolute;
    right: 5px;
}
.four{
   margin-top: 335%;
   position: absolute;

}
.T6{
    width: 100%;
    height:140px ;
    padding: 10px;
    border-bottom: 10px solid #e6e6e6;
    margin-left: 2.5%;
}
.T6 .itm img{
    width: 25px;
}
.T6 li{
    float: left;
    width: 32%;
}
.T6 .itm p{
    width: 100px;
    height: 100px;
    font-size: 13px;
}
.T6 .it{
    width:90px ;
}
.T7{
    border-bottom: 10px solid #e6e6e6;
}
.T7 img{
    width: 50px;
    margin: 10px 0px 0px 10px;
}
.T7 li{
    /* float: left; */
    margin-left: 72px;
    margin-top: -48px;
    font-size: 13px;
    color: gray;
}
.T7 span{
    font-weight: 100;
}
.T7 .a{
    margin-left:30%;
}
.T7 .b{
    margin-left:20%;

}.T7 .b i{
    font-size: 8px;
    background: red;
    color: white;
    border-radius: 50%;
}
.T7 .c{
     margin-left:28%;
     margin-top: 10px;
}
.T7 .d{
     margin-left:14%;
     margin-top: 10px;
}
.T7 .e{
    color: red;
    border: 1px solid red;
    border-radius: 30px;
    padding: 5px 5px;
    margin-left: 30%;
}
.T7 .f{
    color: red;
    border: 1px solid red;
    border-radius: 30px;
    padding: 5px 5px;
    margin-left: 10%;
}
.T8 .a-1{
    border: 1px solid gray;
    width: 50px;
    margin: 10px 0px 0px 10px;
}
.T8 .a-2{
    color: red;
}
.T8 .b1 {
margin-left: 25%;
margin-top: -40px;
line-height: 20px;
}
.T8 .b2 {
margin-left: 25%;
}
.T8 .a-3{
    float: right;
    margin-top: -40px ;
    padding: 5px 15px;
    background: white;
    border: 1px solid black;
}
.box2{
        overflow: hidden;
        background-color: #f6f6f6;
        border-bottom: 10px solid #e6e6e6;
    }
    .box2 li{
        width: 32%;
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
        margin-left: 30%;
    }
    .des{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        /* word-break: break-all; */
        font-size: 14px;
        
        margin-top: 10px;
        height: 26px;
        font-weight: 100;
    }
    .h{
        margin-top: 10px;
        margin-left: 10px;
    }
    .box3{
        overflow: hidden;
        background-color: #f6f6f6;
        border-bottom: 10px solid #e6e6e6;
    }
    .box3 li{
        width: 32%;
        float: left;
        background-color: white;
    }
    .box3 li:nth-of-type(2n){
        margin-left: 2%;
        margin-bottom: 2%;
    }
    .box3 li img{
        width: 100%;
        /* margin: 0px 10px; */
    }
    .xq{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9;
            width: 100%;
            height: 44px;
            line-height: 44px;
            text-align: center;
            font-size: 14px;
            font-weight: 700;
            margin-top: 810px;

    }
.v-img{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin-top: 810px;
}
.v-i{
    width: 100%;
    margin-top: 20px;
}
.v-t{
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 20px;
}
.cp1{
    background:#e6e6e6 ;
    color: gray;
    height: 35px;
    line-height: 35px;
}
.cp2,.cp3,.cp4,.cp5,.cp6,.cp7{
    border: 1px solid #e6e6e6;
     line-height: 35px;
         height: 35px;
         padding: 0px 0px 0px 10px;
}  
.cp2,.cp3,.cp4{
    width: 28%;
}  
.cp5,.cp6,.cp7{
    width: 70%;
    margin-left: 107px;
    margin-top: -36px;
}     
.cp8{
    text-align: center;
    border-bottom: 10px solid rgba(128, 128, 128, 0.692);
}
.box2{
        overflow: hidden;
        background-color: #f6f6f6;
        border-bottom: 10px solid #e6e6e6;
    }
    .box4 li{
        width: 100%;
        float: left;
        background-color: white;
    }
    .box4 li:nth-of-type(2n){
        margin-left: 2%;
        margin-bottom: 2%;
    }
    .box4 li img{
        width: 100%;
        /* margin: 0px 10px; */
    }
    .bt{
        background: #e6e6e6;
        
    }
    .bt1{
        text-align: center;
        padding: 0px 0px 30px 0px;
        font-size: 16px;

    }
    .bt2{
        font-size: 11px;
    color: #666;
    text-align: justify;
    line-height: 18px;
    }
    .bt3{
            color: #000;
    }
    .bz{
        font-size: 14px; 
        color: rgb(0, 0, 0);
        text-align: center;
        margin-top: 30px;font-weight: bold;
    }
    .bz1{
        margin-top: 20px;
        font-size:12px ;
        color: #999;
        line-height: 20px;
    }
    .xf,.jg,.spin,.sp{
        text-align: center;
        font-weight: bold;

    }
    .sp1{
        font-size: 12px;
        color: #999;
        margin-bottom: 20px;
        line-height: 20px;
    }
    .spin1{
        font-size: 12px;
        color: #999;
        margin-bottom: 20px;
        line-height: 20px;
    }
    .xf1{
       font-size: 12px;
        color: #999; 
    }
    .xf2{
        color: rgb(102, 102, 102);
        font-weight: bold;
    }

    .cc{width: 100%;
     }
     .tl{
         font-size: 15px;
         color: #999;
         margin-left: 10px;
         margin-top: 10px;
     }
     .box5 li{
         float: left;
         margin-left: 12px;
         margin-top: 50px;
         
     }
     .al{
         text-align: center;
         color: #666;
     }
     .mint-tabbar{
       float: left;
       position: fixed;
       bottom: 0px;
        width: 100%;
        height: 50px;
    }
   .mint-tabbar a{
       width: 36%;
       height: 50px;
       margin-left: -6%;
       }
     .bottom-bar img{
         width: 56px;
         margin-left: 15px;
     }
     .bottom-bar .lj{
         width: 89px;
         height: 40px;
         color: white;
           line-height: 40px;
         background: red;
             margin-left: -43%;
             font-weight: bold;
     }
     .bottom-bar .jr{
         width: 90px;
         height: 40px;
         color: white;
         margin-left:-65%;
         background:#404040 ;
         line-height: 40px;
          font-weight: bold;
     }

</style>