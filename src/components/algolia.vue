<template>
    <div id="docsearch"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import docsearch from '@docsearch/js';
import '@docsearch/css';


onMounted(() => {
    docsearch({
        apiKey: '1ee70e9214d3ea21cc33afa934e4e57f',
        indexName: 'dialin_tmp',
        container: '#docsearch',
        appId: '8CEDQX2VWF',
        insights: true,
    });
})
</script>

<style type="less">
#docsearch {
    display: flex;
    align-items: center;
    justify-content: center;

    .DocSearch.DocSearch-Button {
        margin-left: 0;
        padding: rem(2px) rem(8px);
        height: rem(34px);
        color: var(--t-text-color);
        font-size: rem(14px);
        border-radius: rem(6px);
        display: flex;
        align-items: center;
        background: none;
        box-shadow: none;
        -webkit-user-select: none;
        user-select: none;
        transition: color .25s, box-shadow .25s;
        box-sizing: border-box;

        .DocSearch-Button-Container {
            color: inherit;
            font-size: 12px;
            font-weight: 500;

            .DocSearch-Search-Icon {
                color: inherit;
                width: 16px;
                height: 16px;
            }

            .DocSearch-Button-Placeholder {
                padding: 0;
                font-size: rem(14px);
            }
        }

        .DocSearch-Button-Keys {
            min-width: auto;
            border-radius: 4px;
            background-color: var(--t-background-color);

            .DocSearch-Button-Key {
                top: 0;
                margin: 0;
                padding: 4px;
                transform: translate(0);
                width: auto;
                height: 20px;
                color: inherit;
                font-size: 12px;
                font-family: inherit;
                background: none;
                box-shadow: none;
            }
        }
    }
}

@media (min-width: 768px) {
    #docsearch {
        .DocSearch.DocSearch-Button {
            color: var(--t-text-color-2);
            background-color: var(--t-card-background-color);
            box-shadow: var(--box-shadow);
            transition: color .25s, border-color .25s;

            .DocSearch-Button-Container {
                margin-right: 8px;

                .DocSearch-Search-Icon {
                    margin-right: 6px;
                }
            }
        }
    }
}
</style>