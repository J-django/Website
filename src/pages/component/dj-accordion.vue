<script lang="ts" setup>
import { ref } from 'vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import { useDJAccordionCode } from '@/hooks'

const { title, content, FoundationCode, DisabledCode } = useDJAccordionCode();

const accordionFoundation = ref(false);
const accordionDisabled = ref(false);
const disabled = ref(true);

const toggleAccordion = () => {
    accordionDisabled.value = !accordionDisabled.value;
}

const toggleDisabled = () => {
    disabled.value = !disabled.value;
}
</script>

<template>
    <dj-anchor level="1" text="Accordion 手风琴" id="Id_Accordion" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Accordion_Foundation" />
    <dj-example>
        <dj-accordion v-model="accordionFoundation" :title="title" :content="content" />
        <dj-code :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="禁用 Disabled" id="Id_Accordion_Disabled" />
    <dj-example>
        <dj-button style="margin-bottom: 8px;" @click="toggleAccordion">toggle accordion</dj-button>
        <dj-button style="margin-bottom: 8px;" @click="toggleDisabled">toggle disabled</dj-button>
        <dj-accordion v-model="accordionDisabled" :title="title" :content="content" :disabled="disabled" />
        <dj-code :code="DisabledCode" />
    </dj-example>
    <dj-anchor level="2" text="Accordion API" id="Id_Accordion_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Accordion_Attributes" />
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
                        <dj-badge text="boolean" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>title</td>
                    <td>标题</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>content</td>
                    <td>内容</td>
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
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="事件 Events" id="Id_Accordion_Events" />
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
                    <td>状态改变时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="插槽 Slots" id="Id_Accordion_Slots" />
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
                    <td>default</td>
                    <td>默认内容</td>
                </Tbody>
                <Tbody>
                    <td>title</td>
                    <td>标题</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
</template>
