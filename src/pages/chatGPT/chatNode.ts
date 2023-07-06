// 引入highlight.js库
import hljs from './highlightConfig'
import UserLogo from '@/assets/images/icon/user.png'
import Logo from '@/assets/images/icon/openAi-dark.png'
import { guid } from '@/utils/tool'

const id = guid();
const codeBlockRegex = /```([\s\S]*?)```/g;

/**
 * LOGO枚举
 */
export enum LogoType {
    user,
    system
}

export enum ResType {
    success,
    warning,
    danger
}

/**
 * 
 * @param type LOGO类型
 * @param time 时间
 * @param innerText 文本内容
 * @returns 
 */
export const createRequest = (type: LogoType, time: string, innerText: string) => {
    const chatRequest = createDiv("chat-exchange-request");
    const requestD = createDiv("request");
    const logo = createLogo(type);
    const content = createContent(time, innerText);
    requestD.append(logo, content);
    chatRequest.append(requestD);
    return chatRequest;
}

/**
 * 
 * @param type LOGO类型
 * @param time 时间
 * @param innerText 文本内容
 * @returns 
 */
export const createResponse = (type: LogoType, time: string, innerText: string) => {
    const chatResponse = createDiv("chat-exchange-response skeleton");
    chatResponse.id = id;
    const responseD = createDiv("response");
    const logo = createLogo(type);
    const content = createContent(time, innerText);
    responseD.append(logo, content);
    chatResponse.append(responseD);
    return chatResponse;
}

/**
 * 创建EMPTY标签模块
 * @returns 
 */
export const createEmpty = () => {
    const emptyD = createDiv("chat-exchange-empty");
    return emptyD;
}

/**
 * 创建错误打印
 * @param message 错误内容
 */
export const createError = (message: string, func: EventListenerOrEventListenerObject) => {
    const errorSP = createSpan("abnormal");
    const contentSP = createSpan("content");
    const resetB = createJyB("execute", func);
    contentSP.innerText = message;
    errorSP.append(contentSP, resetB);
    return errorSP;
}

/**
 * 创建LOGO
 * @param type LOGO类型
 */
const createLogo = (type: LogoType) => {
    const logoD = createDiv("logo");
    const img = createImg(type);
    logoD.appendChild(img);
    return logoD;
}

/**
 * 创建内容模块
 * @param time 时间
 * @param innerText 内容
 * @returns 
 */
const createContent = (time: string, innerText: string) => {
    const contentD = createDiv("content");
    contentD.append(createTimeP(time), createContextD(innerText));
    return contentD;
}

/**
 * 创建时间模块
 * @param time 创建时间
 * @returns 
 */
const createTimeP = (time: string) => {
    return createP("content-time", time);
}

/**
 * 
 * @param innerText 创建内容
 * @returns 
 */
const createContextD = (innerText: string) => {
    return createDiv("content-context", innerText);
}

/**
 * 选择LOGO类型
 * @param logoType LOGO类型
 * @returns 
 */
const switchLogo = (logoType: LogoType) => {
    switch (logoType) {
        case LogoType.user:
            return UserLogo;
        case LogoType.system:
            return Logo;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///修改元素内容

/**
 * 修改元素
 * @param time 时间
 * @param innerText 内容
 * @param type 结果类型
 */
export const reviseResponse = (time: string, innerText: string, type: ResType, func?: EventListenerOrEventListenerObject) => {
    // const skeletonResponseN = document.querySelector("div.chat-exchange-response.skeleton") as Element;
    const skeletonResponseN = document.getElementById(id) as Element;
    skeletonResponseN.id = "";
    skeletonResponseN.className = "chat-exchange-response";
    const responseN = skeletonResponseN?.childNodes[0] as Element;
    const contentN = responseN?.childNodes[1] as Element;
    const contentTimeN = contentN.childNodes[0] as Element;
    const contentContextN = contentN.childNodes[1] as Element;
    contentTimeN.innerHTML = time;
    switch (type) {
        case ResType.success:
            contentContextN.innerHTML = formattedContent(innerText);
            break;
        case ResType.warning, ResType.danger:
            contentContextN.parentNode?.removeChild(contentContextN)
            contentN.append(createError(innerText, func as EventListenerOrEventListenerObject));
            break;
    }
}

// 将代码块替换成HTML代码块
const formattedContent = (innerText: string) => {
    return innerText.replace(codeBlockRegex, (match, p1) => {
        const language = getLanguage(match);
        const matchCode = removeLanguage(match);
        const languageCode = matchCode.replace(codeBlockRegex, (match, p1) => { return p1; });
        const code = hljs.highlight(languageCode, { language: language ? language : 'javascript' }).value;
        return `<pre class="jy-pre"><span class="code-language">${language}</span><button class="code-copy" title="复制"><i class="bi bi-clipboard"></i></button><div class="code-template"><code class="hljs language-javascript">${code}</code></div></pre>`;
    });
}

/**
 * 获取语言
 * @param text 代码
 * @returns 
 */
const getLanguage = (text: string) => {
    const pattern = /^```(\S+)$/m;
    const match = text.match(pattern);
    if (match) {
        return match[1];
    } else {
        return "";
    }
}

/**
 * 剔除语言后的内容
 * @param text 代码
 * @returns 
 */
const removeLanguage = (text: string) => {
    const pattern = /^```(\S+)\n/m;
    return text.replace(pattern, '```');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///删除元素

/**
 * 删除填充
 */
export const removeEmpty = () => {
    const oldEmpty = document.querySelector(".chat-exchange-empty");
    oldEmpty?.parentNode?.removeChild(oldEmpty)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///创建自定义组件

const createJyB = (className: string, func: EventListenerOrEventListenerObject) => {
    const jyButton = createButton(`jy-button ${className}`);
    const sp = createSpan("");
    const i = createI("bi bi-arrow-counterclockwise");
    sp.append(i);
    jyButton.append(sp)
    jyButton.addEventListener('click', func)
    return jyButton;
}

const createJyCode = (language: string) => {
    const jyCode = createDiv("jy-code");
    return jyCode;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///创建标签元素

/**
 * 创建DIV标签
 * @param className 类名
 * @returns 
 */
const createDiv = (className: string, innerText?: string) => {
    const div = document.createElement("div");
    div.className = className;
    if (innerText) {
        div.innerText = innerText;
    }
    return div;
}

/**
 * 创建IMG标签
 * @param type LOGO类型
 * @returns 
 */
const createImg = (type: LogoType) => {
    const img = document.createElement("img");
    img.src = switchLogo(type);
    return img;
}

/**
 * 创建P标签
 * @param className 类名
 * @param innerText 文本内容
 * @returns 
 */
const createP = (className: string, innerText: string) => {
    const p = document.createElement("p");
    p.className = className;
    p.innerText = innerText;
    return p;
}

const createSpan = (className: string) => {
    const sp = document.createElement("span");
    sp.className = className;
    return sp;
}

const createButton = (className: string) => {
    const b = document.createElement("button");
    b.className = className;
    return b;
}

const createI = (className: string) => {
    const i = document.createElement("i");
    i.className = className;
    return i;
}