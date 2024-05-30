<script lang="ts" setup>
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
</script>

<template>
    <div>
        <dj-anchor level="1" text="Button 按钮" id="Id_Button" />
        <dj-anchor level="3" text="基础 Foundation" id="Id_Button_Foundation" />
        <dj-example>
            <dj-button>Default</dj-button>
            <dj-code :code="`<template>\n\t<dj-button>Default</dj-button>\n</template>`" />
        </dj-example>
        <dj-anchor level="3" text="禁用 Disabled" id="Id_Button_Disabled" />
        <dj-example>
            <dj-button disabled>Default</dj-button>
            <dj-code :code="`<template>\n\t<dj-button disabled>Default</dj-button>\n</template>`" />
        </dj-example>
        <dj-anchor level="3" text="自定义颜色 Custom Color" id="Id_Button_Custom_Color" />
        <dj-example>
            <dj-button color="#6610f2">Custom Pink</dj-button>
            <dj-button color="#6610f2" disabled>Disabled Custom Pink</dj-button>
            <dj-code
                :code="`<template>\n\t<dj-button color=\x22#6610f2\x22>Custom Pink</dj-button>\n\t<dj-button color=\x22#6610f2\x22 disabled>Custom Pink</dj-button>\n</template>`" />
        </dj-example>
        <dj-anchor level="3" text="自定属性 Attributes" id="Id_Button_Attributes" />
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
                        <td>文本内容</td>
                        <td><dj-badge text="string" /></td>
                        <td>-</td>
                    </Tbody>
                    <Tbody>
                        <td>color</td>
                        <td>自定义颜色</td>
                        <td><dj-badge text="string" /></td>
                        <td>-</td>
                    </Tbody>
                    <Tbody>
                        <td>disabled</td>
                        <td>禁用</td>
                        <td><dj-badge text="boolean" /></td>
                        <td>false</td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
        <dj-anchor level="3" text="插槽 Slots" id="Id_Button_Slots" />
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
    </div>
</template>
