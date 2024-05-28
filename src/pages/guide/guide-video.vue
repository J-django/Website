<script lang="ts" setup>
import Example from '@/components/example.vue'
import Title from '@/components/title.vue'

import VideoSrc from '@/assets/video/20600550-uhd_3840_2160_30fps.mp4'
</script>

<template>
    <div>
        <Title title="VideoPlayer 视频播放器" id="Id_VideoPlayer" size="large" />
        <Example title="基础 Foundation" id="Id_VideoPlayer_Foundation">
            <dj-video :src="VideoSrc" />
            <dj-code :code="`<template>\n\t<dj-video :src=\x22VideoSrc\x22 />\n</template>\n
<script lang=\x22ts\x22 setup>\nimport VideoSrc from \x22video.mp4\x22\n</script>`" />
        </Example>
    </div>
</template>
