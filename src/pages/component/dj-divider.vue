<script lang="ts" setup>
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'
</script>

<template>
    <dj-anchor level="1" text="Divider 分割线" id="Id_Divider" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Divider_Foundation" />
    <dj-example>
        <dj-divider :text="'New Divider'" />
        <dj-code :code="`<template>\n\t<dj-divider text=\x22New Divider\x22 />\n</template>`" />
    </dj-example>
    <dj-anchor level="2" text="风格 Style" id="Id_Divider_Style" />
    <dj-example>
        <dj-divider text="New Divider" type="dashed" />
        <dj-code :code="`<template>\n\t<dj-divider text=\x22New Divider\x22 type=\x22dashed\x22 />\n</template>`" />
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
                    <td>text</td>
                    <td>内容</td>
                    <td><dj-badge text="string" /></td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>type</td>
                    <td>分割线类型</td>
                    <td>
                        <div style="display: flex;flex-wrap: wrap;gap: 4px;">
                            <dj-badge text="solid" />/<dj-badge text="dashed" />/<dj-badge text="dotted" />
                        </div>
                    </td>
                    <td>solid</td>
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
</template>
