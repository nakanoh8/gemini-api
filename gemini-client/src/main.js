import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui' // 追記
import locale from 'element-ui/lib/locale/lang/ja' // 追記
import 'element-ui/lib/theme-chalk/index.css' // 追記

import firebase from 'firebase' // 追記

import config from './firebaseConfig'

Vue.config.productionTip = false;
Vue.use(ElementUI, {locale}) // 追記

var config = {
  apiKey: "AIzaSyCiYdmOCdZHUMsk_h_IcIXvWAlkbBq042U",
  authDomain: "gemini-api-2b8ef.firebaseapp.com",
  databaseURL: "https://gemini-api-2b8ef.firebaseio.com",
  projectId: "gemini-api-2b8ef",
  storageBucket: "gemini-api-2b8ef.appspot.com",
  messagingSenderId: "867393601201",
  appId: "1:867393601201:web:80f97b164b51d64b74ac90",
  measurementId: "G-BCN9ZQQPK5"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
