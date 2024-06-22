<script lang="ts" setup>
// plugins
import { ref } from "vue";
import File from '@/components/file.vue'

// script
const segmentedValue = ref("Unread");
const segmentedArray = ref(["Unread", "Read", "Archived"]);
</script>

<template>
    <div class="layout">
        <div class="line">
            <div class="example-one">
                <dj-divider align="left" :offset="20" label="Documents" />
                <div class="flex-box">
                    <dj-button color="#3b40d5">
                        <svg class="icon" style="margin-right: 4px;" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z" />
                        </svg>
                        New
                    </dj-button>
                    <dj-button>
                        <svg class="icon" style="margin-right: 4px;" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.99.99 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75zM7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5z" />
                        </svg>
                        Filters
                    </dj-button>
                    <dj-button>
                        <svg class="icon" style="margin-right: 4px;" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="0 0 24 24">
                            <g fill="none">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                <path fill="currentColor"
                                    d="M17.293 3.465a1 1 0 0 1 1.32-.084l.094.084l2.828 2.828a1 1 0 0 1-1.32 1.497l-.094-.083L19 6.586V19a1 1 0 0 1-1.993.117L17 19V6.586l-1.121 1.121a1 1 0 0 1-1.498-1.32l.083-.094zM13 18a1 1 0 0 1 .117 1.993L13 20H4a1 1 0 0 1-.117-1.993L4 18zm0-7a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm-2-7a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
                            </g>
                        </svg>
                        Sort By:Latest
                    </dj-button>
                </div>
            </div>
        </div>
        <div class="line">
            <dj-card class="example-one">
                <h3 class="title">Notifications</h3>
                <dj-segmented class="segmented" v-model="segmentedValue" :data="segmentedArray" />
                <div class="group">
                    <div class="flex-between">
                        <label class="name">
                            Today
                            <dj-badge text="5" />
                        </label>
                        <dj-link class="link">see All</dj-link>
                    </div>
                    <dj-card ghosting class="user-module">
                        <span class="before"></span>
                        <span class="after"></span>
                        <div class="user-container">
                            <div class="user-state">
                                <div class="point"></div>
                            </div>
                            <div class="user-logo">
                                <div class="logo-box">
                                    <img class="logo" src="" alt="">
                                </div>
                            </div>
                            <div class="user-information">
                                <div style="font-size: 14px;">
                                    <label style="
                                            color:var(--t-text-color);
                                            font-weight: 600;
                                            margin-right: 8px;">
                                        Boyd Larkin
                                    </label>
                                    <label style="color:var(--t-text-color-2)">has sent you a reminder</label>
                                </div>
                                <div style="color: var(--gray);font-size: 12px;">2 hours ago</div>
                                <div style="margin-top: 12px;">
                                    <dj-button color="var(--t-example-one-Ignore-background-color)">Ignore</dj-button>
                                    <dj-button color="#4849f8">Respond</dj-button>
                                </div>
                            </div>
                        </div>
                    </dj-card>
                </div>
                <div class="group">
                    <div class="flex-between">
                        <label class="name">
                            Yesterday
                            <dj-badge text="7" />
                        </label>

                        <dj-link class="link">see All</dj-link>
                    </div>
                    <dj-card ghosting class="user-module">
                        <div class="user-container">
                            <div class="user-state">
                                <div class="point"></div>
                            </div>
                            <div class="user-logo">
                                <div class="logo-box">
                                    <img class="logo" src="" alt="">
                                </div>
                            </div>
                            <div class="user-information">
                                <div style="font-size: 14px;">
                                    <label style="
                                            color:var(--t-text-color);
                                            font-weight: 600;
                                            margin-right: 8px;">
                                        Josh Krajcik
                                    </label>
                                    <label style="color:var(--t-text-color-2);margin-right: 8px;">has changed the
                                        status of</label>
                                    <label style="
                                        color:var(--t-text-color);
                                        font-weight: 600;">
                                        Design Project
                                    </label>
                                </div>
                                <div style="margin-top: 8px;display: flex;align-items: center;flex-wrap: wrap;">
                                    <dj-button color="#46444b" plain>
                                        <svg class="icon" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg"
                                            width="32" height="32" viewBox="0 0 20 20">
                                            <path fill="currentColor"
                                                d="M10 3.5a6.5 6.5 0 1 1 0 13zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                                        </svg>
                                        In Progress
                                    </dj-button>
                                    <span style="margin: 0 10px;color: var(--gray);display: flex;align-items: center;">
                                        <svg class="icon" style="width: 24px;height: 24px;"
                                            xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                            viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="1.5"
                                                d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6" />
                                        </svg>
                                    </span>
                                    <dj-button color="#3c40f2" plain>
                                        <svg class="icon" style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg"
                                            width="32" height="32" viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                                        </svg>
                                        Completed
                                    </dj-button>
                                </div>
                                <div style="margin-top:8px;color: var(--gray);font-size: 12px;">2 hours
                                    ago</div>
                            </div>
                        </div>
                    </dj-card>
                </div>
                <div class="group">
                    <div class="flex-between">
                        <label class="name">
                            Monday
                            <dj-badge text="5" />
                        </label>

                        <dj-link class="link">see All</dj-link>
                    </div>
                    <dj-card ghosting class="user-module">
                        <div class="user-container">
                            <div class="user-state">
                                <div class="point"></div>
                            </div>
                            <div class="user-logo">
                                <div class="logo-box">
                                    <img class="logo" src="" alt="">
                                </div>
                            </div>
                            <div class="user-information">
                                <div style="font-size: 14px;">
                                    <label style="
                                            color:var(--t-text-color);
                                            font-weight: 600;
                                            margin-right: 8px;">
                                        Santos Kling
                                    </label>
                                    <label style="color:var(--t-text-color-2);margin-right: 8px;">has left a comment
                                        on</label>
                                    <label style="
                                            color:var(--t-text-color);
                                            font-weight: 600;">
                                        Strategy 2022
                                    </label>
                                </div>
                                <dj-card class="card">
                                    Where can i find the process for submitting invoices and for reviewing a contract.
                                </dj-card>
                                <div style="margin-top:8px;color: var(--gray);font-size: 12px;">2 hours ago</div>
                            </div>
                        </div>
                    </dj-card>
                </div>
            </dj-card>
        </div>
    </div>
</template>

<style type="less">
html.dark {
    --t-example-one-background-color: #1c1c1e;
    --t-example-one-segmented-indicator-background-color: #353539;
    --t-example-one-user-module: #242427;
    --t-example-one-Ignore-background-color: #353539;
    --t-example-one-card-background-color: #39383b;
}

html {
    --t-example-one-background-color: var(--white);
    --t-example-one-segmented-indicator-background-color: var(--white);
    --t-example-one-user-module: var(--t-card-background-color);
    --t-example-one-Ignore-background-color: var(--white);
    --t-example-one-card-background-color: #46444b40;
}

.layout {
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .flex-box {
        display: flex;
        width: 100%;
    }

    .dj-badge {
        box-shadow: var(--box-shadow-2);
    }

    .line {
        margin-bottom: rem(8px);
        padding-bottom: rem(8px);
        width: 100%;
        border-bottom: 1px solid var(--t-border-color);

        .flex-between {
            display: flex;
            justify-content: space-between;
        }
    }

    .dj-button {
        padding: 8px;
        height: 30px;
        line-height: 30px;
    }

    .icon {
        width: 18px;
        height: 18px
    }

    .example-one {
        margin: 0 auto;
        max-width: 500px;
        background-color: var(--t-example-one-background-color);

        .segmented {
            width: 100%;

            .dj-segmented__wrapper {
                width: 100%;
            }
        }

        .dj-card-body {
            padding-left: 26px;
            padding-right: 26px;
        }

        .title {
            margin: 10px 0;
            font-size: 20px;
            font-weight: 600;
        }

        .group {
            margin: 10px 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .name {
            color: var(--t-text-color-2);
        }

        .link {
            color: var(--t-text-color);
            transition: color 250ms;
        }

        .user-module {
            position: relative;
            background-color: var(--t-example-one-user-module);
            box-shadow: var(--box-shadow-2);
            border-radius: 12px;

            .user-container {
                display: flex;
                flex-direction: row;
                gap: 12px;

                .user-state {
                    .point {
                        margin-top: 15px;
                        width: 8px;
                        height: 8px;
                        border-radius: 9999px;
                        background-color: #5555ff;
                        box-shadow: 0 3px 12px #5555ff, 0 1px 4px #5555ff;
                    }
                }

                .user-logo {
                    .logo-box {
                        width: 40px;
                        height: 40px;
                        border-radius: 8px;
                        background-color: var(--t-background-color);
                        overflow: hidden;

                        .logo {}
                    }
                }

                .user-information {
                    flex: 1;

                    .card {
                        margin-top: 8px;
                        background-color: var(--t-example-one-card-background-color);
                        box-shadow: var(--box-shadow-2);

                        .dj-card-body {
                            padding: 8px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}
</style>