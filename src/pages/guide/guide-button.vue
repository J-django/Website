<script lang="ts" setup>
import Example from "@/components/example.vue"
import Title from "@/components/title.vue"
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
</script>

<template>
    <div>
        <Title title="Button 按钮" id="Id_Button" size="large" />
        <Example title="基础 Foundation" id="Id_Button_Foundation">
            <dj-button>Default</dj-button>
            <dj-code :code="`<template>\n\t<dj-button>Default</dj-button>\n</template>`" />
        </Example>
        <Example title="禁用 Disabled" id="Id_Button_Disabled">
            <dj-button disabled>Default</dj-button>
            <dj-code :code="`<template>\n\t<dj-button disabled>Default</dj-button>\n</template>`" />
        </Example>
        <Example title="自定义颜色 Custom Color" id="Id_Button_Custom_Color">
            <dj-button color="#d63384">Custom Pink</dj-button>
            <dj-button color="#d63384" disabled>Disabled Custom Pink</dj-button>
            <dj-code
                :code="`<template>\n\t<dj-button color=\x22#d63384\x22>Custom Pink</dj-button>\n\t<dj-button color=\x22#d63384\x22 disabled>Custom Pink</dj-button>\n</template>`" />
        </Example>
        <Example title="属性 Attributes" id="Id_Button_Attributes">
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
                        <td>文本内容</td>
                        <td>string</td>
                        <td>—</td>
                    </Tbody>
                    <Tbody>
                        <td>color</td>
                        <td>自定义颜色</td>
                        <td>string</td>
                        <td>—</td>
                    </Tbody>
                    <Tbody>
                        <td>disabled</td>
                        <td>禁用</td>
                        <td>boolean</td>
                        <td>false</td>
                    </Tbody>
                </template>
            </Table>
        </Example>
        <Example title="插槽 Slots" id="Id_Button_Slots">
            <Table>
                <template #thead>
                    <Thead>
                        <th>插槽名<dj-badge text="#" /></th>
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
