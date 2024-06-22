<template>
    <div class="home">
        <!-- <dj-code style="width: 250px;" language="bash" :code="`npm install django-ui`" />
        <dj-button class="getStarted" @click="getStarted">
            Get Started
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <g fill="none">
                    <path
                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="currentColor"
                        d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z" />
                </g>
            </svg>
        </dj-button> -->

        <div class="test-container">

        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter();

const getStarted = () => {
    router.push({
        path: "/guide"
    })
}
</script>

<style lang="less" scoped>
.test-container {
    position: relative;
    width: 500px;
    height: 200px;
    background-color: var(--t-card-background-color);
    border: 1px solid var(--t-border-color);
    border-radius: 12px;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        border-radius: 12px;
        border: 1px solid var(--t-border-color);
        z-index: -1;
    }

    &::before {
        transform: translateX(-50%) translateY(-11px) scale(.96);
        opacity: .8;
    }

    &::after {
        transform: translateX(-50%) translateY(-21px) scale(.91);
        opacity: .4;
    }
}






.home {
    padding-top: rem(200px);
    width: 100%;
    color: var(--t-text-color);
    display: flex;
    align-items: center;
    flex-direction: column;

    .getStarted {
        margin-top: rem(8px);
        height: rem(38px);
        color: var(--t-text-color);
        font-size: rem(16px);
        font-weight: bold;

        ::v-deep .dj-button-inner {
            display: flex;
            align-items: center;
        }

        .icon {
            margin-left: rem(6px);
            width: rem(18px);
            height: rem(18px);
        }
    }
}

@media (min-width: 768px) {
    .home {
        padding-bottom: 128px;
    }
}
</style>