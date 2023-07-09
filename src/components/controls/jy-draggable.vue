<template>
    <div class="jy-draggable" :style="{ '--draggable-gap': `${props.gap}px` }">
        <template v-for="item of 5" :key="item">
            <div draggable="false" :id="`jy--draggable-item${item}`" class="jy--draggable-item"
                @mousedown="draggable__mousedown" />
        </template>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useSlots } from 'vue'

const props = defineProps({
    highlight: {
        type: Boolean,
        default: false
    },
    gap: {
        type: Number,
        default: 10
    },
    escape: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(["drag", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "drop", "change"])

const slots = useSlots();

const draggableConfig = reactive({
    top: <number>0,
    left: <number>0,
    translateX: <number>0,
    translateY: <number>0,
})

const draggable__mousedown = () => { }
defineExpose({})
</script>

<style lang="scss" scoped>
.jy-draggable {
    padding: var(--draggable-gap);
    border: 1px solid var(--t-border-color);
    border-radius: calc(var(--border-radius) * 2);

    .jy--draggable-item {
        margin-bottom: var(--draggable-gap);
        height: 56px;
        border-radius: var(--border-radius);
        border: 1px solid var(--t-border-color);
        background-color: var(--t-card-background-color);
        cursor: grab;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .jy--draggable-item.is-drag {
        cursor: grabbing;
    }
}
</style>