import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './assets/style/common.css'
import 'animate.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "./assets/scss/bootstrap-custom.scss"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Google Fonts
import "@fontsource/open-sans";
import '@fontsource-variable/unbounded' // https://fontsource.org/fonts/unbounded/install


const app = createApp(App);
app.directive("border", (el) => {
  el.style.border = "solid red 1px";
});

/* add fortawesome icons to the library */
library.add(faGithub, faClipboardCheck, faCode, faPlus)


app
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(BootstrapVue)
  .use(IconsPlugin)
  .mount("#app");

