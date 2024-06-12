<script lang="ts" setup name="dj-mark">
// script
defineProps({
    text: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <mark class="dj-mark">
        <slot>
            {{ text }}
        </slot>
    </mark>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>