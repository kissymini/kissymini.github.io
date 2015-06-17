


[Kissy](http://docs.kissyui.com/) 是一款跨终端、模块化、高性能、使用简单的 JavaScript 框架。Kissy Mini 是其移动端版本，专门为移动端 Web 开发打造，并做了大量的性能优化和可靠性测试，功能完整、体积小巧，稳定可靠。特别是在事件处理、异步模块加载、面向对象的支持方面表现出众。目前已经应用在阿里许多场景中。他的优势是：

- **体积小**：gizp 后，文件大小约 8 ~ 13k。
- **无缝迁移**：与 Kissy 遵循相同的模块规范，两者之间可轻易切换。
- **社区支持**：与 KISSY 共享社区，你可以使用来自社区的优质组件和工具，也可以向社区贡献自己的作品！

<span class="gitter">[![](/images/gitter.svg)](https://gitter.im/kissymini?utm_source=share-link&utm_medium=link&utm_campaign=share-link)</span>

### 种子文件

获取最新的种子文件 [0.3.11](http://g.alicdn.com/kissy/m/0.3.11/mini-min.js)

Kissy Mini 对外提供了三个版本，以适用不同的使用场景：


|类型 | 文件名 | 文件大小 | 包含模块 | 适用场景 |
|:----:|:----:|:----:|:----:|:----:|
| 全量版 | mini-all.js | 34k（gzip）|node，io，event，loader，base，ua，uri，<br />anim，touch，lang，juicer，form| 官方仓库所有模块 |
| 推荐版 | mini-full.js | 13k（gzip）| node，io，event，Loader | 核心模块 + Loader |
| 精简版 | mini.js | 8k（gzip）| node，io，event，loader | 仅核心模块 |

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