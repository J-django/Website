export const useDom = () => {
    const goAnchor = (anchor: string | undefined) => {
        if (!anchor) return;
        const element: HTMLElement = document.querySelector("#" + anchor)!;
        const top = window.innerWidth >= 960 ? -60 : 20;
        if (element) {
            window.scrollTo({
                top: element.offsetTop + 80 + top,
                behavior: "smooth"
            })
            history.pushState(null, '', `#${anchor}`);
        }
    }

    const getElementsByTagName = (source: Element, target: string) => {
        return source.getElementsByTagName(target);
    }

    return {
        goAnchor,
        getElementsByTagName,
    }
}