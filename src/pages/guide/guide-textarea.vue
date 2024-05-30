<script lang="ts" setup>
import { ref } from "vue";
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'

const input1 = ref<string>("");
const input2 = ref<string>("");
</script>

<template>
    <div>
        <dj-anchor level="1" text="Textarea 文本域" id="Id_Textarea" />
        <dj-anchor level="3" text="基础 Foundation" id="Id_Textarea_Foundation" />
        <dj-example>
            <dj-textarea placeholder="Please Input" v-model="input1" />
            <dj-code :code="`<template>
    <dj-textarea placeholder=\x22Please Input\x22 v-model=\x22input\x22 />
</template>

<script lang=\x22ts\x22 setup>
import { ref } from \x22vue\x22;

const input = ref<string>(\x22\x22);
</script>`" />
        </dj-example>
        <dj-anchor level="3" text="禁用 Disabled" id="Id_Textarea_Disabled" />
        <dj-example>
            <dj-textarea placeholder="Please Input" v-model="input2" disabled />
            <dj-code
                :code="`<template>\n\t<dj-input placeholder=\x22Please Input\x22 v-model=\x22input\x22 disabled />\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input = ref<string>(\x22\x22);\n</script>`" />
        </dj-example>
        <dj-anchor level="3" text="属性 Attributes" id="Id_Textarea_Attributes" />
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
                        <td>id</td>
                        <td>编号</td>
                        <td><dj-badge text="string" /></td>
                        <td>-</td>
                    </Tbody>
                    <Tbody>
                        <td>placeholder</td>
                        <td>提示</td>
                        <td><dj-badge text="string" /></td>
                        <td>-</td>
                    </Tbody>
                    <Tbody>
                        <td>disabled</td>
                        <td>禁用</td>
                        <td><dj-badge text="boolean" /></td>
                        <td>false</td>
                    </Tbody>
                    <Tbody>
                        <td>rows</td>
                        <td>规定文本区域的高度</td>
                        <td><dj-badge text="number" /></td>
                        <td>2</td>
                    </Tbody>
                    <Tbody>
                        <td>cols</td>
                        <td>规定文本区域的宽度</td>
                        <td><dj-badge text="number" /></td>
                        <td>20</td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
        <dj-anchor level="3" text="事件 Events" id="Id_Textarea_Events" />
        <dj-example>
            <Table>
                <template #thead>
                    <Thead>
                        <th>事件名<dj-badge text="@/v-on" /></th>
                        <th>描述</th>
                        <th>类型</th>
                    </Thead>
                </template>
                <template #tbody>
                    <Tbody>
                        <td>input</td>
                        <td>输入时触发</td>
                        <td>
                            <dj-badge text="Function" />
                        </td>
                    </Tbody>
                    <Tbody>
                        <td>change</td>
                        <td>值改变时触发</td>
                        <td>
                            <dj-badge text="Function" />
                        </td>
                    </Tbody>
                    <Tbody>
                        <td>focus</td>
                        <td>获取焦点时触发</td>
                        <td>
                            <dj-badge text="Function" />
                        </td>
                    </Tbody>
                    <Tbody>
                        <td>blur</td>
                        <td>失去焦点时触发</td>
                        <td>
                            <dj-badge text="Function" />
                        </td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
        <dj-anchor level="3" text="暴露 Exposes" id="Id_Textarea_Exposes" />
        <dj-example>
            <Table>
                <template #thead>
                    <Thead>
                        <th>名称</th>
                        <th>描述</th>
                        <th>类型</th>
                    </Thead>
                </template>
                <template #tbody>
                    <Tbody>
                        <td>focus</td>
                        <td>输入框获得焦点</td>
                        <td><dj-badge text="Function" /></td>
                    </Tbody>
                    <Tbody>
                        <td>blur</td>
                        <td>输入框失去焦点</td>
                        <td><dj-badge text="Function" /></td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
    </div>
</template>