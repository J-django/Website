<template>
    <div class="jy-table">
        <table>
            <thead>
                <slot name="thead" />
            </thead>
            <tbody>
                <slot name="tbody" />
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.jy-table {
    table {
        border-collapse: collapse;
        width: 100%;
        background-color: var(--t-background-color);
        font-size: 14px;
        line-height: 1.5em;

        ::v-deep thead {
            tr {
                &:first-child {
                    th {
                        border-top: none;
                    }
                }
            }
        }

        ::v-deep th,
        ::v-deep td {
            white-space: nowrap;
            border-top: 1px solid var(--t-border-color);
            border-bottom: 1px solid var(--t-border-color);
            padding: 0.6em 1em;
            text-align: left;
            max-width: 250px;
            white-space: pre-wrap;
        }
    }
}
</style>