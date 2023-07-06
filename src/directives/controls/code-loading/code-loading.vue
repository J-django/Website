
<template>
    <div class="jy-loading">
        <div class="code-loader">
            <span>{</span><span>}</span>
        </div>
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

    .code-loader {
        color: var(--t-text-color);
        font-family: Consolas, Menlo, Monaco, monospace;
        font-weight: bold;
        font-size: 100px;
        font-size: 3rem;
        opacity: 0.8;
    }

    .code-loader span {
        display: inline-block;
        animation: pulse_414 .5s alternate infinite ease-in-out;
        -webkit-user-select: none;
        user-select: none;
    }

    .code-loader span:nth-child(odd) {
        animation-delay: 0.5s;
    }

    @keyframes pulse_414 {
        to {
            transform: scale(0.8);
            opacity: 0.5;
        }
    }
}
</style>