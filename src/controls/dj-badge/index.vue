<script lang="ts" setup name="dj-badge">
// plugins
import "./index.less"

// script
defineProps({
    text: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <code class="dj-badge">
        <slot>
            {{ text }}
        </slot>
    </code>
</template>
