<script lang="ts" setup>
import { ref } from 'vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import { useDJLink } from '@/hooks'

const { FoundationCode, DisabledCode, CustomColorCode, CssVariablesCode } = useDJLink();

const linkDisabled = ref(true)
const linkCustonDisabled = ref(true);
</script>

<template>
    <dj-anchor level="1" text="Link 链接" id="Id_Link" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Link_Foundation" />
    <dj-example>
        <dj-link href="#">Default Link</dj-link>
        <dj-link target="_blank" href="https://github.com/J-django">Github Url</dj-link>
        <dj-code title="vue" lang="html" :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="禁用 Disabled" id="Id_Link_Disabled" />
    <dj-example>
        <dj-link href="#" :disabled="linkDisabled">Disabled Link</dj-link>
        <dj-code title="vue" lang="html" :code="DisabledCode" />
    </dj-example>
    <dj-anchor level="2" text="自定义颜色 Custom Color" id="Id_Link_Custom_Color" />
    <dj-example>
        <dj-link href="#" color="#6610f2">Custom Color</dj-link>
        <dj-link href="#" color="#6610f2" :disabled="linkCustonDisabled">Disabled Custom Color</dj-link>
        <dj-code title="vue" lang="html" :code="CustomColorCode" />
    </dj-example>
    <dj-anchor level="2" text="Link API" id="Id_Link_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Link_Attributes" />
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
                    <td>href</td>
                    <td>规定链接指向的页面的 URL</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>target</td>
                    <td>规定在何处打开被链接文档</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>_self</td>
                </Tbody>
                <Tbody>
                    <td>color</td>
                    <td>链接颜色</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>label</td>
                    <td>文本</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>underline</td>
                    <td>下划线</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>true</td>
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
    <dj-anchor level="3" text="插槽 Slots" id="Id_Link_Slots" />
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
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="Css Variables" id="Id_Link_Css_Variables" />
    <dj-example>
        <dj-code title="css" lang="css" :code="CssVariablesCode" />
    </dj-example>
</template>·