<template>
    <div class="jy-row">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.jy-row {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 12px;
}
</style>