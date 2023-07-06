<template>
    <template v-if="prop.size == 'large'">
        <h1 :id="prop.id">
            {{ prop.title }}
            <a :href="'#' + prop.id" @click.prevent="goAnchor('#' + prop.id)" class="jy-header-anchor"></a>
        </h1>
    </template>
    <template v-else-if="prop.size == 'small'">
        <h5 :id="prop.id">
            {{ prop.title }}
            <a :href="'#' + prop.id" @click.prevent="goAnchor('#' + prop.id)" class="jy-header-anchor"></a>
        </h5>
    </template>
    <template v-else>
        <h3 :id="prop.id">
            {{ prop.title }}
            <a :href="'#' + prop.id" @click.prevent="goAnchor('#' + prop.id)" class="jy-header-anchor"></a>
        </h3>
    </template>
</template>

<script lang="ts" setup>

const prop = defineProps({
    id: {
        type: String,
        default: undefined
    },
    size: {
        type: String,
        default: "default"
    },
    title: {
        type: String,
        default: undefined
    }
})

const goAnchor = (anchor: any) => {
    const element = document.querySelector(anchor);
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

<style lang="scss" scoped>
h1 {
    letter-spacing: -.02em;
    line-height: 40px;
    font-size: 36px;
    text-align: left;
    font-weight: 600;
    transition: color .25s;

    &:hover {

        .jy-header-anchor {
            opacity: 1;
        }
    }
}


h3 {
    letter-spacing: -.02em;
    line-height: 40px;
    font-size: 22px;
    text-align: left;
    font-weight: 600;
    transition: color .25s;

    &:hover {
        .jy-header-anchor {
            opacity: 1;
        }
    }
}

h5 {
    letter-spacing: -.02em;
    line-height: 40px;
    font-size: 14px;
    text-align: left;
    font-weight: 600;
    transition: color .25s;

    &:hover {
        .jy-header-anchor {
            opacity: 1;
        }
    }
}


.jy-header-anchor {
    float: left;
    margin-left: -0.87em;
    padding-right: 0.23em;
    font-weight: 500;
    color: var(--green);
    text-decoration-style: dotted;
    user-select: none;
    opacity: 0;
    position: relative;
    font-weight: 600;
    outline: none;
    transition: color .25s, opacity .25s;

    &::before {
        content: "#"
    }

    &:hover {
        opacity: .8;
        text-decoration: underline;
    }
}
</style>