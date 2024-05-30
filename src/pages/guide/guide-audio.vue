<script lang="ts" setup>
import Table from "@/components/table.vue"
import Thead from "@/components/table-thead.vue"
import Tbody from "@/components/table-tbody.vue"

import AudioSrc from "@/assets/audio/Uu - 自卑感.flac"
</script>

<template>
    <div>
        <dj-anchor level="1" text="Audio 音频播放器" id="Id_Audio" />
        <dj-anchor level="3" text="基础 Foundation" id="Id_Audio_Foundation" />
        <dj-example>
            <dj-audio :src="AudioSrc" />
            <dj-code :code="`<template>\n\t<dj-audio :src=\x22AudioSrc\x22 />\n</template>\n
<script lang=\x22ts\x22 setup>\nimport AudioSrc from \x22audio.mp4\x22\n</script>`" />
        </dj-example>
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
                        <td>设置或返回是否在就绪（加载完成）后随即播放视频</td>
                        <td><dj-badge text="boolean" /></td>
                        <td>false</td>
                    </Tbody>
                    <Tbody>
                        <td>loop</td>
                        <td>设置或返回视频是否应在结束时再次播放</td>
                        <td><dj-badge text="boolean" /></td>
                        <td>false</td>
                    </Tbody>
                    <Tbody>
                        <td>muted</td>
                        <td>设置或返回是否关闭声音</td>
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
                        <td>规定视频文件的 URL</td>
                        <td><dj-badge text="string" /></td>
                    </Tbody>
                    <Tbody>
                        <td>autoplay</td>
                        <td>设置或返回是否在就绪（加载完成）后随即播放视频</td>
                        <td><dj-badge text="boolean" /></td>
                    </Tbody>
                    <Tbody>
                        <td>loop</td>
                        <td>设置或返回视频是否应在结束时再次播放</td>
                        <td><dj-badge text="boolean" /></td>
                    </Tbody>
                    <Tbody>
                        <td>muted</td>
                        <td>设置或返回是否关闭声音</td>
                        <td><dj-badge text="boolean" /></td>
                    </Tbody>
                    <Tbody>
                        <td>paused</td>
                        <td>设置或返回视频是否暂停</td>
                        <td><dj-badge text="Function" /></td>
                    </Tbody>
                    <Tbody>
                        <td>volume</td>
                        <td>设置或返回视频的音量</td>
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
                        <td>设置或返回视频中的当前播放位置（以秒计）</td>
                        <td><dj-badge text="Function" /></td>
                    </Tbody>
                    <Tbody>
                        <td>duration</td>
                        <td>返回视频的长度（以秒计）</td>
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
                </template>
            </Table>
        </dj-example>
    </div>
</template>
