<template>
    <main>
        <div class="main-wrapper">
            <router-view></router-view>
        </div>
    </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
main {
    width: 100%;

    div.main-wrapper {
        height: auto;
        min-height: 100vh;
    }
}

@media screen and (min-width: 960px) {
    main {
        .main-wrapper {
            padding-top: var(--header-height);
        }
    }
}
</style>