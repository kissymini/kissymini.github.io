


[Kissy](http://docs.kissyui.com/) 是一款跨终端、模块化、高性能、使用简单的 JavaScript 框架。Kissy Mini 是其移动端版本，专门为移动端 Web 开发打造，我们做了大量的性能优化和可靠性测试，功能完整、体积小巧，稳定可靠。特别是在事件处理、异步模块加载、面向对象的支持方面表现出众。目前已经应用在阿里许多场景中。

<span class="gitter">[![](/images/gitter.svg)](https://gitter.im/kissymini?utm_source=share-link&utm_medium=link&utm_campaign=share-link)</span>

v1.x 及后续版本，KISSY MINI 对外提供一个种子文件

- **dist**：[mini-min.js](http://g.alicdn.com/kissy/m/1.0.0/mini-min.js) （**gizp 压缩后为 17k**）
- **源码**：[min.js](http://g.alicdn.com/kissy/m/1.0.0/mini.js)

KISSY MINI 的社区在 v1.0 及后续版本中将不再集中（[KISSY Gallery](http://kpm.taobao.net/)）管理，KISSY MINI 的自定义模块直接依赖于 git 仓库，通过 bower 来约束代码之间的依赖关系。这样，就剔除了 KISSY MINI 组件代码部署上线这个操作，这极大简化了 KISSY MINI 模块研发规范。因此需要注意，KISSY MINI 从 v1.0 版本开始，组件模块代码无法直接和 KISSY 6.x 兼容，但迁移成本其实非常小。同时，我们推荐使用 [MPI 脚手架](http://github.com/jayli/generator-mpi)工具来生成模块代码骨架。

KISSY MINI 所包含的核心模块：

| 模块名                 | 体积      | 说明			|
|:--------------------:|:--------------------:|:--------------------:|
| core             | **2.9k** | 构造 KISSY 全局对象  |
| node			| **4.2k** |Node模块   |
| io		| **2.1k** |Ajax模块   |
| event			| **2.1k** |Event 模块   |
| loader			| **4.6k**  |简版的 loader 模块	|
| anim			| **1k**			|动画模块   |
| touch 			| **2.1k**			|手势事件模块|

这些模块中的大部分通过 `KISSY` 全局对象来访问，比如`KISSY.Node`、`KISSY.Event`、`KISSY.IO`等，注意`KISSY.Anim`是不存在的

API 文档入口：[core](./api/core.html)，[node](./api/node.html)，[io](./api/io.html)，[event](./api/event.html)，[loader](./api/loader.html)，[anim](./api/anim.html)，[touch](./api/touch.html)

### 种子文件

获取最新的种子文件 

- [![](https://img.shields.io/badge/kissy%20mini-1.0.0-green.svg)](http://g.alicdn.com/kissy/m/1.0.0/mini-min.js) 新版
- [![](https://img.shields.io/badge/kissy%20mini-0.3.11-orange.svg)](http://g.alicdn.com/kissy/m/0.3.11/mini-full-min.js) 旧版

注意，KISSY MINI 0.x 版本对外提供三个文件，分别是[mini.js](http://g.alicdn.com/kissy/m/0.3.11/mini-min.js)、[mini-full.js](http://g.alicdn.com/kissy/m/0.3.11/mini-full-min.js) 和 [mini-all.js](http://g.alicdn.com/kissy/m/0.3.11/mini-all-min.js)。

### 开始使用

脚本引用

	<script src="http://g.alicdn.com/kissy/m/0.3.11/mini-min.js"></script>

启动：Hello World!

	KISSY.ready(function(S){
	    alert('Hello World!');
	});

DOM操作：获取一个`className`叫`continue`的`button`，并将它的内容改为"Hello Kissy"。

	KISSY.use('node',function(S){
	    S.one('button.continue').html('Hello Kissy!');
	});

Ajax 操作：

	KISSY.use('io',function(S){
		S.IO.get("test.php",function(d){
		    alert(d);
		});
	});

说明：Loader 模块是 Kissy Mini 重要的核心模块，负责在`KISSY.use('模块名')`时自动载入外部模块，模块规范符合 [Kissy 标准的模块规范 KMD](http://docs.kissyui.com/1.4/docs/html/guideline/kmd.html)。比如几个和模块定义相关的代码片段：

1）定义模块

``` javascript
KISSY.add('pkg1/index', function(S, Node) {
    function Mod() {}
    return Mod;
}, {requires: [
    'node'
]});
```

2）使用模块

``` javascript
KISSY.use('pkg1/index', function(Mod) {
    var data = new Mod();
});

```

3）包配置

``` javascript
KISSY.config({
    packages: [{
        name    : 'pkg1',
        path    : './module',
        charset : 'utf-8'
    }]
});
```

### 示例 Demo

- 组件：[Slide](http://kissygalleryteam.github.io/slide/1.3/demo/index.html)（Kiss 官方组件）、[Mini Slide](/demo/slide/index.htm)、[仿 Path 的环状菜单](/demo/ringnav/index.htm)
- 项目：[阿里旅行-景点门票 Pad 版](http://h5.m.taobao.com/trip/ticket/pad/search/index.html?ttid=703628@taobao_ipad_4.0)，[淘宝秒杀手机版](http://wapp.m.taobao.com/mseckill/index.html?host=h5.m.taobao.com)

[阿里旅行·去啊](http://h5.m.taobao.com/trip/home/index.html) 无线 Web 产品均基于 Kissy Mini 搭建。
