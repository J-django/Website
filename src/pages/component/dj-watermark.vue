<script lang="ts" setup>
import { ref } from 'vue'
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import { useRoutePlugin, useDJWatermark } from '@/hooks'

const { routeTitle } = useRoutePlugin();

const { FoundationCode, CustomCode } = useDJWatermark();

const text = ref(["django-ui", "easy to understand"]);

const customText = ref(["django-ui", "easy to understand"]);
const customColor = ref("#dfdfdf");
const customFontSize = ref(16);
const cusotomGap = ref(150);
const customRotate = ref(-22);

const push = () => {
    customText.value.push("")
}

const remove = (index: number) => {
    customText.value = customText.value.filter((f, i) => i !== index);
}
</script>

<template>
    <dj-anchor level="1" :text="routeTitle" id="Id_Watermark" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Watermark_Foundation" />
    <dj-example>
        <dj-watermark :text="text">
            <div style="height: 550px; "></div>
        </dj-watermark>
        <dj-code :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="自定义 Custom" id="Id_Watermark_Custom" />
    <dj-example>
        <dj-watermark :text="customText" :color="customColor" :font-size="customFontSize" :gap="cusotomGap"
            :rotate="customRotate">
            <div style="height: 550px;"></div>
        </dj-watermark>
        <div class="flex-column">
            <template v-for="(item, index) of customText" :key="index">
                <div class="flex-row">
                    <span class="form-title">
                        <span v-if="index === 0">text:</span>
                    </span>
                    <dj-input v-model="customText[index]" />
                    <dj-button v-if="index === 0" color="#0d6efd" plain @click="push">Push</dj-button>
                    <dj-button v-else color="#ee2b47" plain @click="remove(index)">Remove</dj-button>
                </div>
            </template>
            <div class="flex-row">
                <span class="form-title">
                    color:<span>{{ customColor }}</span>
                </span>
                <dj-input v-model="customColor" />
            </div>
            <div class="flex-row">
                <span class="form-title">
                    font-size:<span>{{ customFontSize }}</span>
                </span>
                <dj-slider v-model="customFontSize" />
            </div>
            <div class="flex-row">
                <span class="form-title">
                    gap:<span>{{ cusotomGap }}</span>
                </span>
                <dj-slider v-model="cusotomGap" :min="0" :max="500" />
            </div>
            <div class="flex-row">
                <span class="form-title">
                    rotate:<span>{{ customRotate }}</span>
                </span>
                <dj-slider v-model="customRotate" :min="-180" :max="180" />
            </div>
        </div>
        <dj-code :code="CustomCode" />
    </dj-example>
    <dj-anchor level="2" text="Watermark API" id="Id_Watermark_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Watermark_Attributes" />
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
                    <td>text</td>
                    <td>水印文本</td>
                    <td>
                        <dj-badge text="string" />/<dj-badge text="string[]" />
                    </td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>color</td>
                    <td>字体颜色</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>#dfdfdf</td>
                </Tbody>
                <Tbody>
                    <td>fontSize</td>
                    <td>字体大小</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>16</td>
                </Tbody>
                <Tbody>
                    <td>fontWeight</td>
                    <td>字体粗细</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>500</td>
                </Tbody>
                <Tbody>
                    <td>fontFamily</td>
                    <td>字体样式</td>
                    <td>
                        <dj-badge text="string" />
                    </td>
                    <td>Arial</td>
                </Tbody>
                <Tbody>
                    <td>gap</td>
                    <td>水印间隔</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>125</td>
                </Tbody>
                <Tbody>
                    <td>rotate</td>
                    <td>旋转角度</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>-22</td>
                </Tbody>
                <Tbody>
                    <td>zIndex</td>
                    <td>水印层级</td>
                    <td>
                        <dj-badge text="number" />
                    </td>
                    <td>9</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
</template>

<style #scoped>
.flex-column {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}

.form-title {
    padding-right: 8px;
    min-width: 150px;
    font-size: 14px;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
}
</style>