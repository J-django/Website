<template>
    <div class="jy-card" :class="[align]">
        <div class="jy-card-header" v-if="showCheck.showTitle">
            <slot name="header">
                {{ prop.title }}
            </slot>
        </div>
        <div class="jy-card-body">
            <slot />
        </div>
        <div class="jy-card-footer" v-if="showCheck.showFooter">
            <slot name="footer">
                {{ prop.footer }}
            </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, useSlots, onMounted } from 'vue'

const prop = defineProps({
    align: {
        type: String,
        default: "left"
    },
    title: {
        type: String,
        default: undefined
    },
    footer: {
        type: String,
        default: undefined
    }
})

const slots = useSlots();

const showCheck = reactive({
    showTitle: true,
    showFooter: true
})

onMounted(() => {
    showCheck.showTitle = (prop.title || slots.header) !== undefined;
    showCheck.showFooter = (prop.footer || slots.footer) !== undefined;
})
</script>

<style lang="scss" scoped>
.left {
    text-align: left !important;
}

.center {
    text-align: center !important;
}

.right {
    text-align: right !important;
}

.jy-card {
    --jy-card-spacer-y: 1rem;
    --jy-card-spacer-x: 1rem;
    --jy-card-cap-padding-y: 0.5rem;
    --jy-card-cap-padding-x: 1rem;
    margin: 4px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    height: var(--tard-height);
    word-wrap: break-word;
    background-color: var(--t-card-background-color);
    background-clip: border-box;
    border: 1px solid var(--t-border-color);
    border-radius: var(--border-radius);
    z-index: 1;

    .jy-card-header {
        padding: var(--jy-card-cap-padding-y) var(--jy-card-cap-padding-x);
        margin-bottom: 0;
        color: var(--t-text-color);
        background-color: var(--t-special-bg);
        border-bottom: 1px solid var(--t-border-color);

        &:first-child {
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }
    }

    .jy-card-body {
        flex: 1 1 auto;
        padding: var(--jy-card-spacer-y) var(--jy-card-spacer-x);

        &:last-child {
            border-radius: 0 0 var(--border-radius) var(--border-radius);
        }
    }

    .jy-card-footer {
        padding: var(--jy-card-cap-padding-y) var(--jy-card-cap-padding-x);
        border-top: 1px solid var(--t-border-color);
        background-color: var(--t-special-bg);
    }
}
</style>