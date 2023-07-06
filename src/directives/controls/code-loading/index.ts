import { createApp, Directive } from 'vue';
import Loading from './code-loading.vue';

export const cLoading: Directive = {
    mounted(el, binding) {
        const app = createApp(Loading);
        const instance = app.mount(document.createElement('div'));
        el.instance = instance;
        if (binding.value) {
            appendEl(el);
        }
    },
    updated(el, binding) {
        if (binding.value !== binding.oldValue) {
            binding.value ? appendEl(el) : removeEl(el);
        }
    },
};

const appendEl = (el: any) => {
    el.appendChild(el.instance.$el);
    el.style.overflow = "hidden"
};

const removeEl = (el: any) => {
    el.removeChild(el.instance.$el);
    el.style.overflow = "visible"
};