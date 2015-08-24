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

当运作一年之后（2015），KISSY MINI 在移动场景中修复了绝大多数问题，根据无线（特别是离线）场景做了更深度的定制，完善了脚手架工具，包括项目脚手架（开源的 Mask 和 闭源的 Clam）以及组件脚手架 MPI。因此，KISSY MINI 已经不仅仅是一个 js 库了，而是一整套搭建站点的架构思路，做到页面渲染速度快、稳定性可靠的高标准。一方面，我们将 KISSY MINI 和阿里业务深度绑定，同时也在不断消化引入开源社区的优秀理念，力争将 KISSY MINI 打造成一款设计开放、体系完整、使用极其方便的移动端类库解决方案。最后，阿里一线业务的大量使用极大的保障了 KISSY MINI 的质量。

KISSY MINI 体积比 KISSY 小很多，更重要的是，面向场景更加单一和聚焦（移动端 + 离线包），因此代码更新速度很快，KISSY MINI 是 KISSY 的一个分支，或许以后永远不会再合并到 KISSY 的主干里，KISSY MINI 已经是一款全新的 js 类库了。

### 如何加入我们？

阿里内网同学可直接 fork 我们的 [source code](http://gitlab.alibaba-inc.com/kissy/m)，并给我们提交 Pull Request（目前仅支持内网访问）

意见反馈和[Bug 提交](http://gitlab.alibaba-inc.com/kissy/m/issues)（目前仅支持内网访问）

### 仓库说明

- 本站仓库（<http://m.kissyui.com>）[地址](https://github.com/kissymini/kissymini.github.io)
- [源码仓库](http://gitlab.alibaba-inc.com/kissy/m)，API 文档通过`grunt`编译源码仓库生成到源码的`docs`目录中，对`kissy/m`仓库的 push 操作会自动同步 API 文档到官网（<http://m.kissyui.com>）。（同步的 Hook 脚本[在这里](http://gitlab.alibaba-inc.com/trip-tools/kissy-mini-site)，部署在内网的开发机上）
