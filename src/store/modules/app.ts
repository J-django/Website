import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import { Aside } from '@/store/type'

const storeId = "useApp";

const isDark = useDark({
    selector: "html",
    storageKey: 'theme-appearance',
    valueDark: 'dark',
    valueLight: 'light',
    emitAuto: false,
})
const toggleDark = useToggle(isDark);

export const useAppStore = defineStore(storeId, {
    state: () => ({
        mode: isDark,
        aside: <Aside[]>[]
    }),
    getters: {},
    actions: {
        toggleMode: () => toggleDark(),
        clearAside() {
            this.aside = [];
        },
        addRangeAside(aside: Aside[]) {
            this.aside = aside;
        }
    },
    persist: {
        key: storeId,
        storage: localStorage,
        paths: ['mode']
    }
})