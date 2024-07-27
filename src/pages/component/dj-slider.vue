<script lang="ts" setup>
import { ref } from 'vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import { useRoutePlugin, useDJSlider } from '@/hooks'

const { routeTitle } = useRoutePlugin();

const { FoundationCode, ExtremeCode, DisabledCode, BufferCode, CssVariablesCode } = useDJSlider();

const sliderValue = ref(30);
const extremeValue = ref(30);
const disabledValue = ref(30);
const bufferValue = ref(30);
const bufferedValue = ref(40);

const extreme = ref(true);
const disabled = ref(true);
const buffer = ref(true);
</script>

<template>
    <dj-anchor level="1" :text="routeTitle" id="Id_Slider" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Slider_Foundation" />
    <dj-example>
        <dj-slider v-model="sliderValue" />
        <dj-code title="vue" lang="html" :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="显示极限 Show Extreme" id="Id_Slider_Show_Extreme" />
    <dj-example>
        <dj-slider v-model="extremeValue" :show-extreme="extreme" />
        <dj-code title="vue" lang="html" :code="ExtremeCode" />
    </dj-example>
    <dj-anchor level="2" text="禁用 Disabled" id="Id_Slider_Disabled" />
    <dj-example>
        <dj-slider v-model="disabledValue" :disabled="disabled" />
        <dj-code title="vue" lang="html" :code="DisabledCode" />
    </dj-example>
    <dj-anchor level="2" text="缓冲区 Buffer" id="Id_Slider_Buffer" />
    <dj-example>
        <dj-slider v-model="bufferValue" :show-buffer="buffer" :buffered="bufferedValue" />
        <dj-code title="vue" lang="html" :code="BufferCode" />
    </dj-example>
    <dj-anchor level="2" text="Slider API" id="Id_Slider_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Slider_Attributes" />
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
                        <dj-badge text="number" />
                    </td>
                    <td>0</td>
                </Tbody>
                <Tbody>
                    <td>min</td>
                    <td>最小值</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>0</td>
                </Tbody>
                <Tbody>
                    <td>max</td>
                    <td>最大值</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>100</td>
                </Tbody>
                <Tbody>
                    <td>disabled</td>
                    <td>禁用</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>show-buffer</td>
                    <td>显示缓冲区</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>buffered</td>
                    <td>缓冲区域值</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>0</td>
                </Tbody>
                <Tbody>
                    <td>show-extreme</td>
                    <td>显示极限值</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>show-thumb</td>
                    <td>显示拇指</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>true</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="事件 Events" id="Id_Slider_Events" />
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
                    <td>拖拽时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>change</td>
                    <td>拖拽结束时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>progress</td>
                    <td>滑块进度改变时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="Css Variables" id="Id_Slider_Css_Variables" />
    <dj-example>
        <dj-code title="css" lang="css" :code="CssVariablesCode" />
    </dj-example>
</template>