<template>
    <div v-if="type != 'textarea'" class="jy-input" :class="[disabled ? 'is-disabled' : '']">
        <div :id="jy_input_id" class="jy-input__wrapper" :class="[input__inner.focus ? 'is-focus' : '']"
            @click="getFocus(jy_input_id)">
            <span class="jy-input__prefix" v-if="slot['prefix-icon']">
                <span class="jy-input__prefix__inner">
                    <slot name="prefix-icon" />
                </span>
            </span>
            <input :id="id" class="jy-input__inner" :placeholder="placeholder" :enterkeyhint="enterkeyhint" :type="type"
                :disabled="disabled" :value="modelValue" @change="input__innerChange" @input="input__innerInputChange"
                @focus="input__innerFocusChange" @focusout="input__innerFocusoutChange"
                @keyup.enter.native="input__innerKeyupEnterChange" />
            <div class="jy-input__clear" v-if="clear && modelValue" @click="clearInput">
                <i class="bi bi-x-circle-fill" />
            </div>
            <span class="jy-input__suffix" v-if="slot['suffix-icon']">
                <span class="jy-input__suffix__inner">
                    <slot name="suffix-icon" />
                </span>
            </span>
        </div>
    </div>
    <div v-else class="jy-textarea" :class="[prop.disabled ? 'is-disabled' : '']" :id="jy_input_id">
        <textarea :id="id" class="jy-textarea__inner" :class="[textarea__inner.focus ? 'is-focus' : '']" :rows="rows"
            :cols="cols" :placeholder="placeholder" :disabled="disabled" :value="modelValue"
            @input="textarea__innerInputChange" @change="textarea__innerChange" @focus="textarea__innerFocusChange"
            @focusout="textarea__innerFocusoutChange" @keydown="input__innerKeydownChange"
            @keyup.enter.native="input__innerKeyupEnterChange" />
    </div>
</template>

<script lang="ts" setup>
import { reactive, useSlots } from 'vue'
import { nanoid } from 'nanoid';

const prop = defineProps({
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

const jy_input_id = nanoid();

const emit = defineEmits(['update:modelValue', 'keyup.enter', 'change', 'input', 'clear'])

const slot = useSlots();

const input__inner = reactive({
    focus: false,
    active: false,
})

const textarea__inner = reactive({
    focus: false,
    active: false,
})

const getFocus = (id: string) => {
    const dom = document.getElementById(id);
    dom?.focus();
}

const input__innerChange = (e: Event) => {
    emit("change", (e.target as any).value)
}

const input__innerInputChange = (e: Event) => {
    emit("input", (e.target as any).value)
    emit("update:modelValue", (e.target as any).value)
}

const input__innerFocusChange = () => {
    input__inner.focus = true;
}

const input__innerFocusoutChange = () => {
    input__inner.focus = false;
}

const textarea__innerChange = (e: Event) => {
    textarea__resize();
}

const textarea__innerInputChange = (e: Event) => {
    textarea__resize();
    emit("update:modelValue", (e.target as any).value)
}

const textarea__innerFocusChange = () => {
    textarea__inner.focus = true;
}

const textarea__innerFocusoutChange = () => {
    textarea__inner.focus = false;
}

const textarea__resize = () => {
    const textarea: any = document.getElementById(jy_input_id);
    if (!prop.modelValue) {
        textarea.style.height = 'auto';
        return;
    }
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

const clearInput = () => {
    emit("clear", undefined)
    emit("update:modelValue", undefined)
}

const input__innerKeydownChange = (e: KeyboardEvent) => {
    if (e.keyCode == 13) {
        e.preventDefault();
    }
}

const input__innerKeyupEnterChange = (e: KeyboardEvent) => {
    emit("keyup.enter");
}

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

    .jy-textarea__inner {
        position: relative;
        display: block;
        resize: none;
        padding: 8px 12px;
        height: auto;
        // min-height: calc(var(--jy-input-height) * 2);
        max-height: calc(var(--jy-input-height) * 8);
        line-height: 1.5;
        width: 100%;
        font-size: inherit;
        font-family: inherit;
        color: var(--t-text-color);
        background-color: var(--t-card-background-color);
        border-radius: var(--border-radius);
        box-shadow: 0 0 0 1px transparent inset;
        border: none;
        outline: none;
        transition: box-shadow .25s;

        &::placeholder {
            color: var(--t-text-color-2);
        }

        &:focus {
            outline: none;
        }
    }

    .jy-textarea__inner.is-focus {
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