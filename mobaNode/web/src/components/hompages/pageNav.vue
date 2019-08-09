<template>
    <div class="home_nav bg-white" >
               <ul class="entry-list  d-flex " :class="{ dropView: !isdrop, }">
                 <li v-for="(list,index) in entryList" :key="list+index" class=" d-flex  ai-center jc-around">
                       <div  :class="list.class"></div>
                       <i></i>
                       <span>{{list.name}}</span>
                 </li>
               </ul>
               <div class="entry-btn" @click="dropBtn">
                 <span class="drop-icon" :class="{ isDropClass: !isdrop }"></span>
                 <span class="drop-text">{{isdrop? "收起" : "展开"}}</span>
               </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isdrop:true,
      entryList:[
        {class:"blz",name:"爆料站"},
        {class:"gsz",name:"故事站"},
        {class:"zbsc",name:"周边商城"},
        {class:"tyf",name:"体验服"},
        {class:"xrzq",name:"新人专区"},
        {class:"whz",name:"荣耀-传承"},
        {class:"trz",name:"同人社区"},
        {class:"zs",name:"王者营地"},
        {class:"gzh",name:"公众号"},
        {class:"bbjs",name:"版本介绍"},
      ]
    }
  },
  methods: {
    dropBtn(){
        this.isdrop=!this.isdrop;
    }
  }
};
</script>
<style scoped>

</style>

