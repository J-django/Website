<script lang="ts" setup>
import { ref } from "vue"
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"
import File from '@/components/file.vue'
import { useDJAudioCode } from '@/hooks'

const { FoundationCode } = useDJAudioCode();

const audioSrc = ref();
const audioRef = ref();

const fileChange = (fileUrl: string) => {
    audioSrc.value = fileUrl;
    audioRef.value.load()
}
</script>

<template>
    <dj-anchor level="1" text="Audio 音频播放器" id="Id_Audio" />
    <dj-anchor level="2" text="基础 Foundation" id="Id_Audio_Foundation" />
    <dj-example>
        <File accept="audio/mp3, audio/wav, audio/ogg, audio/aac, audio/flac, audio/aiff" @change="fileChange" />
        <dj-audio :src="audioSrc" ref="audioRef" />
        <dj-code :code="FoundationCode" />
    </dj-example>
    <dj-anchor level="2" text="Audio API" id="Id_Audio_API" />
    <dj-anchor level="3" text="属性 Attributes" id="Id_Audio_Attributes" />
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
                    <td>规定音频文件的 URL</td>
                    <td><dj-badge text="string" /></td>
                    <td>-</td>
                </Tbody>
                <Tbody>
                    <td>autoplay</td>
                    <td>返回是否在就绪（加载完成）后随即播放音频</td>
                    <td><dj-badge text="boolean" /></td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>loop</td>
                    <td>返回音频是否应在结束时再次播放</td>
                    <td><dj-badge text="boolean" /></td>
                    <td>false</td>
                </Tbody>
                <Tbody>
                    <td>muted</td>
                    <td>返回是否关闭声音</td>
                    <td><dj-badge text="boolean" /></td>
                    <td>false</td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="事件 Events" id="Id_Audio_Events" />
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
                    <td>loadedmetadata</td>
                    <td>缓冲完毕时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>play</td>
                    <td>调用play()方法后触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>pause</td>
                    <td>播放暂停触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>canplay</td>
                    <td>可以开始播放时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>playing</td>
                    <td>开始播放后触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>progress</td>
                    <td>进度改变时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>timeupdate</td>
                    <td>播放中触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>seeked</td>
                    <td>音频位置发生改变后触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>waiting</td>
                    <td>缓冲暂停播放时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
                <Tbody>
                    <td>ended</td>
                    <td>播放结束时触发</td>
                    <td>
                        <dj-badge text="Function" />
                    </td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
    <dj-anchor level="3" text="暴露 Exposes" id="Id_Audio_Exposes" />
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
                    <td>规定音频文件的 URL</td>
                    <td><dj-badge text="string" /></td>
                </Tbody>
                <Tbody>
                    <td>autoplay</td>
                    <td>返回是否在就绪（加载完成）后随即播放音频</td>
                    <td><dj-badge text="boolean" /></td>
                </Tbody>
                <Tbody>
                    <td>loop</td>
                    <td>返回音频是否应在结束时再次播放</td>
                    <td><dj-badge text="boolean" /></td>
                </Tbody>
                <Tbody>
                    <td>muted</td>
                    <td>返回是否关闭声音</td>
                    <td><dj-badge text="boolean" /></td>
                </Tbody>
                <Tbody>
                    <td>paused</td>
                    <td>返回音频是否暂停</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>volume</td>
                    <td>返回音频的音量</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>progress</td>
                    <td>音频播放进度</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>buffered</td>
                    <td>音频缓存进度</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>currentTime</td>
                    <td>返回音频中的当前播放位置（以秒计）</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>duration</td>
                    <td>返回音频的长度（以秒计）</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>play</td>
                    <td>开始播放音频</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>pause</td>
                    <td>暂停当前播放的音频</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
                <Tbody>
                    <td>load</td>
                    <td>重新加载音频文件</td>
                    <td><dj-badge text="Function" /></td>
                </Tbody>
            </template>
        </Table>
    </dj-example>
</template>
