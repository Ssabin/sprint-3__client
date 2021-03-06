import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css'
import toastr from 'toastr/build/toastr.min.js'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

import MyRoutes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);
const myRouter = new VueRouter({routes: MyRoutes, mode: 'history'})

Vue.http.options.root = 'http://localhost:3003';
window.toastr = toastr;
new Vue({
  router: myRouter,
  el: '#app',
  template: '<App/>',
  components: { App }
})
