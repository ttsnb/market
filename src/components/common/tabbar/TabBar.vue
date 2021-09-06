<template>
  <div id="tab-bar">
        <!-- <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt="">
            首页
        </div>
        
      <div class="tab-bar-item">
          <img src="../../assets/img/tabbar/home.svg" alt="">
          分类
        </div>
      <div class="tab-bar-item">
          <img src="../../assets/img/tabbar/home.svg" alt="">
          购物车
        </div>
      <div class="tab-bar-item">
          <img src="../../assets/img/tabbar/home.svg" alt="">
          我的
        </div> -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style>
     #tab-bar{
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -1px 1px rgba(100, 100, 100, .1);
    z-index: 9;
  }
  
</style>