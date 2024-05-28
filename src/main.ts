import { createApp, Directive } from "vue";
import "@/styles/style.scss";
import App from "./App.vue";
import router from "@/router";
import pinia from '@/store'
import useComponent from '@/components'
import useDjComponent from '@/controls'
import * as useDirective from '@/directives'
import "bootstrap-icons/font/bootstrap-icons.css";
// import VConsole from 'vconsole';
// const vconsole = new VConsole();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(useComponent);
app.use(useDjComponent)

Object.keys(useDirective).forEach(key => {
    app.directive(key, (useDirective as { [key: string]: Directive })[key]);
})

app.mount("#app");
