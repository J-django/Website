<script lang="ts" setup>
import Example from '@/components/example.vue'
import Title from '@/components/title.vue'

import AudioSrc from "@/assets/audio/Uu - 自卑感.flac"
</script>

<template>
    <div>
        <Title title="AudioPlayer 音频播放器" id="Id_AudioPlayer" size="large" />
        <Example title="基础 Foundation" id="Id_AudioPlayer_Foundation">
            <dj-audio :src="AudioSrc" />
            <dj-code :code="`<template>\n\t<dj-audio :src=\x22AudioSrc\x22 />\n</template>\n
<script lang=\x22ts\x22 setup>\nimport AudioSrc from \x22audio.mp4\x22\n</script>`" />
        </Example>
    </div>
</template>
