<template>
    <div class="jy-divider">
        <div class="jy-divider-inner" :class="['jy-divider-inner--' + props.style]">
            <slot v-if="slots['default']" />
            <template v-else>
                {{ props.text }}
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'

const slots = useSlots();

const props = defineProps({
    text: {
        type: String,
        default: ""
    },
    style: {
        type: String,
        default: "solid",
        validator: (type: string) => {
            return ["solid", "dashed", "dotted"].includes(type);
        }
    }
})
</script>

<style lang="scss" scoped>
.jy-divider {
    margin: 1.25rem 0;
    width: 100%;

    .jy-divider-inner {
        line-height: 1.5;
        font-size: 12px;
        color: var(--t-text-color-2);
        display: flex;
        align-items: center;

        &::before {
            content: "";
            flex: 1 1 0%;
            height: 0.0625rem;
            margin-right: 0.625rem;
        }

        &::after {
            content: "";
            flex: 1 1 0%;
            margin-left: 0.625rem;
        }
    }

    .jy-divider-inner.jy-divider-inner--solid {

        &::before,
        &::after {
            border-top: 0.0625rem solid var(--t-text-color-3);
        }
    }

    .jy-divider-inner.jy-divider-inner--dashed {

        &::before,
        &::after {
            border-top: 0.0625rem dashed var(--t-text-color-3);
        }
    }

    .jy-divider-inner.jy-divider-inner--dotted {

        &::before,
        &::after {
            border-top: 0.0625rem dotted var(--t-text-color-3);
        }
    }

    .jy-divider-inner.jy-divider-inner--double {

        &::before,
        &::after {
            border-top: 0.0625rem dotted var(--t-text-color-3);
        }
    }
}
</style>