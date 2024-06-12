<script lang="ts" setup name="dj-badge">
// script
defineProps({
    text: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <code class="dj-badge">
        <slot>
            {{ text }}
        </slot>
    </code>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>