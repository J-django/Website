import type { RouteRecordRaw, RouteMeta } from "vue-router";
const Layout = () => import("@/layout/index.vue")

const Component: Array<RouteRecordRaw> = [
  {
    name: "Component",
    path: "/component",
    component: () => import("@/layout/document.vue"),
    redirect: "/component/button",
    meta: <RouteMeta>{
      title: "Components",
      keepAlive: false,
      hasCurtain: true,
      hasFooter: false,
      hasNav: true,
      hasSidebar: true,
    },
    children: [
      {
        name: "Component-Button",
        path: "/component/button",
        component: () => import("@/pages/component/dj-button.vue"),
        meta: <RouteMeta>{
          title: "Button 按钮",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Link",
        path: "/component/link",
        component: () => import("@/pages/component/dj-link.vue"),
        meta: <RouteMeta>{
          title: "Link 链接",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Input",
        path: "/component/input",
        component: () => import("@/pages/component/dj-input.vue"),
        meta: <RouteMeta>{
          title: "Input 输入框",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Textarea",
        path: "/component/Textarea",
        component: () => import("@/pages/component/dj-textarea.vue"),
        meta: <RouteMeta>{
          title: "Textarea 文本域",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Card",
        path: "/component/card",
        component: () => import("@/pages/component/dj-card.vue"),
        meta: <RouteMeta>{
          title: "Card 卡片",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Divider",
        path: "/component/divider",
        component: () => import("@/pages/component/dj-divider.vue"),
        meta: <RouteMeta>{
          title: "Divider 分割线",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Accordion",
        path: "/component/accordion",
        component: () => import("@/pages/component/dj-accordion.vue"),
        meta: <RouteMeta>{
          title: "Accordion 手风琴",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Audio",
        path: "/component/audio",
        component: () => import("@/pages/component/dj-audio.vue"),
        meta: <RouteMeta>{
          title: "Audio 音频播放器",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Video",
        path: "/component/video",
        component: () => import("@/pages/component/dj-video.vue"),
        meta: <RouteMeta>{
          title: "Video 视频播放器",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Segmented",
        path: "/component/segmented",
        component: () => import("@/pages/component/dj-segmented.vue"),
        meta: <RouteMeta>{
          title: "Segmented 分段器",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Switch",
        path: "/component/switch",
        component: () => import("@/pages/component/dj-switch.vue"),
        meta: <RouteMeta>{
          title: "Switch 切换",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Dialog",
        path: "/component/dialog",
        component: () => import("@/pages/component/dj-dialog.vue"),
        meta: <RouteMeta>{
          title: "Dialog 对话框",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Slider",
        path: "/component/slider",
        component: () => import("@/pages/component/dj-slider.vue"),
        meta: <RouteMeta>{
          title: "Slider 滑块",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-Watermark",
        path: "/component/watermark",
        component: () => import("@/pages/component/dj-watermark.vue"),
        meta: <RouteMeta>{
          title: "Watermark 水印",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Component-scrollbar",
        path: "/component/scrollbar",
        component: () => import("@/pages/component/dj-scrollbar.vue"),
        meta: <RouteMeta>{
          title: "Scrollbar 滚动条",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
    ],
  },
];

const Guide: Array<RouteRecordRaw> = [
  {
    name: "Guide",
    path: "/guide",
    component: () => import("@/layout/document.vue"),
    redirect: "/guide/installation",
    meta: <RouteMeta>{
      title: "Guide",
      keepAlive: false,
      hasCurtain: true,
      hasFooter: false,
      hasNav: true,
      hasSidebar: true,
    },
    children: [
      {
        name: "Installation",
        path: "/guide/installation",
        component: () => import("@/pages/guide/installation.vue"),
        meta: <RouteMeta>{
          title: "Installation 安装",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Quickstart",
        path: "/guide/quickstart",
        component: () => import("@/pages/guide/quickstart.vue"),
        meta: <RouteMeta>{
          title: "Quickstart 快速上手",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
    ]
  }
];

export const AsideBar: Array<RouteRecordRaw> = [
  ...Guide,
  ...Component,
  {
    name: "Examples",
    path: "/examples",
    component: () => import("@/pages/examples/index.vue"),
    meta: <RouteMeta>{
      title: "Examples",
      keepAlive: false,
      hasCurtain: false,
      hasFooter: true,
      hasNav: false,
      hasSidebar: false,
    },
  },
  {
    name: "Blog",
    path: "/blog",
    component: () => import("@/pages/blog/index.vue"),
    meta: <RouteMeta>{
      title: "Blog",
      keepAlive: false,
      hasCurtain: false,
      hasFooter: true,
      hasNav: false,
      hasSidebar: false,
    },
  },
]

export const routes: Array<RouteRecordRaw> = [
  {
    name: "Layout",
    path: "/layout",
    component: Layout,
    meta: <RouteMeta>{
      title: "容器",
      keepAlive: false,
      hasCurtain: false,
      hasFooter: false,
      hasNav: false,
      hasSidebar: false,
    },
    children: [
      {
        name: "Index",
        path: "/",
        component: () => import("@/pages/index.vue"),
        meta: <RouteMeta>{
          title: "主页",
          keepAlive: false,
          hasCurtain: false,
          hasFooter: true,
          hasNav: false,
          hasSidebar: false,
        },
      }, ...AsideBar
    ]
  },
];
