<template>
    <code class="label-code">{{ props.text }}</code>
</template>

<script lang="ts" setup>
const props = defineProps({
    text: {
        type: String,
        default: ""
    }
})
</script>

<style lang="scss" scoped>
.label-code {
    margin: 0 4px;
    padding: 0.15rem 0.4rem;
    line-height: 1;
    min-height: 22px;
    display: inline-flex;
    align-items: center;
    font-family: inherit;
    font-size: 12px;
    color: var(--t-text-color);
    background-color: var(--t-label-background-color);
    border-radius: 4px;
}
</style>