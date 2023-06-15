import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import store from './store/index.js'

import wechat from '@/utils/wechat.js'
import format from '@/utils/format.js'

Vue.config.productionTip = false

Vue.prototype.$wechat = wechat
Vue.prototype.$format = format

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()