<script lang="ts" setup name="dj-code">
// plugins
import { ref, reactive, computed, nextTick, onMounted } from 'vue'
import * as  _ from 'lodash'
import Prism from "prismjs"
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript.js';
import { nanoid } from 'nanoid'

// script
const prop = defineProps({
    code: {
        type: String,
        default: ""
    },
    language: {
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
        const input = document.createElement("textarea");
        document.body.appendChild(input);
        input.value = prop.code;
        input.select();
        document.execCommand("Copy");
        document.body.removeChild(input);
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
    switch (prop.language) {
        case "vue":
            preCode.value = Prism.highlight(prop.code, Prism.languages.html, prop.title);
            break;
        case "js":
        case "javascript":
            preCode.value = Prism.highlight(prop.code, Prism.languages.javascript, prop.title);
            break;
        case "ts":
        case "typescript":
            preCode.value = Prism.highlight(prop.code, Prism.languages.typescript, prop.title);
            break;
        case "bash":
            preCode.value = Prism.highlight(prop.code, Prism.languages.bash, prop.title);
            break;
    }
    Prism.highlightAll();
    loadPreCodeHeight();
})
</script>

<template>
    <div class="dj-code" :class="[overstepParams.overstep]" :language="prop.language">
        <div class="dj-copy" :class="[copyRes ? 'copied' : '']">
            <button class="dj-copy__wrapper" title="复制" @click.prevent="copy">
                <svg v-if="!copyRes" class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v0M8 5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v0" />
                </svg>
                <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z" />
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm9.012 8.511a.75.75 0 1 0-1.024-1.096l-3.774 3.522l-1.202-1.122a.75.75 0 0 0-1.024 1.096l1.715 1.6a.75.75 0 0 0 1.023 0z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <pre class="dj-code__wrapper" :class="[`language-${prop.language}`]"
            :id="proCodeId"><code v-html="preCode" /></pre>
        <div class="dj-code-foldUp"
            v-if="!overstepParams.overstep && overstepParams.height > overstepParams.superior_limit" @click="folded"
            title="折叠">
            <button class="dj-code-foldUp__wrapper">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="48" d="m112 328l144-144l144 144" />
                </svg>
            </button>
        </div>
        <div class="dj-code-unfold">
            <button class="dj-code-unfold__wrapper" title="展开" @click="spread">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M1.867 6.097a.75.75 0 0 1 1.036-.23L8 9.111l5.097-3.244a.75.75 0 0 1 .806 1.266l-5.5 3.5a.75.75 0 0 1-.806 0l-5.5-3.5a.75.75 0 0 1-.23-1.036"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
</template>

<style lang="less">
@import "./index.less";
</style>