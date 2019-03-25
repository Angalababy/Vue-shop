/**
 * Created by lenovo on 2019/3/11.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './store'
import { Button } from 'mint-ui';
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'
import Star from './components/Star/Star.vue'


import './mock/mockServer'

Vue.component(Button.name, Button);
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)


new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  store,
  router,
})
