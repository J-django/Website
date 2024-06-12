<script lang="ts" setup>
import { useDom } from "@/hooks";

defineProps({
    id: {
        type: String,
        default: undefined
    },
    level: {
        type: String,
        default: 1,
    },
    text: {
        type: String,
        default: ""
    }
})

const { goAnchor } = useDom();
</script>

<template>
    <component :is="'h'+level" :id="id" tabindex="-1">
        {{ text }}
        <a :href="'#' + id" @click.prevent="goAnchor(id)" class="dj-anchor-icon" />
    </component>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>