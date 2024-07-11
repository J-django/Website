<script lang="ts" setup>
import { ref } from "vue"
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import { useDJSwitch } from '@/hooks'

const { FoundationCode, DisabledCode, LabelCode, CustomColorCode, CssVariablesCode, CustomThumbCode } = useDJSwitch();

const switchValue = ref(false);
const switchDisabledValue = ref(false);
const switchDisabled = ref(true);
const switchLabel = ref(false);
const switchLabelDisabled = ref(true);
const switchCustom = ref(true);
const switchCustomThumb = ref(false);
const switchCustomThumbDisabled = ref(true);
</script>

<template>
    <dj-anchor level="1" text="Switch 切换" id="Id_Switch" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Switch_Foundation" />
    <dj-example>
        <dj-switch v-model="switchValue" />
        <dj-code title="vue" lang="html" :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="禁用 Disabled" id="Id_Switch_Disabled" />
    <dj-example>
        <dj-switch v-model="switchDisabledValue" :disabled="switchDisabled" />
        <dj-switch v-model="switchDisabledValue" />
        <dj-code title="vue" lang="html" :code="DisabledCode" />
    </dj-example>
    <dj-anchor level="2" text="标签 Label" id="Id_Switch_Label" />
    <dj-example>
        <div class="flex-box">
            <dj-switch v-model="switchLabel" unChecked-label="UnChecked" checked-label="checked" />
        </div>
        <div class="flex-box">
            <dj-switch v-model="switchLabel" :disabled="switchLabelDisabled" unChecked-label="UnChecked"
                checked-label="checked" />
        </div>
        <dj-code title="vue" lang="html" :code="LabelCode" />
    </dj-example>
    <dj-anchor level="2" text="自定义颜色 Custom Color" id="Id_Switch_Custom_Color" />
    <dj-example>
        <div class="flex-box">
            <dj-switch v-model="switchCustom" unChecked-label="UnChecked" checked-label="checked"
                unChecked-color="#d7d6d7" checked-color="#6610f2" unChecked-background-color="#d7d6d7"
                checked-background-color="#6610f2" />
        </div>
        <div class="flex-box">
            <dj-switch v-model="switchCustom" unChecked-background-color="#d7d6d7" checked-background-color="#6610f2" />
            <dj-switch v-model="switchCustom" unChecked-background-color="#d7d6d7" checked-background-color="#00ad7c" />
        </div>
        <dj-code title="vue" lang="html" :code="CustomColorCode" />
    </dj-example>
    <dj-anchor level="2" text="自定义拇指内容 Custom Thumb" id="Id_Switch_Custom_Thumb" />
    <dj-example>
        <div class="flex-box">
            <dj-switch v-model="switchCustomThumb" unChecked-label="UnChecked" checked-label="checked">
                <template #checked-thumb>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                    </svg>
                </template>
                <template #unChecked-thumb>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z" />
                    </svg>
                </template>
            </dj-switch>
        </div>
        <div class="flex-box">
            <dj-switch v-model="switchCustomThumb">
                <template #checked-thumb>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                    </svg>
                </template>
                <template #unChecked-thumb>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z" />
                    </svg>
                </template>
            </dj-switch>
            <dj-switch v-model="switchCustomThumb" :disabled="switchCustomThumbDisabled">
                <template #checked-thumb>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                    </svg>
                </template>
                <template #unChecked-thumb>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z" />
                    </svg>
                </template>
            </dj-switch>
        </div>
        <dj-code :code="CustomThumbCode" />
    </dj-example>
    <dj-anchor level="2" text="Switch API" id="Id_Switch_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Switch_Attributes" />
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
                    <td>disabled</td>
                    <td>禁用</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>unChecked-label</td>
                    <td>未选中标签文字</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>checked-label</td>
                    <td>选中标签文字</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>unChecked-color</td>
                    <td>未选中标签文字颜色</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>checked-color</td>
                    <td>选中标签文字颜色</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>unChecked-background-color</td>
                    <td>未选中背景色</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>checked-background-color</td>
                    <td>选中背景色</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="事件 Events" id="Id_Switch_Events" />
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
                    <td>change</td>
                    <td>值改变时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="插槽 Slots" id="Id_Switch_Slots" />
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
                    <td>unChecked-label</td>
                    <td>未选中标签内容</td>
                </Tbody>
                <Tbody>
                    <td>checked-label</td>
                    <td>选中标签内容</td>
                </Tbody>
                <Tbody>
                    <td>unChecked-thumb</td>
                    <td>未选中拇指内容</td>
                </Tbody>
                <Tbody>
                    <td>checked-thumb</td>
                    <td>选中拇指内容</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="暴露 Exposes" id="Id_Switch_Exposes" />
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
                    <td>toggle</td>
                    <td>切换</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="Css Variables" id="Id_Switch_Css_Variables" />
    <dj-example>
        <dj-code title="css" lang="css" :code="CssVariablesCode" />
    </dj-example>
</template>

<style>
.icon {
    width: 18px;
    height: 18px;
}
</style>