<template>
    <div class="jy-code" :class="[overstepParams.overstep]" :language="languages">
        <button class="copy" :class="[copyRes ? 'copied' : '']" title="复制" @click.prevent="copy">
            <i class="bi bi-clipboard" v-if="!copyRes"></i>
            <i class="bi bi-clipboard-check-fill" v-else></i>
        </button>
        <pre class="language-html jy-pre-code" :id="proCodeId"><code v-html="preCode" /></pre>
        <div class="jy-code__foldUp"
            v-if="!overstepParams.overstep && overstepParams.height > overstepParams.superior_limit" @click="folded"
            title="折叠">
            <i class="bi bi-chevron-up"></i>
        </div>
        <div class="jy-code-dark">
            <button class="unfold" title="展开" @click="spread">
                <i class="bi bi-chevron-compact-down"></i>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick, onMounted } from 'vue'
import * as  _ from 'lodash'
import Prism from "prismjs"
import 'prismjs/components/prism-javascript';
import { nanoid } from 'nanoid'

const prop = defineProps({
    code: {
        type: String,
        default: ""
    },
    languages: {
        type: String,
        default: "vue",
    },
    title: {
        type: String,
        default: "javascript"
    }
})

const proCodeId = nanoid();
const overstepParams = reactive({
    height: <number>0,
    overstep: "",
    superior_limit: 500
})
const preCode = ref<String>("");
const copyRes = ref<Boolean>(false);

const copy = _.throttle(() => {
    try {
        var input = document.createElement("input"); // 创建input对象
        input.value = prop.code; // 设置复制内容
        document.body.appendChild(input); // 添加临时实例
        input.select(); // 选择实例内容
        document.execCommand("Copy"); // 执行复制
        document.body.removeChild(input); // 删除临时实例
        copyRes.value = true;
        reset();
    } catch {
        copyRes.value = false;
    }
}, 1000)

const reset = _.debounce(() => {
    copyRes.value = false;
}, 3000)

const spread = () => {
    overstepParams.overstep = '';
}

const folded = () => {
    overstepParams.overstep = 'overstep';
}

const loadPreCodeHeight = () => {
    nextTick(() => {
        const dom: any = document.getElementById(proCodeId);
        overstepParams.height = dom?.offsetHeight;
        if (dom?.offsetHeight > overstepParams.superior_limit) {
            overstepParams.overstep = 'overstep';
        }
    })
}

onMounted(() => {
    preCode.value = Prism.highlight(prop.code, Prism.languages.html, prop.title);
    Prism.highlightAll();
    loadPreCodeHeight();
})
</script>

<style lang="scss" scoped>
.jy-code {
    position: relative;
    background-color: var(--t-code-bg);
    border-radius: var(--border-radius);

    &::before {
        content: attr(language);
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 12px;
        color: var(--gray);
        opacity: 1;
        transition: color .4s, opacity .4s;
    }

    &:hover {
        &:before {
            opacity: 0;
        }

        .copy,
        .jy-code__foldUp {
            opacity: 1;
        }
    }

    .jy-code-dark {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        display: block;
        background: linear-gradient(transparent 30%, var(--t-background-color));
        opacity: 0;
        z-index: -1;

        .unfold {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40px;
            color: var(--t-text-color);
            opacity: 1;
            transition: color .25s, opacity .25s;

            &:hover {
                opacity: .6;
            }

            i.bi {
                font-size: 26px;
            }
        }
    }

    .copy {
        direction: ltr;
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 3;
        display: block;
        justify-content: center;
        align-items: center;
        border: 1px solid transparent;
        border-radius: 4px;
        width: 40px;
        height: 40px;
        color: var(--t-text-color);
        // background-color: var(--t-special-bg);
        background-color: var(--t-code-copy-bg);
        opacity: 0;
        cursor: pointer;
        transition: color .25s, border-color .25s, opacity .25s;

        &:hover {
            border-color: var(--t-border-color);
        }

        i.bi {
            font-size: 16px;
        }
    }

    .copy.copied {
        border-radius: 0 4px 4px 0;
        border-color: var(--t-border-color);

        &:before {
            position: absolute;
            content: "Copied";
            top: 50%;
            left: -65px;
            transform: translateY(-50%);
            width: 65px;
            height: 40px;
            font-size: 12px;
            color: var(--t-text-color);
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--t-code-copy-bg);
            border: 1px solid var(--t-border-color);
            border-radius: 4px 0 0 4px;
        }
    }

    pre.jy-pre-code {
        padding: 20px 24px;
        margin: 0;
        font-size: .875em;
        background: transparent;
        overflow: auto;
    }

    .jy-code__foldUp {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 12px;
        bottom: 12px;
        width: 40px;
        height: 40px;
        color: var(--t-text-color);
        background-color: var(--t-special-bg);
        border: 1px solid transparent;
        border-radius: var(--border-radius);
        opacity: 0;
        cursor: pointer;
        transition: opacity .25s, border-color .25s;

        &:hover {
            border-color: var(--t-border-color);
        }

        i.bi {
            font-size: 16px;
        }
    }
}

.jy-code.overstep {
    height: 340px;
    overflow-y: hidden;

    .jy-code-dark {
        opacity: 1;
        z-index: 0;
    }
}
</style>