<template>
    <div class="jy-button-group">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.jy-button-group {
    display: inline-block;
    padding: 0;

    ::v-deep .jy-button+.jy-button {
        border-radius: 0;
    }

    ::v-deep .jy-button {
        margin: 0;

        &:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        &:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
    }
}
</style>