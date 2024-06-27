import { createApp } from "vue";
import "@/styles/style.less";
import App from "./App.vue";
import router from "@/router";
import pinia from '@/store'
import useDjComponent from '@/controls'
import "bootstrap-icons/font/bootstrap-icons.css";
import DjangoUI from "django-ui"
import "django-ui/style.css"
// import VConsole from 'vconsole';
// new VConsole();

import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(DjangoUI)
app.use(useDjComponent)
app.use(hljsVuePlugin)
app.mount("#app");
