<template>
    <div>
        <Title title="Card 卡片" id="Id_Card" size="large" />
        <Example title="基础（Foundation）" id="Id_Card_Foundation">
            <jy-card align="center">
                Content
            </jy-card>
            <jy-code :code="`<template>\n\t<jy-card align=\x22center\x22>\n\t\tContent\n\t</jy-card>\n</template>`" />
        </Example>
        <Example title="页眉 Header" id="Id_Card_Header">
            <jy-card align="center">
                <template #header>
                    Header
                </template>
                Content
            </jy-card>
            <jy-code
                :code="`<template>\n\t<jy-card align=\x22center\x22>\n\t\t<template #header>\n\t\t\tHeader\n\t\t</template>\n\t\tContent\n\t</jy-card>\n</template>`" />
        </Example>
        <Example title="页脚 Footer" id="Id_Card_Footer">
            <jy-card align="center">
                Content
                <template #footer>
                    Footer
                </template>
            </jy-card>
            <jy-code
                :code="`<template>\n\t<jy-card align=\x22center\x22>\n\t\tContent\n\t\t<template #footer>\n\t\t\tFooter\n\t\t</template>\n\t</jy-card>\n</template>`" />
        </Example>
        <Example title="页眉，页脚 Header，Footer" id="Id_Card_HeaderFooter">
            <jy-card align="center">
                <template #header>
                    Header
                </template>
                Content
                <template #footer>
                    Footer
                </template>
            </jy-card>
            <jy-code
                :code="`<template>\n\t<jy-card align=\x22center\x22>\n\t\t<template #header>\n\t\t\tHeader\n\t\t</template>\n\t\tContent\n\t\t<template #footer>\n\t\t\tFooter\n\t\t</template>\n\t</jy-card>\n</template>`" />
        </Example>
        <Example title="属性 Attributes" id="Id_Card_Attributes">
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
                        <td>align</td>
                        <td>对齐方式</td>
                        <td>
                            <div style="display: flex;flex-wrap: wrap;gap: 4px;">
                                <Code text="left" />/<Code text="center" />/<Code text="right" />
                            </div>
                        </td>
                        <td>
                            <Code text="left" />
                        </td>
                    </Tbody>
                    <Tbody>
                        <td>title</td>
                        <td>标题，仅在头部存在时生效</td>
                        <td>string</td>
                        <td>
                            —
                        </td>
                    </Tbody>
                </template>
            </Table>
        </Example>
        <Example title="插槽 Slots" id="Id_Card_Slots">
            <Table>
                <template #thead>
                    <Thead>
                        <th>插槽名<Code text="#" /></th>
                        <th>说明</th>
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