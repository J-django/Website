## 2024-06-13

- dj-accordion
  - 展开状态鼠标移入后 box-shadow 不对（优先级问题）
- dj-audio
  - 限制传入文件的类型（audio/mp3, audio/wav, audio/ogg, audio/aac, audio/flac, audio/aiff）
  - 组件加载动画
  - 未加载到能播放不可拖动进度
- dj-video
  - 限制传入文件的类型（video/mp4, video/webm, video/ogg, video/x-msvideo, video/x-matroska, video/quicktime, video/x-ms-wmv）
  - 组件加载动画
  - 未加载到能播放不可拖动进度条和点击屏幕播放
  - ios 移动端播放全屏均不可用（以测试情况下），安卓还不清楚
- dj-divider
  - 实现更多样式，
  - 比如文字靠左、文字靠左偏移多少
  - 文字靠右、文字靠右偏移多少
- dj-card
  - align 属性值 right 无效，猜测是样式设置问题
