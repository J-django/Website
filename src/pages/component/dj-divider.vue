<script lang="ts" setup>
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'
import { useDJDividerCode } from '@/hooks'

const { FoundationCode, StyleCode, AlignLeftCode, AlignRightCode, OffsetCode, EmptyCode, CssVariablesCode } = useDJDividerCode();
</script>

<template>
    <dj-anchor level="1" text="Divider 分割线" id="Id_Divider" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Divider_Foundation" />
    <dj-example>
        <dj-divider label="New Divider" />
        <dj-code title="vue" lang="html" :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="风格 Style" id="Id_Divider_Style" />
    <dj-example>
        <dj-divider label="Type Dashed" type="dashed" />
        <dj-code title="vue" lang="html" :code="StyleCode" />
    </dj-example>
    <dj-anchor level="2" text="左对齐 Align Left" id="Id_Divider_Align_Left" />
    <dj-example>
        <dj-divider align="left" label="Align Left" />
        <dj-code title="vue" lang="html" :code="AlignLeftCode" />
    </dj-example>
    <dj-anchor level="2" text="右对齐 Align Right" id="Id_Divider_Align_Right" />
    <dj-example>
        <dj-divider align="right" label="Align Right" />
        <dj-code title="vue" lang="html" :code="AlignRightCode" />
    </dj-example>
    <dj-anchor level="2" text="偏移 Offset" id="Id_Divider_Offset" />
    <dj-example>
        <dj-divider align="left" label="Align Left" :offset="100" />
        <dj-code title="vue" lang="html" :code="OffsetCode" />
    </dj-example>
    <dj-anchor level="2" text="空内容 Empty" id="Id_Divider_Empty" />
    <dj-example>
        <dj-divider />
        <dj-code title="vue" lang="html" :code="EmptyCode" />
    </dj-example>
    <dj-anchor level="2" text="Divider API" id="Id_Divider_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Divider_Attributes" />
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
                    <td>label</td>
                    <td>文本</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>type</td>
                    <td>分割线类型</td>
                    <td>
                        <dj-badge text="solid" />/
                        <dj-badge text="dashed" />/
                        <dj-badge text="dotted" />/
                        <dj-badge text="double" />
                    </td>
                    <td>solid</td>
                </Tbody>
                <Tbody>
                    <td>align</td>
                    <td>对齐方式</td>
                    <td>
                        <dj-badge text="left" />/
                        <dj-badge text="center" />/
                        <dj-badge text="right" />
                    </td>
                    <td>center</td>
                </Tbody>
                <Tbody>
                    <td>margin</td>
                    <td>内容距离分割线距离</td>
                    <td>
                        <dj-badge text="number" />/
                        <dj-badge text="string" />
                    </td>
                    <td>10</td>
                </Tbody>
                <Tbody>
                    <td>offset</td>
                    <td>偏移量</td>
                    <td>
                        <dj-badge text="number" />/
                        <dj-badge text="string" />
                    </td>
                    <td>10</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="插槽 Slots" id="Id_Divider_Slots" />
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
    <dj-anchor level="3" text="Css Variables" id="Id_Divider_Css_Variables" />
    <dj-example>
        <dj-code title="css" lang="css" :code="CssVariablesCode" />
    </dj-example>
</template>
