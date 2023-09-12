import { defineStore } from 'pinia'
import { WritableComputedRef } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
    storageKey: 'useDarkKEY',
    valueDark: 'dark',
    valueLight: 'light',
    emitAuto: false
})
const toggle = useToggle(isDark);

export const useAppStore = defineStore('useAppStore', {
    state: () => ({
        mode: <boolean>false,
    }),
    getters: {},
    actions: {
        getSystemMode() {
            const isDark = useDark()
            this.mode = isDark.value;
        },
        modeCheck() {
            toggle();
            this.mode = isDark.value;
        }
    },
    persist: true
})