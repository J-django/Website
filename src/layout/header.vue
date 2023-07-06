<template>
    <header class="navbar">
        <div class="navbar-wrapper" :class="[addClass, scrollTop > 0 ? 'fill' : '']">
            <div class="container">
                <div class="title">
                    <div class="navBarTitle" :class="[addClass]">
                        <a href="/" class="title" @click.prevent="push('/')">
                            <img src="@/assets/images/logo.png" alt="">
                            {{ env.VITE_APP_Title }}
                        </a>
                    </div>
                </div>
                <div class="content">
                    <div class="curtain" v-if="curtainChecked"></div>
                    <div class="content-body">
                        <nav class="JYFlyout navBarMenu">
                            <!-- 此处插入Agolia查询 -->
                            <template v-for="(item, index) of AsideBar" :key="index">
                                <div class="JYFlyout navBarMenuGroup" v-if="Array.isArray(item.children)">
                                    <button class="button">
                                        <span class="text">
                                            {{ (item.meta as RouteMeta).title }}
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                                viewBox="0 0 24 24" class="text-icon" data-v-838a8ce5="">
                                                <path
                                                    d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z">
                                                </path>
                                            </svg>
                                        </span>
                                    </button>
                                    <div class="menu">
                                        <div class="JYMenu">
                                            <div class="items">
                                                <div class="menuGroup">
                                                    <p class="title">{{ (item.meta as RouteMeta).title }}</p>
                                                    <template v-for="(chil, index) of item.children" :key="index">
                                                        <div class="menuLink">
                                                            <a :href="chil.path" class="link"
                                                                :class="[route.path == chil.path ? 'active' : '']"
                                                                @click.prevent="push(chil.path)">
                                                                {{ (chil.meta as RouteMeta).title }}
                                                            </a>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a :href="item.path" class="link" :class="[route.path.includes(item.path) ? 'active' : '']"
                                    @click.prevent="push(item.path)" v-else>
                                    {{ (item.meta as RouteMeta).title }}
                                </a>
                            </template>
                        </nav>
                        <Appearance>
                            <ThemeSwitch />
                        </Appearance>
                        <Appearance>
                            <Outside />
                        </Appearance>
                        <div class="extra">
                            <button class="button">
                                <i class="bi bi-three-dots"></i>
                            </button>
                            <div class="menu">
                                <div class="menu-body">
                                    <div class="group">
                                        <div class="item">
                                            <p class="label">深色模式</p>
                                            <ThemeSwitch />
                                        </div>
                                    </div>
                                    <div class="group">
                                        <div class="item">
                                            <Outside />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Hamburger class="hamburger" :checked="screenChecked" @toggleChange="(e) => screenChecked = e" />
                    </div>
                </div>
            </div>
        </div>
        <Transition name="scale" mode="out-in">
            <div class="screen" v-if="screenChecked">
                <div class="container">
                    <nav class="menu">
                        <template v-for="(item, index) of AsideBar" :key="index">
                            <div class="screenMenuGroup" :class="[openGroupCheck(item) ? 'open' : '']"
                                v-if="Array.isArray(item.children)">
                                <button class="button" @click="openGroup(item)">
                                    <span class="button-text">
                                        {{ (item.meta as RouteMeta).title }}
                                    </span>
                                    <i class="bi bi-plus"></i>
                                </button>
                                <div class="items">
                                    <div class="group">
                                        <div class="navScreenMenuGroupSection">
                                            <p class="title">{{ (item.meta as RouteMeta).title }}</p>
                                            <template v-for="(chil, index) of item.children" :key="index">
                                                <a :href="chil.path" class="link navScreenMenuGroupLink"
                                                    @click.prevent="push(chil.path)">
                                                    {{ (chil.meta as RouteMeta).title }}
                                                </a>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a :href="item.path" class="link" :class="[route.path == item.path ? 'active' : '']"
                                @click.prevent="push(item.path)" v-else>
                                {{ item.meta?.title }}
                            </a>
                        </template>
                    </nav>
                    <div class="screenAppearance appearance">
                        <p class="text">深色模式</p>
                        <ThemeSwitch :backgroundColor="'var(--t-background-color)'" />
                    </div>
                    <Outside />
                </div>
            </div>
        </Transition>
    </header>
</template>

<script lang="ts" setup>
import { ref, watch, computed, watchEffect, onMounted, onUnmounted, reactive } from 'vue'
import { useRoute, useRouter, RouteRecordRaw, RouteMeta } from 'vue-router'
import { AsideBar } from '@/router/route'
import ThemeSwitch from '@/components/theme.vue'
import Appearance from '@/components/appearance.vue'
import Hamburger from '@/components/hamburger.vue'
import Outside from '@/components/outside.vue'
import { menuGroupActive } from '@/utils/interface/index'

const env = import.meta.env;

const route = useRoute();
const addClass = ref<string>('');
const openGroupActiveArr = ref<menuGroupActive[]>([]);
const screenChecked = ref<boolean>(false);
const curtainChecked = ref<boolean>(false);

watchEffect(() => {
    if (route.path == '/') {
        addClass.value = "is-home";
    } else if (route.path !== '/' && route.meta.hasSidebar) {
        addClass.value = "has-sidebar";
    } else {
        addClass.value = "";
    }
    curtainChecked.value = route.meta.hasCurtain as boolean;
})

const router = useRouter();

const push = (path: string) => {
    history.replaceState({}, '', path)
    router.push({
        path: path
    })
    window.scrollTo(0, 0)
    screenChecked.value = false;
}


watch(() => screenChecked.value, (val: boolean) => {
    let bodyStyle = document.body.style;
    if (val) {
        bodyStyle.overflow = "hidden";
    } else {
        openGroupActiveArr.value = <menuGroupActive[]>[];
        setTimeout(() => {
            bodyStyle.overflow = "";
        }, 300);
    }
})

const scrollTop = ref<number>(0);
const scrollChange = () => {
    const top: number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop.value = top;
}

const resizeChange = () => {
    const width: number = document.body.clientWidth;
    screenChecked.value = false;
    if (width <= 960) {
        scrollTop.value = 0;
        window.removeEventListener('scroll', scrollChange, true);
    } else {
        window.addEventListener('scroll', scrollChange, true);
    }
}

const openGroupCheck = computed(() => (route: RouteRecordRaw) => {
    const index = openGroupActiveArr.value.findIndex(f => f.path == route.path);
    if (index < 0) {
        return false;
    }
    return openGroupActiveArr.value[index].checked;
});

const openGroup = (route: RouteRecordRaw) => {
    const index = openGroupActiveArr.value.findIndex(f => f.path == route.path);
    if (index >= 0) {
        openGroupActiveArr.value[index].checked = !openGroupActiveArr.value[index].checked;
    } else {
        openGroupActiveArr.value.push({
            path: route.path,
            checked: true
        });
    }
}

onMounted(() => {
    window.addEventListener('resize', resizeChange, true);
    window.addEventListener('scroll', scrollChange, true);
    window.dispatchEvent(new Event('resize'));
})

onUnmounted(() => {
    window.removeEventListener('resize', resizeChange, true);
    window.removeEventListener('scroll', scrollChange, true);
})
</script>

<style lang="scss" scoped>
.navbar {
    position: relative;
    top: var(--vp-layout-top-height, 0px);
    left: 0;
    z-index: var(--nav-z-index);
    width: 100%;
    pointer-events: none;

    .navbar-wrapper {
        position: relative;
        top: 0;
        padding: 0 8px 0 24px;
        height: var(--header-height);
        border-bottom: 1px solid transparent;

        .menu {
            position: absolute;
            top: calc(var(--header-height) / 2 + 20px);
            right: 0;
            opacity: 0;
            visibility: hidden;
            transition: opacity .25s, visibility .25s, transform .25s;
        }

        .container {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: calc(var(--layout-max-width) - 64px);
            height: var(--header-height);
            pointer-events: none;

            >.title {
                flex-shrink: 0;
                height: calc(var(--header-height) - 1px);
                transition: background-color .5s;

                .navBarTitle {

                    a.title {
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid transparent;
                        width: 100%;
                        height: var(--header-height);
                        font-size: 16px;
                        font-weight: 600;
                        color: var(--t-text-color);
                        transition: opacity .25s, color .25s;

                        &:hover {
                            opacity: .6;
                        }

                        img {
                            max-width: 100%;
                            margin-right: 8px;
                            height: 24px;
                        }
                    }
                }
            }

            .content {
                flex-grow: 1;

                .content-body {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    height: calc(var(--header-height) - 1px);

                    .navBarMenuGroup {

                        &:hover {
                            .text {
                                color: var(--t-text-color-2);
                            }

                            .menu {
                                opacity: 1;
                                visibility: visible;
                                transform: translateY(0);
                            }
                        }

                        .button {
                            display: flex;
                            align-items: center;
                            padding: 0 12px;
                            height: var(--header-height);
                            color: var(--t-text-color-1);
                        }

                        .text {
                            display: flex;
                            align-items: center;
                            line-height: var(--header-height);
                            font-size: 14px;
                            font-weight: 500;
                            color: var(--t-text-color-1);
                            transition: color .25s;

                            .text-icon {
                                margin-left: 4px;
                                width: 14px;
                                height: 14px;
                                fill: currentColor;
                            }
                        }

                        .JYMenu {
                            border-radius: 12px;
                            padding: 12px;
                            min-width: 128px;
                            border: 1px solid var(--t-border-color);
                            background-color: var(--t-elv-background-color);
                            box-shadow: var(--box-shadow-3);
                            max-height: calc(100vh - var(--header-height));
                            overflow-y: auto;

                            .menuGroup {
                                margin: 12px -12px 0;
                                border-top: 1px solid var(--t-border-color);
                                padding: 12px 12px 0;

                                &:first-child {
                                    margin-top: 0;
                                    border-top: 0;
                                    padding-top: 0;
                                }

                                .title {
                                    padding: 0 12px;
                                    line-height: 32px;
                                    font-size: 14px;
                                    font-weight: 600;
                                    color: var(--t-text-color-2);
                                    white-space: nowrap;
                                    transition: color .25s;
                                }

                                .link {
                                    display: block;
                                    border-radius: 6px;
                                    padding: 0 12px;
                                    line-height: 32px;
                                    font-size: 14px;
                                    font-weight: 500;
                                    color: var(--t-text-color-1);
                                    white-space: nowrap;
                                    transition: background-color .25s, color .25s;

                                    &:hover {
                                        color: var(--green);
                                        background-color: var(--t-elv-mute-background-color);
                                    }
                                }

                                .link.active {
                                    color: var(--green);
                                }

                                .menuLink {
                                    .link {
                                        line-height: 28px !important;
                                    }
                                }
                            }

                            .menuGroup+.menuGroup {
                                margin-top: 12px;
                                border-top: 1px solid var(--t-border-color);
                            }
                        }
                    }

                    .link {
                        display: flex;
                        align-items: center;
                        padding: 0 12px;
                        line-height: var(--header-height);
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--t-text-color);
                        transition: color .25s;

                        &:hover {
                            color: var(--green);
                        }
                    }

                    .link.active {
                        color: var(--green);
                    }

                    .social-links {
                        margin-left: -8px;

                        .social-links-list {
                            margin: -4px -8px;
                        }

                        a.link {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 36px;
                            height: 36px;
                            color: var(--grey);
                            transition: color .25s;

                            &:hover {
                                color: var(--t-text-color);
                            }

                            i.bi {
                                font-size: 20px;
                            }
                        }
                    }

                    .extra {
                        position: relative;
                        display: none;
                        margin-right: -12px;

                        &:hover {
                            .menu {
                                opacity: 1;
                                visibility: visible;
                                transform: translateY(0);
                            }
                        }

                        .button {
                            display: flex;
                            align-items: center;
                            padding: 0 12px;
                            height: var(--header-height);
                            color: var(--t-text-color);
                            transition: color .25s, opacity .25s;

                            &:hover {
                                opacity: .6;
                            }

                            i.bi {
                                font-size: 16px;
                            }
                        }

                        .menu-body {
                            padding: 12px;
                            min-width: 128px;
                            background-color: var(--t-background-color);
                            border: 1px solid var(--t-border-color);
                            border-radius: 12px;
                            box-shadow: var(--box-shadow);

                            .group {
                                margin: 0 -12px;
                                padding: 0 12px 12px;

                                &:nth-of-type(2n) {
                                    border-top: 1px solid var(--t-border-color);
                                    padding: 11px 12px 12px;
                                }

                                &:last-of-type {
                                    padding-bottom: 0;
                                }

                                .item {
                                    padding: 0 12px;
                                    display: flex;
                                    align-items: center;
                                    min-width: 176px;

                                    .label {
                                        flex-grow: 1;
                                        line-height: 28px;
                                        font-size: 12px;
                                        font-weight: 500;
                                        color: var(--t-text-color-2);
                                        transition: color .25s;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .navbar-wrapper.has-sidebar {
        border-bottom-color: var(--t-color-gutter);
    }

    .navbar-wrapper.fill:not(.has-sidebar) {
        background-color: var(--t-background-color);
        border-bottom-color: var(--t-border-color);
    }

    .navBarMenu {
        display: none;
    }

    .JYFlyout {
        position: relative;
    }

    .screen {
        position: fixed;
        // top: calc(var(--header-height) + 1px);
        top: calc(var(--header-height));
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0 32px;
        width: 100%;
        background-color: var(--t-background-color);
        overflow-y: auto;
        pointer-events: auto;

        .container {
            margin: 0 auto;
            padding: 24px 0 96px;
            max-width: 288px;

            .menu {
                .screenMenuGroup {
                    border-bottom: 1px solid var(--t-border-color);
                    height: 48px;
                    overflow: hidden;
                    transition: border-color .25s;

                    .button {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 12px 4px 11px 0;
                        width: 100%;
                        line-height: 24px;
                        font-size: 14px;
                        font-weight: 500;
                        color: var(--t-text-color-1);
                        transition: color .25s;

                        &:hover {
                            color: var(--green);
                        }

                        i.bi {
                            font-size: 18px;
                            color: var(--t-text-color-2);
                            transition: color .25s, transform .25s;
                        }
                    }

                    .items {
                        visibility: hidden;

                        .group {
                            &:first-child {
                                padding-top: 0;
                            }

                            .navScreenMenuGroupSection {
                                display: block;

                                .title {
                                    line-height: 32px;
                                    font-size: 13px;
                                    font-weight: 700;
                                    color: var(--t-text-color-2);
                                    transition: color .25s;
                                }

                                .navScreenMenuGroupLink {
                                    display: block;
                                    margin-left: 12px;
                                    line-height: 32px;
                                    font-size: 14px;
                                    font-weight: 400;
                                    color: var(--t-text-color-1);
                                    transition: color .25s;

                                    &:hover {
                                        color: var(--green);
                                    }
                                }
                            }
                        }

                        .group+.group,
                        .group+.item {
                            padding-top: 4px;
                        }
                    }
                }

                .screenMenuGroup.open {
                    padding-bottom: 10px;
                    height: auto;

                    .button {
                        padding-bottom: 6px;
                        color: var(--green);

                        i.bi {
                            transform: rotate(45deg);
                        }
                    }

                    .items {
                        visibility: visible;
                    }
                }

                >.link {
                    display: block;
                    border-bottom: 1px solid var(--t-border-color);
                    padding: 12px 0 11px;
                    line-height: 24px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--t-text-color);
                    transition: color .25s;

                    &:hover {
                        color: var(--green);
                    }
                }

                >.link.active {
                    color: var(--green);
                }
            }

            .text {
                line-height: 24px;
                font-size: 12px;
                font-weight: 500;
                color: var(--grey);
            }

            .social-links {
                margin-left: -8px;

                a.link {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 36px;
                    height: 36px;
                    color: var(--grey);
                    transition: color .25s;

                    &:hover {
                        color: var(--t-text-color);
                    }

                    i.bi {
                        font-size: 20px;
                    }
                }
            }

            .menu+.appearance {
                margin-top: 24px;

                .text {
                    color: var(--t-text-color-2);
                    transition: color .25s;
                }
            }

            .appearance+.social-links {
                margin-top: 16px;
            }
        }
    }

    .screenAppearance {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        padding: 12px 14px 12px 16px;
        background-color: var(--t-card-background-color);
    }

    .socialLinks {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .scale-enter-active,
    .scale-leave-active {
        transition: all 0.35s;
    }

    .scale-enter-from {
        opacity: 0;
        transform: scale(1) translateY(-10px);
    }

    .scale-leave-to {
        opacity: 0;
        z-index: -1;
        transform: scale(1) translateY(-10px);
    }
}

@media (min-width: 640px) {
    .navbar-wrapper {
        .container {
            max-width: 640px;
        }
    }
}

@media (min-width: 768px) {
    .navbar {
        .navbar-wrapper {
            padding: 0 32px;

            .container {
                max-width: 768px;

                .content {
                    .content-body {
                        .navBarMenu {
                            display: flex;
                        }

                        .extra {
                            display: block;
                        }
                    }
                }
            }
        }
    }

    .hamburger {
        display: none;
    }
}

@media (min-width: 960px) {
    .navbar {
        position: fixed;

        .navbar-wrapper {
            .container {
                max-width: 768px;

                .content {
                    .content-body {
                        .navBarMenu {
                            display: flex;
                        }

                        .extra {
                            display: block;
                        }
                    }
                }
            }
        }

        .navbar-wrapper.fill {
            .container {
                .content {
                    .content-body {
                        position: relative;
                        background-color: var(--t-background-color);
                    }
                }
            }
        }

        .navbar-wrapper.has-sidebar {
            border-bottom-color: transparent;
            padding: 0;

            .container {
                max-width: 100%;

                div.title {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    padding: 0 32px;
                    width: var(--sidebar-width);
                    height: var(--header-height);
                    background-color: transparent;

                    .navBarTitle {
                        .title {
                            border-bottom-color: var(--t-border-color);
                        }
                    }
                }

                .content {
                    position: relative;
                    z-index: 1;
                    padding-right: 32px;
                    padding-left: var(--sidebar-width);

                    .curtain {
                        position: absolute;
                        right: 0;
                        bottom: -31px;
                        width: calc(100% - var(--sidebar-width));
                        height: 32px;

                        &:before {
                            display: block;
                            width: 100%;
                            height: 32px;
                            background: linear-gradient(var(--t-background-color), transparent 70%);
                            content: "";
                        }
                    }

                    .content-body {
                        position: relative;
                        background-color: var(--t-background-color);
                    }
                }
            }
        }
    }
}

@media (min-width: 1024px) {
    .navbar {
        .navbar-wrapper {
            .container {
                max-width: 1024px;
            }
        }
    }
}

@media (min-width: 1280px) {
    .navbar {
        .navbar-wrapper {
            .container {
                max-width: 1280px;

                .content {
                    .content-body {
                        .navBarMenu {
                            display: flex;
                        }

                        .extra {
                            display: none;
                        }
                    }
                }
            }
        }
    }
}

@media (min-width: 1440px) {
    .navbar {
        .navbar-wrapper.has-sidebar {
            .container {

                div.title {
                    padding-left: max(32px, calc((100% - (var(--layout-max-width) - 64px)) / 2));
                    width: calc((100% - (var(--layout-max-width) - 64px)) / 2 + var(--sidebar-width) - 32px);
                }

                .content {
                    padding-right: calc((100vw - var(--layout-max-width)) / 2 + 32px);
                    padding-left: calc((100vw - var(--layout-max-width)) / 2 + var(--sidebar-width));

                    .curtain {
                        width: calc(100% - ((100vw - var(--layout-max-width)) / 2 + var(--sidebar-width)));
                    }
                }
            }
        }
    }

}
</style>