<template>
    <div>
        <Title title="加载 Loading" id="Id_Loading" size="large" />
        <Example title="基础 Foundation" id="Id_Loading_Foundation">
            <jy-card class="card-box" v-loading="true" />
            <jy-code
                :code="`<template>\n\t<jy-card class=\x22card-box\x22 v-loading=\x22true\x22 />\n</template>\n\n<style lang=\x22scss\x22 scoped>\n.card-box {\n\theight: 150px;\n}\n</style>`" />
        </Example>
        <Example title="代码 Code" id="Id_Loading_Code">
            <jy-card class="card-box" v-cLoading="true" />
            <jy-code
                :code="`<template>\n\t<jy-card class=\x22card-box\x22 v-cLoading=\x22true\x22 />\n</template>\n\n<style lang=\x22scss\x22 scoped>\n.card-box {\n\theight: 150px;\n}\n</style>`" />
        </Example>
    </div>
</template>

<script lang="ts" setup>
import Example from '@/components/example.vue'
import Title from '@/components/title.vue'
</script>

<style lang="scss" scoped>
.card-box {
    height: 150px;
}
</style>