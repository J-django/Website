<template>
    <div>
        <Title title="Select 选择器" id="Id_Select" size="large" />
        <Example title="基础 Foundation" id="Id_Select_Foundation">
            <jy-select placeholder="Open This Select Menu" v-model="select1">
                <jy-option value="option12" text="option1" />
                <jy-option value="option23" text="option2" />
                <jy-option value="option34" text="option3" />
                <jy-option value="option45" text="option4" />
            </jy-select>
            <jy-code
                :code="`<template>\n\t<jy-select placeholder=\x22Open This Select Menu\x22 v-model=\x22select1\x22>\n\t\t<jy-option value=\x22option1\x22 text=\x22option1\x22 />\n\t\t<jy-option value=\x22option2\x22 text=\x22option2\x22 />\n\t\t<jy-option value=\x22option3\x22 text=\x22option3\x22 />\n\t\t<jy-option value=\x22option4\x22 text=\x22option4\x22 />\n\t</jy-select>\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22\nconst select1 = ref();\n</script>`" />
        </Example>
        <Example title="禁用 Disabled" id="Id_Select_Disabled">
            <jy-select placeholder="Open This Select Menu" v-model="select2" disabled>
                <jy-option value="option12" text="option1" />
                <jy-option value="option23" text="option2" />
                <jy-option value="option34" text="option3" />
                <jy-option value="option45" text="option4" />
            </jy-select>
            <jy-code
                :code="`<template>\n\t<jy-select placeholder=\x22Open This Select Menu\x22 v-model=\x22select2\x22 disabled>\n\t\t<jy-option value=\x22option12\x22 text=\x22option1\x22 />\n\t\t<jy-option value=\x22option23\x22 text=\x22option2\x22 />\n\t\t<jy-option value=\x22option34\x22 text=\x22option3\x22 />\n\t\t<jy-option value=\x22option45\x22 text=\x22option4\x22 />\n\t</jy-select>\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22\nconst select2 = ref();\n</script>`" />
        </Example>
        <Example title="清空 Clear" id="Id_Select_Clear">
            <jy-select placeholder="Open This Select Menu" v-model="select3" clear>
                <jy-option value="option12" text="option1" />
                <jy-option value="option23" text="option2" />
                <jy-option value="option34" text="option3" />
                <jy-option value="option45" text="option4" />
            </jy-select>
            <jy-code
                :code="`<template>\n\t<jy-select placeholder=\x22Open This Select Menu\x22 v-model=\x22select3\x22 clear>\n\t\t<jy-option value=\x22option12\x22 text=\x22option1\x22 />\n\t\t<jy-option value=\x22option23\x22 text=\x22option2\x22 />\n\t\t<jy-option value=\x22option34\x22 text=\x22option3\x22 />\n\t\t<jy-option value=\x22option45\x22 text=\x22option4\x22 />\n\t</jy-select>\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22\nconst select3 = ref();\n</script>`" />
        </Example>
        <Example title="属性 Attributes" id="Id_Select_Attributes">
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
                        <td>placeholder</td>
                        <td>提示</td>
                        <td>string</td>
                        <td>—</td>
                    </Tbody>
                    <Tbody>
                        <td>disabled</td>
                        <td>禁用</td>
                        <td>boolean</td>
                        <td>false</td>
                    </Tbody>
                    <Tbody>
                        <td>clear</td>
                        <td>清空</td>
                        <td>boolean</td>
                        <td>false</td>
                    </Tbody>
                </template>
            </Table>
        </Example>
        <Example title="事件 Events" id="Id_Select_Events">
            <Table>
                <template #thead>
                    <Thead>
                        <th>事件名<Code text="@/v-on" /></th>
                        <th>说明</th>
                        <th>类型</th>
                    </Thead>
                </template>
                <template #tbody>
                    <Tbody>
                        <td>change</td>
                        <td>选中值改变时触发</td>
                        <td>
                            <Code text="Function(value) => void" />
                        </td>
                    </Tbody>
                    <Tbody>
                        <td>clear</td>
                        <td>
                            当<Code text="clear" />属性存在并且点击时触发
                        </td>
                        <td>
                            <Code text="Function() => void" />
                        </td>
                    </Tbody>
                </template>
            </Table>
        </Example>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import Example from '@/components/example.vue'
import Title from '@/components/title.vue'
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'
import Code from '@/components/code.vue'

const select1 = ref("");
const select2 = ref("");
const select3 = ref("");
</script>