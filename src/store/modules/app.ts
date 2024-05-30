import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
    selector: "html",
    storageKey: 'theme-appearance',
    valueDark: 'dark',
    valueLight: 'light',
    emitAuto: false,
})
const toggleDark = useToggle(isDark);

export const useAppStore = defineStore('useAppStore', {
    state: () => ({
        mode: isDark,
    }),
    getters: {},
    actions: {
        toggleMode: () => toggleDark()
    },
    persist: true
})