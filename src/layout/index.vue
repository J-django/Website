<template>
    <div class="Layout">
        <Header />
        <Transition name="fade" mode="out-in">
            <Backdrop v-if="asideChecked" @backDropClose="backDropCloseChange" />
        </Transition>
        <LocalNav v-if="navChecked" :asideCheck="asideChecked" @asideOpen="asideOpenChange" />
        <Main class="main" :class="[addClass]" />
        <Footer v-if="footerChecked" />
        <Sidebar v-if="sidebarChecked" :asideCheck="asideChecked" />
    </div>
</template>

<script lang="ts" setup>
import Header from '@/layout/header.vue'
import Main from '@/layout/main.vue'
import Footer from '@/layout/footer.vue'
import Sidebar from '@/layout/sidebar.vue'
import LocalNav from '@/layout/localNav.vue'
import Backdrop from '@/layout/backdrop.vue'
import { ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const addClass = ref<string>('is-home');
const footerChecked = ref<boolean>(false);
const asideChecked = ref<boolean>(false);
const navChecked = ref<boolean>(false);
const sidebarChecked = ref<boolean>(false);
const route = useRoute();

watchEffect(() => {
    if (route.path == '/') {
        addClass.value = "is-home";
        sidebarChecked.value = false;
    } else if (route.path !== '/' && route.meta.hasSidebar) {
        addClass.value = "has-sidebar";
    } else {
        addClass.value = "";
    }
    asideChecked.value = false;
    footerChecked.value = route.meta.hasFooter as boolean;
    sidebarChecked.value = route.meta.hasSidebar as boolean;
    navChecked.value = route.meta.hasNav as boolean;
})

watch(() => asideChecked.value, (val: boolean) => {
    let bodyStyle = document.body.style;
    if (val) {
        bodyStyle.overflow = "hidden";
    } else {
        bodyStyle.overflow = "";
    }
})

const asideOpenChange = (checked: boolean) => {
    asideChecked.value = checked;
}

const backDropCloseChange = () => {
    asideChecked.value = false;
}
</script>

<style lang="scss" scoped>
.Layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.35s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
}

@media screen and (min-width: 960px) {
    .main.has-sidebar {
        padding-left: var(--sidebar-width);
    }
}

@media (min-width: 1440px) {
    .main.has-sidebar {
        padding-right: calc((100vw - var(--layout-max-width)) / 2);
        padding-left: calc((100vw - var(--layout-max-width)) / 2 + var(--sidebar-width));
    }
}
</style>