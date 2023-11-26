<template>
    <div class="jy-select" ref="triggerRef">
        <div class="jy-select-wrapper" @click="select__toggle"
            :class="[select__inner.focus ? 'is-focus' : '', props.disabled ? 'is-disabled' : '']">
            <input class="jy-select-inner" :id="props.id" readonly :disabled="props.disabled"
                :placeholder="props.placeholder" v-model="select__inner.currentOption.text" />
            <div class="jy-select__tool" :class="[props.clear && props.modelValue ? 'clear' : 'checked']">
                <div class="tool-inner checked">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="tool-icon checked"
                        viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="tool-inner clear" v-if="props.clear && props.modelValue" @click="clearSelect">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="tool-icon" viewBox="0 0 36 36">
                        <path fill="currentColor"
                            d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm8 22.1a1.4 1.4 0 0 1-2 2l-6-6l-6 6.02a1.4 1.4 0 1 1-2-2l6-6.04l-6.17-6.22a1.4 1.4 0 1 1 2-2L18 16.1l6.17-6.17a1.4 1.4 0 1 1 2 2L20 18.08Z"
                            class="clr-i-solid clr-i-solid-path-1" />
                        <path fill="none" d="M0 0h36v36H0z" />
                    </svg>
                </div>
            </div>
        </div>
        <div ref="slotRef" class="jy-option__wrapper" v-show="select__inner.focus">
            <ul class="jy-option__inner" :style="{ width: `${triggerRef?.offsetWidth}px` }">
                <template v-if="slots.default" v-for="(item, index) of  slots.default && slots.default() " :key="index">
                    <li class="jy-option" v-if="(item as any).type['__name'] == 'jy-option'"
                        :class="[select__inner.currentOption.value == item?.props?.value ? 'checked' : '']"
                        @click="checkedLi(item?.props)">
                        {{ item?.props?.text }}
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, nextTick, useSlots, onMounted } from 'vue'
import { createPopper } from '@popperjs/core'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
    id: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: ""
    },
    value: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    },
    clear: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: ""
    }
})

const emits = defineEmits(["update:modelValue", "change", "clear"]);

const slots = useSlots();

const triggerRef = ref();
const slotRef = ref();

onClickOutside(triggerRef, (event) => select__inner.focus = false)


const select__inner = reactive({
    focus: false,
    active: false,
    currentOption: {
        text: <string>"",
        value: <string>""
    }
})

const popper = ref();

const select__toggle = () => {
    if (props.disabled) return;
    select__inner.focus = !select__inner.focus;
    select__inner.focus ? popper.value.update() : null;
}

const select__init = () => {
    slotRef.value.style.zIndex = 2000;
    slotRef.value.width = triggerRef.value.offsetWidth;
    popper.value = createPopper(triggerRef.value, slotRef.value, {
        placement: "bottom",
        strategy: "absolute",
        modifiers: [
            preventOverflow,
            flip,
            {
                name: 'offset',
                options: {
                    offset: [null, 8],
                    computeStyle: {
                        gpuAcceleration: false // 用2D变换。
                    }
                },
            },
        ],
    })
}

const checkedLi = (prop: any) => {
    nextTick(() => {
        if (select__inner.currentOption == prop?.value) return;
        select__inner.currentOption = prop;
        emits("change", prop)
        emits("update:modelValue", prop.value);
        select__inner.focus = false;
    })
}

const clearSelect = () => {
    select__inner.currentOption.text = "";
    select__inner.currentOption.value = "";
    emits("clear", undefined)
    emits("update:modelValue", undefined)
};

onMounted(() => {
    select__init();
})
</script>

<style lang="scss" scoped>
.jy-select {
    position: relative;
    display: inline-flex;
    width: 100%;
    max-width: 260px;
    line-height: var(--jy-select-height);
    font-size: 14px;
    vertical-align: middle;

    &:hover {
        .jy-select-wrapper:not(.is-disabled) {
            box-shadow: 0 0 0 1px var(--t-border-color) inset;
        }
    }

    .jy-select-wrapper {
        padding: 1px 2px 1px 12px;
        position: relative;
        display: inline-flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        text-shadow: h-shadow v-shadow blur color;
        background-color: var(--t-card-background-color);
        border-radius: var(--border-radius);
        transform: translateZ(0);
        box-shadow: 0 0 0 1px transparent inset;
        transition: box-shadow .25s;
        cursor: pointer;

        &:hover {
            .jy-select__tool.clear {
                .tool-inner.checked {
                    display: none;
                }

                .tool-inner.clear {
                    display: flex;
                }
            }
        }

        .jy-select-inner {
            $inner_height: calc(var(--jy-select-height) - 2px);
            -webkit-appearance: none;
            appearance: none;
            padding: 0;
            flex-grow: 1;
            color: var(--t-text-color);
            font-size: inherit;
            width: 100%;
            height: $inner_height;
            line-height: $inner_height;
            background: transparent;
            outline: none;
            border: none;
            box-shadow: none;
            cursor: pointer;

            &::placeholder {
                color: var(--t-text-color-2);
            }
        }

        .jy-select__tool {
            $padding: 4px;
            $tool_size: calc(var(--jy-select-height) - 2px);
            height: $tool_size;
            width: $tool_size;
            height: $tool_size;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;

            .tool-inner {
                padding: calc($padding * 2);
                width: $tool_size;
                height: $tool_size;
                display: flex;
                align-items: center;
                justify-content: center;

                .tool-icon {
                    width: calc($tool_size);
                    height: calc($tool_size);
                    color: var(--grey);
                    font-size: inherit;
                    transition: transform .25s;
                }
            }

            .tool-inner.clear {
                display: none;

                .tool-icon {
                    width: calc($tool_size - calc($padding * 3));
                    height: calc($tool_size - calc($padding * 3));
                }
            }
        }

        .jy-select__tool.checked {
            .tool-icon.clear {
                display: none;
            }
        }

        .jy-select__tool.clear {
            .tool-icon.clear {
                color: var(--grey);
                display: none;
            }
        }
    }

    .jy-select-wrapper.is-focus {
        box-shadow: 0 0 0 1px var(--t-text-color-3) inset !important;

        .jy-select__tool {
            .tool-icon.checked {
                transform: rotate(180deg);
            }
        }
    }

    .jy-select-wrapper.is-disabled {
        cursor: not-allowed;
        opacity: .75;

        .jy-select-inner {
            cursor: not-allowed;
        }
    }

    .jy-option__wrapper {
        background-color: var(--t-card-background-color);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow-2);
        border: 1px solid var(--t-border-color);

        .jy-option__inner {
            $gap: 4px;
            $checkedColor: rgba(var(--t-text-color-rgba), $alpha: .05);
            padding: $gap;
            min-width: 200px;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;

            .jy-option {
                margin-bottom: $gap;
                padding: 6px 12px;
                width: 100%;
                line-height: 1.5;
                color: var(--t-text-color);
                font-size: 14px;
                cursor: pointer;
                border-radius: calc(var(--border-radius) / 1.5);

                &:last-child {
                    margin-bottom: 0;
                }

                &:hover {
                    background-color: $checkedColor;
                }
            }

            .jy-option.checked {
                background-color: $checkedColor;
            }
        }
    }
}
</style>