<template>
    <label title="toggle dark mode">
        <button class="dj-switch" @click.prevent="appStore.toggleMode" :style="{ backgroundColor: backgroundColor }"
            :class="[appStore.mode ? 'dark' : '']">
            <span class="check">
                <span class="icon-box">
                    <svg v-if="appStore.mode" class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M20.026 17.001c-2.762 4.784-8.879 6.423-13.663 3.661A10 10 0 0 1 3.13 17.68a.75.75 0 0 1 .365-1.132c3.767-1.348 5.785-2.91 6.956-5.146c1.233-2.353 1.551-4.93.689-8.463a.75.75 0 0 1 .769-.927a9.96 9.96 0 0 1 4.457 1.327c4.784 2.762 6.423 8.879 3.66 13.662" />
                    </svg>
                    <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2" />
                    </svg>
                </span>
            </span>
        </button>
    </label>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'


defineProps({
    backgroundColor: {
        type: String,
        default: 'var(--t-card-background-color)'
    }
})

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.dj-switch {
    position: relative;
    border-radius: 9999px;
    display: block;
    width: 40px;
    height: 22px;
    flex-shrink: 0;
    border: 1px solid var(--t-border-color);
    transition: border-color .25s;
    cursor: pointer;

    &:hover {
        border-color: var(--t-text-color-2);
    }

    .check {
        position: absolute;
        top: 1px;
        left: 1px;
        bottom: 1px;
        transform: translateX(0);
        width: 18px;
        height: 18px;
        border-radius: 9999px;
        transition: transform .35s;

        .icon-box {
            position: relative;
            display: flex;
            width: 18px;
            height: 18px;
            color: var(--t-text-color);
            border-radius: 50%;
            overflow: hidden;
            transition: color .25s;

            .icon {
                width: 18px;
                height: 18px;
                color: inherit;
            }
        }
    }
}

.dj-switch.dark {
    .check {
        transform: translateX(18px);
    }
}
</style>