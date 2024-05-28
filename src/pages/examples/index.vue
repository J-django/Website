<script lang="ts" setup>
// plugins
import { ref } from "vue";
import AudioSrc from '@/assets/audio/Uu - 自卑感.flac'
import VideoSrc from '@/assets/video/20600550-uhd_3840_2160_30fps.mp4'


// script
const accordion = ref(false);
const content = ref();
</script>

<template>
    <div class="layout">
        <div class="line">
            <dj-button>Default</dj-button>
            <dj-button disabled>Disabled Default</dj-button>
            <dj-button color="#0d6efd">Custom Primary</dj-button>
            <dj-button color="#0d6efd" disabled>Disabled Custom Primary</dj-button>
            <dj-button color="#d63384">Custom Pink</dj-button>
            <dj-button color="#d63384" disabled>Disabled Custom Pink</dj-button>
        </div>
        <div class="line">
            <dj-card align="center">
                Content
            </dj-card>
        </div>
        <div class="line">
            <dj-card align="center">
                <template #header>
                    Header
                </template>
                Content
            </dj-card>
        </div>
        <div class="line">
            <dj-card align="center">
                Content
                <template #footer>
                    Footer
                </template>
            </dj-card>
        </div>
        <div class="line">
            <dj-card align="center">
                <template #header>
                    Header
                </template>
                Content
                <template #footer>
                    Footer
                </template>
            </dj-card>
        </div>
        <div class="line">
            <dj-divider text="New Divider" />
        </div>
        <div class="line">
            <dj-divider text="New Divider" type="dashed" />
        </div>
        <div class="line">
            <dj-divider text="New Divider" type="dotted" />
        </div>
        <div class="line">
            <dj-accordion v-model="accordion" title="发现更美好的自己，追寻内心的光芒"
                content="在喧嚣的世界中，我们常常迷失了自己，远离了内心的声音。然而，每个人都有一颗闪耀的星，它蕴藏着无限的潜力和独特的魅力。现在，是时候发现更美好的自己，追寻内心的光芒了。每个人都有自己的故事，每个人都有自己的梦想。不要害怕展示真实的自我，敢于追求内心的渴望。不论是小小的爱好还是大胆的目标，都值得我们用心去追寻。让自己的内在力量得到释放，成为引领自己命运的明灯。时光匆匆，岁月如梭，我们不应停滞不前。在这个瞬息万变的世界，保持学习和成长的态度是关键。与其追逐瞬时的浮华，不如从内心汲取力量，拥抱真实的自己。唯有不断地挑战自我，我们才能真正发现自己的潜能和价值。生活中，我们常常受到外界的评判和期待，这让我们迷失了自我。然而，真正的力量来源于内心。当我们坚定地追随内心的声音，才能找到真正属于自己的道路。不要害怕追求与众不同，与众不同才是独特的标志，是引领自己脱颖而出的钥匙。让我们勇敢地面对内心的声音，追寻内心的光芒。发现更美好的自己，踏上属于自己的璀璨之路。相信自己的梦想，坚持自己的信念，无论前路如何曲折，我们都能够闪耀出属于自己的光芒。因为，内心的力量是永恒不变的，它将引领我们走向更美好的未来。"></dj-accordion>
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content" />
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content" disabled />
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content" clear />
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content">
                <template #prefix-icon>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                        <path fill="#DE2910"
                            d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z" />
                        <path fill="#FFDE02"
                            d="M11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z" />
                    </svg>
                </template>
            </dj-input>
        </div>
        <div class="line">
            <dj-input placeholder="Please Input" v-model="content">
                <template #suffix-icon>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                        <path fill="#DE2910"
                            d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z" />
                        <path fill="#FFDE02"
                            d="M11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z" />
                    </svg>
                </template>
            </dj-input>
        </div>
        <div class="line">
            <dj-textarea placeholder="Please Input" v-model="content" />
        </div>
        <div class="line">
            <dj-audio :src="AudioSrc" />
        </div>
        <div class="line">
            <dj-video :src="VideoSrc" width="100%" min-height="400px" />
        </div>
    </div>
</template>

<style type="less">
.layout {
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .line {
        margin-bottom: rem(8px);
        padding-bottom: rem(8px);
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
}
</style>