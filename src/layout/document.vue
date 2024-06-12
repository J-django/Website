<script lang="ts" setup>
import { ref, unref, watch, onMounted, nextTick } from "vue";
import { useRoute } from 'vue-router'
import Aside from "@/components/aside.vue"

const route = useRoute();

const asideRef = ref()
const docMainRef = ref();

watch(() => route.path, () => {
    nextTick(() => {
        init();
    })
})

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
        <div class="container">
            <div class="content">
                <div class="content-container">
                    <main class="main">
                        <div ref="docMainRef">
                            <router-view></router-view>
                        </div>
                    </main>
                </div>
            </div>
            <Aside ref="asideRef" :refSource="docMainRef" />
        </div>
    </div>
</template>

<style lang="scss" scopedF>
.doc {
    padding: 32px 24px 96px;
    width: 100%;
    height: 100%;

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

    >.container {
        margin: 0 auto;
        width: 100%;

        >.content {
            position: relative;
            margin: 0 auto;
            order: 1;
            width: 100%;

            .content-container {
                margin: 0 auto;
                max-width: 688px;

                main {
                    display: block;
                }
            }

            div {
                .jy-code {
                    position: relative;
                    margin: 16px -28px;
                    border-radius: 0;
                    overflow-x: auto;
                }
            }
        }
    }
}

@media (min-width: 640px) {
    .doc {
        >.container {
            max-width: 640px;

            >.content {
                div {
                    .jy-code {
                        border-radius: 8px;
                        margin: 16px 0;
                    }
                }
            }
        }
    }
}

@media (min-width: 768px) {
    .doc {
        padding: 48px 32px 128px;

        h1 {
            letter-spacing: -.02em;
            line-height: 40px;
            font-size: 32px;
        }

        >.container {
            max-width: 768px;
        }
    }
}

@media (min-width: 960px) {
    .doc {
        padding: 32px 32px 0;

        >.container {
            >.content {
                padding: 0 32px 128px;
            }
        }
    }
}

@media (min-width: 1024px) {
    .doc {
        >.container {
            max-width: 1024px;
        }
    }
}

@media (min-width: 1280px) {
    .doc {
        >.container {
            max-width: 1280px;
            display: flex;
            justify-content: center;

            >.content {
                order: 1;
                margin: 0;
                min-width: 640px;
            }
        }
    }
}

@media (min-width: 1536px) {
    .doc {
        >.container {
            max-width: 1536px;
        }
    }
}
</style>