<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    
  
  
    <scroll class="content" 
    ref="scroll" 
    :probe-type="2" 
    @scroll="contentScroll"
    @pullingUp="pullUp">
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>

      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
  
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import {getHomeMultidata,getHomeGoods} from '../../network/home'
import TabControl from "components/content/tabControl/TabControl.vue"
import HomeSwiper from "./childComps/HomeSwiper.vue"
import RecommendView from "./childComps/RecommendView.vue"
import FeatureView from "./childComps/FeatureView.vue"
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
      

    },
    data(){
      return{
        banner:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
      this.getHomeMultidata();
     

      
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{
      tabClick(index){
        // console.log(index);
        switch(index){
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick(){
        // console.log('adasd');
        this.$refs.scroll.scroll.scrollTo(0,0,1000)
      },
      contentScroll(position){
        // console.log(position);
        this.isShowBackTop= (-position.y) >1000
      },
      pullUp(){
        console.log("adasd");
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()

      },
      debouce(func,delay){
        let timer = null;


        return function(...args){
          if(timer)  clearTimeout(timer)

          timer = setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      },









      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        // console.log(res);
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page+=1

          this.$refs.scroll.scroll.finishPullUp()
      })
      }
      
    }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
  .home-nav{
    background-color: var(--color-tint);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
     z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 8;
  }
  .content{
    /* height: calc(100% - 93px); */
    /* overflow: hidden; */


    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }
</style>