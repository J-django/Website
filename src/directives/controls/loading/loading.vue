<template>
    <div class="jy-loading">
        <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.jy-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    z-index: var(--loading-z-index);

    svg {
        width: 3em;
        transform-origin: center;
        animation: rotate4 2s linear infinite;
    }

    circle {
        fill: none;
        stroke: var(--t-text-color);
        stroke-width: 2;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: dash4 1.5s ease-in-out infinite;
    }

    @keyframes rotate4 {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash4 {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 90, 200;
            stroke-dashoffset: -35px;
        }

        100% {
            stroke-dashoffset: -125px;
        }
    }
}
</style>