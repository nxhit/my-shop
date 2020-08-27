import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ScrollFixedHeader from "vuejs-scroll-fixed-header";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Toasted from "vue-toasted";
import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);

Vue.config.productionTip = false;
Vue.use(Toasted, {
  duration: 1000
});

Vue.config.productionTip = false;
Vue.use(ScrollFixedHeader);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
new Vue({
  router,
  ScrollFixedHeader,
  store,
  render: h => h(App)
}).$mount("#app");
