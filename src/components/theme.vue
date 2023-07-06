<template>
    <label title="toggle dark mode">
        <button class="switch" @click.prevent="appStore.modeCheck" :style="{ backgroundColor: prop.backgroundColor }"
            :class="[appStore.mode ? 'dark' : '']">
            <span class="check">
                <span class="icon">
                    <template v-if="appStore.mode">
                        <i class="bi bi-moon" />
                    </template>
                    <template v-else>
                        <i class="bi bi-brightness-high-fill" />
                    </template>
                </span>
            </span>
        </button>
    </label>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'


const prop = defineProps({
    backgroundColor: {
        type: String,
        default: 'var(--t-card-background-color)'
    }
})

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.switch {
    position: relative;
    border-radius: 11px;
    display: block;
    width: 40px;
    height: 22px;
    flex-shrink: 0;
    border: 1px solid var(--light-gray);
    transition: border-color .35s;

    &:hover {
        border-color: var(--grey);
    }

    .check {
        position: absolute;
        top: 1px;
        left: 1px;
        bottom: 1px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        // background-color: var(--t-label-background-color);
        // box-shadow: var(--box-shadow);
        transition: transform .35s;

        .icon {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            color: var(--t-text-color);
            border-radius: 50%;
            overflow: hidden;
            transition: color .25s;

            i.bi {
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
}

.switch.dark {
    border-color: var(--grey);

    &:hover {
        border-color: var(--light-gray);
    }

    .check {
        transform: translateX(18px);
    }
}
</style>