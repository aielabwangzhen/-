import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css';
import request from './requests/request'
Vue.prototype.HTTP = request
Vue.config.productionTip = false
Vue.use(VCharts)
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
//将vue文件渲染到public下的index.html/div id=app,
