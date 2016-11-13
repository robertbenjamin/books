import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import BookList from './components/BookList';
import AboutMe from './components/AboutMe';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: BookList },
    { path: '/about', component: AboutMe },
    { path: '*', component: BookList }
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});
