<template>
  <div class="video_section px-4 mb-5 bg-white">
    <div class="video_title d-flex ai-center">
      <span class="ico_video"></span>
      <h3>精彩视频</h3>
      <a class="more_video"></a>
    </div>
    <div class="view_slideVideo">
      <ul class="nav_slide d-flex ai-center jc-between">
        <li
          v-for="(nav,index) in videoNavs"
          :key="index+nav.title"
          :index="nav.index"
          :class="{'navActive':nav.active}"
          @click="navBtn"
        >{{nav.title}}</li>
      </ul>

      <div class="slide_video_view mt-4">
        <ul
          class="content_view d-flex flex-wrap"
          v-for="(view,index) in viewSlides"
          :key="index"
          :index="index"
        >
          <li class="item_content" v-for="(item,index) in  view " :key="index">
            <a class="view_item">
              <img :src="item.src" />
              <span class="item_title">{{item.decription}}</span>
            </a>
            <div class="v_infor">
              <span class="v_num">
                <span class="ico_video_num"></span>
                18.0万
              </span>
              <span class="v_time">7-26</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <a class="load-link">加载更多内容</a>
  </div>
</template>
<script>
export default {
  mounted() {
    document
      .getElementsByClassName("content_view")[0]
      .classList.add("activeDisplay");
  },
  methods: {
    navBtn(e) {
      let index = parseInt(e.target.attributes.index.value);
      this.videoNavs.forEach(nav => {
        if (nav.index == index && !nav.active) {
          nav.active = true;
        } else {
          nav.active = false;
        }
      });
      let ulArray = document.getElementsByClassName("content_view");

      for (var i in ulArray) {
        let item = ulArray[i];
        if (item.baseURI) {
          let viewIndex = parseInt(item.getAttribute("index"));
          if (viewIndex == index) {
            item.classList.add("activeDisplay");
          } else if (viewIndex >= 0) {
            item.classList.remove("activeDisplay");
          }
        }
      }
    }
  },
  data() {
    return {
      videoNavs: [
        { title: "精品栏目", index: 0, active: true },
        { title: "英雄攻略", index: 1, active: false },
        { title: "赛事精品", index: 2, active: false },
        { title: "赛事视频", index: 3, active: false }
      ],

      viewSlides: [
        [
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          }
        ],
        [
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          },
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          }
        ],
        [
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          },
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          },
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          }
        ],
        [
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          },
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          },
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          },
          {
            src:
              "//itea-cdn.qq.com/file/tgl/20190726/596b5904ee09579ed7fb808369647a43.1564125767.233cac2c123cbbe0b2b5264914263836.960x600_384351.jpg",
            decription: "【峡谷重案组】S3 第十集 人质反变帮凶？信白矛盾不断"
          }
        ]
      ]
    };
  }
};
</script>
