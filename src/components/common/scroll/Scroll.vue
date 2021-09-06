<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    props:{
        type: Number,
        default:0
    },
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            click: true,
            probeType: this.probeType,
            pullUpLoad:true
        })

        this.scroll.on('scroll',(position)=>{
            // console.log(this.probeType);
           
            
            // this.debouce(this.scroll.refresh,3000)
            // this.debouce( console.log('1'),30)
            this.$emit('scroll',position)

        })

        this.scroll.on('pullingUp',()=>{
            // console.log("adsasd");
            this.$emit('pullingUp');
            
        })

        
    },
    methods:{
        debouce(func,delay){
        let timer = null;


        return function(...args){
          if(timer)  clearTimeout(timer)

          timer = setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      },
    }
}
</script>

<style>

</style>