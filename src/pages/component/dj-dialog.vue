<script lang="ts" setup>
import { ref } from 'vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import { useDJDialog, useRoutePlugin } from '@/hooks'

const { routeTitle } = useRoutePlugin();

const { FoundationCode, FooterCode, CustomHeaderCode, VerticalCenterCode, OverspreadCode, CssVariablesCode } = useDJDialog();

const dialogValue = ref(false);
const dialogFooterValue = ref(false)
const dialogCustomHeaderValue = ref(false);
const dialogVerticalCenterValue = ref(false);
const dialogOverspreadValue = ref(false);
</script>

<template>
    <dj-anchor level="1" :text="routeTitle" id="Id_Dialog" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Dialog_Foundation" />
    <dj-example>
        <dj-button @click="dialogValue = true">Open Dialog</dj-button>
        <dj-dialog title="Dialog Title" v-model="dialogValue">
            This is Dialog!
        </dj-dialog>
        <dj-code title="vue" lang="html" :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="自定义头部 Custom Header" id="Id_Dialog_Custom_Header" />
    <dj-example>
        <dj-button @click="dialogCustomHeaderValue = true">Open Dialog</dj-button>
        <dj-dialog v-model="dialogCustomHeaderValue">
            <template #header>
                <dj-button color="#6c757d" plain @click="dialogCustomHeaderValue = false">Closed</dj-button>
                <dj-button color="#0d6efd" plain @click="dialogCustomHeaderValue = false">Save Changes</dj-button>
            </template>
            This is Dialog!
        </dj-dialog>
        <dj-code title="vue" lang="html" :code="CustomHeaderCode" />
    </dj-example>
    <dj-anchor level="2" text="页脚 Footer" id="Id_Dialog_Footer" />
    <dj-example>
        <dj-button @click="dialogFooterValue = true">Open Dialog</dj-button>
        <dj-dialog title="Dialog Title" v-model="dialogFooterValue">
            This is Dialog!
            <template #footer>
                <dj-button color="#6c757d" plain @click="dialogCustomHeaderValue = false">Closed</dj-button>
                <dj-button color="#0d6efd" plain @click="dialogCustomHeaderValue = false">Save Changes</dj-button>
            </template>
        </dj-dialog>
        <dj-code title="vue" lang="html" :code="FooterCode" />
    </dj-example>
    <dj-anchor level="2" text="垂直居中 Vertical Center" id="Id_Dialog_Vertical_Center" />
    <dj-example>
        <dj-button @click="dialogVerticalCenterValue = true">Open Dialog</dj-button>
        <dj-dialog title="Dialog Title" v-model="dialogVerticalCenterValue" vertical-center>
            This is Dialog!
        </dj-dialog>
        <dj-code title="vue" lang="html" :code="VerticalCenterCode" />
    </dj-example>
    <dj-anchor level="2" text="铺满 Overspread" id="Id_Dialog_Overspread" />
    <dj-example>
        <dj-button @click="dialogOverspreadValue = true">Open Dialog</dj-button>
        <dj-dialog title="Dialog Title" v-model="dialogOverspreadValue" overspread>
            <div style="height: 2000px;"></div>
            <template #footer>
                <dj-button color="#6c757d" plain @click="dialogOverspreadValue = false">Closed</dj-button>
                <dj-button color="#0d6efd" plain @click="dialogOverspreadValue = false">Save Changes</dj-button>
            </template>
        </dj-dialog>
        <dj-code :code="OverspreadCode" />
    </dj-example>
    <dj-anchor level="2" text="Dialog API" id="Id_Dialog_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Dialog_Attributes" />
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
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>title</td>
                    <td>标题内容</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>width</td>
                    <td>对话框宽度</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>50%</td>
                </Tbody>
                <Tbody>
                    <td>min-width</td>
                    <td>对话框最小宽度</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>max-width</td>
                    <td>对话框最大宽度</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>top</td>
                    <td>距离顶部偏移量</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>28px</td>
                </Tbody>
                <Tbody>
                    <td>append-body</td>
                    <td>将元素挂载至<dj-badge text="body" />下</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>escape</td>
                    <td>通过<dj-badge text="ESC" />键关闭对话框</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>true</td>
                </Tbody>
                <Tbody>
                    <td>dialogExternal</td>
                    <td>通过点击外关闭对话框</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>true</td>
                </Tbody>
                <Tbody>
                    <td>verticalCenter</td>
                    <td>垂直居中</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>overspread</td>
                    <td>高度铺满</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>closeDestroy</td>
                    <td>关闭时销毁</td>
                    <td>
                        <dj-badge text="boolean" />
                    </td>
                    <td>false</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="插槽 Slots" id="Id_Dialog_Slots" />
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
                    <td>header</td>
                    <td>标头</td>
                </Tbody>
                <Tbody>
                    <td>title</td>
                    <td>标题</td>
                </Tbody>
                <Tbody>
                    <td>footer</td>
                    <td>页脚</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="暴露 Exposes" id="Id_Dialog_Exposes" />
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
                    <td>open</td>
                    <td>打开</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>closed</td>
                    <td>关闭</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>toggle</td>
                    <td>切换</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="Css Variables" id="Id_Dialog_Css_Variables" />
    <dj-example>
        <dj-code title="css" lang="css" :code="CssVariablesCode" />
    </dj-example>
</template>