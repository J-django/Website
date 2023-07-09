<template>
    <div id="docsearch"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import docsearch from '@docsearch/js';
import '@docsearch/css';


onMounted(() => {
    docsearch({
        container: '#docsearch',
        appId: 'R2IYF7ETH7',
        apiKey: '599cec31baffa4868cae4e79f180729b',
        indexName: 'docsearch',
        maxResultsPerGroup: 5,
    });
})
</script>

<style>
#docsearch {
    display: flex;
    align-items: center;
    justify-content: center;

    .DocSearch.DocSearch-Button {
        padding: 0 6px;
        display: flex;
        align-items: center;
        color: var(--t-text-color);
        font-size: 14px;
        border-radius: var(--border-radius);
        background: none;
        box-shadow: none;
        -webkit-user-select: none;
        user-select: none;
        transition: color .25s, box-shadow .25s;

        .DocSearch-Button-Container {
            color: inherit;
            font-size: 12px;
            font-weight: 500;

            .DocSearch-Search-Icon {
                color: inherit;
                width: 1.1rem;
                height: 1.1rem;
            }

            .DocSearch-Button-Placeholder {
                padding: 0;
            }
        }

        .DocSearch-Button-Keys {
            min-width: auto;
            border-radius: 4px;
            box-shadow: inset 0 0 0 1px var(--t-text-color-3);

            .DocSearch-Button-Key {
                top: 0;
                margin: 0;
                padding: 4px 5px;
                padding-top: 5px;
                font-size: 12px;
                width: auto;
                height: 22px;
                color: inherit;
                background: none;
                box-shadow: none;

                &:first-child {
                    font-size: 18px;
                    padding-right: 0;
                }
            }
        }
    }
}

@media (min-width: 768px) {
    #docsearch {
        .DocSearch.DocSearch-Button {
            color: var(--t-text-color-2);
            background-color: var(--t-card-background-color);
            border: 1px solid transparent;
            box-shadow: var(--box-shadow);
            transition: color .25s, border-color .25s;

            &:hover {
                border-color: var(--t-border-color);
            }

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