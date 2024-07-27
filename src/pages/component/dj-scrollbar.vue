<script lang="ts" setup>
import { ref } from 'vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import { useRoutePlugin, useDJScrollbar, } from '@/hooks'

const { routeTitle } = useRoutePlugin();

const { FoundationCode, HorizontalCode, CssVariablesCode } = useDJScrollbar();
</script>

<template>
    <dj-anchor level="1" :text="routeTitle" id="Id_Scrollbar" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Scrollbar_Foundation" />
    <dj-example>
        <dj-scrollbar height="400px">
            <p class="dj-scrollbar-item" v-for="item of 20" :key="item">{{ item }}</p>
        </dj-scrollbar>
        <dj-code title="vue" lang="html" :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="横向 Horizontal" id="Id_Scrollbar_Horizontal" />
    <dj-example>
        <dj-scrollbar>
            <div class="dj-scrollbar-inline-flex">
                <p class="dj-scrollbar-inline-item" v-for="item of 20" :key="item">{{ item }}</p>
            </div>
        </dj-scrollbar>
        <dj-code :code="HorizontalCode" />
    </dj-example>
    <dj-anchor level="2" text="Accordion API" id="Id_Scrollbar_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Scrollbar_Attributes" />
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
                    <td>width</td>
                    <td>宽度</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>height</td>
                    <td>高度</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>maxHeight</td>
                    <td>最大高度</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>verticalMinHeight</td>
                    <td>垂直滚动条最小高度</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>30</td>
                </Tbody>
                <Tbody>
                    <td>horizontalMinWidth</td>
                    <td>横向滚动条最小高度</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>30</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="事件 Events" id="Id_Scrollbar_Events" />
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
                    <td>scroll</td>
                    <td>滚动时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="插槽 Slots" id="Id_Scrollbar_Slots" />
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
    <dj-anchor level="3" text="暴露 Exposes" id="Id_Scrollbar_Exposes" />
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
                    <td>scrollTo</td>
                    <td>滚动至指定坐标</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="Css Variables" id="Id_Scrollbar_Css_Variables" />
    <dj-example>
        <dj-code title="css" lang="css" :code="CssVariablesCode" />
    </dj-example>
</template>

<style scoped>
.dj-scrollbar-item {
    margin: 10px 0;
    height: 60px;
    color: var(--t-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--t-card-background-color);
    border-radius: 8px;
}

.dj-scrollbar-inline-flex {
    display: inline-flex;
}

.dj-scrollbar-inline-item {
    margin: 0 10px;
    width: 120px;
    height: 60px;
    color: var(--t-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--t-card-background-color);
    border-radius: 8px;
}
</style>