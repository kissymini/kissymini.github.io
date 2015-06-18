### 为什么要做 Kissy Mini？

2013 年初 [Kissy](http://docs.kissyui.com/) 日益不满足阿里系产品无线 Allin 的大趋势，于是我们立项开始研发专门针对无线端的 Kissy Mini 项目，力求做到：

* 更小的体积
* 更少的请求数 （打包成一个文件，或直接内嵌）
* 适用于移动端的组件库
* 性能的进一步优化

当时业界比较流行的是 ZeptoJS，自建 JavaScript 基础类库的考虑是：

1. 阿里系无线端产品从 PC 切换到无线需要一个向下兼容的 JavaScript 轻类库，ZeptoJS 和 Kissy 多有不兼容
1. ZeptoJS 在面向对象编程（Base）和模块管理（KMD）极其缺失
1. ZeptoJS 的触屏事件 bug 较多，与其不断打补丁，不如彻底重构掉
1. 能够继承并发展 Kissy 生态圈建设

### 如何加入我们？

直接 fork 我们的 [source code](http://gitlab.alibaba-inc.com/kissy/m)，并给我们提交 Pull Request（目前仅支持内网访问）

意见反馈和[Bug 提交](http://gitlab.alibaba-inc.com/kissy/m/issues)（目前仅支持内网访问）

### 仓库说明

- 本站仓库（http://m.kissyui.com）[地址](https://github.com/kissymini/kissymini.github.io)
- [源码仓库](http://gitlab.alibaba-inc.com/kissy/m)，API 文档通过`grunt`编译源码仓库生成到源码的`docs`目录中，对`kissy/m`仓库的 push 操作会自动同步 API 文档到官网（http://m.kissyui.com）。（同步的 Hook 脚本[在这里](http://gitlab.alibaba-inc.com/trip-tools/kissy-mini-site)，部署在内网的开发机上）
