<script lang="ts" setup name="dj-external">
// plugins
import { useRouter } from 'vue-router'

// script
const prop = defineProps({
    outside: {
        type: Boolean,
        default: false
    },
    href: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    },
})

const router = useRouter();

const push = (url: string) => {
    if (prop.outside) {
        window.open(url)
    } else {
        router.push({
            path: url
        })
    }
}
</script>

<template>
    <a class="dj-external" :href="href" @click.prevent="push(href)" :title="title">
        <slot />
    </a>
</template>

<style lang="less">
@import "./index.less";
</style>