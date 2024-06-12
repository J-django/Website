<script lang="ts" setup>
import { ref } from 'vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"

const switchValue = ref("apple");
const switchDisabled = ref("apple");
const disabled = ref(true);
const switchArray = ref(["apple", "banana", "cherry", "date", "elderberry"])

const toggleSwitch = () => {
    const index = Math.floor(Math.random() * switchArray.value.length);
    switchDisabled.value = switchArray.value[index];
}

const toggleDisabled = () => {
    disabled.value = !disabled.value;
}
</script>

<template>
    <dj-anchor level="1" text="Switch 转换" id="Id_Switch" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Switch_Foundation" />
    <dj-example>
        <dj-switch :data="switchArray" v-model="switchValue" />
        <dj-code :code="`<template>
    <dj-switch :data=\x22switchArray\x22 v-model=\x22switchValue\x22 />
</template>

<script lang=\x22ts\x22 setup>
import { ref } from \x22vue\x22;
const switchValue = ref(\x22apple\x22);
const switchArray = ref([\x22apple\x22, \x22banana\x22, \x22cherry\x22, \x22date\x22, \x22elderberry\x22])
</script>
`" />
    </dj-example>
    <dj-anchor level="2" text="禁用 Disabled" id="Id_Switch_Disabled" />
    <dj-example>
        <dj-button style="margin-bottom: 8px;" @click="toggleSwitch">toggle switch</dj-button>
        <dj-button style="margin-bottom: 8px;" @click="toggleDisabled">toggle disabled</dj-button>
        <dj-switch :data="switchArray" v-model="switchDisabled" :disabled="disabled" />
        <dj-code :code="`<template>
    <dj-switch :data=\x22switchArray\x22 v-model=\x22switchValue\x22 :disabled=\x22disabled\x22 />
</template>

<script lang=\x22ts\x22 setup>
import { ref } from \x22vue\x22;
const switchValue = ref(\x22apple\x22);
const disabled = ref(true);
const switchArray = ref([\x22apple\x22, \x22banana\x22, \x22cherry\x22, \x22date\x22, \x22elderberry\x22])
</script>
`" />
    </dj-example>
    <dj-anchor level="2" text="Switch API" id="Id_Switch_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Switch_Attributes" />
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
                    <td>model-value</td>
                    <td>值</td>
                    <td>
                        <dj-badge text="string" />/
                        <dj-badge text="number" />/
                        <dj-badge text="boolean" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>data</td>
                    <td>数据</td>
                    <td><dj-badge text="array<string | number | boolean>" /></td>
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
    <dj-anchor level="3" text="事件 Events" id="Id_Switch_Events" />
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
                    <td>值改变时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
</template>