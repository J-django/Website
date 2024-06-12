<script lang="ts" setup>
import { ref, unref, onMounted, onUnmounted, Ref } from 'vue';
import { useDom } from '@/hooks'

interface Aside {
    id: string;
    text: string | null
}

const rootRef = ref();
const outlineTitleRef = ref();

const HTMLElement = ref<HTMLCollectionOf<HTMLHeadingElement>>();
const closestHeading = ref<Aside>();

const asideConfig = ref<Aside[]>([])
const markerTop = ref<number>(39);

const { goAnchor, getElementsByTagName } = useDom();

/**
 * 获取源
 * @param element 元素 
 */
const getSource = (element: HTMLElement) => {
    HTMLElement.value = getElementsByTagName(element, "h2") as HTMLCollectionOf<HTMLHeadingElement>;
}

/**
 * 加载锚点列表
 */
const init = () => {
    clearAll();
    Array.from(HTMLElement.value!).forEach((heading) => {
        unref(asideConfig).push({
            id: heading.id,
            text: heading.textContent
        })
    })
    getClosestHeading();
}

/**
 * 清楚全部
 */
const clearAll = () => {
    asideConfig.value = [];
}

/**
 * 最靠近顶部锚点
 */
const getClosestHeading = () => {
    let closetsH2 = null;
    let minDistance = Infinity;
    for (let h2 of Array.from(unref(HTMLElement)!)) {
        const rect = h2.getBoundingClientRect();
        const distance = Math.abs(rect.top - 80);
        if (distance < minDistance) {
            minDistance = distance;
            closetsH2 = h2;
        }
    }
    closestHeading.value = {
        id: closetsH2?.id!,
        text: closetsH2?.textContent!
    }!;
    findLinkPositionById();
}

/**
 * 计算当前选中锚点位置
 */
const findLinkPositionById = () => {
    const Ul = rootRef.value.getElementsByTagName("li") as HTMLCollectionOf<HTMLLIElement>;
    for (let li of Array.from(Ul)) {
        const id = li.querySelector("a")?.getAttribute("href");
        if (id && id == `#${unref(closestHeading)?.id}`) {
            markerTop.value = li.offsetTop + outlineTitleRef.value.offsetHeight + 8;
        }
    }
}

onMounted(() => {
    window.addEventListener("scroll", getClosestHeading);
})

onUnmounted(() => {
    window.removeEventListener("scroll", getClosestHeading);
})

defineExpose({ getSource, init, clearAll })
</script>

<template>
    <div class="aside">
        <div class="aside-curtain"></div>
        <div class="aside-container">
            <div class="aside-content">
                <div class="docAside">
                    <div class="docAsideOutline has-outline">
                        <div class="content">
                            <div class="outline-marker"
                                :style="{ top: `${markerTop}px`, opacity: closestHeading?.id ? 1 : 0 }"></div>
                            <div class="outline-title" ref="outlineTitleRef">On this page</div>
                            <nav>
                                <div class="visually-hidden">
                                    Table of Contents for current page
                                </div>
                                <ul class="root" ref="rootRef">
                                    <li v-for="(item, index) of asideConfig" :key="index">
                                        <a :href="'#' + item.id" class="outline-link"
                                            :class="[closestHeading?.id == item.id ? 'active' : '']" :title="item.text!"
                                            @click.prevent="goAnchor(item.id)">{{ item.text }}</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style type="less">
.aside {
    position: relative;
    display: none;
    order: 2;
    flex-grow: 1;
    padding-left: 32px;
    width: 100%;
    max-width: 256px;

    .aside-curtain {
        position: fixed;
        bottom: 0;
        z-index: 10;
        width: 224px;
        height: 32px;
        background: linear-gradient(transparent, var(--t-background-color) 70%);
    }

    .aside-container {
        position: sticky;
        top: 0;
        margin-top: calc((var(--header-height) + var(--vp-layout-top-height, 0px)) * -1 - 32px);
        padding-top: calc(var(--header-height) + var(--vp-layout-top-height, 0px) + 32px);
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;

        .aside-content {
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - (var(--header-height) + var(--vp-layout-top-height, 0px) + 32px));
            padding-bottom: 32px;

            .docAside {
                display: flex;
                flex-direction: column;
                flex-grow: 1;

                .docAsideOutline {
                    display: none;

                    .content {
                        position: relative;
                        border-left: 1px solid var(--t-border-color);
                        padding-left: 16px;
                        font-size: 13px;
                        font-weight: 500;

                        .outline-marker {
                            position: absolute;
                            top: 32px;
                            left: -1px;
                            z-index: 0;
                            opacity: 0;
                            width: 1px;
                            height: 18px;
                            background-color: var(--green);
                            transition: top .25s cubic-bezier(0, 1, .5, 1), background-color .5s, opacity .25s;
                        }

                        .outline-title {
                            letter-spacing: .4px;
                            line-height: 32px;
                            font-size: 13px;
                            font-weight: 600;
                        }

                        nav {
                            .visually-hidden {
                                position: absolute;
                                width: 1px;
                                height: 1px;
                                white-space: nowrap;
                                clip: rect(0 0 0 0);
                                clip-path: inset(50%);
                                overflow: hidden;
                            }

                            .root {
                                position: relative;
                                z-index: 1;

                                .outline-link {
                                    display: block;
                                    line-height: 32px;
                                    font-size: 14px;
                                    font-weight: 500;
                                    color: var(--grey);
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    transition: color .25s;
                                }

                                .outline-link.active {
                                    color: var(--t-text-color);
                                    transition: color .25s;
                                }

                                .outline-link,
                                .outline-link.active {
                                    &:hover {
                                        color: var(--t-text-color);
                                        transition: color .25s;
                                    }
                                }
                            }
                        }
                    }
                }

                .docAsideOutline.has-outline {
                    display: block;
                }
            }
        }
    }
}

@media (min-width: 1280px) {
    .aside {
        display: block;
    }
}
</style>