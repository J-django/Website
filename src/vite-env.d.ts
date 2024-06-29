/// <reference types="vite/client" />
declare module 'prismjs';
declare module 'django-ui';
declare module '@popperjs/core';
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface Array<T> {
    findLastIndex(
        predicate: (value: T, index: number, obj: T[]) => boolean,
        thisArg?: any
    ): number;
}