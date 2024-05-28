<script lang="ts" setup name="dj-code">
// plugins
import "./index.less"
import { ref, reactive, nextTick, onMounted } from 'vue'
import * as  _ from 'lodash'
import Prism from "prismjs"
import 'prismjs/components/prism-javascript';
import { nanoid } from 'nanoid'

// script
const prop = defineProps({
    code: {
        type: String,
        default: ""
    },
    languages: {
        type: String,
        default: "html",
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

<template>
    <div class="dj-code" :class="[overstepParams.overstep]" :language="languages">
        <button class="copy" :class="[copyRes ? 'copied' : '']" title="复制" @click.prevent="copy">
            <i class="bi bi-clipboard" v-if="!copyRes"></i>
            <i class="bi bi-clipboard-check-fill" v-else></i>
        </button>
        <pre class="language-html dj-pre-code" :id="proCodeId"><code v-html="preCode" /></pre>
        <div class="dj-code__foldUp"
            v-if="!overstepParams.overstep && overstepParams.height > overstepParams.superior_limit" @click="folded"
            title="折叠">
            <i class="bi bi-chevron-up"></i>
        </div>
        <div class="dj-code-dark">
            <button class="unfold" title="展开" @click="spread">
                <i class="bi bi-chevron-compact-down"></i>
            </button>
        </div>
    </div>
</template>