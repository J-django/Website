<script lang="ts" setup>
import { ref } from "vue"
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import { useDJSwitch } from '@/hooks'

const { FoundationCode, DisabledCode, LabelCode, CustomCode } = useDJSwitch();

const switchValue = ref(false);
const switchDisabledValue = ref(false);
const switchDisabled = ref(true);
const switchLabel = ref(false);
const switchLabelDisabled = ref(true);
const switchCustom = ref(true);
</script>

<template>
    <dj-anchor level="1" text="Switch 切换" id="Id_Switch" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Switch_Foundation" />
    <dj-example>
        <dj-switch v-model="switchValue" />
        <dj-code :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="禁用 Disabled" id="Id_Switch_Disabled" />
    <dj-example>
        <dj-switch v-model="switchDisabledValue" :disabled="switchDisabled" />
        <dj-switch v-model="switchDisabledValue" />
        <dj-code :code="DisabledCode" />
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
        <dj-code :code="LabelCode" />
    </dj-example>
    <dj-anchor level="2" text="自定义颜色 Custom" id="Id_Switch_Custom" />
    <dj-example>
        <div class="flex-box">
            <dj-switch v-model="switchCustom" unChecked-label="UnChecked" checked-label="checked"
                unChecked-color="#a8a8a8" checked-color="#6610f2" unChecked-background-color="#a8a8a8"
                checked-background-color="#6610f2" />
        </div>
        <div class="flex-box">
            <dj-switch v-model="switchCustom" unChecked-background-color="#a8a8a8" checked-background-color="#6610f2" />
            <dj-switch v-model="switchCustom" unChecked-background-color="#a8a8a8" checked-background-color="#00ad7c" />
        </div>
        <dj-code :code="CustomCode" />
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
                    <td>UnChecked</td>
                    <td>未选中标签内容</td>
                </Tbody>
                <Tbody>
                    <td>checked</td>
                    <td>选中标签内容</td>
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
                    <td>switchToggle</td>
                    <td>切换状态</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
</template>

<style>
.flex-box {
    display: flex;
}
</style>