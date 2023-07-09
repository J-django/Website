<script lang="ts" setup>
import { useSlots } from 'vue'

const props = defineProps({
    text: {
        type: String,
        default: ""
    },
    value: {
        type: String,
        default: ""
    }
})

const slots = useSlots();
</script>

<style lang="scss" scoped>
.jy-option {
    padding: 6px 12px;
    width: 100%;
    line-height: 1.5;
    color: var(--t-text-color);
    font-size: 14px;
    cursor: pointer;
    border-radius: calc(var(--border-radius) / 1.5);

    &:hover {
        background-color: rgba($color: #303133, $alpha: .05);
    }
}
</style>