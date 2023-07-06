<template>
    <div class="doc">
        <div class="container">
            <div class="content">
                <div class="content-container">
                    <main class="main">
                        <router-view></router-view>
                    </main>
                </div>
            </div>
            <div class="aside">
                <div class="aside-curtain"></div>
                <div class="aside-container">
                    <div class="aside-content">
                        <div class="docAside">
                            <div class="docAsideOutline has-outline">
                                <!-- <div class="content">
                                    <div class="outline-marker"></div>
                                    <div class="outline-title">On this page</div>
                                    <nav>
                                        <div class="visually-hidden">
                                            Table of Contents for current page
                                        </div>
                                        <ul class="root">
                                            <li>
                                                <a href="/" class="outline-link active">Installation</a>
                                            </li>
                                            <li>
                                                <a href="/" class="outline-link">Usage Example</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scopedF>
.doc {
    padding: 32px 24px 96px;
    width: 100%;
    height: 100%;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        position: relative;
        font-weight: 600;
        outline: none;
    }

    h1 {
        letter-spacing: -.02em;
        line-height: 40px;
        font-size: 28px;
    }

    h2 {
        margin: 48px 0 16px;
        border-top: 1px solid var(--t-border-color);
        padding-top: 24px;
        letter-spacing: -.02em;
        line-height: 32px;
        font-size: 24px;
    }

    h2 {
        border-top: 0;
        margin-top: 10px;
    }

    h3 {
        margin: 32px 0 0;
        letter-spacing: -.01em;
        line-height: 28px;
        font-size: 20px;
    }

    >.container {
        margin: 0 auto;
        width: 100%;

        >.aside {
            position: relative;
            display: none;
            order: 2;
            flex-grow: 1;
            padding-left: 32px;
            width: 100%;
            max-width: 256px;

            .aside-curtain {
                position: fixed;
                bottom: 0;
                z-index: 10;
                width: 224px;
                height: 32px;
                background: linear-gradient(transparent, var(--t-background-color) 70%);
            }

            .aside-container {
                position: sticky;
                top: 0;
                margin-top: calc((var(--header-height) + var(--vp-layout-top-height, 0px)) * -1 - 32px);
                padding-top: calc(var(--header-height) + var(--vp-layout-top-height, 0px) + 32px);
                height: 100vh;
                overflow-x: hidden;
                overflow-y: auto;

                .aside-content {
                    display: flex;
                    flex-direction: column;
                    min-height: calc(100vh - (var(--header-height) + var(--vp-layout-top-height, 0px) + 32px));
                    padding-bottom: 32px;

                    .docAside {
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;

                        .docAsideOutline {
                            display: none;

                            .content {
                                position: relative;
                                border-left: 1px solid var(--t-border-color);
                                padding-left: 16px;
                                font-size: 13px;
                                font-weight: 500;

                                .outline-marker {
                                    position: absolute;
                                    top: 32px;
                                    left: -1px;
                                    z-index: 0;
                                    opacity: 0;
                                    opacity: 1;
                                    width: 1px;
                                    height: 18px;
                                    background-color: var(--green);
                                    transition: top .25s cubic-bezier(0, 1, .5, 1), background-color .5s, opacity .25s;
                                }

                                .outline-title {
                                    letter-spacing: .4px;
                                    line-height: 28px;
                                    font-size: 13px;
                                    font-weight: 600;
                                }

                                nav {
                                    .visually-hidden {
                                        position: absolute;
                                        width: 1px;
                                        height: 1px;
                                        white-space: nowrap;
                                        clip: rect(0 0 0 0);
                                        clip-path: inset(50%);
                                        overflow: hidden;
                                    }

                                    .root {
                                        position: relative;
                                        z-index: 1;

                                        .outline-link {
                                            display: block;
                                            line-height: 28px;
                                            color: var(--grey);
                                            white-space: nowrap;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            transition: color .5s;
                                            font-weight: 500;
                                        }

                                        .outline-link.active {
                                            color: var(--t-text-color);
                                            transition: color .25s;
                                        }

                                        .outline-link,
                                        .outline-link.active {
                                            &:hover {
                                                color: var(--t-text-color);
                                                transition: color .25s;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .docAsideOutline.has-outline {
                            display: block;
                        }
                    }
                }
            }
        }

        >.content {
            position: relative;
            margin: 0 auto;
            order: 1;
            width: 100%;

            .content-container {
                margin: 0 auto;
                max-width: 688px;

                main {
                    display: block;
                }
            }

            div {
                .jy-code {
                    position: relative;
                    margin: 16px -28px;
                    border-radius: 0;
                    overflow-x: auto;
                }
            }
        }
    }
}

@media (min-width: 640px) {
    .doc {
        >.container {
            max-width: 640px;

            >.content {
                div {
                    .jy-code {
                        border-radius: 8px;
                        margin: 16px 0;
                    }
                }
            }
        }
    }
}

@media (min-width: 768px) {
    .doc {
        padding: 48px 32px 128px;

        h1 {
            letter-spacing: -.02em;
            line-height: 40px;
            font-size: 32px;
        }

        >.container {
            max-width: 768px;
        }
    }
}

@media (min-width: 960px) {
    .doc {
        padding: 32px 32px 0;

        >.container {
            >.content {
                padding: 0 32px 128px;
            }
        }
    }
}

@media (min-width: 1024px) {
    .doc {
        >.container {
            max-width: 1024px;
        }
    }
}

@media (min-width: 1280px) {
    .doc {
        >.container {
            max-width: 1280px;
            display: flex;
            justify-content: center;

            >.aside {
                display: block;
            }

            >.content {
                order: 1;
                margin: 0;
                min-width: 640px;
            }
        }
    }
}

@media (min-width: 1536px) {
    .doc {
        >.container {
            max-width: 1536px;
        }
    }
}
</style>