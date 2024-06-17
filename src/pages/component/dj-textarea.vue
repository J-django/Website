<script lang="ts" setup>
import { ref } from "vue";
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'
import { useDJTextarea } from "@/hooks"

const { FoundationCode, DisabledCode } = useDJTextarea();

const inputFoundation = ref<string>("");
const inputDisabled = ref<string>("");
const disabled = ref(true);

const toggleDisabled = () => {
    disabled.value = !disabled.value;
}
</script>

<template>
    <dj-anchor level="1" text="Textarea 文本域" id="Id_Textarea" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Textarea_Foundation" />
    <dj-example>
        <dj-textarea placeholder="Please Input" v-model="inputFoundation" />
        <dj-code :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="禁用 Disabled" id="Id_Textarea_Disabled" />
    <dj-example>
        <dj-button style="margin-bottom: 8px;" @click="toggleDisabled">toggle disabled</dj-button>
        <dj-textarea placeholder="Please Input" v-model="inputDisabled" :disabled="disabled" />
        <dj-code :code="DisabledCode" />
    </dj-example>
    <dj-anchor level="2" text="Textarea API" id="Id_Textarea_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Textarea_Attributes" />
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
                    <td>rows</td>
                    <td>规定文本区域的高度</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>2</td>
                </Tbody>
                <Tbody>
                    <td>cols</td>
                    <td>规定文本区域的宽度</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>20</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="事件 Events" id="Id_Textarea_Events" />
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
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="暴露 Exposes" id="Id_Textarea_Exposes" />
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
            </template>
        </Table>
    </dj-example>
</template>