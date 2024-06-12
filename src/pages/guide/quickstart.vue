<script lang="ts" setup>
import { useQuickstart } from '@/hooks'

const { GlobalImportCode, UseComponentCode, importProblemCode } = useQuickstart();
</script>

<template>
    <dj-anchor level="1" text="Quickstart 快速上手" id="Id_Installation" />
    <dj-anchor level="2" text="全局引入 Global Import" id="Id_MainTs_Usage" />
    <dj-code language="js" :code="GlobalImportCode" />
    <p style="margin: 16px 0;">
        如typescript项目引用提示
        <dj-mark class="dj-mark" text="无法找到模块“django-ui”的声明文件" />
    </p>
    <dj-code language="ts" :code="importProblemCode" />
    <dj-anchor level="2" text="使用组件 Use Component" id="Id_Apply_Component" />
    <dj-code :code="UseComponentCode" />
</template>