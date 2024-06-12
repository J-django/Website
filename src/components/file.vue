<script lang="ts" setup>
import { EventFilter } from '@vueuse/core';
import { ref } from 'vue'

defineProps({
    accept: {
        type: String,
        default: ""
    }
})

const emits = defineEmits(["change"])

const fileRef = ref();

const getFile = () => {
    fileRef.value.click();
}

const fileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target instanceof HTMLInputElement && target.files) {
        const file = target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file)
            emits("change", fileUrl)
        }
    }
}
</script>

<template>
    <dj-button style="margin-bottom: 8px;" @click="getFile">
        选择文件
        <input name="file" type="file" ref="fileRef" :accept="accept" @change="fileChange" style="display: none;">
    </dj-button>
</template>