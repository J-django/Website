<script lang="ts" setup>
import { ref } from "vue";
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'
import { useDJInput } from '@/hooks'

const { FoundationCode, DisabledCode, ClearableCode, RecombinationCode, CombinationCode, CssVariablesCode } = useDJInput();

const inputFoundation = ref("");
const inputDisabled = ref("");
const disabled = ref(true);
const inputClear = ref("");
const inputPrefixIcon = ref("");
const inputSuffixIcon = ref("");
const inputAddon = ref("");

const toggleDisabled = () => {
    disabled.value = !disabled.value;
}
</script>

<template>
    <dj-anchor level="1" text="Input 输入框" id="Id_Input" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Input_Foundation" />
    <dj-example>
        <dj-input placeholder="Please Input" v-model="inputFoundation" />
        <dj-code title="vue" lang="html" :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="禁用 Disabled" id="Id_Input_Disabled" />
    <dj-example>
        <dj-button style="margin-bottom: 8px;" @click="toggleDisabled">toggle disabled</dj-button>
        <dj-input placeholder="Please Input" v-model="inputDisabled" :disabled="disabled" />
        <dj-code title="vue" lang="html" :code="DisabledCode" />
    </dj-example>
    <dj-anchor level="2" text="清空 Clear" id="Id_Input_Clear" />
    <dj-example>
        <dj-input placeholder="Please Input Clear" v-model="inputClear" clearable />
        <dj-code title="vue" lang="html" :code="ClearableCode" />
    </dj-example>
    <dj-anchor level="2" text="复合 Recombination" id="Id_Input_Recombination" />
    <dj-example>
        <dj-input placeholder="Please Input" v-model="inputPrefixIcon">
            <template #prefix>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9"
                        clip-rule="evenodd" />
                </svg>
            </template>
        </dj-input>
        <dj-input placeholder="Please Input" v-model="inputSuffixIcon">
            <template #suffix>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9"
                        clip-rule="evenodd" />
                </svg>
            </template>
        </dj-input>
        <dj-code title="vue" lang="html" :code="RecombinationCode" />
    </dj-example>
    <dj-anchor level="2" text="组合 Combination" id="Id_Input_Combination" />
    <dj-example>
        <dj-input placeholder="Please Input" v-model="inputAddon" addon-before="https://" addon-after=".com" />
        <dj-code title="vue" lang="html" :code="CombinationCode" />
    </dj-example>
    <dj-anchor level="2" text="Input API" id="Id_Input_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Input_Attributes" />
    <dj-example>
        <Table>
            <template #thead>
                <Thead>
                    <th>属性名</th>
                    <th>描述</th>
                    <th>类型</th>
                    <th>默认值</th>
                </Thead>
            </template>
            <template #tbody>
                <Tbody>
                    <td>model-value</td>
                    <td>值</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>id</td>
                    <td>编号</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>placeholder</td>
                    <td>提示</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>disabled</td>
                    <td>禁用</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>clearable</td>
                    <td>清空</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>addon-before</td>
                    <td>组合前缀</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>addon-after</td>
                    <td>组合后缀</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>enterkeyhint</td>
                    <td>Enter键类型</td>
                    <td>
                        <dj-badge text="enter" />/
                        <dj-badge text="done" />/
                        <dj-badge text="go" />/
                        <dj-badge text="next" />/
                        <dj-badge text="previous" />/
                        <dj-badge text="search" />/
                        <dj-badge text="send" />
                    </td>
                    <td>-</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="事件 Events" id="Id_Input_Events" />
    <dj-example>
        <Table>
            <template #thead>
                <Thead>
                    <th>事件名<dj-badge text="@/v-on" /></th>
                    <th>描述</th>
                    <th>类型</th>
                </Thead>
            </template>
            <template #tbody>
                <Tbody>
                    <td>input</td>
                    <td>输入时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>change</td>
                    <td>值改变时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>keyup</td>
                    <td>键盘按下时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>focus</td>
                    <td>获取焦点时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>blur</td>
                    <td>失去焦点时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>clear</td>
                    <td>
                        当<dj-badge :text="`clear=\x22true\x22`" />并且点击时触发
                    </td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="插槽 Slots" id="Id_Input_Slots" />
    <dj-example>
        <Table>
            <template #thead>
                <Thead>
                    <th>插槽名<dj-badge text="#" /></th>
                    <th>描述</th>
                </Thead>
            </template>
            <template #tbody>
                <Tbody>
                    <td>
                        prefix
                        <dj-badge text="1.0.13版本更名" />
                    </td>
                    <td>前缀</td>
                </Tbody>
                <Tbody>
                    <td>
                        suffix
                        <dj-badge text="1.0.13版本更名" />
                    </td>
                    <td>后缀</td>
                </Tbody>
                <Tbody>
                    <td>
                        addon-before
                    </td>
                    <td>组合前缀</td>
                </Tbody>
                <Tbody>
                    <td>
                        addon-after
                    </td>
                    <td>组合后缀</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="暴露 Exposes" id="Id_Input_Exposes" />
    <dj-example>
        <Table>
            <template #thead>
                <Thead>
                    <th>名称</th>
                    <th>描述</th>
                    <th>类型</th>
                </Thead>
            </template>
            <template #tbody>
                <Tbody>
                    <td>focus</td>
                    <td>输入框获得焦点</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>blur</td>
                    <td>输入框失去焦点</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>clear</td>
                    <td>清空输入框内容</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="Css Variables" id="Id_Input_Css_Variables" />
    <dj-example>
        <dj-code title="css" lang="css" :code="CssVariablesCode" />
    </dj-example>
</template>
