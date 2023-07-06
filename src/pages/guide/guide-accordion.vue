<template>
    <div>
        <Title title="Accordion 手风琴" id="Id_Accordion" size="large" />
        <Example title="基础 Foundation" id="Id_Accordion_Foundation">
            <jy-accordion v-model="accordion" title="Technology's Societal Impact"
                content="Introduction:    Technology has profoundly transformed society. From revolutionizing communication and industries to advancing healthcare, its influence is undeniable. However, challenges like privacy and cybersecurity must be addressed. By embracing its benefits and addressing drawbacks, we can create a balanced future where technology enhances lives and fosters inclusivity." />
            <jy-code
                :code="`<template>\n\t<jy-accordion v-model=\x22accordion\x22 title=\x22Technology's Societal Impact\x22 content=\x22Introduction: Technology has profoundly transformed society. From revolutionizing communication and industries to advancing healthcare, its influence is undeniable. However, challenges like privacy and cybersecurity must be addressed. By embracing its benefits and addressing drawbacks, we can create a balanced future where technology enhances lives and fosters inclusivity.\x22 />\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst accordion = ref(false);\n</script>`" />
        </Example>
        <Example title="属性 Attributes" id="Id_Accordion_Attributes">
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
                        <td>title</td>
                        <td>标题</td>
                        <td>string</td>
                        <td>—</td>
                    </Tbody>
                    <Tbody>
                        <td>content</td>
                        <td>内容</td>
                        <td>string</td>
                        <td>—</td>
                    </Tbody>
                </template>
            </Table>
        </Example>
        <Example title="事件 Events" id="Id_Accordion_Events">
            <Table>
                <template #thead>
                    <Thead>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>类型</th>
                    </Thead>
                </template>
                <template #tbody>
                    <Tbody>
                        <td>change</td>
                        <td>状态改变时触发</td>
                        <td>
                            <Code text="Function(value) => void" />
                        </td>
                    </Tbody>
                </template>
            </Table>
        </Example>
        <Example title="插槽 Slots" id="Id_Accordion_Slots">
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
                    <Tbody>
                        <td>title</td>
                        <td>标题</td>
                    </Tbody>
                </template>
            </Table>
        </Example>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Example from '@/components/example.vue'
import Title from '@/components/title.vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import Code from "@/components/code.vue"

const accordion = ref(false);

const test = () => {
    accordion.value = !accordion.value;
}
</script>