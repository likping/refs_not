import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./style.scss"
import "../public/view.scss"
import "../public/PageNews.scss"
import  "../public/heroList.scss"
import "../public/fineVideo.scss"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
