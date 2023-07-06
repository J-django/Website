/// <reference types="vite/client" />
declare module 'prismjs';
declare module 'vue-instantsearch';
declare module '@popperjs/core';
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}