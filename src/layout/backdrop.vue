<template>
    <div class="backdrop" @click="closed"></div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['backDropClose'])

const closed = () => {
    emit('backDropClose', true);
}

const resizeChange = () => {
    emit('backDropClose', true);
}

onMounted(() => {
    window.addEventListener('resize', resizeChange, true);
})

onUnmounted(() => {
    window.removeEventListener('resize', resizeChange, true);
})
</script>


<style lang="scss" scoped>
.backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--backdrop-bg-color);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    z-index: var(--backdrop-z-index);
}
</style>