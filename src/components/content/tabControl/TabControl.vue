<template>
  <div class="tab-control">
      <div v-for="(item,index) in title" :key="index" 
      class="tab-control-item"
      :class="{active: index===cIndex}"
      @click="tabClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            cIndex:0
        }
    },
    methods:{
        tabClick(index){
            this.cIndex=index;
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background-color:#fff ;
        
    }
    .tab-control-item{
        flex: 1;
        
    }
    .tab-control-item span{
        padding: 5px;
    }
    .active{
        color: var(--color-high-text);
        
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>