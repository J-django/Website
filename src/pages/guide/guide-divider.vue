<template>
    <div>
        <Title title="Divider 分割线" id="Id_Divider" size="large" />
        <Example title="基础 Foundation" id="Id_Divider_Foundation">
            <jy-divider :text="'New Divider'" />
            <jy-code :code="`<template>\n\t<jy-divider text=\x22New Divider\x22 />\n</template>`" />
        </Example>
        <Example title="风格 Style" id="Id_Divider_Style">
            <jy-divider text="New Divider" type="dashed" />
            <jy-code :code="`<template>\n\t<jy-divider text=\x22New Divider\x22 type=\x22dashed\x22 />\n</template>`" />
        </Example>
        <Example title="属性 Attributes" id="Id_Divider_Attributes">
            <Table>
                <template #thead>
                    <Thead>
                        <th>属性名</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </Thead>
                </template>
                <template #tbody>
                    <Tbody>
                        <td>text</td>
                        <td>内容</td>
                        <td>string</td>
                        <td>—</td>
                    </Tbody>
                    <Tbody>
                        <td>type</td>
                        <td>分割线类型</td>
                        <td>
                            <div style="display: flex;flex-wrap: wrap;gap: 4px;">
                                <Code text="solid" />/<Code text="dashed" />/<Code text="dotted" />
                            </div>
                        </td>
                        <td>
                            <Code text="solid" />
                        </td>
                    </Tbody>
                </template>
            </Table>
        </Example>
        <Example title="插槽 Slots" id="Id_Divider_Slots">
            <Table>
                <template #thead>
                    <Thead>
                        <th>插槽名</th>
                        <th>说明</th>
                    </Thead>
                </template>
                <template #tbody>
                    <Tbody>
                        <td>default</td>
                        <td>默认内容</td>
                    </Tbody>
                </template>
            </Table>
        </Example>
    </div>
</template>

<script lang="ts" setup>
import Example from '@/components/example.vue'
import Title from '@/components/title.vue'
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'
import Code from '@/components/code.vue'
</script>