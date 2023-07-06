<template>
    <div class="jy-accordion">
        <div class="jy-accordion__wrapper" :class="[props.modelValue ? 'is-active' : '']"
            :style="accordionConfig.wrapperStyle">
            <button class="jy-accordion__header" @click="accordion__toggle">
                <span class="jy-accordion__header-label">
                    <slot name="title">
                        {{ props.title }}
                    </slot>
                </span>
                <span class="jy-accordion__header-icon">
                    <svg class="button-icon" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </span>
            </button>
            <div class="jy-accordion__inner" :style="accordionConfig.contentStyle" ref="JYAccordionInner"
                @transitionend="accordionTransitionEnd">
                <div class="jy-accordion__inner-content">
                    <slot name="default">
                        {{ props.content }}
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, onMounted } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})

watch(() => props.modelValue, (val: boolean) => {
    if (val) {
        accordionConfig.wrapperStyle = {
            transition: "background-color .25s"
        }
        JYAccordionInner.value.style.display = "block"
        accordionConfig.contentStyle = {
            overflow: "hidden",
            height: `${JYAccordionInner.value.scrollHeight}px`,
            willChange: "height",
            transition: "height .25s"
        }
    } else {
        accordionConfig.wrapperStyle = {
            transition: "background-color .25s"
        }
        JYAccordionInner.value.style.height = `${JYAccordionInner.value.scrollHeight}px`;
        setTimeout(() => {
            accordionConfig.contentStyle = {
                transition: "height .25s",
                willChange: "height",
                height: "0px",
                overflow: "hidden"
            }
        }, 0);
    }
    emits("change", val)
})

const emits = defineEmits(["update:modelValue", "change"])

const JYAccordionInner = ref();
const accordionConfig = reactive({
    wrapperStyle: {},
    contentStyle: {}
})

const accordion__toggle = () => {
    emits("update:modelValue", !props.modelValue)
}

const accordionTransitionEnd = () => {
    if (props.modelValue) {
        accordionConfig.wrapperStyle = {};
        JYAccordionInner.value.style.display = "";
        accordionConfig.contentStyle = {};
    } else {
        accordionConfig.wrapperStyle = {};
        accordionConfig.contentStyle = {
            height: "0px",
            overflow: "hidden",
            display: "none"
        }
    }
}

const initAccordion = () => {
    if (!props.modelValue) {
        JYAccordionInner.value.style.display = "none";
        JYAccordionInner.value.style.height = "0";
        JYAccordionInner.value.style.overflow = "hidden";
    }
}

onMounted(() => {
    initAccordion();
})
</script>

<style lang="scss" scoped>
.jy-accordion {
    margin-bottom: 1.25rem;

    .jy-accordion__wrapper {
        border: 1px solid var(--t-border-color);
        border-radius: var(--border-radius);
        background-color: var(--t-special-bg);

        .jy-accordion__header {
            appearance: none;
            padding: 0.8rem 1rem;
            width: 100%;
            color: var(--t-text-color);
            font-size: 1rem;
            font-weight: 500;
            text-align: left;
            border: none;
            background-color: transparent;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            transition: color .25s;

            .jy-accordion__header-label {
                color: inherit;
                flex-grow: 1;
                flex-shrink: 1;
                flex-basis: 0%;
                line-height: 1.15;
                overflow-x: hidden;
                overflow-y: hidden;
                text-overflow: ellipsis;
            }

            .jy-accordion__header-icon {
                margin-left: 1.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                min-width: 24px;
                transition: transform .25s;

                .button-icon {
                    color: inherit;
                    width: 1rem;
                    height: 1rem;
                }
            }
        }

        .jy-accordion__inner {

            .jy-accordion__inner-content {
                padding: 0.25rem 1rem 1rem 1rem;
                line-height: 1.5;
            }
        }
    }

    .jy-accordion__wrapper.is-active {
        background-color: var(--t-background-color);

        .jy-accordion__header {
            .jy-accordion__header-icon {
                transform: rotate(180deg);
            }
        }
    }
}
</style>