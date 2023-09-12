<template>
    <div v-if="type != 'textarea'" class="jy-input" :class="[disabled ? 'is-disabled' : '']">
        <div :id="jy_input_id" class="jy-input__wrapper" :class="[input__inner.focus ? 'is-focus' : '']" @click="getFocus">
            <span class="jy-input__prefix" v-if="slots['prefix-icon']">
                <span class="jy-input__prefix__inner">
                    <slot name="prefix-icon" />
                </span>
            </span>
            <input :id="props.id" class="jy-input__inner" :placeholder="props.placeholder" :enterkeyhint="enterkeyhint"
                :type="props.type" :disabled="props.disabled" :value="props.modelValue" @change="input__innerChange"
                @input="input__innerInputChange" @focus="input__innerFocusChange" @focusout="input__innerFocusoutChange"
                @keyup.enter.native="input__innerKeyupEnterChange" />
            <div class="jy-input__clear" v-if="props.clear && modelValue" @click="clearInput">
                <i class="bi bi-x-circle-fill" />
            </div>
            <span class="jy-input__suffix" v-if="slots['suffix-icon']">
                <span class="jy-input__suffix__inner">
                    <slot name="suffix-icon" />
                </span>
            </span>
        </div>
    </div>
    <div v-else class="jy-textarea" :class="[props.disabled ? 'is-disabled' : '']" :id="jy_input_id">
        <div class="jy-textarea__wrapper" :class="[textarea__inner.focus ? 'is-focus' : '']">
            <textarea :id="props.id" class="jy-textarea__inner" :rows="props.rows" :cols="props.cols"
                :placeholder="placeholder" :disabled="props.disabled" :value="props.modelValue"
                @input="textarea__innerInputChange" @change="textarea__innerChange" @focus="textarea__innerFocusChange"
                @focusout="textarea__innerFocusoutChange" @keydown="input__innerKeydownChange"
                @keyup.enter.native="input__innerKeyupEnterChange" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, useSlots } from 'vue'
import { nanoid } from 'nanoid';

const props = defineProps({
    id: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "text",
    },
    placeholder: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    clear: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: ""
    },
    rows: {
        type: Number,
        default: 3
    },
    cols: {
        type: Number,
        default: 5
    },
    enterkeyhint: {
        type: String,
        default: ""
    }
})

const emits = defineEmits(['update:modelValue', 'keyup.enter', 'change', 'input', 'focus', 'blur', 'clear'])

const slots = useSlots();

const jy_input_id = ref(nanoid());

const input__inner = reactive({
    focus: false,
    active: false,
})

const textarea__inner = reactive({
    focus: false,
    active: false,
})

const getFocus = () => {
    const dom = document.getElementById(jy_input_id.value);
    dom?.focus();
}

const getBlur = (id: string) => {
    const dom = document.getElementById(id);
    dom?.blur();
}

const input__innerChange = (e: Event) => {
    emits("change", (e.target as any).value)
}

const input__innerInputChange = (e: Event) => {
    emits("input", (e.target as any).value)
    emits("update:modelValue", (e.target as any).value)
}

const input__innerFocusChange = () => {
    input__inner.focus = true;
    emits("focus")
}

const input__innerFocusoutChange = () => {
    input__inner.focus = false;
    emits("blur")
}

const textarea__innerChange = (e: Event) => {
    textarea__resize();
}

const textarea__innerInputChange = (e: Event) => {
    textarea__resize();
    emits("update:modelValue", (e.target as any).value)
}

const textarea__innerFocusChange = () => {
    textarea__inner.focus = true;
    emits("focus")
}

const textarea__innerFocusoutChange = () => {
    textarea__inner.focus = false;
    emits("blur")
}

const textarea__resize = () => {
    const textarea: any = document.getElementById(jy_input_id.value);
    if (!props.modelValue) {
        textarea.style.height = 'auto';
        return;
    }
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

const clearInput = () => {
    emits("clear", undefined)
    emits("update:modelValue", undefined)
}

const input__innerKeydownChange = (e: KeyboardEvent) => {
    if (e.keyCode == 13) {
        e.preventDefault();
    }
}

const input__innerKeyupEnterChange = (e: KeyboardEvent) => {
    emits("keyup.enter");
}

defineExpose({ focus: getFocus, blur: getBlur, clear: clearInput })
</script>

<style lang="scss" scoped>
.jy-input {
    position: relative;
    display: inline-flex;
    width: 100%;
    line-height: var(--jy-input-height);
    font-size: 14px;
    vertical-align: middle;

    &:hover {
        .jy-input__wrapper {
            box-shadow: 0 0 0 1px var(--t-border-color) inset;
        }
    }

    .jy-input__wrapper {
        display: inline-flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        padding: 1px 12px;
        background-color: var(--t-card-background-color);
        border-radius: var(--border-radius);
        transform: translateZ(0);
        transition: box-shadow .25s;
        box-shadow: 0 0 0 1px transparent inset;

        form {
            flex-grow: 1;

            .jy-input__inner::-webkit-search-cancel-button {
                display: none;
            }
        }

        .jy-input__inner {
            $inner_height: calc(var(--jy-input-height) - 2px);
            -webkit-appearance: none;
            appearance: none;
            padding: 0;
            flex-grow: 1;
            color: var(--t-text-color);
            font-size: inherit;
            width: 100%;
            height: $inner_height;
            line-height: $inner_height;
            background: none;
            outline: none;
            border: none;
            box-shadow: none;

            &::placeholder {
                color: var(--t-text-color-2);
            }

            &:focus {
                outline: none;
            }
        }

        .jy-input__prefix,
        .jy-input__suffix {
            display: inline-flex;
            white-space: nowrap;
            flex-shrink: 0;
            flex-wrap: nowrap;
            height: 100%;
            text-align: center;
            color: var(--t-text-color-2);
            transition: color .25s;
            pointer-events: none;

            .jy-input__prefix__inner,
            .jy-input__suffix__inner {
                pointer-events: all;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                ::v-deep i.bi {
                    font-size: 16px;
                    margin-right: 8px;
                }

                ::v-deep svg {
                    width: 20px;
                    height: 20px;
                    fill: currentColor;
                    margin-right: 8px;
                    transition: fill .25s;
                }
            }
        }

        .jy-input__suffix {
            .jy-input__suffix__inner {

                ::v-deep i.bi,
                ::v-deep svg {
                    margin-right: 0;
                }
            }
        }
    }

    .jy-input__wrapper.is-focus {
        box-shadow: 0 0 0 1px var(--t-text-color-3) inset;
    }

    .jy-input__clear {
        $clear_height: calc(var(--jy-input-height) - 2px);
        position: absolute;
        right: 4px;
        width: $clear_height;
        height: $clear_height;
        background-color: var(--t-card-background-color);
        cursor: pointer;

        i.bi {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: inherit;
            width: $clear_height;
            height: $clear_height;
            color: var(--grey);
        }
    }
}

.jy-input.is-disabled {
    cursor: not-allowed !important;

    .jy-input__wrapper {
        opacity: .6;
        box-shadow: 0 0 0 1px transparent inset;

        .jy-input__inner {
            cursor: not-allowed;
        }
    }
}

.jy-input+.jy-input {
    margin-top: 8px;
}

.jy-textarea {
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    font-size: 14px;
    transform: translateZ(0);

    &:hover {
        .jy-textarea__inner {
            box-shadow: 0 0 0 1px var(--t-border-color) inset;
        }
    }

    .jy-textarea__wrapper {
        padding: 8px 12px;
        background-color: var(--t-card-background-color);
        border-radius: var(--border-radius);
        box-shadow: 0 0 0 1px transparent inset;
        transition: box-shadow .25s;

        .jy-textarea__inner {
            position: relative;
            display: block;
            resize: none;
            height: auto;
            max-height: calc(var(--jy-input-height) * 8);
            line-height: 1.5;
            width: 100%;
            font-size: inherit;
            font-family: inherit;
            color: var(--t-text-color);
            background: none;
            border: none;
            outline: none;
            box-shadow: none;

            &::placeholder {
                color: var(--t-text-color-2);
            }

            &:focus {
                outline: none;
            }
        }
    }

    .jy-textarea__wrapper.is-focus {
        box-shadow: 0 0 0 1px var(--t-text-color-3) inset;
    }


}

.jy-textarea.is-disabled {
    cursor: not-allowed;

    .jy-textarea__inner {
        opacity: .6;
        box-shadow: 0 0 0 1px transparent inset;
        cursor: not-allowed;
        resize: none;
    }
}

.jy-textarea+.jy-textarea {
    margin-top: 8px;
}
</style>