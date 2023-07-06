<template>
    <a class="jy-a" :href="href" @click.prevent="push(href)" :title="title">
        <slot />
    </a>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const prop = defineProps({
    type: {
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
    if (prop.type) {
        window.open(url)
    } else {
        router.push({
            path: url
        })
    }
}
</script>

<style lang="scss" scoped>
a.jy-a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    color: var(--grey);
    transition: color .5s;

    &:hover {
        color: var(--t-text-color);

        ::v-deep>svg {
            fill: var(--t-text-color);
        }
    }

    ::v-deep>svg {
        width: 20px;
        height: 20px;
        fill: currentColor;
        transition: fill .25s;
    }

    ::v-deep>img {
        width: 22px;
        height: 22px;
        fill: currentColor;
        transition: fill .25s;
    }

    ::v-deep i.bi {
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>