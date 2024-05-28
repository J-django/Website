<script lang="ts" setup name="dj-badge">
// plugins
import "./index.less"

// script
const props = defineProps({
    text: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <code class="dj-badge">{{ props.text }}</code>
</template>
