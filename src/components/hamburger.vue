<template>
    <button class="hamburger" :class="[checked ? 'active' : '']" @click="toggleCut">
        <span class="container">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </span>
    </button>
</template>

<script lang="ts" setup>
const prop = defineProps({
    checked: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['toggleChange'])
const toggleCut = () => {
    emit("toggleChange", !prop.checked);
}

</script>

<style lang="scss" scoped>
.hamburger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: var(--header-height);

    &:hover {
        .container {
            .top {
                transform: translate(4px);
            }

            .middle {
                transform: translate(0);
            }

            .bottom {
                transform: translate(8px);
            }
        }
    }

    .container {
        position: relative;
        width: 16px;
        height: 14px;
        overflow: hidden;

        .top,
        .middle,
        .bottom {
            position: absolute;
            width: 16px;
            height: 2px;
            background-color: var(--t-text-color);
            transition: top .25s, background-color .5s, transform .25s, opacity .25s;
        }

        .top {
            top: 0;
            left: 0;
            transform: translate(0);
        }

        .middle {
            top: 6px;
            left: 0;
            transform: translate(8px);
        }

        .bottom {
            top: 12px;
            left: 0;
            transform: translate(4px);
        }
    }
}

.hamburger.active {
    &:hover {
        .container {

            .top,
            .middle,
            .bottom {
                opacity: .6;
            }
        }
    }

    .container {
        .top {
            top: 6px;
            transform: translate(0) rotate(225deg);
        }

        .middle {
            top: 6px;
            transform: translate(16px);
        }

        .bottom {
            top: 6px;
            transform: translate(0) rotate(135deg);
        }
    }
}

// @media (min-width: 768px) {
//     .hamburger {
//         display: none;
//     }
// }
</style>