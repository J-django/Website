<template>
    <div>
        <Title title="Button 按钮" id="Id_Button" size="large" />
        <Example title="基础 Foundation" id="Id_Button_Foundation">
            <jy-button>Default</jy-button>
            <jy-button type="primary">Primary</jy-button>
            <jy-button type="success">Success</jy-button>
            <jy-button type="warning">Warning</jy-button>
            <jy-button type="danger">Danger</jy-button>
            <jy-code
                :code="`<template>\n\t<jy-button>Default</jy-button>\n\t<jy-button type=\x22primary\x22>Primary</jy-button>\n\t<jy-button type=\x22success\x22>Success</jy-button>\n\t<jy-button type=\x22warning\x22>Warning</jy-button>\n\t<jy-button type=\x22danger\x22>Danger</jy-button>\n</template>`" />
        </Example>
        <Example title="禁用 Disabled" id="Id_Button_Disabled">
            <jy-button disabled>Default</jy-button>
            <jy-button type="primary" disabled>Primary</jy-button>
            <jy-button type="success" disabled>Success</jy-button>
            <jy-button type="warning" disabled>Warning</jy-button>
            <jy-button type="danger" disabled>Danger</jy-button>
            <jy-code
                :code="`<template>\n\t<jy-button disabled>Default</jy-button>\n\t<jy-button type=\x22primary\x22 disabled>Primary</jy-button>\n\t<jy-button type=\x22success\x22 disabled>Success</jy-button>\n\t<jy-button type=\x22warning\x22 disabled>Warning</jy-button>\n\t<jy-button type=\x22danger\x22 disabled>Danger</jy-button>\n</template>`" />
        </Example>
        <Example title="按钮组 Button Group" id="Id_Button_Group">
            <jy-row>
                <jy-button-group>
                    <jy-button>default</jy-button>
                    <jy-button type="primary">Primary</jy-button>
                    <jy-button type="success">success</jy-button>
                    <jy-button type="warning">warning</jy-button>
                    <jy-button type="danger">danger</jy-button>
                </jy-button-group>
            </jy-row>
            <jy-code
                :code="`<template>\n\t<jy-button-group>\n\t\t<jy-button>default</jy-button>\n\t\t<jy-button type=\x22primary\x22>Primary</jy-button>\n\t\t<jy-button type=\x22success\x22>success</jy-button>\n\t\t<jy-button type=\x22warning\x22>warning</jy-button>\n\t\t<jy-button type=\x22danger\x22>danger</jy-button>\n\t</jy-button-group>\n</template>`" />
        </Example>
        <Example title="图标 Button Icon" id="Id_Button_Icon">
            <jy-row>
                <jy-button>
                    <template #icon>
                        <i class="bi bi-gear-wide-connected"></i>
                    </template>
                    Default
                </jy-button>
                <jy-button type="primary">
                    <template #icon>
                        <i class="bi bi-person-badge-fill"></i>
                    </template>
                    Primary
                </jy-button>
                <jy-button type="success">
                    <template #icon>
                        <i class="bi bi-check-lg"></i>
                    </template>
                    Success
                </jy-button>
                <jy-button type="warning">
                    <template #icon>
                        <i class="bi bi-exclamation-triangle-fill"></i>
                    </template>
                    Warning
                </jy-button>
                <jy-button type="danger">
                    <template #icon>
                        <i class="bi bi-bug-fill"></i>
                    </template>
                    Danger
                </jy-button>
            </jy-row>
            <jy-row>
                <jy-button-group>
                    <jy-button>
                        <template #icon>
                            <i class="bi bi-gear-wide-connected"></i>
                        </template>
                        Default
                    </jy-button>
                    <jy-button type="primary">
                        <template #icon>
                            <i class="bi bi-person-badge-fill"></i>
                        </template>
                        Primary
                    </jy-button>
                    <jy-button type="success">
                        <template #icon>
                            <i class="bi bi-check-lg"></i>
                        </template>
                        Success
                    </jy-button>
                    <jy-button type="warning">
                        <template #icon>
                            <i class="bi bi-exclamation-triangle-fill"></i>
                        </template>
                        Warning
                    </jy-button>
                    <jy-button type="danger">
                        <template #icon>
                            <i class="bi bi-bug-fill"></i>
                        </template>
                        Danger
                    </jy-button>
                </jy-button-group>
            </jy-row>
            <jy-code
                :code="`<template>\n\t<jy-button>\n\t\t<template #icon>\n\t\t\t<i class=\x22bi bi-gear-wide-connected\x22></i>\n\t\t</template>\n\t\tDefault\n\t</jy-button>\n\t<jy-button type=\x22primary\x22>\n\t\t<template #icon>\n\t\t\t<i class=\x22bi bi-person-badge-fill\x22></i>\n\t\t</template>\n\t\tPrimary\n\t</jy-button>\n\t<jy-button type=\x22success\x22>\n\t\t<template #icon>\n\t\t\t<i class=\x22bi bi-check-lg\x22></i>\n\t\t</template>\n\t\tSuccess\n\t</jy-button>\n\t<jy-button type=\x22warning\x22>\n\t\t<template #icon>\n\t\t\t<i class=\x22bi bi-exclamation-triangle-fill\x22></i>\n\t\t</template>\n\t\tWarning\n\t</jy-button>\n\t<jy-button type=\x22danger\x22>\n\t\t<template #icon>\n\t\t\t<i class=\x22bi bi-bug-fill\x22></i>\n\t\t</template>\n\t\tDanger\n\t</jy-button>\n\t<jy-button-group>\n\t\t<jy-button>\n\t\t\t<template #icon>\n\t\t\t\t<i class=\x22bi bi-gear-wide-connected\x22></i>\n\t\t\t</template>\n\t\t\tDefault\n\t\t</jy-button>\n\t\t<jy-button type=\x22primary\x22>\n\t\t\t<template #icon>\n\t\t\t\t<i class=\x22bi bi-person-badge-fill\x22></i>\n\t\t\t</template>\n\t\t\tPrimary\n\t\t</jy-button>\n\t\t<jy-button type=\x22success\x22>\n\t\t\t<template #icon>\n\t\t\t\t<i class=\x22bi bi-check-lg\x22></i>\n\t\t\t</template>\n\t\t\tSuccess\n\t\t</jy-button>\n\t\t<jy-button type=\x22warning\x22>\n\t\t\t<template #icon>\n\t\t\t\t<i class=\x22bi bi-exclamation-triangle-fill\x22></i>\n\t\t\t</template>\n\t\t\tWarning\n\t\t</jy-button>\n\t\t<jy-button type=\x22danger\x22>\n\t\t\t<template #icon>\n\t\t\t\t<i class=\x22bi bi-bug-fill\x22></i>\n\t\t\t</template>\n\t\t\tDanger\n\t\t</jy-button>\n\t</jy-button-group>\n</template>`" />
        </Example>
        <Example title="自定义颜色 Custom Color" id="Id_Button_Custom_Color">
            <jy-button color="#b80d57">Default</jy-button>
            <jy-button color="#b80d57" disabled>Default</jy-button>
            <jy-code
                :code="`<template>\n\t<jy-button color=\x22#b80d57\x22>Default</jy-button>\n\t<jy-button color=\x22#b80d57\x22 disabled>Default</jy-button>\n</template>`" />
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
                        <td>type</td>
                        <td>类型</td>
                        <td>
                            <div style="display: flex;flex-wrap: wrap;gap: 4px;">
                                <Code text="default" />/<Code text="primary" />/<Code text="success" />/<Code
                                    text="warning" />/<Code text="danger" />
                            </div>
                        </td>
                        <td>
                            <Code text="default" />
                        </td>
                    </Tbody>
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
                </template>
            </Table>
        </Example>
        <Example title="插槽 Slots" id="Id_Button_Slots">
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
                        <td>icon</td>
                        <td>图标</td>
                    </Tbody>
                </template>
            </Table>
        </Example>
    </div>
</template>

<script lang="ts" setup>
import Example from "@/components/example.vue"
import Title from "@/components/title.vue"
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import Code from "@/components/code.vue"
</script>