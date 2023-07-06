<template>
    <div class="localNav">
        <button class="menu" @click="openAside">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
                class="menu-icon">
                <path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path>
                <path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path>
                <path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path>
                <path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path>
            </svg>
            <span class="menu-text">Menu</span>
        </button>
        <div class="LocalNavOutlineDropdown">
            <button :class="[thisPageChecked ? 'open' : '']" @click="thisPageChecked = !thisPageChecked">
                On this page
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
                    class="icon">
                    <path
                        d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z">
                    </path>
                </svg>
            </button>
            <Transition name="scale" mode="out-in">
                <div class="items" v-if="thisPageChecked">
                    <a href="#" class="top-link" @click.prevent="backTop">Return to top</a>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const prop = defineProps({
    asideCheck: {
        type: Boolean,
        default: false
    }
})

const thisPageChecked = ref<Boolean>(false)

watch(() => prop.asideCheck, (val: Boolean) => {
    checked.value = val;
})

const emit = defineEmits(['asideOpen'])

const checked = ref<Boolean>(false)
const openAside = () => {
    checked.value = !checked.value;
    emit('asideOpen', checked.value);
}

const backTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    thisPageChecked.value = false;
}
</script>

<style lang="scss" scoped>
.localNav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: var(--localNav-z-index);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--t-color-gutter);
    padding-top: var(--vp-layout-top-height, 0px);
    width: 100%;
    background-color: var(--t-background-color);

    .menu {
        display: flex;
        align-items: center;
        padding: 12px 24px 11px;
        line-height: 24px;
        font-size: 12px;
        font-weight: 500;
        color: var(--t-text-color);
        opacity: .6;
        transition: opacity .25s;

        &:hover {
            opacity: 1;
        }

        .menu-icon {
            margin-right: 8px;
            width: 16px;
            height: 16px;
            fill: currentColor;
        }
    }

    .LocalNavOutlineDropdown {
        padding: 12px 20px 11px;

        button {
            display: block;
            font-size: 12px;
            font-weight: 500;
            line-height: 24px;
            color: var(--t-text-color);
            opacity: .6;
            transition: opacity .5s;
            position: relative;

            &:hover {
                opacity: 1;
            }

            .icon {
                display: inline-block;
                vertical-align: middle;
                margin-left: 2px;
                width: 14px;
                height: 14px;
                fill: currentColor;
                transition: transform .25s;
            }
        }

        button.open {
            opacity: 1;

            .icon {
                transform: rotate(90deg);
            }
        }

        .items {
            position: absolute;
            left: 20px;
            right: 20px;
            top: 64px;
            background-color: var(--t-background-color);
            padding: 4px 10px 16px;
            border: 1px solid var(--t-border-color);
            border-radius: 8px;
            max-height: calc(var(--vp-vh, 100vh) - 86px);
            overflow: auto;
            box-shadow: var(--box-shadow);
        }

        .top-link {
            display: block;
            color: var(--green);
            font-size: 13px;
            font-weight: 500;
            padding: 6px 0;
            margin: 0 13px 10px;
            border-bottom: 1px solid var(--t-border-color);
        }

        .scale-enter-active,
        .scale-leave-active {
            transition: all 0.25s;
        }

        .scale-enter-from {
            opacity: 0;
            transform: scale(1) translateY(-10px);
        }

        .scale-leave-to {
            opacity: 0;
            z-index: -1;
            transform: scale(1) translateY(-10px);
        }
    }
}

@media (min-width: 768px) {
    .localNav {
        .menu {
            padding: 0 32px;
        }
    }
}

@media (min-width: 960px) {
    .localNav {
        display: none;
    }
}
</style>