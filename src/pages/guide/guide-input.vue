<template>
    <div>
        <Title title="Input 输入框" id="Id_Input" size="large" />
        <Example title="基础 Foundation" id="Id_Input_Foundation">
            <jy-input placeholder="Please Input" v-model="input1" />
            <jy-code
                :code="`<template>\n\t<jy-input placeholder=\x22Please Input\x22 v-model=\x22input\x22 />\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input = ref<string>(\x22\x22);\n</script>`" />
        </Example>
        <Example title="禁用 Disabled" id="Id_Input_Disabled">
            <jy-input placeholder="Please Input" v-model="input2" disabled />
            <jy-code
                :code="`<template>\n\t<jy-input placeholder=\x22Please Input\x22 v-model=\x22input\x22 disabled />\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input = ref<string>(\x22\x22);\n</script>`" />
        </Example>
        <Example title="清空 Clear" id="Id_Input_Clear">
            <jy-input placeholder="Please Input Clear" v-model="input3" clear />
            <jy-code
                :code="`<template>\n\t<jy-input placeholder=\x22Please Input Clear\x22 v-model=\x22input\x22 clear />\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input = ref<string>(\x22\x22);\n</script>`" />
        </Example>
        <Example title="文本域 Textarea" id="Id_Input_Textarea">
            <jy-input type="textarea" placeholder="Please Input" v-model="input4" />
            <jy-code
                :code="`<template>\n\t<jy-input type=\x22textarea\x22 placeholder=\x22Please Input\x22 v-model=\x22input\x22 />\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input = ref<string>(\x22\x22);\n</script>`" />
        </Example>
        <Example title="图标 Icon" id="Id_Input_Icon">
            <jy-input placeholder="Please Input" v-model="input5">
                <template #prefix-icon>
                    <i class="bi bi-search"></i>
                </template>
            </jy-input>
            <jy-input placeholder="Please Input" v-model="input6">
                <template #suffix-icon>
                    <i class="bi bi-search"></i>
                </template>
            </jy-input>
            <jy-code
                :code="`<template>\n\t<jy-input placeholder=\x22Please Input\x22 v-model=\x22input1\x22>\n\t\t<template #prefix-icon>\n\t\t\t<i class=\x22bi bi-search\x22></i>\n\t\t</template>\n\t</jy-input>\n\t<jy-input placeholder=\x22Please Input\x22 v-model=\x22input2\x22>\n\t\t<template #suffix-icon>\n\t\t\t<i class=\x22bi bi-search\x22></i>\n\t\t</template>\n\t</jy-input>\n</template\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input1 = ref<string>(\x22\x22);\nconst input2 = ref<string>(\x22\x22);\n</script>`" />
        </Example>
        <Example title="属性 Attributes" id="Id_Input_Attributes">
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
                                <Code text="text" />/<Code text="textarea" />
                            </div>
                        </td>
                        <td><Code text="text" /></td>
                    </Tbody>
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
                    <Tbody>
                        <td>rows</td>
                        <td>行数</td>
                        <td>number</td>
                        <td>3</td>
                    </Tbody>
                    <Tbody>
                        <td>cols</td>
                        <td>列数</td>
                        <td>number</td>
                        <td>5</td>
                    </Tbody>
                    <Tbody>
                        <td>enterkeyhint</td>
                        <td>Enter键类型</td>
                        <td>
                            <div style="display: flex;flex-wrap: wrap;gap: 4px;">
                                <Code text="enter" />/<Code text="done" />/<Code text="go" />/<Code text="next" />/<Code
                                    text="previous" />/<Code text="search" />/<Code text="send" />
                            </div>
                        </td>
                        <td>—</td>
                    </Tbody>
                </template>
            </Table>
        </Example>
        <Example title="事件 Events" id="Id_Input_Events">
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
                        <td>输入框失去焦点或按Enter后触发</td>
                        <td>
                            <Code text="Function(value) => void" />
                        </td>
                    </Tbody>
                    <Tbody>
                        <td>input</td>
                        <td>输入框值改变时触发</td>
                        <td>
                            <Code text="Function(value) => void" />
                        </td>
                    </Tbody>
                    <Tbody>
                        <td>focus</td>
                        <td>输入框获得焦点时触发</td>
                        <td>
                            <Code text="Function() => void" />
                        </td>
                    </Tbody>
                    <Tbody>
                        <td>blur</td>
                        <td>输入框失去焦点时触发</td>
                        <td>
                            <Code text="Function() => void" />
                        </td>
                    </Tbody>
                    <Tbody>
                        <td>clear</td>
                        <td>
                            当<Code :text="`clear=\x22true\x22`" />并且点击时触发
                        </td>
                        <td>
                            <Code text="Function() => void" />
                        </td>
                    </Tbody>
                </template>
            </Table>
        </Example>
        <Example title="插槽 Slots" id="Id_Input_Slots">
            <Table>
                <template #thead>
                    <Thead>
                        <th>插槽名<Code text="#" /></th>
                        <th>说明</th>
                    </Thead>
                </template>
                <template #tbody>
                    <Tbody>
                        <td>prefix-icon</td>
                        <td>输入框前缀<Code :text="`type=\x22textarea\x22`" />时无效</td>
                    </Tbody>
                    <Tbody>
                        <td>suffix-icon</td>
                        <td>输入框后缀<Code :text="`type=\x22textarea\x22`" />时无效</td>
                    </Tbody>
                </template>
            </Table>
        </Example>
        <Example title="暴露 Exposes" id="Id_Input_Exposes">
            <Table>
                <template #thead>
                    <Thead>
                        <th>名称</th>
                        <th>说明</th>
                        <th>类型</th>
                    </Thead>
                </template>
                <template #tbody>
                    <Tbody>
                        <td>focus</td>
                        <td>输入框获得焦点</td>
                        <td><Code text="Function() => void" /></td>
                    </Tbody>
                    <Tbody>
                        <td>blur</td>
                        <td>输入框失去焦点</td>
                        <td><Code text="Function() => void" /></td>
                    </Tbody>
                    <Tbody>
                        <td>clear</td>
                        <td>清空输入框内容</td>
                        <td><Code text="Function() => void" /></td>
                    </Tbody>
                </template>
            </Table>
        </Example>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Example from "@/components/example.vue";
import Title from "@/components/title.vue";
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'
import Code from '@/components/code.vue'

const input1 = ref<string>("");
const input2 = ref<string>("");
const input3 = ref<string>("");
const input4 = ref<string>("");
const input5 = ref<string>("");
const input6 = ref<string>("");
</script>