<script lang="ts" setup>
import "./index.less"

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

const goAnchor = (anchor: string | undefined) => {
    if (!anchor) return;
    const element: HTMLElement = document.querySelector("#" + anchor)!;
    const width = window.innerWidth >= 960 ? -60 : 0;
    if (element) {
        window.scrollTo({
            top: element.offsetTop + 80 + width,
            behavior: "smooth"
        })
        history.pushState(null, '', `${anchor}`);
    }
}
</script>

<template>
    <component :is="'h'+level" :id="id">
        {{ text }}
        <a :href="'#' + id" @click.prevent="goAnchor(id)" class="dj-anchor-icon" />
    </component>
</template>