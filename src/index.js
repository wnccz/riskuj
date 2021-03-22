import Vue from 'vue';
import Storage from 'vue-ls';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Storage);
Vue.use(Vuex);

import DefaultView from './views/defaultView.vue';
import ProjectionView from './views/projectionView.vue';
import EditorView from './views/editorView.vue';
import HelpView from './views/helpView.vue';
import './css/riskuj.css'

import store from './store/index.js';

const routes = [
  { path: '/', component: DefaultView },
  { path: '/projection', component: ProjectionView },
  { path: '/editor', component: EditorView },
  { path: '/help', component: HelpView },

]

const router = new VueRouter({
  routes // short for `routes: routes`
})

var app = new Vue({
  el: '#app',
  template: '<router-view/>',
  data: function() {
    return {
      appname: 'Skautské Riskuj!',
      editMode: false
    }
  },
  store,
  router
});