<script lang="ts" setup>
import { ref } from "vue"
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import File from '@/components/file.vue'

const videoSrc = ref();
const videoRef = ref();

const fileChange = (fileUrl: string) => {
    videoSrc.value = fileUrl;
    videoRef.value.load()
}
</script>

<template>
    <dj-anchor level="1" text="Video 视频播放器" id="Id_Video" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Video_Foundation" />
    <dj-example>
        <File
            accept="video/mp4, video/webm, video/ogg, video/x-msvideo, video/x-matroska, video/quicktime, video/x-ms-wmv"
            @change="fileChange" />
        <dj-video :src="videoSrc" ref="videoRef" />
        <dj-code :code="`<template>\n\t<dj-video :src=\x22VideoSrc\x22 />\n</template>\n
<script lang=\x22ts\x22 setup>\nimport VideoSrc from \x22video.mp4\x22\n</script>`" />
    </dj-example>
    <dj-anchor level="2" text="Video API" id="Id_Video_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Video_Attributes" />
    <dj-example>
        <Table>
            <template #thead>
                <Thead>
                    <th>属性名</th>
                    <th>描述</th>
                    <th>类型</th>
                    <th>默认值</th>
                </Thead>
            </template>
            <template #tbody>
                <Tbody>
                    <td>src</td>
                    <td>规定视频文件的 URL</td>
                    <td><dj-badge text="string" /></td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>width</td>
                    <td>返回视频的 width 属性的值</td>
                    <td><dj-badge text="string" /></td>
                    <td>100%</td>
                </Tbody>
                <Tbody>
                    <td>minWidth</td>
                    <td>返回视频的 min-width 属性的值</td>
                    <td><dj-badge text="string" /></td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>height</td>
                    <td>返回视频的 height 属性的值</td>
                    <td><dj-badge text="string" /></td>
                    <td>100%</td>
                </Tbody>
                <Tbody>
                    <td>minHeight</td>
                    <td>返回视频的 min-height 属性的值</td>
                    <td><dj-badge text="string" /></td>
                    <td>-</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="事件 Events" id="Id_Video_Events" />
    <dj-example>
        <Table>
            <template #thead>
                <Thead>
                    <th>事件名<dj-badge text="@/v-on" /></th>
                    <th>描述</th>
                    <th>类型</th>
                </Thead>
            </template>
            <template #tbody>
                <Tbody>
                    <td>abort</td>
                    <td>当音频/视频的加载已放弃时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>canplay</td>
                    <td>当浏览器可以开始播放音频/视频时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>canplaythrough</td>
                    <td>当浏览器可在不因缓冲而停顿的情况下进行播放时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>durationchange</td>
                    <td>当音频/视频的时长已更改时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>emptied</td>
                    <td>当目前的播放列表为空时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>ended</td>
                    <td>当目前的播放列表已结束时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>error</td>
                    <td>当在音频/视频加载期间发生错误时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>loadeddata</td>
                    <td>当浏览器已加载音频/视频的当前帧时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>loadedmetadata</td>
                    <td>当浏览器已加载音频/视频的元数据时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>loadstart</td>
                    <td>当浏览器开始查找音频/视频时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>pause</td>
                    <td>当音频/视频已暂停时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>play</td>
                    <td>当音频/视频已开始或不再暂停时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>playing</td>
                    <td>当音频/视频在因缓冲而暂停或停止后已就绪时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>progress</td>
                    <td>当浏览器正在下载音频/视频时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>ratechange</td>
                    <td>当音频/视频的播放速度已更改时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>seeked</td>
                    <td>当用户已移动/跳跃到音频/视频中的新位置时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>seeking</td>
                    <td>当用户开始移动/跳跃到音频/视频中的新位置时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>stalled</td>
                    <td>当浏览器尝试获取媒体数据，但数据不可用时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>suspend</td>
                    <td>当浏览器刻意不获取媒体数据时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>timeupdate</td>
                    <td>当目前的播放位置已更改时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>volumechange</td>
                    <td>当音量已更改时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>waiting</td>
                    <td>当视频由于需要缓冲下一帧而停止时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>fullscreenchange</td>
                    <td>全屏/最小化切换时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>enterpictureinpicture</td>
                    <td>进入画中画时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>leavepictureinpicture</td>
                    <td>离开画中画时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="暴露 Exposes" id="Id_Video_Exposes" />
    <dj-example>
        <Table>
            <template #thead>
                <Thead>
                    <th>名称</th>
                    <th>描述</th>
                    <th>类型</th>
                </Thead>
            </template>
            <template #tbody>
                <Tbody>
                    <td>src</td>
                    <td>返回视频的 src 属性的值</td>
                    <td><dj-badge text="string" /></td>
                </Tbody>
                <Tbody>
                    <td>width</td>
                    <td>返回视频的 width 属性的值</td>
                    <td><dj-badge text="string" /></td>
                </Tbody>
                <Tbody>
                    <td>minWidth</td>
                    <td>返回视频的 min-width 属性的值</td>
                    <td><dj-badge text="string" /></td>
                </Tbody>
                <Tbody>
                    <td>height</td>
                    <td>返回视频的 height 属性的值</td>
                    <td><dj-badge text="string" /></td>
                </Tbody>
                <Tbody>
                    <td>minHeight</td>
                    <td>返回视频的 min-height 属性的值</td>
                    <td><dj-badge text="string" /></td>
                </Tbody>
                <Tbody>
                    <td>error</td>
                    <td>返回视频是否出错</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>waiting</td>
                    <td>返回视频是否在加载</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>paused</td>
                    <td>返回视频是否暂停</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>mute</td>
                    <td>返回视频是否静音</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>volume</td>
                    <td>返回视频的音量</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>beforeVolume</td>
                    <td>返回视频之前设置的音量</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>volumeProgress</td>
                    <td>返回视频的音量进度</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>progress</td>
                    <td>返回视频的播放进度</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>buffered</td>
                    <td>返回表示视频已缓冲部分的 TimeRanges 对象</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>currentTime</td>
                    <td>返回视频中的当前播放位置（以秒计）</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>duration</td>
                    <td>返回视频的长度（以秒计）</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>fullscreen</td>
                    <td>返回视频是否进入全屏</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>pictureInPicture</td>
                    <td>返回视频是否进入画中画</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>toggleFullScreen</td>
                    <td>切换视频全屏模式</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>togglePictureInPicture</td>
                    <td>切换视频画中画模式</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>play</td>
                    <td>开始播放视频</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>pause</td>
                    <td>暂停当前播放的视频</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>load</td>
                    <td>重新加载视频元素</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
</template>
