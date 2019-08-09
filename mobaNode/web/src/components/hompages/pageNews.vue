<template>
  <div class="index_cont bg-white d-flex ai-center px-4 mb-5">
    <div class="index_cont_title mb-4 d-flex ai-center">
      <i class="ico_news"></i>
      <h3 class="fs-md">新闻资讯</h3>
      <a class="ico_more"></a>
    </div>
    <div class="news-content">
      <!-- 左右添加挡板作动画元素 -->
      <ul class="slide-nav d-flex ai-center jc-between">
        <li class="nav-item" v-for="(item,index) in newNavs" :key="index"  :class="{'nav-item-active':item.active}">
          <a :index="item.index" @click="newbtn" >{{item.title}}</a>
        </li>
      </ul>
      <div class="news-wrap">
        <div class="slide-new-wrap d-flex ">
          <ul class="new-list" v-for="(sublists,index ) in newWrap" :key="index">
            <li class="list-li" v-for="(list,index) in sublists" :key="index+list.title" >
              <a>
                <span class="category">{{list.category}}</span>
                <span class="split">|</span>
                <span class="title">{{list.title}}</span>
                <span class="time">{{list.time}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newNavs: [
        { title: "热门" ,index:0,active:true},
        { title: "新闻",index:1,active:false },
        { title: "公告" ,index:2,active:false},
        { title: "活动" ,index:3,active:false},
        { title: "赛事",index:4 ,active:false}
      ],
      gg: "[公告]",
      xw: "[新闻]",
      hd: "[活动]",
      rm: "[热门]",
      ss: "[赛事]"
    };
  },
  methods:{
      newbtn(e){
                let ul=document.querySelector('.slide-new-wrap');
                let intValue=parseInt(e.target.attributes.index.value);
               let  distance=- intValue * 341.2;
               let trunCss=`transform:translateX(${distance}px);`;
                ul.style=trunCss;
                //
                this.newNavs.forEach((ite)=>{
                      if(ite.index==intValue){
                        ite['active']=true
                      }else{
                           ite['active']=false
                      }
                })
      }
  },
  computed: {
    newWrap() {
      return [
        [
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.hd,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.xw,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          }
        ],
        [
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.hd,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.xw,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          }
        ],
        [
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.hd,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.xw,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          }
        ],
        [
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.hd,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.xw,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          }
        ],
        [
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.hd,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.xw,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          },
          {
            category: this.gg,
            title: "7月23日全服不停机更新公告",
            time: "07/22"
          }
        ]
      ];
    }
  }
};
</script>

