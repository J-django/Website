<script lang="ts" setup>
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'
import { useDJCardCode } from '@/hooks'

const { FoundationCode, HeaderCode, FooterCode, HeaderAndFooterCode, GhostingCode } = useDJCardCode();
</script>

<template>
    <dj-anchor level="1" text="Card 卡片" id="Id_Card" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Card_Foundation" />
    <dj-example>
        <dj-card align="center">
            Content
        </dj-card>
        <dj-code :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="页眉 Header" id="Id_Card_Header" />
    <dj-example>
        <dj-card align="center">
            <template #header>
                Header
            </template>
            Content
        </dj-card>
        <dj-code :code="HeaderCode" />
    </dj-example>
    <dj-anchor level="2" text="页脚 Footer" id="Id_Card_Footer" />
    <dj-example>
        <dj-card align="center">
            Content
            <template #footer>
                Footer
            </template>
        </dj-card>
        <dj-code :code="FooterCode" />
    </dj-example>
    <dj-anchor level="2" text="页眉&页脚 Header&Footer" id="Id_Card_HeaderFooter" />
    <dj-example>
        <dj-card align="center">
            <template #header>
                Header
            </template>
            Content
            <template #footer>
                Footer
            </template>
        </dj-card>
        <dj-code :code="HeaderAndFooterCode" />
    </dj-example>
    <dj-anchor level="2" text="Card API" id="Id_Card_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Card_Attributes" />
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
                    <td>align</td>
                    <td>对齐方式</td>
                    <td>
                        <dj-badge text="left" />/
                        <dj-badge text="center" />/
                        <dj-badge text="right" />
                    </td>
                    <td>
                        <dj-badge text="left" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>title</td>
                    <td>标题，仅在头部存在时生效</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="插槽 Slots" id="Id_Card_Slots" />
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
                    <td>header</td>
                    <td>标头</td>
                </Tbody>
                <Tbody>
                    <td>footer</td>
                    <td>页脚</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
</template>
