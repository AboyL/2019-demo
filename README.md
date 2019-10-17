提供一些demo

1. focus-scroll
怎么比较好的处理移动端webview中点击输入框聚焦的问题
文章链接
https://www.jianshu.com/p/d4a3fa0ca029


2. image-compress
1、进入到serve目录 node index.js启动服务端
2、进入到image-upload目录 yarn serve启动客户端

3. svg-circle-progress
参数说明

### progress
进度值 数字 例如0.7

### progressOption 
进度条相关参数
#### radius 内圆半径
#### strokeWidth 画笔宽度 即圆弧宽度
#### backColor 底色
#### startColor 渐变色开始值 数组 [a,b,c] 与rgb颜色对于
#### endColor 渐变色结束值 同上
#### durtion 动画时长
#### step 步数 设置越大渐变效果越好，但是会带来相应的性能损耗，默认100，一般情况下无需修改

4. image_combination
如何实现使用canvas合成两张图片,并且进行下载
(文章地址)[https://www.jianshu.com/p/010efdce8ac2]