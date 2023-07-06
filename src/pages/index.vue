<template>
    <div class="home" v-loading="loading">

    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const loading = ref<Boolean>(true);
onMounted(() => {
    setTimeout(() => {
        loading.value = false
    }, 1000);
})
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    text-align: center;
    color: var(--t-text-color);
}

@media (min-width: 768px) {
    .home {
        padding-bottom: 128px;
    }
}
</style>