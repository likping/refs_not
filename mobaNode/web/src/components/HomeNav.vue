<template>
  <div id="app">
    <div class="home-top bg-home-top d-flex ai-center">
      <div class="logo_cont">
        <a class="logo_img" href="//pvp.qq.com/m/index.shtml"></a>
      </div>
      <div class="logo_title">
        <span class="fs-md text-white" style="display:block">王者荣耀</span>
        <p class="text-grey-home-top">团队成就更多</p>
      </div>
      <div class="download">
        <a class="mct_download_btn" href="/m/m201706/download.shtml"></a>
      </div>
    </div>
    <div class="home-bottom bg-primary">
      <ul class="text-white d-flex ai-center">
        <li>
          <a class="text-white">首页</a>
        </li>
        <li>
          <a class="text-white">攻略中心</a>
        </li>
        <li>
          <a class="text-white">赛事中心</a>
        </li>
      </ul>
    </div>
    <HomePage />
  </div>
</template>
<script>
import HomePage from "./HomePage";
export default {
  components: {
    HomePage
  }
};
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
ul,
li {
  display: inline-block;
}
</style>
