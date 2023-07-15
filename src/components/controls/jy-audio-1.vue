<template>
    <div class="ply__box_warpper" id="ply__box_warpper" :class="[moduleType == 'slot' ? 'slot' : '']">
        <audio :id="audioId" @play="audioPlayChange" @loadedmetadata="audioLoadedmetadataChange"
            @playing="audioPlayingChange" @timeupdate="audioTimeupdateChange" @ended="audioEndedChange">
            <!-- <source type="audio/ogg" :src="AudioSource">
            <source type="audio/mpeg" :src="AudioSource"> -->
        </audio>
        <!-- 播放按钮 -->
        <button class="ply__item_inner" @click="playState = !playState">
            <i class="bi bi-play-fill" v-show="!playState" @click="play"></i>
            <i class="bi bi-pause-fill" v-show="playState" @click="pause"></i>
        </button>
        <div class="ply__progress_warpper">
            <!-- 进度条 -->
            <input data-plyr="seek" type="range" min="0" max="100" step="0.01" autocomplete="off" role="slider"
                aria-label="Seek" aria-valuemin="0" aria-valuemax="278.726531" aria-valuenow="0"
                aria-valuetext="00:00 of 00:00" seek-value="77.97445640603112" :style="{ '--value': progress + '%' }"
                class="ply__progress_inner" id="ply__progress_inner" v-model="progress" @mouseup="rangeProgressChange"
                @mouseenter="visible = true" @mouseleave="visible = false" @mousedown="dragProgress = true" />
        </div>
        <!-- 播放时间 -->
        <div class="ply__current_time_inner">{{ currentTime }}</div>
        <!-- 音量 -->
        <div class="ply__voice_warpper" v-show="volumeVisible">
            <button class="ply__mute_time_inner" @click="mute = !mute">
                <i class="bi bi-volume-mute-fill" v-show="mute"></i>
                <i class="bi bi-volume-up-fill" v-show="!mute"></i>
            </button>
            <input data-plyr="seek" type="range" min="0" max="100" step="0.01" autocomplete="off" role="slider"
                aria-label="Seek" aria-valuemin="0" aria-valuemax="278.726531" aria-valuenow="0"
                aria-valuetext="00:00 of 00:00" seek-value="77.97445640603112" :style="{ '--value': volume + '%' }"
                class="ply__volume_inner" v-model="volume" />
        </div>
        <!-- 设置 -->
        <div class="ply__menu_warpper" ref="ply__menu_warpper">
            <!-- 设置按钮 -->
            <button class="ply__item_inner" @click="openMenu" :class="[menuCheck ? 'checked' : '']">
                <i class="bi bi-gear-fill ply__item_icon" :class="[menuCheck ? 'turnRight' : 'turnLeft']"></i>
            </button>
            <!-- 设置弹窗 -->
            <div class="ply__menu_inner" :class="[menuCheck ? 'show' : 'hide']">
                <div :style="{ 'height': height, 'width': width }" class="transition">
                    <!-- 当前倍速弹窗 -->
                    <div class="ply__speed_warpper" :hidden="checkSpeed">
                        <button class="ply__speed_inner" @click="chooseSpeed">
                            <span class="ply__speed_inner_title">倍速</span>
                            <span class="ply__speed_inner_value">
                                <label>{{ currentSpeed }}</label>
                                <i class="bi bi-caret-right-fill ply__speed_inner_icon"></i>
                            </span>
                        </button>
                    </div>
                    <!-- 选择倍速弹窗 -->
                    <div class="ply__speed_choose_warpper" v-show="checkSpeed">
                        <ul class="ply__speed_choose_inner">
                            <li @click="checkSpeed = false" class="first_child">
                                <i class="bi bi-caret-left-fill ply__speed_back_inner"></i>
                                <span class="ply__speed_inner_title">倍速</span>
                            </li>
                            <hr />
                            <el-scrollbar ref="ply__speed_choose_ScrollBar">
                                <el-radio-group v-model="currentSpeed">
                                    <li v-for="(speed, index) in timesSpeed" :key="index" @click="speedChange(speed)"
                                        :class="[currentSpeed == speed ? 'is-checked' : '']">
                                        <el-radio size="small" :label="speed">{{ speed }}</el-radio>
                                    </li>
                                </el-radio-group>
                            </el-scrollbar>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs, watch, onMounted, nextTick } from "vue";
import { onClickOutside, useMouse } from "@vueuse/core";

export default {
    name: "Audio",
    props: {
        moduleType: {
            type: String,
            default: "none", // none | slot
        },
        type: {
            type: String,
            default: 'mp3' // video/ogg | video/mp4 | video/webm | audio/ogg | audio/mpeg
        }
    },
    setup() {
        const { x } = useMouse()
        const ply__speed_choose_ScrollBar: any = ref(null);

        const setupData = reactive({
            audioId: "audioPlayer",
            audioTooltipX: x,
            audioTooltipDisplacement: 30,
            playState: false, // 播放状态
            dragProgress: false, // 拖拽进度状态
            progress: 0, // 播放进度
            currentTime: "00:00", // 播放剩余时长(时:分:秒)
            volume: 50, // 当前音量
            reVolume: 50, // 上一次音量
            mute: false, // 静音
            menuCheck: false, // 设置窗口
            checkSpeed: false, // 选择倍速
            currentSpeed: "默认", // 当前倍速
            timesSpeed: ["0.5x", "0.75x", "默认", "1.25x", "1.5x", "1.75x", "2x", "4x"], // 倍速候选项
            visible: false,
            volumeVisible: true,
            width: '102px',
            height: '26px'
        });

        // 点击设置之外内容关闭设置弹窗
        const ply__menu_warpper = ref(null);
        onClickOutside(ply__menu_warpper, () => {
            setupData.menuCheck = false;
            setupData.checkSpeed = false;
        });

        // 播放
        const play = () => {
            const audioPlayer: any = document.getElementById(setupData.audioId);
            audioPlayer.play();
        };

        // 暂停
        const pause = () => {
            const audioPlayer: any = document.getElementById(setupData.audioId);
            audioPlayer.pause();
        };

        // 预备开始播放时触发
        const audioPlayChange = () => {
            //   const audioPlayer: any = document.getElementById(setupData.audioId);
            //   const duration = audioPlayer.duration;
            //   const currentTime = audioPlayer.currentTime;
            //   setupData.currentTime = "-" + formatSongsTime(duration - currentTime);
        };

        // 缓冲完毕时触发;
        const audioLoadedmetadataChange = () => {
            const audioPlayer: any = document.getElementById(setupData.audioId);
            const duration = audioPlayer.duration;
            const currentTime = audioPlayer.currentTime;
            // setupData.currentTime = "-" + formatSongsTime(duration - currentTime);
            setupData.currentTime = formatSongsTime(duration - currentTime);
        };

        // 播放中触发
        const audioTimeupdateChange = () => {
            const audioPlayer: any = document.getElementById(setupData.audioId);
            const duration = audioPlayer.duration;
            const currentTime = audioPlayer.currentTime;
            // setupData.currentTime = "-" + formatSongsTime(duration - currentTime);
            setupData.currentTime = formatSongsTime(duration - currentTime);
            if (!setupData.dragProgress) {
                setupData.progress = formatProgress(duration, currentTime);
            }
        };

        // 开始播放时触发
        const audioPlayingChange = () => {
            //   const audioPlayer: any = document.getElementById(setupData.audioId);
            //   setupData.currentTime = formatSongsTime(audioPlayer.duration);
        };

        // 播放结束时触发
        const audioEndedChange = () => {
            setupData.currentTime = "00:00";
            setupData.playState = false;
        };

        // 拖拽进度时发生
        const rangeProgressChange = () => {
            const audioPlayer: any = document.getElementById(setupData.audioId);
            const duration = audioPlayer.duration;
            audioPlayer.currentTime = duration * (setupData.progress / 100);
            setupData.dragProgress = false;
        };

        // 倍速改变触发
        const speedChange = (val: String | undefined) => {
            (setupData.currentSpeed as String | undefined) = val;
            if (!setupData.currentSpeed) {
                setupData.currentSpeed = setupData.timesSpeed[2];
            }
            const audioPlayer: any = document.getElementById(setupData.audioId);
            audioPlayer.playbackRate = speedSwitch(setupData.currentSpeed);
            setupData.menuCheck = false;
        };

        // 当前倍速
        const openMenu = () => {
            setupData.menuCheck = !setupData.menuCheck;
        };

        // 选择倍速弹窗
        const chooseSpeed = () => {
            setupData.checkSpeed = true;
        };

        const speedSwitch = (speed: String) => {
            switch (speed) {
                case "0.5x":
                    return 0.5;
                case "0.75x":
                    return 0.75;
                case "1.25x":
                    return 1.25;
                case "1.5x":
                    return 1.5;
                case "1.75x":
                    return 1.75;
                case "2x":
                    return 2;
                case "4x":
                    return 4;
                default:
                    return 1;
            }
        };

        // 音量改变时触发
        const audioVolumeChange = async () => {
            const audioPlayer: any = document.getElementById(setupData.audioId);
            audioPlayer.volume = (setupData.volume / 100) as number;
            if (setupData.volume == 0) {
                setupData.mute = true;
            } else {
                setupData.reVolume = setupData.volume;
                setupData.mute = false;
            }
            setupData.dragProgress = false;
        };

        //格式化音频时间
        const formatSongsTime = (duration: any) => {
            //处理时长
            const time = duration;
            //分钟
            const minute: any = time / 60;
            let minutes: any = parseInt(minute);
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            //秒
            const second = time % 60;
            let seconds: any = Math.round(second);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return minutes + ":" + seconds;
        };

        //格式化播放进度
        const formatProgress = (duration: any, currentTime: any) => {
            const percentage: any = currentTime / duration;
            const currentProgress = percentage * 100;
            return currentProgress;
        };

        // 监听设置弹窗
        watch(
            () => setupData.menuCheck,
            (val) => {
                if (!val) {
                    setupData.checkSpeed = false;
                }
            }
        );

        // 监听静音
        watch(
            () => setupData.mute,
            (val) => {
                if (val) {
                    setupData.volume = 0;
                } else {
                    setupData.volume = setupData.reVolume;
                }
            }
        );

        // 监听音量
        watch(
            () => setupData.volume,
            (val) => {
                audioVolumeChange()
            }
        );

        // 监听选择倍速
        watch(
            () => setupData.checkSpeed,
            (val) => {
                if (val) {
                    setupData.width = '80px';
                    setupData.height = '180px';
                    nextTick(() => {
                        ply__speed_choose_ScrollBar.value.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    })
                } else {
                    setupData.width = '100px';
                    setupData.height = '26px';
                }
            }
        );

        const data = toRefs(setupData);
        return {
            x,
            ...data,
            ply__speed_choose_ScrollBar,
            ply__menu_warpper,
            onClickOutside,
            openMenu,
            play,
            pause,
            chooseSpeed,
            speedChange,
            audioPlayChange,
            audioLoadedmetadataChange,
            audioTimeupdateChange,
            audioPlayingChange,
            audioEndedChange,
            rangeProgressChange,
        };
    },
};
</script>

<style lang="scss">
$transitionDuration: 375ms;

* {
    box-sizing: border-box;
}

.transition {
    -webkit-transition: height $transitionDuration cubic-bezier(.4, 0, .2, 1), width $transitionDuration cubic-bezier(.4, 0, .2, 1);
    transition: height $transitionDuration cubic-bezier(.4, 0, .2, 1), width $transitionDuration cubic-bezier(.4, 0, .2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.ply__box_warpper#ply__box_warpper.slot {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border: 2px solid rgba(74, 84, 100, 1);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-top: none;
}

.ply__box_warpper#ply__box_warpper {
    $border-radius: 6px;
    $border-radiusBox: 10px;
    $progressRadius: 8px;
    $thumbRadius: 50%;
    $margin-left: 4px;
    $padding: 8px;
    width: 30%;
    margin: 400px auto;
    min-width: 320px;
    padding: $padding;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    height: 50px;
    background-color: rgba(249, 249, 250, 1);
    border-radius: $border-radiusBox;
    // box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    box-shadow: var(--boxshadow);
    z-index: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    // 播放暂停按钮-----------------------------------------------------------------
    .ply__item_inner {
        position: relative;
        padding: $padding;
        width: 32px;
        height: 32px;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: $border-radius;
        cursor: pointer;
        -webkit-transition: background-color $transitionDuration ease;
        transition: background-color $transitionDuration ease;
        border: none;
        outline: none;
        box-shadow: none;
        background: 0, 0;

        &:active {
            background-color: rgba(33, 99, 232, 1);

            .bi {
                color: rgba(255, 255, 255, 1);
            }
        }

        .bi-play-fill {
            margin-left: 2px;
        }

        .bi {
            font-size: 28px;
            color: rgba(74, 84, 100, 1);
            display: -webkit-flex;
            display: -moz-flex;
            display: flex;
            align-items: center;
            justify-content: center;
            -webkit-transition: color $transitionDuration ease;
            transition: color $transitionDuration ease;
        }
    }

    .ply__progress_warpper {
        position: relative;
        padding: 0 !important;
        margin: 0 0 0 $margin-left !important;
        width: 100%;
        display: -webkit-flex;
        display: -moz-flex;
        display: flex;
        align-items: center;
        justify-content: center;

        // 进度条-----------------------------------------------------------------------
        input[type="range"].ply__progress_inner {
            -webkit-appearance: none;
            appearance: none;
            padding: 0;
            margin: 0;
            width: 100%;
            background: 0, 0;
            outline: none;
            z-index: 2;
            cursor: pointer;

            &:active {
                &::-webkit-slider-thumb {
                    box-shadow: 0px 0px 0px 2px rgba(74, 84, 100, 0.15);
                }
            }
        }

        input[type="range"].ply__progress_inner::-webkit-slider-runnable-track {
            height: 6px;
            background: #eee;
            background: -webkit-linear-gradient(#2163e8, #2163e8) no-repeat,
                rgba(215, 219, 225, 1);
            background-size: var(--value) 100%;
            background-color: rgba(215, 219, 225, 1);
            border-radius: $progressRadius;
        }

        // 拖动轴
        input[type="range"].ply__progress_inner::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            cursor: default;
            height: 14px !important;
            width: 14px !important;
            outline: 0;
            transform: translate(0px, -4px);
            border-radius: $thumbRadius;
            background-color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(74, 84, 100, 0.3);
            background-clip: padding-box;
            box-shadow: none;
            -webkit-transition: box-shadow 300ms ease;
            transition: box-shadow 300ms ease;
        }
    }

    // 播放时间----------------------------------------------------------------------
    .ply__current_time_inner {
        padding: 0 4px;
        margin-left: $margin-left;
        min-width: 62px;
        color: rgba(74, 84, 100, 1);
        font-size: 14px;
        font-weight: bold;
        text-align: center;
    }

    // 音量--------------------------------------------------------------------------
    .ply__voice_warpper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;

        //静音键
        .ply__mute_time_inner {
            padding: $padding;
            width: 32px;
            height: 32px;
            display: -webkit-flex;
            display: -moz-flex;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: $border-radius;
            cursor: pointer;
            -webkit-transition: background-color $transitionDuration ease;
            transition: background-color $transitionDuration ease;
            border: none;
            outline: none;
            box-shadow: none;
            background: 0, 0;

            &:active {
                background-color: rgba(33, 99, 232, 1);

                .bi {
                    color: rgba(255, 255, 255, 1);
                }
            }

            .bi {
                font-size: 20px;
                color: rgba(74, 84, 100, 1);
                display: -webkit-flex;
                display: -moz-flex;
                display: flex;
                align-items: center;
                justify-content: center;
                -webkit-transition: color $transitionDuration ease;
                transition: color $transitionDuration ease;
            }
        }

        // 进度条-----------------------------------------------------------------------
        input[type="range"].ply__volume_inner {
            padding: 0 !important;
            margin: 0 0 0 $margin-left !important;
            -webkit-appearance: none;
            appearance: none;
            max-width: 48px;
            height: 18px;
            background: 0, 0;
            outline: none;
            cursor: pointer;

            &:active {
                &::-webkit-slider-thumb {
                    box-shadow: 0px 0px 0px 2px rgba(74, 84, 100, 0.15);
                }
            }
        }

        input[type="range"].ply__volume_inner::-webkit-slider-runnable-track {
            height: 6px;
            background: #eee;
            background: -webkit-linear-gradient(#2163e8, #2163e8) no-repeat,
                rgba(215, 219, 225, 1);
            background-size: var(--value) 100%;
            background-color: rgba(215, 219, 225, 1);
            border-radius: $progressRadius;
        }

        // 拖动轴
        input[type="range"].ply__volume_inner::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            cursor: default;
            height: 14px !important;
            width: 14px !important;
            outline: 0;
            transform: translate(0px, -4px);
            border-radius: $thumbRadius;
            background-color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(74, 84, 100, 0.3);
            background-clip: padding-box;
            box-shadow: none;
            -webkit-transition: box-shadow 300ms ease;
            transition: box-shadow 300ms ease;
        }
    }

    // 设置--------------------------------------------------------------------------
    .ply__menu_warpper {
        margin-left: $margin-left;
        position: relative;

        .ply__item_inner {
            padding: $padding;
            width: 32px;
            height: 32px;
            display: -webkit-flex;
            display: -moz-flex;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: $border-radius;
            cursor: pointer;
            -webkit-transition: background-color $transitionDuration ease;
            transition: background-color $transitionDuration ease;
            border: none;
            outline: none;
            box-shadow: none;
            background: 0, 0;
            z-index: 1;

            &:active {
                background-color: rgba(33, 99, 232, 1);

                .bi {
                    color: rgba(255, 255, 255, 1);
                }
            }

            .ply__item_icon {
                width: 100%;
                height: 100%;
                font-size: 18px;
                color: rgba(74, 84, 100, 1);
                display: -webkit-flex;
                display: -moz-flex;
                display: flex;
                align-items: center;
                justify-content: center;
                -webkit-transition-property: color, transform;
                transition-property: color, transform;
                -webkit-transition-duration: 400ms;
                transition-duration: 400ms;
                -webkit-transition-timing-function: ease;
                transition-timing-function: ease;
            }

            .ply__item_icon.turnLeft {
                transform: rotate(-45deg);
            }

            .ply__item_icon.turnRight {
                transform: rotate(45deg);
            }
        }

        .ply__item_inner.checked {
            background-color: rgba(33, 99, 232, 1);

            .ply__item_icon {
                color: #fff;
            }
        }

        .ply__menu_inner {
            position: absolute;
            padding: 6px;
            right: 0;
            bottom: 0;
            transform: translate(-50%, 0);
            opacity: 0;
            background-color: rgba(249, 249, 250, 1);
            border-radius: $border-radiusBox;
            box-shadow: var(--boxshadow);
            border: none;
            z-index: -10;
            overflow: hidden;
            -webkit-transition-property: z-index, opacity, transform;
            transition-property: z-index, opacity, transform;
            -webkit-transition-duration: 300ms;
            transition-duration: 300ms;
            -webkit-transition-timing-function: cubic-bezier(0, 0.76, 0.86, 1.02);
            transition-timing-function: cubic-bezier(0, 0.76, 0.86, 1.02);

            .ply__speed_warpper {
                width: 100%;
                height: 100%;

                .ply__speed_inner {
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    max-height: 26px;
                    border: none;
                    outline: none;
                    box-shadow: none;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    align-items: center;
                    justify-content: space-evenly;
                    white-space: nowrap;
                    font-weight: bolder;
                    background: 0, 0;
                    // background-color: var(--white);
                    color: rgba(74, 84, 100, 1);
                    cursor: pointer;
                    border-radius: $border-radius;
                    -webkit-transition: background-color $transitionDuration ease;
                    transition: background-color $transitionDuration ease;
                    box-sizing: border-box;

                    &:active {
                        color: #fff;
                        background-color: rgba(33, 99, 232, 1);

                        .ply__speed_inner_icon {
                            color: #fff;
                        }
                    }

                    span.ply__speed_inner_title {
                        font-size: 14px;
                        font-weight: bold;
                        box-sizing: border-box;
                    }

                    span.ply__speed_inner_value {
                        position: relative;
                        margin-left: calc($margin-left * 1);
                        font-size: 14px;
                        font-weight: bold;
                        box-sizing: border-box;

                        label {
                            position: relative;
                            cursor: pointer;

                            &::after {
                                content: "";
                                position: absolute;
                                left: 50%;
                                bottom: -1.64px;
                                transform: translateX(-50%);
                                width: calc(100% + 8px);
                                height: 1.64px !important;
                                background-color: rgba(74, 84, 100, 1);
                                border: none;
                                border-radius: $border-radius;
                            }
                        }
                    }

                    .ply__speed_inner_icon {
                        padding-top: 2px;
                        font-size: 14px;
                        margin-left: $margin-left;
                    }
                }
            }

            .ply__speed_choose_warpper {
                position: relative;
                width: 100%;
                height: 100%;

                .ply__speed_choose_inner {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;

                    hr {
                        width: 92%;
                        margin: 4px auto;
                        height: 2px !important;
                        border: none;
                        border-radius: $border-radius;
                        background-color: rgba(74, 84, 100, 1);
                    }

                    .first_child {
                        margin: 0 !important;
                        // background-color: var(--white);
                        z-index: 1;
                        height: 26px;

                        .ply__speed_back_inner {
                            font-size: 14px;
                        }

                        span.ply__speed_inner_title {
                            font-weight: bold;
                            margin-left: $margin-left;
                            font-size: 14px;
                        }
                    }

                    .el-scrollbar {
                        .el-radio-group {
                            width: 100%;
                        }
                    }

                    li {
                        margin: 2px 0;
                        padding: 4px 6px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        width: 100%;
                        max-height: 26px;
                        color: rgba(74, 84, 100, 1);
                        // background-color: var(--white);
                        border-radius: $border-radius;
                        -webkit-transition: background-color $transitionDuration ease;
                        transition: background-color $transitionDuration ease;
                        cursor: pointer;

                        &:first-of-type {
                            margin: 0 0 2px 0;
                        }

                        &:last-of-type {
                            margin: 2px 0 0 0;
                        }

                        &:active {
                            background-color: rgba(33, 99, 232, 1);

                            .ply__speed_inner_icon {
                                color: #fff;
                            }

                            label.el-radio,
                            label.el-radio.is-checked {
                                span.el-radio__label {
                                    color: #fff;
                                }
                            }
                        }

                        label.el-radio {
                            span.el-radio__label {
                                margin: 0;
                                padding: 0 4px;
                                font-size: 14px;
                                color: rgba(74, 84, 100, 1);
                                -webkit-transition: color $transitionDuration ease;
                                transition: color $transitionDuration ease;
                            }

                            span.el-radio__input {
                                padding: 0 !important;
                                margin: 0 !important;
                                vertical-align: left;
                            }

                            span.el-radio__inner {
                                margin: 0;
                                background-color: rgba(215, 219, 225, 0.5);
                                border: 1px solid rgba(215, 219, 225, 0.5);
                            }
                        }

                        label.el-radio.is-checked {

                            span.el-radio__label {
                                margin: 0;
                                -webkit-transition: color $transitionDuration ease;
                                transition: color $transitionDuration ease;
                            }

                            span.el-radio__input {
                                padding: 0 !important;
                                margin: 0 !important;
                                vertical-align: left;
                            }

                            span.el-radio__inner {
                                margin: 0;
                                background-color: rgba(33, 99, 232, 1);
                                border: 1px solid rgba(215, 219, 225, 0.5);

                                &::after {
                                    background-color: rgba(249, 249, 250, 1);
                                }
                            }

                            span.el-radio__label {
                                color: rgba(33, 99, 232, 1);
                            }
                        }
                    }

                    li.is-checked {
                        background-color: rgba(33, 99, 232, 1);

                        .ply__speed_inner_icon {
                            color: #fff;
                        }

                        label.el-radio {
                            span.el-radio__label {
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }

        .ply__menu_inner.show {
            transform: translate(var(--standardSpacing), -45px);
            opacity: 1;
            z-index: 99;
        }

        .ply__menu_inner.hide {
            transform: translate(-50%, 0px);
            opacity: 0;
            z-index: -10;
        }
    }
}

// 提示框
.ply__progress_tooltip {
    $border-radius: 5px;
    padding: 0px 10px !important;
    height: 24px !important;
    font-size: 12px !important;
    color: rgba(74, 84, 100, 1);
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $border-radius;
    background: rgba(247, 248, 249, 1) !important;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border: none !important;
    outline: none;

    span.el-popper__arrow::before {
        border: none !important;
        left: 50% !important;
        transform: translate(-50%, -3px) rotate(45deg);
        background: rgba(247, 248, 249, 1) !important;
        border-radius: $border-radius;
        outline: none;
    }
}
</style>
