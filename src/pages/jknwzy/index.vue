<template>
    <div class="body">
        <div class="header">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M12 20.325q-.35 0-.713-.125t-.637-.4l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125Z" />
                </svg>
            </div>
            <span class="title">
                JKN-WZY
            </span>
            <span class="theme-box">
                主题模式：
                <ThemeSwitch />
            </span>
        </div>
        <div class="group">
            <template v-for="(item, index) of config.imgs" :key="index">
                <div class="item">
                    <span class="index">
                        编号：{{ index + 1 }}
                    </span>
                    <img class="img" :src="item" />
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useAppStore } from '@/store/modules/app'
import ThemeSwitch from '@/components/theme.vue'
import Z1 from '@/assets/images/z.jpg'
import Z2 from '@/assets/images/z1.jpg'
import Z3 from '@/assets/images/z3.jpg'
import Z4 from '@/assets/images/z4.jpg'
import Z5 from '@/assets/images/z5.jpg'
import Z6 from '@/assets/images/z6.jpg'
import Z7 from '@/assets/images/z7.jpg'
import Z8 from '@/assets/images/z8.jpg'
import Z9 from '@/assets/images/z9.jpg'
import Z10 from '@/assets/images/z10.jpg'
import Z11 from '@/assets/images/z11.jpg'
import Z12 from '@/assets/images/z12.jpg'
import Z13 from '@/assets/images/z13.jpg'
import Z14 from '@/assets/images/z14.jpg'
import Z15 from '@/assets/images/z15.jpg'
import Z16 from '@/assets/images/z16.jpg'
import Z17 from '@/assets/images/z17.jpg'
import Z18 from '@/assets/images/z18.jpg'
import Z19 from '@/assets/images/z19.jpg'
import Z20 from '@/assets/images/z20.jpg'
import Z21 from '@/assets/images/z21.jpg'
import Z22 from '@/assets/images/z22.jpg'
import Z23 from '@/assets/images/z23.jpg'
import Z24 from '@/assets/images/z24.jpg'
import Z25 from '@/assets/images/z25.jpg'
import Z26 from '@/assets/images/z26.jpg'
import Z27 from '@/assets/images/z27.jpg'
import Z28 from '@/assets/images/z28.jpg'
import Z29 from '@/assets/images/z29.jpg'
import Z30 from '@/assets/images/z30.jpg'
import Z31 from '@/assets/images/z31.jpg'
import Z32 from '@/assets/images/z32.jpg'
import Z33 from '@/assets/images/z33.jpg'
import Z34 from '@/assets/images/z34.jpg'
import Z35 from '@/assets/images/z35.jpg'
import Z36 from '@/assets/images/z36.jpg'
import Z37 from '@/assets/images/z37.jpg'
import Z38 from '@/assets/images/z38.jpg'
import Z39 from '@/assets/images/z39.jpg'
import Z40 from '@/assets/images/z40.jpg'
import Z41 from '@/assets/images/z41.jpg'
import Z42 from '@/assets/images/z42.jpg'
import Z43 from '@/assets/images/z43.jpg'
import Z44 from '@/assets/images/z44.jpg'
import Z45 from '@/assets/images/z45.jpg'
import Z46 from '@/assets/images/z46.jpg'
import Z47 from '@/assets/images/z47.jpg'
import Z48 from '@/assets/images/z48.jpg'
import Z49 from '@/assets/images/z49.jpg'
import Z50 from '@/assets/images/z50.jpg'
import Z51 from '@/assets/images/z51.jpg'
import Z52 from '@/assets/images/z52.jpg'
import Z53 from '@/assets/images/z53.jpg'
import Z54 from '@/assets/images/z54.jpg'
import Z55 from '@/assets/images/z55.jpg'
import Z56 from '@/assets/images/z56.jpg'
import Z57 from '@/assets/images/z57.jpg'
import Z58 from '@/assets/images/z58.jpg'
import Z59 from '@/assets/images/z59.jpg'
import Z60 from '@/assets/images/z60.jpg'
import Z61 from '@/assets/images/z61.jpg'
import Z62 from '@/assets/images/z62.jpg'
import Z63 from '@/assets/images/z63.jpg'
import Z64 from '@/assets/images/z64.jpg'
import Z65 from '@/assets/images/z65.jpg'
import Z66 from '@/assets/images/z66.jpg'
import Z67 from '@/assets/images/z67.jpg'
import Z68 from '@/assets/images/z68.jpg'
import Z69 from '@/assets/images/z69.jpg'
import Z70 from '@/assets/images/z70.jpg'
import Z71 from '@/assets/images/z71.jpg'
import Z72 from '@/assets/images/z72.jpg'
import Z73 from '@/assets/images/z73.jpg'
import Z74 from '@/assets/images/z74.jpg'
import Z75 from '@/assets/images/z75.jpg'
import Z76 from '@/assets/images/z76.jpg'
import Z77 from '@/assets/images/z77.jpg'
import Z78 from '@/assets/images/z78.jpg'
import Z79 from '@/assets/images/z79.jpg'
import Z80 from '@/assets/images/z80.jpg'
import Z81 from '@/assets/images/z81.jpg'
import Z82 from '@/assets/images/z82.jpg'
import Z83 from '@/assets/images/z83.jpg'

const appStore = useAppStore();

const config = reactive({
    imgs: <string[]>[Z1, Z2, Z3, Z4, Z5, Z6, Z7, Z8, Z9, Z10, Z11, Z12, Z13, Z14, Z15, Z16, Z17, Z18, Z19, Z20, Z21, Z22, Z23, Z24, Z25, Z26, Z27, Z28, Z29, Z30, Z31, Z32, Z33, Z34, Z35, Z36, Z37, Z38, Z39, Z40, Z41, Z42, Z43, Z44, Z45, Z46, Z47, Z48, Z49, Z50, Z51, Z52, Z53, Z54, Z55, Z56, Z57, Z58, Z59, Z60, Z61, Z62, Z63, Z64, Z65, Z66, Z67, Z68, Z69, Z70, Z71, Z72, Z73, Z74, Z75, Z76, Z77, Z78, Z79, Z80, Z81, Z82, Z83]
})
</script>

<style lang="scss" scoped>
.body {
    $gap: 20px;
    padding: $gap;
    padding-top: 0;
    min-height: 100%;
    background-color: var(--t-background-color);
    display: flex;
    flex-direction: column;
    gap: $gap;
    transition: background-color .25s;

    .header {
        position: sticky;
        top: 0;
        padding: 8px;
        display: flex;
        justify-content: space-between;
        background-color: var(--t-background-color);
        transition: background-color .25s;
        z-index: var(--nav-z-index);

        .logo {
            color: var(--red);
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }

        .title {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: 600;
            letter-spacing: 2px;
            font-family: "Staatliches";
        }

        .theme-box {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: var(--t-text-color-2);
        }
    }

    .group {
        $padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: center;
        gap: $gap;

        .item {
            position: relative;
            padding: $padding;
            display: flex;
            background-color: var(--t-card-background-color);
            border-radius: 4px;
            box-shadow: var(--box-shadow);
            transition: background-color .25s;

            .index {
                position: absolute;
                top: calc($padding * 2);
                right: calc($padding * 2);
                padding: 4px 6px;
                font-size: 12px;
                color: var(--white);
                background-color: var(--black);
                border-radius: 4px;
            }

            .img {
                margin: 0;
                max-width: 500px;
                max-height: 420px;
                border-radius: 4px;
            }
        }
    }
}
</style>