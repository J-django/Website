export const guid = () => {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const setIcon = (url: string) => {
    var link: any = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = new URL(`../assets/images/icon/${url}`, import.meta.url);
    document.getElementsByTagName('head')[0].appendChild(link);
}

export const isDarkColor = (hexColor: string): boolean => {
    hexColor = hexColor.replace('#', ''); // 去除颜色值中的'#'
    const rgb = [
        parseInt(hexColor.substr(0, 2), 16), // 红色通道值
        parseInt(hexColor.substr(2, 2), 16), // 绿色通道值
        parseInt(hexColor.substr(4, 2), 16)  // 蓝色通道值
    ];

    const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
    return luminance <= 0.5;
}