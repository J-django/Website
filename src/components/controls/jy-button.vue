<template>
    <button class="jy-button" :class="[props.type]"
        :style="{ '--custom-background-color': props.color, '--custom-text-color': props.color ? isDarkColor(props.color) ? 'var(--white)' : 'var(--black)' : '' }">
        <slot name="icon" />
        <span class="jy-button-inner">
            <slot>
                {{ props.text }}
            </slot>
        </span>
    </button>
</template>

<script lang="ts" setup>
import { isDarkColor } from '@/utils/tool'

const props = defineProps({
    type: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: ""
    }
})
</script>

<style lang="scss" scoped>
.jy-button {
    --border-radius: 0.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    padding: 0 1.125rem;
    margin: 0;
    position: relative;
    height: 2.25rem;
    text-align: left;
    text-decoration: none;
    line-height: 1;
    font-size: 14px;
    color: var(--custom-text-color, var(--t-text-color));
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    -webkit-tap-highlight-color: transparent;
    white-space: nowrap;
    cursor: pointer;
    border-radius: var(--border-radius);
    background-color: var(--custom-background-color, var(--t-card-background-color));
    transition: opacity .25s, color .25s;

    &:disabled {
        cursor: not-allowed;
        opacity: .75 !important;
    }

    &:active:not(:disabled) {
        transform: translateY(.075rem);
    }

    ::v-deep>i,
    ::v-deep>svg {
        font-size: 14px;
        margin-right: 6px;
    }

    >.jy-button-inner {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        height: 100%;
        font-weight: 600;
        overflow: visible;
    }
}

.jy-button.primary {
    background-color: var(--blue);
    color: var(--white);
}

.jy-button.success {
    background-color: var(--green);
    color: var(--white);
}

.jy-button.warning {
    background-color: var(--orange);
    color: var(--white);
}

.jy-button.danger {
    background-color: var(--red);
    color: var(--white);
}

.jy-button+.jy-button {
    margin-left: 12px;
}
</style>