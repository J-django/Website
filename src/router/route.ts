import type { RouteRecordRaw, RouteMeta } from "vue-router";
const Layout = () => import("@/layout/index.vue")

export const Guide: Array<RouteRecordRaw> = [
  {
    name: "Guide",
    path: "/guide",
    component: () => import("@/pages/guide/view.vue"),
    redirect: "/guide/card",
    meta: <RouteMeta>{
      title: "文档",
      keepAlive: false,
      hasCurtain: true,
      hasFooter: false,
      hasNav: true,
      hasSidebar: true,
    },
    children: [
      {
        name: "Guide-Button",
        path: "/guide/button",
        component: () => import("@/pages/guide/guide-button.vue"),
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
        name: "Guide-Input",
        path: "/guide/input",
        component: () => import("@/pages/guide/guide-input.vue"),
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
        name: "Guide-Card",
        path: "/guide/card",
        component: () => import("@/pages/guide/guide-card.vue"),
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
        name: "Guide-Loading",
        path: "/guide/loading",
        component: () => import("@/pages/guide/guide-loading.vue"),
        meta: <RouteMeta>{
          title: "Loading 加载",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Guide-Select",
        path: "/guide/select",
        component: () => import("@/pages/guide/guide-select.vue"),
        meta: <RouteMeta>{
          title: "Select 选择器",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Guide-Divider",
        path: "/guide/divider",
        component: () => import("@/pages/guide/guide-divider.vue"),
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
        name: "Guide-Draggable",
        path: "/guide/draggable",
        component: () => import("@/pages/guide/guide-draggable.vue"),
        meta: <RouteMeta>{
          title: "Draggable 拖放",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Guide-Accordion",
        path: "/guide/accordion",
        component: () => import("@/pages/guide/guide-accordion.vue"),
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
        name: "Guide-VideoPlayer",
        path: "/guide/videoPlayer",
        component: () => import("@/pages/guide/guide-videoPlayer.vue"),
        meta: <RouteMeta>{
          title: "VideoPlayer 视频播放器",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
      {
        name: "Guide-AudioPlayer",
        path: "/guide/audioPlayer",
        component: () => import("@/pages/guide/guide-audioPlayer.vue"),
        meta: <RouteMeta>{
          title: "AudioPlayer 音频播放器",
          keepAlive: false,
          hasCurtain: true,
          hasFooter: false,
          hasNav: true,
          hasSidebar: true,
        },
      },
    ],
  }
];

export const AsideBar: Array<RouteRecordRaw> = [
  ...Guide,
  // {
  //   name: "DifficultyAnalysis",
  //   path: "/difficultyAnalysis",
  //   component: () => import("@/pages/difficultyAnalysis/index.vue"),
  //   meta: <RouteMeta>{
  //     title: "难点",
  //     keepAlive: false,
  //     hasCurtain: true,
  //     hasFooter: false,
  //     hasNav: true,
  //     hasSidebar: true,
  //   },
  // },
  {
    name: "Examples",
    path: "/examples",
    component: () => import("@/pages/examples/index.vue"),
    meta: <RouteMeta>{
      title: "示例",
      keepAlive: false,
      hasCurtain: false,
      hasFooter: true,
      hasNav: false,
      hasSidebar: false,
    },
  }, {
    name: "Blog",
    path: "/blog",
    component: () => import("@/pages/blog/index.vue"),
    meta: <RouteMeta>{
      title: "博客",
      keepAlive: false,
      hasCurtain: false,
      hasFooter: true,
      hasNav: false,
      hasSidebar: false,
    },
  }, {
    name: "Feedback",
    path: "/feedback",
    component: () => import("@/pages/feedback/index.vue"),
    meta: <RouteMeta>{
      title: "反馈",
      keepAlive: false,
      hasCurtain: false,
      hasFooter: true,
      hasNav: false,
      hasSidebar: false,
    }
  }
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
  {
    name: "ChatGPT",
    path: "/chat",
    component: () => import("@/pages/chatGPT/index.vue"),
    meta: <RouteMeta>{
      title: "ChatGPT",
      keepAlive: false,
      hasCurtain: false,
      hasFooter: false,
      hasNav: false,
      hasSidebar: false,
      icon: "openAi-dark.png"
    },
  }
];
