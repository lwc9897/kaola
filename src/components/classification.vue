
<template>
    <main>
        <div class="listTable">
            <mt-navbar v-model="selected">
                <div class="aa">            
                <mt-tab-item id="1">美容彩妆</mt-tab-item>
                <mt-tab-item id="2">奶粉/纸尿裤</mt-tab-item>
                <mt-tab-item id="3">母婴专区</mt-tab-item>
                <mt-tab-item id="4">营养保健</mt-tab-item>
                <mt-tab-item id="5">数码家电</mt-tab-item>
                <mt-tab-item id="6">个人洗护</mt-tab-item>
                <mt-tab-item id="7">轻奢</mt-tab-item>
                <mt-tab-item id="8">服饰鞋靴</mt-tab-item>
                <mt-tab-item id="9">运动户外</mt-tab-item>
                <mt-tab-item id="10">手表配饰</mt-tab-item>
                <mt-tab-item id="11">家居生活</mt-tab-item>
                <mt-tab-item id="12">环球美食</mt-tab-item>
                <mt-tab-item id="13">全球工厂店</mt-tab-item>
                <mt-tab-item id="14">海外直邮</mt-tab-item>
                <mt-tab-item id="15">网易严选</mt-tab-item>
                <mt-tab-item id="16">海外商超</mt-tab-item>
                <mt-tab-item id="17">生鲜</mt-tab-item>
                <mt-tab-item id="18">充值中心</mt-tab-item>
                <mt-tab-item id="19">宠物生活</mt-tab-item>
                </div>
            </mt-navbar>


            <mt-tab-container v-model="selected">

                <mt-tab-container-item id="1">
                    <div class="product" v-for="(v,i) in list">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                    
                <mt-tab-container-item id="2">
                    <div class="product" v-for="(v,i) in list2">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>

                <mt-tab-container-item id="3">
                   <div class="product" v-for="(v,i) in list3">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>

                <mt-tab-container-item id="4">
                    <div class="product" v-for="(v,i) in list4">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="5">
                    <div class="product" v-for="(v,i) in list5">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="6">
                    <div class="product" v-for="(v,i) in list6">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="7">
                    <div class="product" v-for="(v,i) in list7">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="8">
                    <div class="product" v-for="(v,i) in list8">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="9">
                    <div class="product" v-for="(v,i) in list9">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="10">
                    <div class="product" v-for="(v,i) in list10">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="11">
                    <div class="product" v-for="(v,i) in list11">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="12">
                    <div class="product" v-for="(v,i) in list12">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="13">
                    <div class="product" v-for="(v,i) in list13">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="14">
                    <div class="product" v-for="(v,i) in list14">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="15">
                    <div class="product" v-for="(v,i) in list15">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="16">
                    <div class="product" v-for="(v,i) in list16">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="17">
                    <div class="product" v-for="(v,i) in list17">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="18">
                    <div class="product" v-for="(v,i) in list18">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
                <mt-tab-container-item id="19">
                    <div class="product" v-for="(v,i) in list19">
                        <p class="current">{{v.title}}</p>
                        <ul class="listItem">
                            <li v-for="a in v.info">
                                <div>
                                    <img :src="a.imgSrc"/>
                                </div>
                                <p>{{a.name}}</p>
                            </li>
                        </ul>
                    </div>    
                </mt-tab-container-item>
            </mt-tab-container>
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
                    <img   src="../assets/images/first21.png">
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
            selected:'',
            list:{},
            list2:{},
            list3:{},
            list4:{},
            list5:{},
            list6:{},
            list7:{},
            list8:{},
            list9:{},
            list10:{},
            list11:{},
            list12:{},
            list13:{},
            list14:{},
            list15:{},
            list16:{},
            list17:{},
            list18:{},
            list19:{}
       }
   },
   mounted(){
       this.$http.get('../../data/data.json')
       .then((response)=>{
           console.log(response.data);
           this.list=response.data.list;
           this.list2=response.data.list2;
           this.list3=response.data.list3;
           this.list4=response.data.list4;
           this.list5=response.data.list5;
           this.list6=response.data.list6;
           this.list7=response.data.list7;
           this.list8=response.data.list8;
           this.list9=response.data.list9;
           this.list10=response.data.lis10t;
           this.list11=response.data.list11;
           this.list12=response.data.list12;
           this.list13=response.data.list13;
           this.list14=response.data.list14;
           this.list15=response.data.list15;
           this.list16=response.data.list16;
           this.list17=response.data.list17;
           this.list18=response.data.list18;
           this.list19=response.data.list19;
           
       })
       .catch(function(error){
           console.log(error)
       })
       .then(function(){

       });
   }
}
</script>
<style  scoped>
/* ul{
    overflow: hidden;
    border: 1px solid red;
}
ul li{
    float: left;
    width: 25%;
    margin-top:145% ;
}
ul li img{
    width: 80%;
}
 .pic{
        display: inline-block;
    }
    .active{
        display: none;
    }
    .router-link-active .pic{
        display: none;
    }
    .router-link-active .active{
        display: inline-block;
    } */
    .bottom-bar img{
        width: 50%;
       
        margin-left: 2%;
    }

    .aa{height: 600px;}

    .listTable{
        display: flex;
    }
    .mint-navbar{
        position: fixed;
        left: 0;
        display: block;
        width: 22%;
        overflow: auto;
    }
.mint-tab-item{
		display: block;
		background: #f3f4f5;
	}
.mint-tab-container{
		width: 78%;
		margin-left: 22%;
		padding-left: 5%; 
		padding-right: 5%;
		background: white;
		box-sizing: border-box;
	}
.mint-navbar .mint-tab-item.is-selected {
	    border-left: 4px solid #E80080;
	    border-bottom: 0;
        color: white;
        
        margin: auto;
        background: red;
        border-radius: 30px;
        width: 80%;
        height: 5px;
    }
.mint-tab-item-label{
    	font-size: 16px;
    }
.listItem{
    	display: flex;
    	flex-wrap: wrap;
    }
.listItem li{
    	margin-bottom: 30px;
    	margin-right: 1%;
    	width: 32%;
    	text-align: center;
    	font-size: 14px;
    }
    .listItem li img{
        width: 100%;
    }
.listItem p{
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
    	font-size: .5rem;
    }
.current{
    	margin: 20px 0 25px;
    	font-size: 14px;
    }
.product{
    	margin-bottom: 20px;
    	/* border-bottom: 1px solid #dedede; */
    }
    ::-webkit-scrollbar {/*隐藏滚轮*/
		display: none;
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