<template>
    <aside class="sidebar" :class="[prop.asideCheck ? 'open' : '']">
        <div class="curtain"></div>
        <nav class="nav">
            <span class="visually-hidden">
                Sidebar Navigation
            </span>
            <div class="group" v-for="item of AsideBar" :key="item.path">
                <section class="sidebarItem level-0" v-if="Array.isArray(item.children)">
                    <div class="item">
                        <div class="indicator"></div>
                        <h2 class="text">{{ (item.meta as RouteMeta).title }}</h2>
                    </div>
                    <div class="items" v-if="Array.isArray(item.children) && item.children.length > 0">
                        <template v-for="chil of item.children" :key="chil.path">
                            <div class="sidebarItem level-1 is-link"
                                :class="[route.path.includes(chil.path) ? 'is-active' : '']">
                                <div class="item">
                                    <div class="indicator"></div>
                                    <a :href="chil.path" class="link" @click.prevent="Push(chil.path)">
                                        <p class="text">
                                            {{ (chil.meta as RouteMeta).title }}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </template>
                    </div>
                </section>
                <section class="sidebarItem level-1 is-link" v-else>
                    <div class="item">
                        <div class="indicator"></div>
                        <a :href="item.path" class="link" @click.prevent="Push(item.path)">
                            <p class="text">
                                {{ (item.meta as RouteMeta).title }}
                            </p>
                        </a>
                    </div>
                </section>
            </div>
        </nav>
    </aside>
</template>

<script lang="ts" setup>
import { AsideBar } from '@/router/route'
import { RouteMeta, useRoute, useRouter } from 'vue-router'

const prop = defineProps({
    asideCheck: {
        type: Boolean,
        default: false
    }
})

const route = useRoute();
const router = useRouter();

const Push = (path: string) => {
    history.replaceState({}, '', path)
    router.push({
        path: path
    })
    window.scrollTo(0, 0)
}

</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    top: var(--vp-layout-top-height, 0px);
    bottom: 0;
    left: 0;
    z-index: var(--sidebar-z-index);
    padding: 32px 32px 96px;
    width: calc(100vw - 64px);
    max-width: 320px;
    height: 100vh;
    background-color: var(--t-sidebar-background-color);
    opacity: 0;
    box-shadow: var(--box-shadow);
    overflow-x: hidden;
    overflow-y: auto;
    transform: translate(-100%);
    transition: opacity .5s, transform .25s ease;

    .nav {
        outline: 0;

        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            white-space: nowrap;
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            overflow: hidden;
        }

        .group {
            border-top: 1px solid var(--t-border-color);
            padding-top: 10px;

            &:first-of-type {
                border: none;
            }
        }
    }
}

.sidebarItem.level-0 {
    padding-bottom: 24px;

    .text {
        font-weight: 700;
        color: var(--t-text-color-1);
    }
}

.sidebarItem.level-1 {
    padding-bottom: 8px;

    .text {
        font-weight: 500;
        color: var(--t-text-color-2);
    }
}

.sidebarItem.level-0.is-active,
.sidebarItem.level-1.is-active,
.sidebarItem.level-2.is-active,
.sidebarItem.level-3.is-active,
.sidebarItem.level-4.is-active,
.sidebarItem.level-5.is-active {
    >.item {
        .link {
            &:hover {
                color: var(--green);
            }

            >.text {
                color: var(--green);
            }
        }
    }
}

.sidebarItem.level-0.is-link,
.sidebarItem.level-1.is-link,
.sidebarItem.level-2.is-link,
.sidebarItem.level-3.is-link,
.sidebarItem.level-4.is-link,
.sidebarItem.level-5.is-link {
    >.item {
        .link {
            &:hover {
                .text {
                    color: var(--green);
                }
            }
        }
    }
}

.text {
    flex-grow: 1;
    padding: 4px 0;
    line-height: 24px;
    font-size: 14px;
    transition: color .25s;
}

.item {
    position: relative;
    display: flex;
    width: 100%;
}

.indicator {
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: -17px;
    width: 1px;
    transition: background-color .25s;
}

.link {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

a {
    color: inherit;
    text-decoration: inherit;
}

.sidebar.open {
    opacity: 1;
    visibility: visible;
    transform: translate(0);
    transition: opacity .25s, transform .5s cubic-bezier(.19, 1, .22, 1);
}

@media (min-width: 960px) {
    .sidebar {
        z-index: 1;
        padding-top: var(--header-height);
        padding-bottom: 128px;
        width: var(--sidebar-width);
        max-width: 100%;
        background-color: var(--t-sidebar-background-color);
        opacity: 1;
        visibility: visible;
        box-shadow: none;
        transform: translate(0);

        .curtain {
            position: sticky;
            top: -64px;
            left: 0;
            z-index: 1;
            margin-top: calc(var(--header-height) * -1);
            margin-right: -32px;
            margin-left: -32px;
            height: var(--header-height);
            background-color: var(--t-sidebar-background-color);
        }

        .group {
            padding-top: 10px;
            width: calc(var(--sidebar-width) - 64px);
        }
    }
}

@media (min-width: 1440px) {
    .sidebar {
        padding-left: max(32px, calc((100% - (var(--layout-max-width) - 64px)) / 2));
        width: calc((100% - (var(--layout-max-width) - 64px)) / 2 + var(--sidebar-width) - 32px);
    }
}
</style>