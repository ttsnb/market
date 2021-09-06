<template>
  <div id="app" >
    <main-tabbar class="main-tabbar"></main-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabbar from './components/common/tabbar/MainTabbar.vue'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>
