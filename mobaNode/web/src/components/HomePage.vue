<template>
  <div class="content">
    <div class="content_wrap">
      <div class="slide">
        <ul class="slide-views">
          <li v-for="(img,index) in slideImg " :key="img+index">
            <img class="image" :src="img.path" />
          </li>
        </ul>
        <ul class="slide-controller">
          <li
            v-for="(value,index) in slideController"
            :key="index+value"
            @click="btned"
            @mouseout="btn"
            :index="value.objIndex"
          ></li>
          <!-- <button class="btnleft" @click="totoleft">
            <i class="iconfont">&#xe84f;</i>
          </button>
          <button class="btnright" @click="totoright">
            <i class="iconfont">&#xe84e;</i>
          </button>-->
        </ul>
      </div>
      <pageNav />
      <pageNews />
      <heroList />
      <fineVideo />
    </div>
  </div>
</template>
<script>
import pageNav from "./hompages/pageNav";
import pageNews from "./hompages/pageNews";
import heroList from './hompages/heroList'; 
import fineVideo from './hompages/fineVideo'
export default {
  components: {
    pageNav,
    pageNews,
    heroList,
    fineVideo,
  },
  data() {
    return {
      slideImg: [
        {
          path:
            "//ossweb-img.qq.com/upload/adw/image/20190722/951dcd36e278f1e0242a0ab0ce913f51.jpeg",
          index: 11
        },
        {
          path:
            "//ossweb-img.qq.com/upload/adw/image/20190719/a852c3e5f2a4001dcf26ac9eaac185c9.png",
          index: 0
        },
        {
          path:
            "//ossweb-img.qq.com/upload/adw/image/20190724/6db09b98c936683c11b0da50e00dee2a.jpeg",
          index: 1
        },
        {
          path:
            "//ossweb-img.qq.com/upload/adw/image/20190722/951dcd36e278f1e0242a0ab0ce913f51.jpeg",
          index: 2
        },
        {
          path:
            "//ossweb-img.qq.com/upload/adw/image/20190719/a852c3e5f2a4001dcf26ac9eaac185c9.png",
          index: 22
        }
      ],
      slideController: [
        { objIndex: 0, Active: false },
        { objIndex: 1, Active: false },
        { objIndex: 2, Active: false }
      ],
      indexImage: 0
    };
  },
  methods: {
    slideImage(value) {
      let slideView = document.querySelector(".slide-views");
      let pice = -375;
      let slideDistance = pice * parseInt(value) - 375;

      if (slideDistance >= 0) {
        slideDistance = pice * 2;
        this.indexImage = 1;
      }
      if (slideDistance < pice * 3) {
        slideDistance = pice * 2;
        this.indexImage = 1;
      }
      let slideCss = ` transform:  translateX(${slideDistance}px);`;
      slideView.style = slideCss;
    },
    btned(e) {
      e.target.classList.add("btnImage");
      let value = e.target.attributes.index.value;
      this.slideImage(value);
    },
    btn(e) {
      e.target.classList.remove("btnImage");
    },
    totoleft() {
      this.indexImage--;
      this.slideImage(this.indexImage);
    },
    totoright() {
      this.indexImage++;
      this.slideImage(this.indexImage);
    }
  }
};
</script>
<style scoped>
</style>
