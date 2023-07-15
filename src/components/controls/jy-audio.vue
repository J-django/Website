<template>
    <div class="jy-audio">
        <div class="jy-audio__wrapper">
            <div class="jy-audio-progress__wrapper">
                <span class="jy-audio-progress__start-time">00:01</span>
                <div class="jy-audio-progress__inner">
                    <audio style="display: none;" @play="progressPlayChange" @loadedmetadata="progressLoadedMetaDataChange"
                        @playing="progressPlayingChange" @timeupdate="progressTimeUpdateChange"
                        @ended="progressEndedChange">
                        <source type="audio/ogg" :src="props.url">
                        <source type="audio/mpeg" :src="props.url">
                    </audio>
                    <div class="jy-audio-progress__bar"></div>
                    <div class="jy-audio-buffered__bar"></div>
                </div>
                <span class="jy-audio-progress__end-time">01:30</span>
            </div>
            <div class="jy-audio-operate__wrapper">
                <button class="jy-audio-operate__rewind">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="button-icon"
                        viewBox="0 0 16 16">
                        <path
                            d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L8.404 7.304Z" />
                        <path
                            d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L.404 7.304Z" />
                    </svg>
                </button>
                <button class="jy-audio-operate__play">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="button-icon" viewBox="0 0 16 16">
                        <path
                            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg> -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="button-icon" viewBox="0 0 32 32">
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
    state: <boolean>false,
    progress: <number>0
})

// Event
const progressPlayChange = () => { }

const progressLoadedMetaDataChange = () => { }

const progressPlayingChange = () => { }

const progressTimeUpdateChange = () => { }

const progressEndedChange = () => { }
</script>

<style lang="scss" scoped>
.jy-audio {
    position: relative;
    width: 100%;

    .jy-audio__wrapper {
        $gap: 4px;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: $gap;
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

        .jy-audio-progress__wrapper {
            $barHeight: 6px;
            $progressTime: .75s;
            $radius: .1rem;
            flex-shrink: 0;
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
                line-height: 1;
                will-change: color;
                animation: progressTimeAnimation $progressTime 1 forwards;
                z-index: 20;
            }

            .jy-audio-progress__end-time {
                animation-delay: $progressTime;
            }

            .jy-audio-progress__inner {
                position: relative;
                width: 0;
                height: $barHeight;
                background-color: rgba(var(--t-text-color-rgba), .25);
                border-radius: $radius;
                cursor: pointer;
                overflow: hidden;
                -webkit-user-select: none;
                user-select: none;
                -webkit-user-drag: none;
                will-change: width;
                animation: progressInnerAnimation $progressTime 1 forwards;

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
            }


        }

        .jy-audio-operate__wrapper {
            $buttonSize: 28px;
            $gap: 4px;
            flex-grow: 1;
            width: 100%;
            color: var(--t-text-color-1);
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: $gap;
            -webkit-user-select: none;
            user-select: none;
            -webkit-user-drag: none;
            border: 1px solid red;

            .jy-audio-operate__rewind,
            .jy-audio-operate__play,
            .jy-audio-operate__fast,
            .jy-audio-operate__list {
                color: inherit;
                display: inline-flex;

                &:active {
                    transform-origin: center;
                    color: var(--t-text-color-2);

                    .button-icon {
                        transform: scale(.8);
                    }
                }

                .button-icon {
                    width: $buttonSize;
                    height: $buttonSize;
                    color: inherit;
                    will-change: transform;
                    transition: transform .25s, color .25s;
                }
            }

            .jy-audio-operate__rewind,
            .jy-audio-operate__fast {

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
        }
    }
}

@keyframes progressInnerAnimation {
    100% {
        width: 100%;
    }
}

@keyframes progressTimeAnimation {
    100% {
        color: var(--t-text-color-2);
    }
}
</style>