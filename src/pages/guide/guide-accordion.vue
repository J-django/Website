<script lang="ts" setup>
import { ref } from 'vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"

const accordion = ref(false);
</script>

<template>
    <div>
        <dj-anchor level="1" text="Accordion 手风琴" id="Id_Accordion" />
        <dj-anchor level="3" text="基础 Foundation" id="Id_Accordion_Foundation" />
        <dj-example>
            <dj-accordion v-model="accordion" title="发现更美好的自己，追寻内心的光芒"
                content="在喧嚣的世界中，我们常常迷失了自己，远离了内心的声音。然而，每个人都有一颗闪耀的星，它蕴藏着无限的潜力和独特的魅力。现在，是时候发现更美好的自己，追寻内心的光芒了。每个人都有自己的故事，每个人都有自己的梦想。不要害怕展示真实的自我，敢于追求内心的渴望。不论是小小的爱好还是大胆的目标，都值得我们用心去追寻。让自己的内在力量得到释放，成为引领自己命运的明灯。时光匆匆，岁月如梭，我们不应停滞不前。在这个瞬息万变的世界，保持学习和成长的态度是关键。与其追逐瞬时的浮华，不如从内心汲取力量，拥抱真实的自己。唯有不断地挑战自我，我们才能真正发现自己的潜能和价值。生活中，我们常常受到外界的评判和期待，这让我们迷失了自我。然而，真正的力量来源于内心。当我们坚定地追随内心的声音，才能找到真正属于自己的道路。不要害怕追求与众不同，与众不同才是独特的标志，是引领自己脱颖而出的钥匙。让我们勇敢地面对内心的声音，追寻内心的光芒。发现更美好的自己，踏上属于自己的璀璨之路。相信自己的梦想，坚持自己的信念，无论前路如何曲折，我们都能够闪耀出属于自己的光芒。因为，内心的力量是永恒不变的，它将引领我们走向更美好的未来。" />
            <dj-code :code="`<template>\n\t<dj-accordion v-model=\x22accordion\x22 title=\x22发现更美好的自己，追寻内心的光芒\x22 content=\x22在喧嚣的世界中，我们常常迷失了自己，远离了内心的声音。然而，每个人都有一颗闪耀的星，它蕴藏着无限的潜力和独特的魅力。现在，是时候发现更美好的自己，追寻内心的光芒了。每个人都有自己的故事，每个人都有自己的梦想。不要害怕展示真实的自我，敢于追求内心的渴望。不论是小小的爱好还是大胆的目标，都值得我们用心去追寻。让自己的内在力量得到释放，成为引领自己命运的明灯。时光匆匆，岁月如梭，我们不应停滞不前。在这个瞬息万变的世界，保持学习和成长的态度是关键。与其追逐瞬时的浮华，不如从内心汲取力量，拥抱真实的自己。唯有不断地挑战自我，我们才能真正发现自己的潜能和价值。生活中，我们常常受到外界的评判和期待，这让我们迷失了自我。然而，真正的力量来源于内心。当我们坚定地追随内心的声音，才能找到真正属于自己的道路。不要害怕追求与众不同，与众不同才是独特的标志，是引领自己脱颖而出的钥匙。让我们勇敢地面对内心的声音，追寻内心的光芒。发现更美好的自己，踏上属于自己的璀璨之路。相信自己的梦想，坚持自己的信念，无论前路如何曲折，我们都能够闪耀出属于自己的光芒。因为，内心的力量是永恒不变的，它将引领我们走向更美好的未来。\x22 />\n</template>\n\n
<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst accordion = ref(false);\n</script>`" />
        </dj-example>
        <dj-anchor level="3" text="属性 Attributes" id="Id_Accordion_Attributes" />
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
                        <td>title</td>
                        <td>标题</td>
                        <td><dj-badge text="string" /></td>
                        <td>-</td>
                    </Tbody>
                    <Tbody>
                        <td>content</td>
                        <td>内容</td>
                        <td><dj-badge text="string" /></td>
                        <td>-</td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
        <dj-anchor level="3" text="事件 Events" id="Id_Accordion_Events" />
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
                        <td>change</td>
                        <td>状态改变时触发</td>
                        <td>
                            <dj-badge text="Function" />
                        </td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
        <dj-anchor level="3" text="插槽 Slots" id="Id_Accordion_Slots" />
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
                    <Tbody>
                        <td>title</td>
                        <td>标题</td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
    </div>
</template>
