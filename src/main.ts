import { createApp, Directive } from "vue";
import "@/styles/style.less";
import App from "./App.vue";
import router from "@/router";
import pinia from '@/store'
import useDjComponent from '@/controls'
import * as useDirective from '@/directives'
import "bootstrap-icons/font/bootstrap-icons.css";
import DjangoUI from 'django-ui'
import "django-ui/style.css"
// import VConsole from 'vconsole';
// const vconsole = new VConsole();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(DjangoUI)
app.use(useDjComponent)

Object.keys(useDirective).forEach(key => {
    app.directive(key, (useDirective as { [key: string]: Directive })[key]);
})

app.mount("#app");
