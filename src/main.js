import Vue from 'vue'
import App from './App'
import router from './router/routes'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//自己写的样式
import './style/theme.css'
import './style/characters.css'

// 注册element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
let _export = {}
app.$router.forcePush = function() {
  app.$router.push(...arguments)
  app.$router.go(0)
}

_export.app = app

export default _export
