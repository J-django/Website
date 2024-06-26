## 2024-06-13

- dj-accordion
  - 展开状态鼠标移入后 box-shadow 不对（优先级问题）✅︎
- dj-audio
  - 限制传入文件的类型（audio/mp3, audio/wav, audio/ogg, audio/aac, audio/flac, audio/aiff）
  - 组件加载动画 ✅︎
  - 未加载到能播放不可拖动进度
- dj-video
  - 限制传入文件的类型（video/mp4, video/webm, video/ogg, video/x-msvideo, video/x-matroska, video/quicktime, video/x-ms-wmv）
  - 组件加载动画 ✅︎
  - 未加载到能播放不可拖动进度条和点击屏幕播放
  - ios 移动端播放全屏均不可用（以测试情况下），安卓还不清楚
- dj-divider
  - 比如文字靠左、文字靠左偏移多少 ✅︎
  - 文字靠右、文字靠右偏移多少 ✅︎
- dj-card
  - align 属性值 right 无效，猜测是样式设置问题 ✅︎
- dj-textarea
  - prop 提供参数设置高度自动、最高高度、最小高度

## 2024-06-17

- dj-textarea
  - transition 没有设置 opacity ✅︎
- dj-accordion
  - 禁用没有动画效果 ✅︎
  - flex 布局下，默认不能全屏
- dj-card
  - flex 布局下，默认不能全屏

## 2024-06-21

- dj-input
  - icon 图标颜色不对 ✅︎
- dj-segmented
  - 要能够全铺 ✅︎
- dj-card
  - 加入重像属性，可设置是否显示 ✅︎
- dj-button
  - 新增 plain 属性，设置边框镂空样式 ✅︎

## 2024-06-23

- dj-segmented
  - 还原 padding 样式为 padding: rem(4px);
  - 移除 dj-segmented-indicator 样式 left: rem(-.5px);
  - dj-segmented\_\_wrapeer 样式设置 100%
- dj-card
- 重像属性 ghosting 失效，需再进行优化

# 以后每个版本先发测试，测试完成没问题后再发正式版！！！！！

## 2024-06-26

- dj-switch
  - 禁用 opacity 过渡动画没有
  - 多个 dj-switch 设置 margin-left
  - 插槽名 UnChecked 改为小写开头 unChecked
- dj-card
  - 去除 ghosting 属性及其样式
