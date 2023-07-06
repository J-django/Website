import { createApp, Directive } from "vue";
import "@/styles/style.scss";
import App from "./App.vue";
import router from "@/router";
import pinia from '@/store'
import useComponent from '@/components/component'
import * as useDirective from '@/directives'
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(useComponent);

Object.keys(useDirective).forEach(key => {
    app.directive(key, (useDirective as { [key: string]: Directive })[key]);
})

app.mount("#app");
