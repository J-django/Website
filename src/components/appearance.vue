<template>
    <div class="appearance">
        <slot name="default"></slot>
    </div>
</template>

<style lang="scss" scoped>
.appearance {
    display: none;

    &::before {
        margin-right: 16px;
        margin-left: 16px;
        width: 1px;
        height: 20px;
        background-color: var(--t-border-color);
        content: "";
    }
}

@media (min-width: 1280px) {
    .appearance {
        display: flex;
        align-items: center;
    }
}
</style>