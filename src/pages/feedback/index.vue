<template>
    <div class="feedBack-box">
        <div class="feedBack-content">
            <label class="title" for="feedBack-inner">问题描述：</label>
            <dj-textarea id="feedBack-inner" :disabled="submitParams.disabled && submitParams.status == 'submitted'"
                type="textarea" rows="10" placeholder="请描述您遇到的问题或需要改进的地方" v-model="submitContent" />
            <dj-button class="submit" :class="[submitParams.status]" :disabled="submitParams.disabled" ref="submit"
                @click="feedBackSubmit">提交</dj-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import * as  _ from 'lodash'


const emits = defineEmits(["change"])

const submit = ref();
const submitParams = reactive({
    status: "",
    disabled: false,
})
const submitContent = ref<string>("");

watch(() => submitContent.value, (val: string) => {
    if (val) {
        submitParams.status = "";
        submitParams.disabled = false;
    }
})

const feedBackSubmit = _.throttle(() => {
    if (submitContent.value) {
        success();
        reset();
    } else {
        error();
    }
}, 3000)

const success = () => {
    submitParams.status = "submitted";
    submitParams.disabled = true;
}

const error = () => {
    submitParams.status = "required";
    submitParams.disabled = true;
}

const reset = _.debounce(() => {
    submitContent.value = "";
    submitParams.status = "";
    submitParams.disabled = false;
}, 3000)

</script>


<style lang="scss" scoped>
.feedBack-box {
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .feedBack-content {
        width: 100%;
        min-width: 300px;
        max-width: 1280px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: nowrap;

        .title {
            margin: 0 0 8px 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--t-text-color);
            transition: color .25s;
        }
    }

    .submit {
        position: relative;
        margin: 12px 0;
        padding: 8px 24px;
        color: var(--t-text-color);
        font-size: 14px;
        border-radius: var(--border-radius);
        background-color: var(--t-card-background-color);
        opacity: 1;
        transition: color .25s, opacity .25s;

        &:before {
            position: absolute;
            content: "";
            top: 50%;
            padding: 0 10px;
            right: 0;
            width: 0;
            height: 0;
            font-size: 14px;
            color: var(--green);
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateY(-50%);
        }

        &:hover:not(&:disabled) {
            opacity: .8;
        }
    }

    .submit.submitted {
        opacity: .8;

        &:before {
            content: "感谢您的建议";
            right: -150px;
            width: 150px;
            height: 100%;
            color: var(--green);
        }
    }

    .submit.required {

        &:before {
            content: "请填写您的建议";
            right: -150px;
            width: 150px;
            height: 100%;
            color: var(--red);
        }
    }
}

@media (min-width: 768px) {
    .box {
        padding: 32px 20px 0;
    }
}
</style>