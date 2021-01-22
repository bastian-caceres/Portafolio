import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// iconos
import { library } from '@fortawesome/fontawesome-svg-core';
// fab
import { faGithub, faLinkedin, faFacebookSquare, faVuejs, faHtml5, faCss3, faBootstrap, faJs, faSass} from '@fortawesome/free-brands-svg-icons';
// fas
import { faGamepad, faDesktop, faLaptopCode, faGlobe} from '@fortawesome/free-solid-svg-icons';
// far
// import { } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faGithub, faLinkedin, faFacebookSquare, faGamepad, faDesktop, faLaptopCode, faVuejs, faHtml5, faCss3, faBootstrap, faJs, faSass, faGlobe);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// implementa jquery gobalmente
window.$ = window.jQuery = require('jquery');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
