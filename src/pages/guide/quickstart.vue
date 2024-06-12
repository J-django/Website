<template>
    <dj-anchor level="1" text="快速上手" id="Id_Installation" />
    <dj-anchor level="2" text="全局引入" id="Id_MainTs_Usage" />
    <dj-code language="ts" :code="`# main.ts
import { createApp } from \x22vue\x22;
import App from \x22./App.vue\x22;
# 引入组件库
import DjangoUI from \x22django-ui\x22;
# 引入组件库样式
import \x22django-ui/style.css\x22;

const app = createApp(App);
app.use(DjangoUI);
app.mount(\x22#app\x22);`" />
    <dj-anchor level="2" text="使用组件" id="Id_Apply_Component" />
    <dj-code :code="`<template>
    <dj-button>test</dj-button>
</template>`" />
</template>