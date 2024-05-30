<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <p>Copyright © 2023-Present&nbsp;&nbsp;&nbsp;
                <a :href="govUrl" @click.prevent="gov">鄂ICP备2022002634号-2</a>
            </p>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const govUrl = "https://beian.miit.gov.cn/";
const gov = () => {
    window.open(govUrl)
}
</script>

<style lang="less" scoped>
footer.footer {
    width: 100%;

    div.footer-wrapper {
        padding: 20px 0;
        background-color: var(--t-card-background-color);

        p,
        a {
            text-align: center;
            line-height: 20px;
            font-size: 12px;
            font-weight: 500;
            color: var(--t-text-color-2);
            transition: color .25s;
        }
    }
}
</style>