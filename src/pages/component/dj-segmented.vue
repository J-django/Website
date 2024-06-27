<script lang="ts" setup>
import { ref } from 'vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import { useDJSegmented } from "@/hooks"

const { FoundationCode, DisabledCode, AloneDisabledCode, CssVariablesCode } = useDJSegmented();

const segmentedValue = ref("apple");
const segmentedDisabled = ref("apple");
const disabled = ref(true);
const segmentedArray = ref(["apple", "banana", "cherry", "date"])

const segmentedAloneDisabledValue = ref("apple");
const segmentedAloneDisabledArray = ref([
    "apple",
    { label: "banana", value: "banana", disabled: true },
    "cherry",
    { label: "grape", value: "grape", disabled: true }
]);

const toggleSegmented = () => {
    const index = Math.floor(Math.random() * segmentedArray.value.length);
    segmentedDisabled.value = segmentedArray.value[index];
}

const toggleDisabled = () => {
    disabled.value = !disabled.value;
}
</script>

<template>
    <dj-anchor level="1" text="Segmented 分段器" id="Id_Segmented" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Segmented_Foundation" />
    <dj-example>
        <dj-segmented :data="segmentedArray" v-model="segmentedValue" />
        <dj-code title="vue" lang="html" :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="禁用 Disabled" id="Id_Segmented_Disabled" />
    <dj-example>
        <dj-button style="margin-bottom: 8px;" @click="toggleSegmented">toggle switch</dj-button>
        <dj-button style="margin-bottom: 8px;" @click="toggleDisabled">toggle disabled</dj-button>
        <div>
            <dj-segmented :data="segmentedArray" v-model="segmentedDisabled" :disabled="disabled" />
        </div>
        <dj-code title="vue" lang="html" :code="DisabledCode" />
    </dj-example>
    <dj-anchor level="2" text="单独禁用 Alone Disabled" id="Id_Segmented_AloneDisabled" />
    <dj-example>
        <dj-segmented :data="segmentedAloneDisabledArray" v-model="segmentedAloneDisabledValue" />
        <dj-code title="vue" lang="html" :code="AloneDisabledCode" />
    </dj-example>
    <dj-anchor level="2" text="Segmented API" id="Id_Segmented_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Segmented_Attributes" />
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
                    <td>data</td>
                    <td>数据</td>
                    <td>
                        <dj-badge text="array" />
                    </td>
                    <td>[]</td>
                </Tbody>
                <Tbody>
                    <td>disabled</td>
                    <td>禁用</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="事件 Events" id="Id_Segmented_Events" />
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
    <dj-anchor level="3" text="Css Variables" id="Id_Segmented_Css_Variables" />
    <dj-example>
        <dj-code title="css" lang="css" :code="CssVariablesCode" />
    </dj-example>
</template>