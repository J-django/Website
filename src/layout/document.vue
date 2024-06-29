<script lang="ts" setup>
import { ref, unref, watch, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { usePage } from '@/hooks'
import Aside from "@/components/aside.vue"

const route = useRoute();
const router = useRouter();

const { prevPage, nextPage } = usePage();

const asideRef = ref()
const docMainRef = ref();

watch(() => route.path, () => {
    setTimeout(() => {
        init();
    }, 0);
})

/**
 * 更改路由
 * @param path 路由路径
 */
const reroute = async (path: string) => {
    const task = new Promise((resolve, reject) => {
        try {
            router.push({
                path: path
            }).then(() => {
                resolve(true);
            }).catch(() => {
                reject(false)
            })
        } catch {
            reject(false)
        }
    })

    const res = await task;
    if (res) {
        window.scrollTo({
            top: 0
        })
    }
}

/**
 * 加载右侧锚点
 */
const init = () => {
    unref(asideRef).getSource(unref(docMainRef));
    unref(asideRef).init()
}

onMounted(() => {
    init();
})
</script>

<template>
    <div class="doc">
        <div class="doc-container">
            <div class="doc-content">
                <div class="doc-content-container">
                    <main class="doc-main">
                        <div ref="docMainRef">
                            <router-view></router-view>
                        </div>
                    </main>
                    <footer class="doc-footer">
                        <nav class="prev-next">
                            <div class="pager">
                                <a v-if="prevPage" :href="prevPage?.path" @click.prevent="reroute(prevPage?.path)"
                                    class="pager-link prev">
                                    <span class="desc">Previous page</span>
                                    <span class="title">{{ prevPage?.meta?.title }}</span>
                                </a>
                            </div>
                            <div class="pager">
                                <a v-if="nextPage" :href="nextPage?.path" @click.prevent="reroute(nextPage?.path)"
                                    class="pager-link next">
                                    <span class="desc">Next page</span>
                                    <span class="title">{{ nextPage?.meta?.title }}</span>
                                </a>
                            </div>
                        </nav>
                    </footer>
                </div>
            </div>
            <Aside ref="asideRef" :refSource="docMainRef" />
        </div>
    </div>
</template>

<style lang="scss">
.doc {
    padding: 32px 24px 96px;
    width: 100%;
    height: 100%;



    .doc-container {
        margin: 0 auto;
        width: 100%;

        .doc-content {
            position: relative;
            margin: 0 auto;
            order: 1;
            width: 100%;

            .doc-content-container {
                margin: 0 auto;
                max-width: 688px;

                .doc-main {
                    display: block;

                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        position: relative;
                        font-weight: 600;
                        outline: none;
                    }

                    h1 {
                        letter-spacing: -.02em;
                        line-height: 40px;
                        font-size: 28px;
                    }

                    h2 {
                        margin: 48px 0 16px;
                        border-top: 1px solid var(--t-border-color);
                        padding-top: 24px;
                        letter-spacing: -.02em;
                        line-height: 32px;
                        font-size: 24px;
                    }

                    h2 {
                        border-top: 0;
                        margin-top: 10px;
                    }

                    h3 {
                        margin: 32px 0 0;
                        letter-spacing: -.01em;
                        line-height: 28px;
                        font-size: 20px;
                    }
                }

                .doc-footer {
                    margin-top: 64px;

                    .prev-next {
                        padding-top: 24px;
                        display: grid;
                        grid-row-gap: 8px;
                        border-top: 1px solid var(--t-border-color);

                        .pager {
                            .pager-link {
                                display: block;
                                border-radius: 8px;
                                padding: 11px 16px 13px;
                                width: 100%;
                                height: 100%;
                                border: 1px solid var(--t-border-color);
                                transition: border-color .25s;

                                &:hover {
                                    border-color: var(--green);
                                }

                                .desc {
                                    display: block;
                                    line-height: 20px;
                                    font-size: 12px;
                                    font-weight: 500;
                                    color: var(--t-text-color-2);
                                }

                                .title {
                                    display: block;
                                    line-height: 20px;
                                    font-size: 12px;
                                    font-weight: 500;
                                    color: var(--green);
                                }
                            }

                            .pager-link.next {
                                margin-left: auto;
                                text-align: right;
                            }
                        }
                    }
                }
            }

        }
    }
}

@media (min-width: 640px) {
    .doc {
        .doc-container {
            max-width: 640px;

            .doc-content {
                .doc-content-container {
                    .doc-footer {
                        .prev-next {
                            grid-template-columns: repeat(2, 1fr);
                            grid-column-gap: 16px;
                        }
                    }
                }
            }
        }
    }
}

@media (min-width: 768px) {
    .doc {
        padding: 48px 32px 128px;

        .doc-container {
            max-width: 768px;
        }
    }
}

@media (min-width: 960px) {
    .doc {
        padding: 32px 32px 0;

        .doc-container {
            .doc-content {
                padding: 0 32px 128px;
            }
        }
    }
}

@media (min-width: 1024px) {
    .doc {
        .doc-container {
            max-width: 1024px;
        }
    }
}

@media (min-width: 1280px) {
    .doc {
        .doc-container {
            max-width: 1280px;
            display: flex;
            justify-content: center;

            .doc-content {
                order: 1;
                margin: 0;
                min-width: 640px;
            }
        }
    }
}

@media (min-width: 1536px) {
    .doc {
        .doc-container {
            max-width: 1536px;
        }
    }
}
</style>