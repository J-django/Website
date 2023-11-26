<template>
    <div class="jy-audio">
        <div class="jy-audio__wrapper">
            <div class="jy-audio-operate__wrapper">
                <button class="jy-audio-operate__rewind">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="button-icon"
                        viewBox="0 0 16 16">
                        <path
                            d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L8.404 7.304Z" />
                        <path
                            d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L.404 7.304Z" />
                    </svg> -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="button-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M2.5 9.402c-2 1.155-2 4.041 0 5.196l9 5.196c1.515.875 3.317.259 4.102-1.096l1.898 1.096c2 1.155 4.5-.288 4.5-2.598V6.804c0-2.31-2.5-3.753-4.5-2.598l-1.898 1.096c-.785-1.355-2.587-1.971-4.102-1.096l-9 5.196ZM16 7.382v9.237l2.5 1.443a1 1 0 0 0 1.5-.866V6.804a1 1 0 0 0-1.5-.866L16 7.38Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <button class="jy-audio-operate__play" @click="audioConfig.state = !audioConfig.state">
                    <svg v-if="!audioConfig.state" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="button-icon" viewBox="0 0 16 16">
                        <path
                            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="button-icon"
                        viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
                    </svg>
                </button>
                <button class="jy-audio-operate__fast">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="button-icon" viewBox="0 0 16 16">
                        <path
                            d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                        <path
                            d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
                    </svg>
                </button>
            </div>
            <div class="jy-audio-progress__wrapper">
                <span class="jy-audio-progress__start-time">00:00</span>
                <div class="jy-audio-progress__inner">
                    <audio class="jy-audio-process__audio" @play="progressPlayChange"
                        @loadedmetadata="progressLoadedMetaDataChange" @playing="progressPlayingChange"
                        @timeupdate="progressTimeUpdateChange" @ended="progressEndedChange">
                        <source type="audio/ogg" :src="props.url">
                        <source type="audio/mpeg" :src="props.url">
                    </audio>
                    <!-- <div class="jy-audio-progress__bar"></div>
                    <div class="jy-audio-buffered__bar"></div> -->
                    <input type="range" v-model="audioConfig.progress" :style="{ '--value': `${audioConfig.progress}%` }">
                </div>
                <span class="jy-audio-progress__end-time">
                    <svg v-if="audioConfig.loading" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
                        <circle cx="18" cy="12" r="0" fill="currentColor">
                            <animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s"
                                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                                values="0;2;0;0" />
                        </circle>
                        <circle cx="12" cy="12" r="0" fill="currentColor">
                            <animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s"
                                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                                values="0;2;0;0" />
                        </circle>
                        <circle cx="6" cy="12" r="0" fill="currentColor">
                            <animate attributeName="r" begin="0" calcMode="spline" dur="1.5s"
                                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                                values="0;2;0;0" />
                        </circle>
                    </svg>
                    <template v-else>01:30</template>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const props = defineProps({
    url: {
        type: String,
        default: ""
    }
})

const emits = defineEmits([])

const audioConfig = reactive({
    loading: <boolean>true,
    state: <boolean>false,
    progress: <number>0,
})

// Event
// 预备开始播放时触发
const progressPlayChange = () => {
    console.log("progressPlayChange")
}

// 缓冲完毕时触发
const progressLoadedMetaDataChange = () => {
    console.log("progressLoadedMetaDataChange")
}

// 开始播放时触发
const progressPlayingChange = () => {
    console.log("progressPlayingChange")
}

// 播放中触发
const progressTimeUpdateChange = () => {
    console.log("progressTimeUpdateChange")
}

// 播放结束时触发
const progressEndedChange = () => {
    console.log("progressEndedChange")
}
</script>

<style lang="scss" scoped>
.jy-audio {
    position: relative;
    width: 100%;

    .jy-audio__wrapper {
        $gap: 4px;
        position: relative;
        display: flex;
        flex-direction: row;
        padding: $gap;
        gap: $gap;
        width: 100%;
        height: var(--jy-audio-height);
        line-height: 1.5;
        color: var(--t-text-color);
        font-size: 12px;
        background-color: var(--t-card-background-color);
        border: 1px solid var(--t-border-color);
        border-radius: var(--border-radius);
        transform: translateZ(0);
        transition: box-shadow .25s;
        box-shadow: 0 0 0 1px transparent inset;

        .jy-audio-operate__wrapper {
            $buttonSize: 24px;
            $gap: 4px;
            flex-shrink: 0;
            padding: $gap;
            color: var(--t-text-color-1);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: $gap;
            -webkit-user-select: none;
            user-select: none;
            -webkit-user-drag: none;

            .jy-audio-operate__rewind,
            .jy-audio-operate__play,
            .jy-audio-operate__fast,
            .jy-audio-operate__list,
            .jy-audio-operate__volume {
                color: inherit;
                display: inline-flex;
                opacity: .9;
                transition: opacity .25s;

                &:active {
                    transform-origin: center;
                    opacity: .6;

                    .button-icon {
                        transform: scale(.75);
                    }
                }

                .button-icon {
                    width: $buttonSize;
                    height: $buttonSize;
                    color: inherit;
                    will-change: transform;
                    transition: transform .25s;
                }
            }

            .jy-audio-operate__rewind,
            .jy-audio-operate__fast,
            .jy-audio-operate__volume {

                &:active {
                    transform-origin: center;

                    .button-icon {
                        transform: scale(.55);
                    }
                }

                .button-icon {
                    transform: scale(.75);
                }
            }

            .jy-audio-volume__inner {
                margin-left: 20px;
                display: inline-flex;
                gap: $gap;

                .jy-audio-volume__progress {
                    display: inline-flex;
                }
            }
        }

        .jy-audio-progress__wrapper {
            $barHeight: 6px;
            $progressTime: .75s;
            $radius: .1rem;
            flex-grow: 1;
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            gap: $gap;

            .jy-audio-progress__start-time,
            .jy-audio-progress__end-time {
                color: transparent;
                flex-shrink: 0;
                display: inline-flex;
                justify-content: center;
                min-width: 40px;
                max-width: 80px;
                font-size: 12px;
                font-weight: 500;
                line-height: 1;
                will-change: color, opacity;
                animation: progressTimeAnimation $progressTime 1 forwards;
                z-index: 20;
            }

            .jy-audio-progress__end-time {
                animation-delay: calc($progressTime - .25s);

                .icon {
                    -webkit-user-select: none;
                    user-select: none;
                    width: 32px;
                    height: 32px;
                    color: inherit;
                }
            }

            .jy-audio-progress__inner {
                position: relative;
                width: 0;
                height: $barHeight;
                border-radius: $radius;
                cursor: pointer;
                overflow: hidden;
                -webkit-user-select: none;
                user-select: none;
                -webkit-user-drag: none;
                will-change: width;
                opacity: 0;
                animation: progressInnerAnimation $progressTime 1 forwards;

                .jy-audio-process__audio {
                    display: none;
                }

                .jy-audio-progress__bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: $barHeight;
                    background-color: var(--blue);
                    z-index: var(--progress-z-index);
                }

                .jy-audio-buffered__bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 80%;
                    height: $barHeight;
                    background-color: rgba(var(--t-text-color-rgba), .2);
                    z-index: var(--buffered-z-index);
                }

                input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    -webkit-appearance: none;
                    appearance: none;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(var(--t-text-color-rgba), .25);
                    cursor: pointer;

                    &::-webkit-slider-thumb {
                        display: none;
                    }

                    &::-webkit-slider-runnable-track {
                        height: 6px;
                        background: -webkit-linear-gradient(var(--blue), var(--blue)) no-repeat;
                        background-size: var(--value) 100%;
                    }
                }
            }
        }
    }
}

@keyframes progressInnerAnimation {
    100% {
        opacity: 1;
        width: 100%;
    }
}

@keyframes progressTimeAnimation {
    100% {
        color: var(--t-text-color-2);
    }
}</style>