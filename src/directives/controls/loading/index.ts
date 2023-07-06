import { createApp, Directive } from 'vue';
import Loading from './loading.vue';
import { nanoid } from 'nanoid'

export const loading: Directive = {
    mounted(el, binding) {
        el.id = nanoid();
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