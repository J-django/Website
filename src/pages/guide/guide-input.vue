<script lang="ts" setup>
import { ref } from "vue";
import Table from '@/components/table.vue'
import Thead from '@/components/table-thead.vue'
import Tbody from '@/components/table-tbody.vue'

const input1 = ref<string>("");
const input2 = ref<string>("");
const input3 = ref<string>("");
const input4 = ref<string>("");
const input5 = ref<string>("");
const input6 = ref<string>("");
</script>

<template>
    <div>
        <dj-anchor level="1" text="Input 输入框" id="Id_Input" />
        <dj-anchor level="3" text="基础 Foundation" id="Id_Input_Foundation" />
        <dj-example>
            <dj-input placeholder="Please Input" v-model="input1" />
            <dj-code :code="`<template>\n\t<dj-input placeholder=\x22Please Input\x22 v-model=\x22input\x22 />\n</template>\n
<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input = ref<string>(\x22\x22);\n</script>`" />
        </dj-example>
        <dj-anchor level="3" text="禁用 Disabled" id="Id_Input_Disabled" />
        <dj-example>
            <dj-input placeholder="Please Input" v-model="input2" disabled />
            <dj-code
                :code="`<template>\n\t<dj-input placeholder=\x22Please Input\x22 v-model=\x22input\x22 disabled />\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input = ref<string>(\x22\x22);\n</script>`" />
        </dj-example>
        <dj-anchor level="3" text="清空 Clear" id="Id_Input_Clear" />
        <dj-example>
            <dj-input placeholder="Please Input Clear" v-model="input3" clear />
            <dj-code
                :code="`<template>\n\t<dj-input placeholder=\x22Please Input Clear\x22 v-model=\x22input\x22 clear />\n</template>\n\n<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input = ref<string>(\x22\x22);\n</script>`" />
        </dj-example>
        <dj-anchor level="3" text="图标 Icon" id="Id_Input_Icon" />
        <dj-example>
            <dj-input placeholder="Please Input" v-model="input5">
                <template #prefix-icon>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                        <path fill="#DE2910"
                            d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z" />
                        <path fill="#FFDE02"
                            d="M11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z" />
                    </svg>
                </template>
            </dj-input>
            <dj-input placeholder="Please Input" v-model="input6">
                <template #suffix-icon>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                        <path fill="#DE2910"
                            d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z" />
                        <path fill="#FFDE02"
                            d="M11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z" />
                    </svg>
                </template>
            </dj-input>
            <dj-code
                :code="`<template>
    <dj-input placeholder=\x22Please Input\x22 v-model=\x22input1\x22>
        <template #prefix-icon>
            <svg class=\x22icon\x22 xmlns=\x22http://www.w3.org/2000/svg\x22 width=\x2232\x22 height=\x2232\x22 viewBox=\x220 0 36 36\x22>
                <path fill=\x22#DE2910\x22
                    d=\x22M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z\x22 />
                <path fill=\x22#FFDE02\x22
                    d=\x22M11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z\x22 />
            </svg>
        </template>
    </dj-input>
    <dj-input placeholder=\x22Please Input\x22 v-model=\x22input2\x22>
        <template #suffix-icon>
            <svg class=\x22icon\x22 xmlns=\x22http://www.w3.org/2000/svg\x22 width=\x2232\x22 height=\x2232\x22 viewBox=\x220 0 36 36\x22>
                <path fill=\x22#DE2910\x22
                    d=\x22M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z\x22 />
                <path fill=\x22#FFDE02\x22
                    d=\x22M11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z\x22 />
            </svg>
        </template>
    </dj-input>
</template>

<script lang=\x22ts\x22 setup>\nimport { ref } from \x22vue\x22;\nconst input1 = ref<string>(\x22\x22);\nconst input2 = ref<string>(\x22\x22);\n</script>`" />
        </dj-example>
        <dj-anchor level="3" text="属性 Attributes" id="Id_Input_Attributes" />
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
                        <td>clear</td>
                        <td>清空</td>
                        <td><dj-badge text="boolean" /></td>
                        <td>false</td>
                    </Tbody>
                    <Tbody>
                        <td>enterkeyhint</td>
                        <td>Enter键类型</td>
                        <td>
                            <div style="display: flex;flex-wrap: wrap;gap: 4px;">
                                <dj-badge text="enter" />/<dj-badge text="done" />/<dj-badge text="go" />/<dj-badge
                                    text="next" />/<dj-badge text="previous" />/<dj-badge text="search" />/<dj-badge
                                    text="send" />
                            </div>
                        </td>
                        <td>-</td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
        <dj-anchor level="3" text="事件 Events" id="Id_Input_Events" />
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
                        <td>keyup</td>
                        <td>键盘按下时触发</td>
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
                    <Tbody>
                        <td>clear</td>
                        <td>
                            当<dj-badge :text="`clear=\x22true\x22`" />并且点击时触发
                        </td>
                        <td>
                            <dj-badge text="Function" />
                        </td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
        <dj-anchor level="3" text="插槽 Slots" id="Id_Input_Slots" />
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
                        <td>prefix-icon</td>
                        <td>前缀</td>
                    </Tbody>
                    <Tbody>
                        <td>suffix-icon</td>
                        <td>后缀</td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
        <dj-anchor level="3" text="暴露 Exposes" id="Id_Input_Exposes" />
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
                    <Tbody>
                        <td>clear</td>
                        <td>清空输入框内容</td>
                        <td><dj-badge text="Function" /></td>
                    </Tbody>
                </template>
            </Table>
        </dj-example>
    </div>
</template>
