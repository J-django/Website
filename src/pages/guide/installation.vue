<script lang="ts" setup>
import { useInstallation } from "@/hooks"

const { NodeJsInstallationCode, CdnInstallationCode } = useInstallation();
</script>

<template>
    <dj-anchor level="1" text="Installation 安装" id="Id_Installation" />
    <dj-anchor level="2" text="Node.js 安装" id="Id_NodeJs_Installation" />
    <dj-code title="bash" lang="bash" :code="NodeJsInstallationCode" />
    <dj-anchor level="2" text="CDN 安装" id="Id_Cdn_Installation" />
    <dj-code title="vue" lang="html" :code="CdnInstallationCode" />
</template>