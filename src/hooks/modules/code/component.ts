/**
 * dj-accordion
 * Accordion 手风琴
 * @returns title, content, FoundationCode, DisabledCode, CssVariablesCode
 */
export const useDJAccordionCode = () => {
    const title = "发现更美好的自己，追寻内心的光芒";

    const content = "在喧嚣的世界中，我们常常迷失了自己，远离了内心的声音。然而，每个人都有一颗闪耀的星，它蕴藏着无限的潜力和独特的魅力。现在，是时候发现更美好的自己，追寻内心的光芒了。每个人都有自己的故事，每个人都有自己的梦想。不要害怕展示真实的自我，敢于追求内心的渴望。不论是小小的爱好还是大胆的目标，都值得我们用心去追寻。让自己的内在力量得到释放，成为引领自己命运的明灯。时光匆匆，岁月如梭，我们不应停滞不前。在这个瞬息万变的世界，保持学习和成长的态度是关键。与其追逐瞬时的浮华，不如从内心汲取力量，拥抱真实的自己。唯有不断地挑战自我，我们才能真正发现自己的潜能和价值。生活中，我们常常受到外界的评判和期待，这让我们迷失了自我。然而，真正的力量来源于内心。当我们坚定地追随内心的声音，才能找到真正属于自己的道路。不要害怕追求与众不同，与众不同才是独特的标志，是引领自己脱颖而出的钥匙。让我们勇敢地面对内心的声音，追寻内心的光芒。发现更美好的自己，踏上属于自己的璀璨之路。相信自己的梦想，坚持自己的信念，无论前路如何曲折，我们都能够闪耀出属于自己的光芒。因为，内心的力量是永恒不变的，它将引领我们走向更美好的未来。";

    const FoundationCode = `
<template>
    <dj-accordion v-model="accordion" :title="title" :content="content" />
</template>

<script setup>
import { ref } from "vue";
const accordion = ref(false);
const title = ref("发现更美好的自己，追寻内心的光芒");
const content = ref("在喧嚣的世界中，我们常常迷失了自己，远离了内心的声音。然而，每个人都有一颗闪耀的星，它蕴藏着无限的潜力和独特的魅力。现在，是时候发现更美好的自己，追寻内心的光芒了。每个人都有自己的故事，每个人都有自己的梦想。不要害怕展示真实的自我，敢于追求内心的渴望。不论是小小的爱好还是大胆的目标，都值得我们用心去追寻。让自己的内在力量得到释放，成为引领自己命运的明灯。时光匆匆，岁月如梭，我们不应停滞不前。在这个瞬息万变的世界，保持学习和成长的态度是关键。与其追逐瞬时的浮华，不如从内心汲取力量，拥抱真实的自己。唯有不断地挑战自我，我们才能真正发现自己的潜能和价值。生活中，我们常常受到外界的评判和期待，这让我们迷失了自我。然而，真正的力量来源于内心。当我们坚定地追随内心的声音，才能找到真正属于自己的道路。不要害怕追求与众不同，与众不同才是独特的标志，是引领自己脱颖而出的钥匙。让我们勇敢地面对内心的声音，追寻内心的光芒。发现更美好的自己，踏上属于自己的璀璨之路。相信自己的梦想，坚持自己的信念，无论前路如何曲折，我们都能够闪耀出属于自己的光芒。因为，内心的力量是永恒不变的，它将引领我们走向更美好的未来。");
</script>`.trim();

    const DisabledCode = `
<template>
    <dj-accordion v-model="accordion" :title="title" :content="content" :disabled="disabled" />
</template>

<script setup>
import { ref } from "vue";
const accordion = ref(false);
const disabled = ref(true);
const title = ref("发现更美好的自己，追寻内心的光芒");
const content = ref("在喧嚣的世界中，我们常常迷失了自己，远离了内心的声音。然而，每个人都有一颗闪耀的星，它蕴藏着无限的潜力和独特的魅力。现在，是时候发现更美好的自己，追寻内心的光芒了。每个人都有自己的故事，每个人都有自己的梦想。不要害怕展示真实的自我，敢于追求内心的渴望。不论是小小的爱好还是大胆的目标，都值得我们用心去追寻。让自己的内在力量得到释放，成为引领自己命运的明灯。时光匆匆，岁月如梭，我们不应停滞不前。在这个瞬息万变的世界，保持学习和成长的态度是关键。与其追逐瞬时的浮华，不如从内心汲取力量，拥抱真实的自己。唯有不断地挑战自我，我们才能真正发现自己的潜能和价值。生活中，我们常常受到外界的评判和期待，这让我们迷失了自我。然而，真正的力量来源于内心。当我们坚定地追随内心的声音，才能找到真正属于自己的道路。不要害怕追求与众不同，与众不同才是独特的标志，是引领自己脱颖而出的钥匙。让我们勇敢地面对内心的声音，追寻内心的光芒。发现更美好的自己，踏上属于自己的璀璨之路。相信自己的梦想，坚持自己的信念，无论前路如何曲折，我们都能够闪耀出属于自己的光芒。因为，内心的力量是永恒不变的，它将引领我们走向更美好的未来。");
</script>`.trim();

    const CssVariablesCode = `
--dj-accordion-header-padding
--dj-accordion-content-padding
--dj-accordion-header-color
--dj-accordion-header-font-size
--dj-accordion-header-font-weight
--dj-accordion-header-min-height
--dj-accordion-background-color
--dj-accordion-border-color
--dj-accordion-focus-border-color
--dj-accordion-border-radius
--dj-accordion-header-transition
--dj-accordion-transition`.trim();

    return {
        title,
        content,
        FoundationCode,
        DisabledCode,
        CssVariablesCode
    }
}

/**
 * dj-audio
 * Audio 音频播放器
 * @returns FoundationCode, CssVariablesCode
 */
export const useDJAudioCode = () => {
    const FoundationCode = `
<template>
    <dj-audio :src="AudioSrc" />
</template>

<script setup>
import AudioSrc from "audio.mp3";
</script>`.trim();

    const CssVariablesCode = `
--dj-aduio-color
--dj-audio-time-color
--dj-audio-height
--dj-audio-background-color
--dj-audio-progress-color
--dj-audio-current-progress-color
--dj-audio-buffer-color
--dj-audio-border-color
--dj-audio-border-radius
--dj-audio-focus-border-color
--dj-audio-transition-duration`.trim();

    return {
        FoundationCode,
        CssVariablesCode
    }
}

/**
 * dj-button
 * Button 按钮
 * @returns FoundationCode, DisabledCode, CustomColorCode, CssVariablesCode
 */
export const useDJButtonCode = () => {
    const FoundationCode = `
<template>
    <dj-button>Default</dj-button>
</template>`.trim();

    const DisabledCode = `
<template>
    <dj-button disabled>Default</dj-button>
</template>`.trim();

    const CustomColorCode = `
<template>
    <dj-button color="#6610f2">Custom Color</dj-button>
    <dj-button color="#6610f2" :disabled="disabled">Custom Color</dj-button>
</template>
    
<script setup>
import { ref } from "vue";
const disabled = ref(true);
</script>`.trim();

    const PlainCode = `
<template>
    <div class="flex-box">
        <dj-button plain>Plain</dj-button>
        <dj-button plain disabled>Disabled Plain</dj-button>
    </div>
    <div class="flex-box">
        <dj-button color="#6610f2" plain>Plain</dj-button>
        <dj-button color="#6610f2" plain disabled>Disabled Plain</dj-button>
    </div>
</template>

<script setup>
import { ref } from "vue";
const disabled = ref(true);
</script>

<style>
.flex-box {
    display: flex;
}

.flex-box + .flex-box {
  margin-top: 8px;
}
</style>`.trim();

    const CssVariablesCode = `
--dj-button-padding
--dj-button-white-color
--dj-button-black-color
--dj-button-font-size
--dj-button-height
--dj-button-background-color
--dj-button-border-radius
--dj-button-transition`.trim();

    return {
        FoundationCode,
        DisabledCode,
        CustomColorCode,
        PlainCode,
        CssVariablesCode
    }
}

/**
 * dj-card
 * Card 卡片
 * @returns FoundationCode, HeaderCode, FooterCode, HeaderAndFooterCode, CssVariablesCode
 */
export const useDJCardCode = () => {
    const FoundationCode = `
<template>
    <dj-card align="center">\n\t\tContent\n\t</dj-card>
</template>`.trim();

    const HeaderCode = `
<template>
    <dj-card align="center">
        <template #header>
            Header
        </template>
        Content
    </dj-card>
</template>`.trim();

    const FooterCode = `
<template>
    <dj-card align="center">
        Content
        <template #footer>
            Footer
        </template>
    </dj-card>
</template>`.trim();

    const HeaderAndFooterCode = `
<template>
    <dj-card align="center">
        <template #header>
            Header
        </template>
        Content
        <template #footer>
            Footer
        </template>
    </dj-card>
</template>`.trim();

    const CssVariablesCode = `
--dj-card-header-padding
--dj-card-content-padding
--dj-card-footer-padding
--dj-card-color
--dj-card-header-background-color
--dj-card-background-color
--dj-card-border-color
--dj-card-border-radius
--dj-card-fotter-background-color`.trim();

    return {
        FoundationCode,
        HeaderCode,
        FooterCode,
        HeaderAndFooterCode,
        CssVariablesCode
    }
}

/**
 * dj-divider
 * Divider 分割线
 * @returns FoundationCode, StyleCode, CssVariablesCode
 */
export const useDJDividerCode = () => {
    const FoundationCode = `
<template>
    <dj-divider label="New Divider" />
</template>`.trim();

    const StyleCode = `
<template>
    <dj-divider label="Type Dashed" type="dashed" />
</template>`.trim();

    const AlignLeftCode = `
<template>
    <dj-divider align="left" label="Align Left" />
</template>`.trim();

    const AlignRightCode = `
<template>
    <dj-divider align="right" label="Align Right" />
</template>`.trim();

    const OffsetCode = `
<template>
    <dj-divider align="left" label="Align Left" :offset="100" />
</template>`.trim();

    const EmptyCode = `
<template>
    <dj-divider />
</template>`.trim();

    const CssVariablesCode = `
--dj-divider-color
--dj-divider-font-size
--dj-divider-font-weight
--dj-divider-border-width
--dj-divider-border-color`.trim();

    return {
        FoundationCode,
        StyleCode,
        AlignLeftCode,
        AlignRightCode,
        OffsetCode,
        EmptyCode,
        CssVariablesCode
    }
}

/**
 * <dj-input
 * Input 输入框
 * @returns FoundationCode, DisabledCode, ClearCode, IconCode, CssVariablesCode
 */
export const useDJInput = () => {
    const FoundationCode = `
<template>
    <dj-input placeholder="Please Input" v-model="input" />
</template>

<script setup>
import { ref } from "vue";
const input = ref("");
</script>`.trim();

    const DisabledCode = `
<template>
    <dj-input placeholder="Please Input" v-model="input" :disabled="disabled" />
</template>

<script setup>
import { ref } from "vue";
const input = ref("");
const disabled = ref(true);
</script>`.trim();

    const ClearCode = `
<template>
    <dj-input placeholder="Please Input Clear" v-model="input" :clear="clear" />
</template>

<script setup>
import { ref } from "vue";
const input = ref("");
const clear = ref(true);
</script>`.trim();

    const RecombinationCode = `
<template>
    <dj-input placeholder="Please Input" v-model="input1">
        <template #prefix>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                <path fill="#DE2910"
                    d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z" />
                <path fill="#FFDE02"
                    d="M11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z" />
            </svg>
        </template>
    </dj-input>
    <dj-input placeholder="Please Input" v-model="input2">
        <template #suffix>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                <path fill="#DE2910"
                    d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z" />
                <path fill="#FFDE02"
                    d="M11.136 8.977l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zm4.665 2.941l-.356.735l.566.59l-.809-.112l-.386.721l-.144-.805l-.805-.144l.721-.386l-.112-.809l.59.566zm-.957 3.779l.268.772l.817.017l-.651.493l.237.783l-.671-.467l-.671.467l.236-.783l-.651-.493l.817-.017zm-3.708 3.28l.736.356l.589-.566l-.111.81l.72.386l-.804.144l-.144.804l-.386-.72l-.81.111l.566-.589zM7 10.951l.929 2.671l2.826.058l-2.253 1.708l.819 2.706L7 16.479l-2.321 1.615l.819-2.706l-2.253-1.708l2.826-.058z" />
            </svg>
        </template>
    </dj-input>
</template>

<script setup>
import { ref } from "vue";
const input1 = ref("");
const input2 = ref("");
</script>`.trim();

    const CssVariablesCode = `
--dj-input-padding
--dj-input-color
--dj-input-icon-color
--dj-input-placeholder-color
--dj-input-clear-color
--dj-input-height
--dj-input-background-color
--dj-input-border-color
--dj-input-focus-border-color
--dj-input-border-radius
--dj-input-transition`.trim();

    return {
        FoundationCode,
        DisabledCode,
        ClearCode,
        RecombinationCode,
        CssVariablesCode
    }
}

/**
 * dj-segmented
 * Segmented 转换
 * @returns DisabledCode, DisabledCode, CssVariablesCode
 */
export const useDJSegmented = () => {
    const FoundationCode = `
<template>
    <dj-segmented :data="segmentedArray" v-model="segmentedValue" />
</template>

<script setup>
import { ref } from "vue";
const segmentedValue = ref("apple");
const segmentedArray = ref(["apple", "banana", "cherry", "date"]);
</script>`.trim();

    const DisabledCode = `
<template>
    <dj-segmented :data="segmentedArray" v-model="segmentedValue" :disabled="disabled" />
</template>

<script setup>
import { ref } from "vue";
const segmentedValue = ref("apple");
const disabled = ref(true);
const segmentedArray = ref(["apple", "banana", "cherry", "date"]);
</script>`.trim();

    const AloneDisabledCode = `
<template>
    <dj-segmented :data="segmentedArray" v-model="segmentedValue" />
</template>

<script setup>
import { ref } from "vue";
const segmentedValue = ref("apple");
const segmentedArray = ref([
    "apple",
    { label: "banana", value: "banana", disabled: true },
    "cherry",
    { label: "grape", value: "grape", disabled: true }
]);
</script>`.trim();

    const CssVariablesCode = `
--dj-segmented-padding
--dj-segmented-option-padding
--dj-segmented-color
--dj-segmented-font-size
--dj-segmented-font-weight
--dj-segmented-option-height
--dj-segmented-background-color
--dj-segmented-indicator-background-color
--dj-segmented-border-radius
--dj-segmented-option-border-radius
--dj-swicth-box-shadow
--dj-segmented-transition
--dj-segmented-indicator-transition
--dj-segmented-option-transition`.trim();

    return {
        FoundationCode,
        DisabledCode,
        AloneDisabledCode,
        CssVariablesCode
    }
}

/**
 * dj-textarea
 * Textarea 文本域
 * @returns FoundationCode, DisabledCode, CssVariablesCode
 */
export const useDJTextarea = () => {
    const FoundationCode = `
<template>
    <dj-textarea placeholder="Please Input" v-model="textarea" />
</template>

<script setup>
import { ref } from "vue";
const textarea = ref("");
</script>`.trim();

    const DisabledCode = `
<template>
    <dj-textarea placeholder="Please Input" v-model="textarea" :disabled="disabled" />
</template>

<script setup>
import { ref } from "vue";
const textarea = ref("");
const disabled = ref(true);
</script>`.trim();

    const CssVariablesCode = `
--dj-textarea-padding
--dj-textarea-color
--dj-textarea-placeholder-color
--dj-textarea-min-height
--dj-textarea-background-color
--dj-textarea-border-color
--dj-textarea-focus-border-color
--dj-textarea-border-radius
--dj-textarea-transition`.trim();

    return {
        FoundationCode,
        DisabledCode,
        CssVariablesCode
    }
}

/**
 * dj-video
 * Video 视频播放器
 * @returns FoundationCode, CssVariablesCode
 */
export const useDJVideo = () => {
    const FoundationCode = `
<template>
    <dj-video :src="VideoSrc" />
</template>

<script setup>
import VideoSrc from "video.mp4";
</script>`.trim();

    const CssVariablesCode = `
--dj-video-color
--dj-video-background-color
--dj-video-progress-color
--dj-video-volume-progress-color
--dj-video-current-progress-color
--dj-video-buffer-color
--dj-video-border-radius
--dj-video-transition-duration`.trim();

    return {
        FoundationCode,
        CssVariablesCode
    }
}

/**
 * dj-switch
 * Switch 切换
 * @returns FoundationCode, DisabledCode, LabelCode, CustomColorCode, CustomThumbCode, CssVariablesCode
 */
export const useDJSwitch = () => {
    const FoundationCode = `
<template>
    <dj-switch v-model="switchValue" />
</template>

<script setup>
import { ref } from "vue";
const switchValue = ref(false);
</script>`.trim();

    const DisabledCode = `
<template>
    <dj-switch v-model="switchValue" :disabled="disabled" />
    <dj-switch v-model="switchValue" />
</template>

<script setup>
import { ref } from "vue";
const switchValue = ref(false);
const disabled = ref(true);
</script>`.trim();

    const LabelCode = `
<template>
    <div class="flex-box">
        <dj-switch v-model="switchValue" unChecked-label="UnChecked" checked-label="checked" />
    </div>
    <div class="flex-box">
        <dj-switch v-model="switchValue" :disabled="disabled" unChecked-label="UnChecked" checked-label="checked" />
    </div>
</template>

<script setup>
import { ref } from "vue";
const switchValue = ref(false);
const disabled = ref(true);
</script>

<style>
.flex-box {
    display: flex;
}
</style>`.trim();

    const CustomColorCode = `
<template>
    <div class="flex-box">
        <dj-switch v-model="switchCustom" unChecked-label="UnChecked" checked-label="checked" unChecked-color="#d7d6d7" checked-color="#6610f2" unChecked-background-color="#d7d6d7" checked-background-color="#6610f2" />
    </div>
    <div class="flex-box">
        <dj-switch v-model="switchValue" unChecked-background-color="#d7d6d7" checked-background-color="#6610f2" />
        <dj-switch v-model="switchValue" unChecked-background-color="#d7d6d7" checked-background-color="#00ad7c" />
    </div>
</template>

<script setup>
import { ref } from "vue";
const switchValue = ref(false);
</script>

<style>
.flex-box {
    display: flex;
}
</style>`.trim();

    const CustomThumbCode = `
<template>
    <div class="flex-box">
        <dj-switch v-model="switchValue" unChecked-label="UnChecked" checked-label="checked">
            <template #checked-thumb>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                    <path fill="currentColor"
                        d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                </svg>
            </template>
            <template #unChecked-thumb>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z" />
                </svg>
            </template>
        </dj-switch>
    </div>
    <div class="flex-box">
        <dj-switch v-model="switchValue">
            <template #checked-thumb>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                    <path fill="currentColor"
                        d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                </svg>
            </template>
            <template #unChecked-thumb>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z" />
                </svg>
            </template>
        </dj-switch>
        <dj-switch v-model="switchValue" :disabled="disabled">
            <template #checked-thumb>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                    <path fill="currentColor"
                        d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                </svg>
            </template>
            <template #unChecked-thumb>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z" />
                </svg>
            </template>
        </dj-switch>
    </div>
</template>

<script setup>
import { ref } from "vue";
const switchValue = ref(false);
const disabled = ref(true);
</script>

<style>
.flex-box {
    display: flex;
}

.icon {
    width: 18px;
    height: 18px;
}
</style>`.trim();

    const CssVariablesCode = `
--dj-switch-padding
--dj-switch-color
--dj-switch-checked-color
--dj-switch-font-size
--dj-switch-font-weight
--dj-switch-width
--dj-switch-height
--dj-switch-thumb-width
--dj-switch-thumb-height
--dj-switch-background-color
--dj-switch-checked-background-color
--dj-switch-thumb-background-color
--dj-switch-border-color
--dj-switch-transition
--dj-switch-label-transition
--dj-switch-thumb-transition`.trim();

    return {
        FoundationCode,
        DisabledCode,
        LabelCode,
        CustomColorCode,
        CustomThumbCode,
        CssVariablesCode,
    }
}

/**
 * dj-dialog
 * Dialog 对话框
 * @returns FoundationCode, CustomHeaderCode, FooterCode, VerticalCenterCode, OverspreadCode, CssVariablesCode
 */
export const useDJDialog = () => {
    const FoundationCode = `
<template>
    <dj-button @click="dialogValue = true">Open Dialog</dj-button>
    <dj-dialog title="Dialog Title" v-model="dialogValue">
        This is Dialog!
    </dj-dialog>
</template>

<script setup>
import { ref } from "vue";
const dialogValue = ref(false);
</script>`.trim();

    const CustomHeaderCode = `
<template>
    <dj-button @click="dialogValue = true">Open Dialog</dj-button>
    <dj-dialog v-model="dialogValue">
        <template #header>
            <dj-button color="#6c757d" plain @click="dialogValue = false">Closed</dj-button>
            <dj-button color="#0d6efd" plain @click="dialogValue = false">Save Changes</dj-button>
        </template>
        This is Dialog!
    </dj-dialog>
</template>

<script setup>
import { ref } from "vue";
const dialogValue = ref(false);
</script>`.trim();

    const FooterCode = `
<template>
    <dj-button @click="dialogValue = true">Open Dialog</dj-button>
    <dj-dialog title="Dialog Title" v-model="dialogValue">
        This is Dialog!
        <template #footer>
            <dj-button color="#6c757d" plain @click="dialogValue = false">Closed</dj-button>
            <dj-button color="#0d6efd" plain @click="dialogValue = false">Save Changes</dj-button>
        </template>
    </dj-dialog>
</template>

<script setup>
import { ref } from "vue";
const dialogValue = ref(false);
</script>`.trim();

    const VerticalCenterCode = `
<template>
    <dj-button @click="dialogValue = true">Open Dialog</dj-button>
    <dj-dialog title="Dialog Title" v-model="dialogValue" :vertical-center="verticalCenter">
        This is Dialog!
    </dj-dialog>
</template>

<script setup>
import { ref } from "vue";
const dialogValue = ref(false);
const verticalCenter = ref(true);
</script>`.trim();

    const OverspreadCode = `
<template>
    <dj-button @click="dialogValue = true">Open Dialog</dj-button>
    <dj-dialog title="Dialog Title" v-model="dialogValue" :overspread="overspread">
        This is Dialog!
        <template #footer>
            <dj-button color="#6c757d" plain @click="dialogOverspreadValue = false">Closed</dj-button>
            <dj-button color="#0d6efd" plain @click="dialogOverspreadValue = false">Save Changes</dj-button>
        </template>
    </dj-dialog>
</template>

<script setup>
import { ref } from "vue";
const dialogValue = ref(false);
const overspread = ref(true);
</script>`.trim();

    const CssVariablesCode = `
--dj-dialog-header-padding
--dj-dialog-body-padding
--dj-dialog-footer-padding
--dj-dialog-margin
--dj-dialog-max-width
--dj-dialog-color
--dj-dialog-font-size
--dj-dialog-font-weight
--dj-dialog-backdrop-background-color
--dj-dialog-header-background-color
--dj-dialog-background-color
--dj-dialog-footer-background-color
--dj-dialog-border-color
--dj-dialog-border-radius
--dj-dialog-header-border-radius
--dj-dialog-footer-border-radius
--dj-dialog-box-shadow
--dj-dialog-z-index`.trim();

    return {
        FoundationCode,
        FooterCode,
        CustomHeaderCode,
        VerticalCenterCode,
        OverspreadCode,
        CssVariablesCode
    }
}

/**
 * dj-slider
 * Slider 滑块
 * @returns FoundationCode, ExtremeCode, DisabledCode, BufferCode
 */
export const useSlider = () => {
    const FoundationCode = `
<template>
    <dj-slider v-model="value" />
</template>

<script setup>
import { ref } from "vue";
const value = ref(30);
</script>`.trim();

    const ExtremeCode = `
<template>
    <dj-slider v-model="value" :show-extreme="extreme" />
</template>

<script setup>
import { ref } from "vue";
const value = ref(30);
const extreme = ref(true);
</script>`.trim();

    const DisabledCode = `
<template>
    <dj-slider v-model="value" :disabled="disabled" />
</template>

<script setup>
import { ref } from "vue";
const value = ref(30);
const disabled = ref(true);
</script>`.trim();

    const BufferCode = `
<template>
    <dj-slider v-model="value" :show-buffer="showBuffer" :buffered="bufferedValue" />
</template>

<script setup>
import { ref } from "vue";
const value = ref(30);
const showBuffer = ref(true);
const bufferedValue = ref(40);
</script>`.trim();

    return {
        FoundationCode,
        ExtremeCode,
        DisabledCode,
        BufferCode
    };
}

/**
 * dj-watermark
 * Watermark 水印
 * @returns FoundationCode, CustomCode
 */
export const useWatermark = () => {
    const FoundationCode = `
<template>
    <dj-watermark :text="text">
        <div style="height: 550px;"></div>
    </dj-watermark>
</template>

<script setup>
import { ref } from "vue";
const text = ref(["django-ui", "easy to understand"]);
</script>`.trim();

    const CustomCode = `
<template>
    <dj-watermark :text="customText" :color="customColor" :font-size="customFontSize" :gap="cusotomGap" :rotate="customRotate">
        <div style="height: 550px;"></div>
    </dj-watermark>
    <div class="flex-column">
        <template v-for="(item, index) of customText" :key="index">
            <div class="flex-row">
                <span class="form-title">
                    <span v-if="index === 0">text:</span>
                </span>
                <dj-input v-model="customText[index]" />
                <dj-button v-if="index === 0" color="#0d6efd" plain @click="push">Push</dj-button>
                <dj-button v-else color="#ee2b47" plain @click="remove(index)">Remove</dj-button>
            </div>
        </template>
        <div class="flex-row">
            <span class="form-title">
                color:<span>{{ customColor }}</span>
            </span>
            <dj-input v-model="customColor" />
        </div>
        <div class="flex-row">
            <span class="form-title">
                font-size:<span>{{ customFontSize }}</span>
            </span>
            <dj-slider v-model="customFontSize" />
        </div>
        <div class="flex-row">
            <span class="form-title">
                gap:<span>{{ cusotomGap }}</span>
            </span>
            <dj-slider v-model="cusotomGap" :min="0" :max="500" />
        </div>
        <div class="flex-row">
            <span class="form-title">
                rotate:<span>{{ customRotate }}</span>
            </span>
            <dj-slider v-model="customRotate" :min="-180" :max="180" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const customText = ref(["django-ui", "easy to understand"]);
const customColor = ref("#dfdfdf");
const customFontSize = ref(16);
const cusotomGap = ref(150);
const customRotate = ref(-22);

const push = () => {
    customText.value.push("")
}

const remove = (index: number) => {
    customText.value = customText.value.filter((f, i) => i !== index);
}
</script>

<style>
.flex-column {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}

.form-title {
    padding-right: 8px;
    min-width: 150px;
    font-size: 14px;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
}
</style>`.trim();

    return {
        FoundationCode,
        CustomCode
    }
}