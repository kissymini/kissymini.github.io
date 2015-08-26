
KISSY MINI 是 [KISSY](http://docs.kissyui.com) 的一个分支项目，2014 年初 release 第一版并投入使用。目标是建设一个 KISSY 的面向移动端的 MINI 版，具有完整的功能，并保持使用简单。同时在事件处理、模块化和面向对象方面依然秉承了 KISSY 的优良基因。目前已经在阿里的许多场景中平稳运行。 

KISSY MINI 与 KISSY 在企业级研发和模块开发上遵照类似的设计原则，此外没有其他关系，因此** KISSY MINI 是一个全新的 js 库**。

<img src="https://gw.alicdn.com/tps/TB1N6CAJXXXXXXJXpXXXXXXXXXX-524-392.png" width="150" />

<span class="gitter">[![](https://badge.fury.io/bo/kissymini.svg)](http://badge.fury.io/bo/kissymini)
[![](https://img.shields.io/github/tag/kissymini/kissymini.github.io.svg)](http://github.com/kissymini/kissymini.github.io)
![](https://img.shields.io/badge/kissymini-available-green.svg?style=flat-square)
[![](/images/gitter.svg)](https://gitter.im/kissymini?utm_source=share-link&utm_medium=link&utm_campaign=share-link)</span>

KISSY MINI 对外提供一个种子文件（`v 1.x` 及后续版本）

- **dist**：[mini-min.js](http://g.alicdn.com/kissy/m/1.0.0/mini-min.js) （**gizp 压缩后为 17k**）
- **源码**：[mini.js](http://g.alicdn.com/kissy/m/1.0.0/mini.js)


KISSY MINI 所包含的核心模块：

| 模块名                 | 体积      | 说明			|
|:--------------------:|:--------------------:|:--------------------:|
| core             | **2.9k** | 构造 KISSY 全局对象  |
| node			| **4.2k** |Node模块，主要涵盖 DOM 操作的封装   |
| io		| **2.1k** |Ajax模块   |
| event			| **2.1k** |Event 模块，提供事件的封装，包括自定义事件   |
| loader			| **4.6k**  |简版的 loader 模块	|
| anim			| **1k**			|动画模块|
| touch 			| **2.1k**			|手势事件模块，包括常用的触屏事件，解决 tap 穿透问题|

这些模块看过之后可以立即忘掉他们，这些模块会默认被初始化好，而且绝大部分功能可通过 `KISSY` 全局对象来访问，比如 `KISSY.Node`、`KISSY.Event`、`KISSY.IO` 等，注意 `KISSY.Anim`、 `KISSY.Touch` 是不存在的。通常情况下，我们更推荐你使用基于 DOM 的链式调用。在需要特殊的面向对象编程时（比如使用自定义事件(KISSY.Event.Target)或者类扩充(KISSY.augment)时），需要通过全局对象`KISSY`。

- API 文档入口：[core](./docs/core.html)，[node](./docs/node.html)，[io](./docs/io.html)，[event](./docs/event.html)，[loader](./docs/loader.html)，[anim](./docs/anim.html)，[touch](./docs/touch.html)
- 测试用例入口：[node.html](./tests/node.html)、[io.html](./tests/io.html)、[loader.html](./tests/loader.html)、[event.html](./tests/event.html)

### 种子文件

获取最新的种子文件 

- <a href="http://g.alicdn.com/kissy/m/1.0.0/mini-min.js" style="background:none" >![](https://img.shields.io/badge/kissy%20mini-1.0.0-green.svg)</a> 新版 
- <a href="http://g.alicdn.com/kissy/m/0.3.11/mini-full-min.js" style="background:none">![](https://img.shields.io/badge/kissy%20mini-0.3.11-orange.svg)</a> 旧版

注意，KISSY MINI 0.x 版本对外提供三个文件，分别是[mini.js](http://g.alicdn.com/kissy/m/0.3.11/mini-min.js)、[mini-full.js](http://g.alicdn.com/kissy/m/0.3.11/mini-full-min.js) 和 [mini-all.js](http://g.alicdn.com/kissy/m/0.3.11/mini-all-min.js)。这和 v1.x 不同。

### 开始使用

直接引用线上地址

	<script src="http://g.alicdn.com/kissy/m/1.0.0/mini-min.js"></script>

或者通过 bower 安装到本地

	bower install kissymini

启动：DOMReady 后弹出 Hello World!

	KISSY.ready(function(S){
	    alert('Hello World!');
	});

DOM操作：获取一个`className`叫`continue`的`button`，并将它的内容改为"Hello Kissy"。

	var $ = KISSY.all;
	$('button.continue').html('Hello Kissy!');

Ajax 操作：

	var S = KISSY;
	S.IO.get("test.php",function(d){
		alert(d);
	});

说明：Loader 模块是 Kissy Mini 重要的核心模块，负责在`KISSY.use('模块名')`时自动载入外部模块，模块规范符合 [Kissy 标准的模块规范 KMD](http://docs.kissyui.com/1.4/docs/html/guideline/kmd.html)。v1.x 的后续版本会对渐渐放弃对 KMD 的完全兼容（即不鼓励`KISSY.add(function(){},{requires:['a','b']})`这种载入依赖的写法），而更加强调对 CMD 语法的支持。因此我们推荐模块开发写法采用 CMD 格式。并且无需通过`KISSY.use()`来载入内置模块了。引用种子文件后内置模块自然生效可用。

同时 Loader 在 v1.0 之后就不在支持 Combo 了，因为出于简化场景的需要，我们更倾向于用离线包给前端页面提速，因此 KISSY MINI 不再优先支持载入线上资源文件的场景。Loader 在满足基本规范的前提下，会在 v1.x 的后续版本中逐步简化。

1）定义模块

这里采用 CMD 写法来引入外部依赖

``` javascript
// ./index.js
KISSY.add(function(S, require, exports, module) {
	// 通过 require 引入外部模块
	var myMode = require('./my-mode');
    function Mod() {}
    return Mod;
});
```

2）使用模块

如果 HTML 页面和js代码在同一台服务器上，则可以直接用相对路径来访问js

``` javascript
KISSY.use('./index', function(Mod) {
    var data = new Mod();
});

```

如果不在同一台服务器上，则需要配置“包”

3）包配置

``` javascript
KISSY.config({
    packages: [{
        name    : 'pkg1',
        path    : './module',
    }]
});
```

### 构建工具

KISSY MINI 的社区在 v1.0 及后续版本中将不再集中（[KISSY Gallery](http://kpm.taobao.net/)）管理，KISSY MINI 的自定义模块直接依赖于 git 仓库，通过 bower 来约束代码之间的依赖关系。这样，就剔除了 KISSY MINI 组件代码部署上线这个操作，这极大简化了 KISSY MINI 模块研发规范。因此需要注意，KISSY MINI 从 v1.0 版本开始，组件模块代码无法直接和 KISSY 6.x 兼容，但迁移成本其实非常小。同时，我们推荐使用 [MPI 脚手架](http://github.com/jayli/generator-mpi)工具来生成模块代码骨架，使用 [Mask 工具](http://github.com/jayli/generator-mask)来生成项目代码骨架。

1）**脚手架**：

1. [项目脚手架工具 Mask](http://github.com/jayli/generator-mask)：KISSY MINI 项目默认用 Grunt 来构建
1. [模块脚手架工具 MPI](http://github.com/jayli/generator-mpi)：模块无需构建，通过 bower 来管理依赖，通过 git 来存储

<img src="https://gw.alicdn.com/tps/TB10xPGJXXXXXb0XFXXXXXXXXXX-800-602.png" width="400" />

注意，KISSY MINI 的模块代码无需发布到 npm，这样我们就不用人肉同步 git 仓库的代码版本和 npm 仓库代码版本的差异，你也可以轻松构建自己的代码仓库。

2）**编译构建**：KISSY MINI 的代码编译工具

- Grunt：[grunt-kmc](https://github.com/daxingplay/grunt-kmc) 或者 [grunt-kmb](https://www.npmjs.com/package/grunt-kmb)
- Gulp：[gulp-kmc](https://www.npmjs.com/package/gulp-kmc)。

以[grunt-kmc](https://github.com/daxingplay/grunt-kmc)为例，示例代码请参照[combo-one-file](https://github.com/daxingplay/grunt-kmc/tree/master/example/combo-one-file)，[视频演示](http://asciinema.org/a/6732)。

### 示例 Demo

- Demo：[KISSY全局对象挂载的方法](./demo/api/kissy-api.html)、[事件委托DEMO](./demo/dump/delegate.html)、[给DOM添加新事件](./demo/dump/fx.html)、[一个小游戏](./demo/game/index.html)、[模块加载Demo](./demo/modules-loader/index.html)、[天猫超市的Demo](./demo/slide_and_lazyload/index.html)
- 组件：[Slide](http://kissygalleryteam.github.io/slide/1.3/demo/index.html)（Kiss 官方组件）、[Mini Slide](/demo/slide/index.htm)、[仿 Path 的环状菜单](/demo/ringnav/index.htm)
- 项目：[阿里旅行-景点门票 Pad 版](http://h5.m.taobao.com/trip/ticket/pad/search/index.html?ttid=703628@taobao_ipad_4.0)，[淘宝秒杀手机版](http://wapp.m.taobao.com/mseckill/index.html?host=h5.m.taobao.com)

[阿里旅行·去啊](http://h5.m.taobao.com/trip/home/index.html) 无线 Web 产品均基于 Kissy Mini。
