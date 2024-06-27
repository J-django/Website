/**
 * Installation 安装
 * @returns NodeJsInstallationCode, CdnInstallationCode, importProblemCode
 */
export const useInstallation = () => {
    const NodeJsInstallationCode = `
// npm
npm install django-ui
// pnpm
pnpm add django-ui`.trim();

    const CdnInstallationCode = `
<script src="https://unpkg.com/django-ui"></script>
<script src="https://unpkg.com/django-ui/style.css"></script>`.trim();

    return {
        NodeJsInstallationCode,
        CdnInstallationCode
    };
}

/**
 * Quickstart 快速上手
 * @returns GlobalImportCode、 UseComponentCode、 importProblemCode
 */
export const useQuickstart = () => {
    const GlobalImportCode = `
// main.js
import { createApp } from "vue";
import App from "./App.vue";
// 引入组件库
import DjangoUI from "django-ui";
// 引入组件库样式
import "django-ui/style.css";

const app = createApp(App);
app.use(DjangoUI);
app.mount("#app");`.trim();

    const UseComponentCode = `
<template>
    <dj-button>test</dj-button>
</template>`.trim();

    const importProblemCode = `
// django-ui.d.ts
declare module "django-ui";`.trim();

    return {
        GlobalImportCode,
        UseComponentCode,
        importProblemCode
    }
}