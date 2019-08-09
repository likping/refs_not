<template>
  <div class="hero_index px-4 mb-5 bg-white">
    <div class="hero_title d-flex ai-center">
      <span class="ico_hero"></span>
      <h3>英雄列表</h3>
      <a class="more_hero"></a>
    </div>
    <div class="hero_display">
      <ul class="display_ul">
        <li class="display_li">
          <img src="//ossweb-img.qq.com/upload/webplat/info/yxzj/20190627/1538459038600.jpg" />
        </li>
      </ul>
    </div>
    <div class="hero_slide">
      <ul class="hero_nav d-flex ai-center jc-between">
        <li
          v-for="(nav,index) in heroNavs"
          :key="index+nav"
          :index="nav.index"
          :class="{'navActive':nav.active}"
          @click="navbtn"
        >{{nav.title}}</li>
      </ul>
      <div class="hero_slide_wrap">
        <ul class="wrap_ui " v-for="(herolist,index) in heros" :key="index">
          <li v-for="(hero,index) in herolist" :key="index+hero.name">
            <a>
              <img :src="hero.src" :alt="hero.name" />
              <h3>{{hero.name}}</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navbtn(e) {
      let value = parseInt(e.target.attributes.index.value);
      this.heroNavs.forEach(item => {
        if (parseInt(item.index) == value) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      let uiArray = document.querySelectorAll(".wrap_ui");
      for (let i in uiArray) {
        if (i== value) {
          uiArray[`${i}`].classList.add("isVality");
        } else if (parseInt(i)>=0) {
            uiArray[`${i}`].classList.remove("isVality");
          }
        }
      }
  },
  data() {
    return {
      heroNavs: [
        { title: "热门", index: 0, active: true },
        { title: "战士", index: 1, active: false },
        { title: "法师", index: 2, active: false },
        { title: "坦克", index: 3, active: false },
        { title: "刺客", index: 4, active: false },
        { title: "射手", index: 5, active: false },
        { title: "辅助", index: 6, active: false }
      ],
      heros: [
        [
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          }
        ],
        [
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          },
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          },
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          },
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          },
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          },
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          },
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          },
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          },
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          },
          {
          src:"//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
          name:"后羿"
          }
        ],
        [
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          }
        ],
        [
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          }
        ],
        [
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          }
        ],
        [
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          }
        ],
        [
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          },
          {
            src: "//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
            name: "孙悟空"
          }
        ]
      ]
    };
  }
};
</script>
<style scoped lang="scss">
</style>


