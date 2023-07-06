<template>
    <div class="chat-box" v-cLoading="loading">
        <Backdrop v-if="chatConfig.backdropChecked" @backDropClose="backDropCloseChange" />
        <div class="chat-menu" :class="[chatConfig.hamburgerChecked ? 'open' : '']">
            <nav class="chat-dialogue-group">
                <a class="dialogue create-dialogue" id="create-dialogue" @click.prevent="createNewChat">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" class="button-icon" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    New Chat
                </a>
                <a class="dialogue" :class="[chatConfig.currentSelected == item.id ? 'active' : '']"
                    v-for="(item, index) of dialogueGroup" :key="index" @click="toggleDialogue(item.id)">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" class="button-icon" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div class="text-ellipsis">
                        {{ item.name }}
                        <div class="text-shadow"></div>
                    </div>
                </a>
            </nav>
            <div class="chat-system" id="chat-system-theme">
                <div class="screenAppearance appearance">
                    <p class="text">深色模式</p>
                    <ThemeSwitch :backgroundColor="'var(--t-background-color)'" />
                </div>
            </div>
        </div>
        <div class="chat-content">
            <div class="chat-content-wrapper">
                <div class="chat-tool-menu">
                    <jy-button class="hamburger-btn" id="chat-tool-hamburger">
                        <Hamburger :checked="chatConfig.hamburgerChecked" @toggleChange="hamburgerToggleChange" />
                    </jy-button>
                    <span>New Chat</span>
                    <div class="extra" ref="moreMenu">
                        <jy-button class="menu-btn" @click="chatConfig.toolChecked = !chatConfig.toolChecked">
                            <i class="bi bi-sliders"></i>
                        </jy-button>
                        <div class="menu" :class="[chatConfig.toolChecked ? 'show' : '']">
                            <div class="menu-body">
                                <div class="group">
                                    <div class="item">
                                        <p class="label">深色模式</p>
                                        <ThemeSwitch />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-dialogue-AI" ref="chatDialogueAIRef">
                    <div class="chat-exchange-group" ref="chatExchangeGroupRef" v-if="chatConfig.chatRecords.length > 0">
                    </div>
                    <div class="chat-empty" v-else>
                        <img class="chat-empty-logo" :src="Logo" alt="" srcset="">
                        <span class="chat-empty-title">ChatGPT</span>
                    </div>
                </div>
                <div class="chat-input" id="collapseIcon">
                    <div class="chat-input-tool">
                        <jy-button-group>
                            <jy-button class="chat-input-tool-button" @click="backTop">
                                <i class="bi bi-shift button-icon up"></i>
                            </jy-button>
                            <jy-button class="chat-input-tool-button" @click="backBottom">
                                <i class="bi bi-shift-fill button-icon down"></i>
                            </jy-button>
                        </jy-button-group>
                    </div>
                    <div class="chat-input-wrapper">
                        <jy-input type="textarea" enterkeyhint="send" rows="1" placeholder="按Enter发送信息"
                            v-model="chatConfig.currentInput" @keyup.enter="send_Chat_Content" />
                        <div class="chat-input-tool-box">
                            <jy-button v-if="!chatConfig.waiting" class="chat-input__inner send"
                                :disabled="!chatConfig.currentInput" @click.prevent="send_Chat_Content">
                                <i class="bi bi-send-fill"></i>
                            </jy-button>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="button-icon loading">
                                <circle cx="18" cy="12" r="0" fill="currentColor">
                                    <animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s"
                                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                        repeatCount="indefinite" values="0;2;0;0" />
                                </circle>
                                <circle cx="12" cy="12" r="0" fill="currentColor">
                                    <animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s"
                                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                        repeatCount="indefinite" values="0;2;0;0" />
                                </circle>
                                <circle cx="6" cy="12" r="0" fill="currentColor">
                                    <animate attributeName="r" begin="0" calcMode="spline" dur="1.5s"
                                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                        repeatCount="indefinite" values="0;2;0;0" />
                                </circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, nextTick, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { getChatReply } from '@/api/index'
import { LogoType, ResType, createRequest, createResponse, createEmpty, reviseResponse, removeEmpty } from './chatNode'
import { ChatResponse, Dialogue, Message } from '@/utils/interface/index'
import { guid } from '@/utils/tool'
import Logo from '@/assets/images/icon/openAi-dark.png'
import ThemeSwitch from '@/components/theme.vue'
import Backdrop from '@/layout/backdrop.vue'
import Hamburger from '@/components/hamburger.vue'
import moment from "moment"

const moreMenu = ref();
const chatDialogueAIRef = ref();
const chatExchangeGroupRef = ref();
const dialogueGroup = reactive<Dialogue[]>([]);
const loading = ref<Boolean>(true);

const chatConfig = reactive({
    waiting: <Boolean>false,
    chatRecords: <Message[]>[],
    sendContent: <string>"",
    currentInput: <string>"",
    currentSelected: <String>"",
    createDialogueTemplate: <String>"New Chat",
    hamburgerChecked: <boolean>false,
    backdropChecked: <boolean>false,
    toolChecked: <boolean>false
})

onClickOutside(moreMenu, (event) => chatConfig.toolChecked = false)

/**
 * 背景阴影回调
 */
const backDropCloseChange = () => {
    chatConfig.hamburgerChecked = false;
    chatConfig.backdropChecked = false;
}

/**
 * 汉堡包状态切换回调
 */
const hamburgerToggleChange = (val: boolean) => {
    chatConfig.hamburgerChecked = val;
    chatConfig.backdropChecked = val;
}

/**
 * 发送信息将信息打印在页面上
 */
const send_Chat_Content = async () => {
    if (!chatConfig.currentInput || chatConfig.waiting) return;
    await nextTick(() => {
        chatConfig.chatRecords.push({
            role: "user",
            content: chatConfig.currentInput,
        } as Message);
        chatConfig.sendContent = chatConfig.currentInput;
        chatConfig.currentInput = "";
    })
    await sendChat();
}

/**
 * 发起请求
 */
const chatReply = async () => {
    try {
        chatConfig.waiting = true;
        const { code, data, message } = await getChatReply(chatConfig.chatRecords);
        if (code == 1) {
            reviseResponse(moment().format("YYYY-MM-DD HH:mm:ss"), (data as ChatResponse).choices[0].message.content, ResType.success);
            chatConfig.waiting = false;
        } else {
            reviseResponse(moment().format("YYYY-MM-DD HH:mm:ss"), "请求异常，请稍后尝试", ResType.danger, resetChat);
            resetMessage()
            chatConfig.waiting = false;
        }
    } catch {
        reviseResponse(moment().format("YYYY-MM-DD HH:mm:ss"), "请求异常，请稍后尝试", ResType.danger, resetChat);
        resetMessage()
        chatConfig.waiting = false;
    }
}

const sendChat = async () => {
    const request = createRequest(LogoType.user, moment().format("YYYY-MM-DD HH:mm:ss"), chatConfig.chatRecords[chatConfig.chatRecords.length - 1].content);
    const response = createResponse(LogoType.system, "", "");
    removeEmpty();
    const empty = createEmpty();
    chatExchangeGroupRef.value.append(request, response, empty);
    await backBottom();
    await chatReply();
}

const resetChat = async () => {
    await nextTick(() => {
        chatConfig.chatRecords[chatConfig.chatRecords.length - 1].content = chatConfig.sendContent;
    })
    await sendChat();
}

const resetMessage = async () => {
    await nextTick(() => {
        chatConfig.chatRecords[chatConfig.chatRecords.length - 1].content = "";
    })
}

/**
 * 创建新聊天窗口
 */
const createNewChat = async () => {
    dialogueGroup.push({
        id: guid(),
        name: `${chatConfig.createDialogueTemplate}`
    } as Dialogue)
}

/**
 * 切换聊天
 * @param val 编号
 */
const toggleDialogue = async (val: String) => {
    nextTick(() => {
        chatConfig.currentSelected = val;
    })
}

const backTop = () => {
    chatDialogueAIRef.value.scrollTo({
        behavior: "smooth",
        top: 0
    })
}

/**
 * 回到底部
 */
const backBottom = () => {
    chatDialogueAIRef.value.scrollTo({
        behavior: "smooth",
        top: chatDialogueAIRef.value.scrollHeight
    })
}

/**
 * 设置当前窗体样式
 */
const reviseBodyStyle = () => {
    document.body.style.backgroundColor = "var(--t-sidebar-background-color)";
    document.body.style.overflow = "hidden";
}

onMounted(() => {
    reviseBodyStyle();
    setTimeout(() => {
        loading.value = false;
    }, 500);
})
</script>

<style lang="scss" scoped>
$slideBarWidth: 260px;

.chat-box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
    overflow: hidden;

    .chat-menu {
        display: flex;
        flex-direction: column;
        position: fixed;
        padding: 12px;
        width: $slideBarWidth;
        height: 100%;
        opacity: 0;
        transform: translate(-100%);
        background-color: var(--t-sidebar-background-color);
        transition: opacity .5s, transform .25s ease;
        z-index: var(--sidebar-z-index);
        overflow-y: auto;

        .chat-dialogue-group {
            padding: 0 0 8px;
            flex: 1 1 0%;

            .dialogue {
                display: flex;
                align-items: center;
                padding: .75rem;
                border-radius: var(--border-radius);
                color: var(--t-text-color);
                font-size: 14px;
                cursor: pointer;
                transition: color .25s;

                &:hover {
                    background-color: var(--t-background-color);

                    .text-ellipsis {
                        .text-shadow {
                            background-image: linear-gradient(to left, var(--t-background-color), rgba(32, 33, 35, 0));
                        }
                    }
                }

                .button-icon {
                    margin-right: 8px;
                    width: 1rem;
                    height: 1rem;
                    flex-shrink: 0;
                }

                .text-ellipsis {
                    position: relative;
                    flex-grow: 1;
                    max-height: 1.25rem;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    overflow: hidden;

                    .text-shadow {
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        width: 2rem;
                        background-image: linear-gradient(to left, var(--t-sidebar-background-color), rgba(32, 33, 35, 0));
                        z-index: 10;
                    }
                }
            }

            .create-dialogue {
                border: 1px solid var(--t-border-color);
            }

            .dialogue+.dialogue {
                margin-top: 8px;
            }

            .dialogue.active {
                background-color: var(--blue);
                color: var(--white);
                transition: none;

                .text-ellipsis {
                    .text-shadow {
                        background-image: linear-gradient(to left, var(--blue), rgba(32, 33, 35, 0));
                    }
                }
            }
        }

        .chat-system {
            display: none;
            padding-top: 8px;
            border-top: 1px solid var(--t-border-color);
        }
    }

    .chat-menu.open {
        opacity: 1;
        visibility: visible;
        transform: translate(0);
        transition: opacity .25s, transform .5s cubic-bezier(.19, 1, .22, 1);
    }

    .screenAppearance {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--t-text-color);
        font-size: 14px;
        border-radius: var(--border-radius);
        padding: 12px 14px 12px 16px;
        background-color: var(--t-chat-dialogue-color);
    }

    .chat-content {
        padding: 0;
        flex-grow: 1;

        .chat-content-wrapper {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
            padding: 8px;
            border-radius: none;

            .chat-tool-menu {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 0 8px 8px;
                position: sticky;
                top: 0;
                width: 100%;
                z-index: var(--nav-z-index);

                .hamburger-btn,
                .menu-btn {
                    width: 40px;
                    height: 40px;
                    background-color: var(--t-chat-dialogue-color);

                    .bi {
                        font-size: 22px;
                        margin-right: 0;
                    }
                }

                .extra {
                    position: relative;

                    .menu-btn {
                        .bi {
                            font-size: 1.25rem;
                        }
                    }

                    .menu {
                        position: absolute;
                        top: calc(var(--header-height) / 2 + 20px);
                        right: 0;
                        opacity: 0;
                        visibility: hidden;
                        transition: opacity .25s, visibility .25s, transform .25s;

                        .menu-body {
                            padding: 12px;
                            min-width: 128px;
                            background-color: var(--t-background-color);
                            border: 1px solid var(--t-border-color);
                            border-radius: 10px;
                            box-shadow: var(--box-shadow);

                            .group {
                                margin: 0 -12px;
                                padding: 0 12px 12px;

                                &:nth-of-type(2n) {
                                    border-top: 1px solid var(--t-border-color);
                                    padding: 11px 12px 12px;
                                }

                                &:last-of-type {
                                    padding-bottom: 0;
                                }

                                .item {
                                    padding: 0 12px;
                                    display: flex;
                                    align-items: center;
                                    min-width: 176px;

                                    .label {
                                        flex-grow: 1;
                                        line-height: 28px;
                                        font-size: 14px;
                                    }
                                }
                            }
                        }
                    }

                    .menu.show {
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(0);
                    }
                }
            }

            .chat-dialogue-AI {
                flex-grow: 1;
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                overflow-y: auto;
                border-radius: var(--border-radius);

                .chat-exchange-group {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    line-height: 1.5;
                }

                .chat-empty {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .chat-empty-logo {
                        width: 3rem;
                        height: 3rem;
                        -webkit-user-drag: none;
                        -webkit-user-select: none;
                        user-select: none;
                        margin-right: .8rem;
                    }

                    .chat-empty-title {
                        font-size: 24px;
                        color: var(--t-text-color-2);
                        transition: color .25s;
                        -webkit-user-select: none;
                        user-select: none;

                        color: transparent;
                        -webkit-text-fill-color: var(--t-text-color-2);
                        -webkit-text-stroke: 1px var(--t-text-color-3);
                    }
                }
            }

            .chat-input {
                $buttonWidth: 2.25rem;
                $padding: 8px;
                padding: $padding 0 0;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                position: sticky;
                bottom: 0;
                left: 0;
                width: 100%;
                z-index: var(--nav-z-index);

                .chat-input-tool {
                    $buttonWidth: 36px;
                    flex-grow: 1;
                    margin-bottom: 8px;

                    .jy-button-group {
                        display: flex;

                        .chat-input-tool-button {
                            margin: 0 4px;
                            color: var(--t-text-color-2);
                            width: $buttonWidth;
                            height: 36px;
                            background-color: var(--t-chat-dialogue-color);
                            border: 1px solid var(--t-special-bg);
                            border-radius: var(--border-radius);

                            &:first-child {
                                margin-left: 0;
                            }

                            &:last-child {
                                margin-right: 0;
                            }

                            .button-icon {
                                font-size: 1.175rem;
                            }

                            .button-icon.up {
                                transform: rotate(0deg);
                            }

                            .button-icon.down {
                                transform: rotate(180deg);
                            }
                        }
                    }
                }

                .chat-input-wrapper {
                    flex-grow: 1;

                    ::v-deep .jy-textarea {
                        .jy-textarea__inner {
                            padding-right: calc($buttonWidth + $padding);
                            min-height: 44px;
                            box-shadow: none;
                            border: none;
                            border-radius: var(--border-radius);
                            height: auto;
                            max-height: 200px;
                            background-color: var(--t-chat-dialogue-color);

                            &::placeholder {
                                color: var(--t-text-color-2);
                            }
                        }
                    }

                    .chat-input-tool-box {
                        position: absolute;
                        right: calc($padding / 2);
                        bottom: calc($padding / 2);
                        width: $buttonWidth;
                        height: $buttonWidth;

                        .chat-input__inner {
                            width: $buttonWidth;
                            height: $buttonWidth;
                            color: var(--green);
                            transition: color .25s;
                            background: transparent;

                            &:disabled {
                                opacity: .5 !important;
                                cursor: default;
                                color: var(--t-text-color-3);
                            }

                            .bi {
                                margin-right: 0;
                                font-size: 1.25rem;
                            }
                        }

                        .button-icon.loading {
                            width: $buttonWidth;
                            height: $buttonWidth;
                            color: var(--t-text-color-2);
                        }
                    }
                }
            }
        }
    }
}

@media (min-width: 768px) {}

@media (min-width: 960px) {
    .chat-box {
        .chat-menu {
            opacity: 1;
            visibility: visible;
            box-shadow: none;
            transform: translate(0);
            overflow-y: hidden;

            .chat-dialogue-group {
                overflow-y: auto;
            }

            .chat-system {
                display: block;
                padding-top: 8px;
                border-top: 1px solid var(--t-border-color);
            }
        }

        .chat-content {
            padding: 12px 12px 12px $slideBarWidth;

            .chat-content-wrapper {
                border-radius: 16px;
                background-color: var(--t-background-color);

                .chat-tool-menu {
                    display: none;
                }
            }
        }
    }
}

@media (min-width: 1024px) {}
</style>

<style lang="scss">
.chat-exchange-request,
.chat-exchange-response {
    width: 100%;
    border-radius: var(--border-radius);
    opacity: 0;
    transform: translateY(15px);
    visibility: hidden;
    animation: chat-exchange-show .25s forwards;

    .request,
    .response {
        width: calc(100% - 50px);
        padding: 1rem;
        margin: auto;
        line-height: 1.5;
        font-size: 1rem;
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        .abnormal {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            align-items: center;
            width: 100%;

            .content {
                width: 100%;
                padding: 0 12px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                height: 2.25rem;
                word-break: break-all;
                color: #EEEEEE;
                font-size: 16px;
                border-radius: var(--border-radius);
                background-color: rgba(var(--red-rgb), .85);
                transition: none;
            }

            .execute {
                margin-left: 8px;
                flex-shrink: 0;
                flex-grow: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.25rem;
                height: 2.25rem;
                color: var(--t-text-color-1);
                border-radius: var(--border-radius);
                background-color: var(--t-special-bg);

                .bi {
                    font-size: 22px;
                    margin-right: 0;
                }
            }
        }

        .logo {
            margin-top: -.15rem;
            width: 1.75rem;
            height: 1.75rem;
            margin-right: .85rem;

            img {
                width: 1.75rem;
                height: 1.75rem;
                -webkit-user-select: none;
                user-select: none;
                -webkit-user-drag: none;
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            font-size: 14px;
            color: var(--t-text-color);
            transition: color .25s;

            .content-time {
                width: 100%;
                margin-bottom: 4px;
                padding: 3px 0 3px;
                color: var(--t-text-color-2);
                font-size: .8rem;
            }

            .content-context {
                width: 100%;
                padding-bottom: .2rem;
                font-size: 14px;
                word-wrap: break-word;
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                .jy-pre {
                    $padding: 16px;
                    position: relative;
                    margin: 1em 0;
                    padding: 0px;
                    width: 100%;
                    font-size: .875em;
                    font-family: inherit;
                    min-height: 64px;
                    border-radius: var(--border-radius);
                    background-color: var(--t-special-bg);
                    overflow-x: auto;

                    &:hover {
                        .code-language {
                            opacity: 0;
                        }

                        .code-copy {
                            opacity: 1;
                        }
                    }

                    .code-language {
                        position: absolute;
                        top: 8px;
                        right: 8px;
                        font-size: 12px;
                        color: var(--gray);
                        opacity: 1;
                        transition: color .4s, opacity .4s;
                    }

                    .code-copy {
                        direction: ltr;
                        position: absolute;
                        top: 12px;
                        right: 12px;
                        z-index: 3;
                        display: block;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        width: 40px;
                        height: 40px;
                        color: var(--t-text-color);
                        background-color: var(--t-special-bg);
                        opacity: 0;
                        cursor: pointer;
                        transition: color .25s, border-color .25s, opacity .25s;

                        &:hover {
                            border-color: var(--t-border-color);
                        }

                        i.bi {
                            font-size: 16px;
                        }
                    }

                    .code-template {
                        padding: $padding 0px;
                        width: 100%;
                        background: transparent;

                        code[class*=language-] {
                            padding: 0 $padding;
                            color: var(--t-text-color-2);
                            font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
                            font-size: 1em;
                            text-align: left;
                            white-space: pre;
                            word-spacing: normal;
                            word-break: normal;
                            word-wrap: normal;
                            line-height: 1.5;
                            background-color: transparent;
                            -moz-tab-size: 4;
                            -o-tab-size: 4;
                            tab-size: 4;
                            -webkit-hyphens: none;
                            -moz-hyphens: none;
                            -ms-hyphens: none;
                            hyphens: none;

                            span::selection,
                            &::selection {
                                background-color: var(--blue);
                                color: var(--white);
                            }
                        }
                    }
                }
            }
        }
    }
}

.chat-exchange-response {
    animation-delay: .15s;
    background-color: var(--t-chat-dialogue-color);
}

.chat-exchange-response.skeleton {
    background-color: var(--t-chat-dialogue-color);

    .response {
        .content {

            .content-time,
            .content-context {
                background: linear-gradient(to right, var(--t-chat-dialogue-color) 0%, var(--t-chat-dialogue-color) 50%, var(--t-border-color) 100%);
                background-size: 200% 100%;
                border-radius: 4px;
                animation: flow 1.5s linear infinite;
            }

            .content-time {
                margin-bottom: 8px;
                height: 20px;
                width: 140px;
            }

            .content-context {
                width: 100%;
                height: 30px;
            }
        }
    }

    @keyframes flow {
        0% {
            background-position: 50% 0;
        }

        100% {
            background-position: -150% 0;
        }
    }
}

.chat-exchange-empty {
    width: 100%;
    height: 8rem;
    border-radius: var(--border-radius);
}

@keyframes chat-exchange-show {
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        visibility: visible;
    }
}

@media (min-width: 768px) {

    .request,
    .response {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        max-width: 42rem;
    }

    .chat-exchange-empty {
        height: 12rem;
    }
}

@media (min-width: 1024px) {

    .request,
    .response {
        padding-left: 0;
        padding-right: 0;
        max-width: 36rem;
        width: calc(100% - 115px);
    }
}

@media (min-width: 1280px) {

    .request,
    .response {
        max-width: 48rem;
    }
}
</style>