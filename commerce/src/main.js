import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import { fb } from "./firebase";
import VueFirestore from "vue-firestore";

require("firebase/firestore");

Vue.config.productionTip = false;

Vue.use(VueFirestore, {
  key: "id", // the name of the property. Default is '.key'.
  enumerable: true, //  whether it is enumerable or not. Default is true.
});

Vue.use(VueFirestore);

import VueFilters from "vue2-filters";
Vue.use(VueFilters);

window.$ = window.jQuery = jQuery;
import "popper.js";

import "./assets/app.scss";

import Swal from "sweetalert2";

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
});

window.Toast = Toast;
import store from "./store.js";

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);
Vue.component("mini-cart", require("./components/MiniCart.vue").default);
Vue.component("Footer", require("./components/Footer.vue").default);
Vue.component("products-list", require("./sections/ProductList.vue").default);

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

Vue.config.productionTip = false;

let app = "";

fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

(function(w, d, s, g, js, fs) {
  g = w.gapi || (w.gapi = {});
  g.analytics = {
    q: [],
    ready: function(f) {
      this.q.push(f);
    },
  };
  js = d.createElement(s);
  fs = d.getElementsByTagName(s)[0];
  js.src = "https://apis.google.com/js/platform.js";
  fs.parentNode.insertBefore(js, fs);
  js.onload = function() {
    g.load("analytics");
  };
})(window, document, "script");
