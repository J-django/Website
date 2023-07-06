<template>
    <div class="jy-example">
        <Title :title="prop.title" :id="prop.id" />
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { reactive, useSlots, onMounted } from 'vue'
import Title from '@/components/title.vue'

const prop = defineProps({
    id: {
        type: String,
        default: undefined
    },
    title: {
        type: String,
        default: undefined
    },
})

const slots = useSlots();

const showCheck = reactive({
    showTitle: true,
})

onMounted(() => {
    showCheck.showTitle = (prop.title || slots.title) !== undefined;
})
</script>

<style lang="scss" scoped>
.jy-example {
    margin: 0 auto 8px;
    // padding: .5rem .25rem;
    padding: 4px;

    ::v-deep .jy-code {
        // margin: 16px 0 0 !important;
    }
}
</style>