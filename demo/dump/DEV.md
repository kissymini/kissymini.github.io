## 开发说明

将代码clone下来后，进入项目目录执行

	npm install

启动本地服务

	[sudo] grunt debug

浏览器（或手机）绑定代理`本机IP:8080`，可访问`http://g.tbcdn.cn/kissy/m/0.1.1/`下的文件

文件组织方式：

[#9](http://gitlab.alibaba-inc.com/kissy/m/issues/9)


我认为赫门设想的KISSY mini的文件结构是正确的，即：

1. 内置模块：提供在 mini 中的模块，包括 io\event\node\loader
1. 官方模块：lang、base等，直接`S.use('base')`来使用的，前提是必须依赖loader
1. Gallery组件：DPL代码依托于Gallery，但在kissy mini文档中应当有最佳实践的说明和推荐

这两个库的代码组织上可以借鉴：

1. [zeptojs](https://github.com/madrobby/zepto)
1. [GMU](http://gmu.baidu.com/doc/)

这两个库除了没有提供打包工具和loader外，代码分类其实差不多，唯独GMU 吧UI和core代码放在同一级命名空间下了，因为百度没有类似gallery的东东

是否要重定向到kissy主干去拉取兼容模块？不需要，正式发布后代码会吧我写的那个base指向去掉，过渡期间这样做主要是方便找出那些模块使用频率较高。因此，原则上kissy mini 的代码和kissy主干代码是完全相互独立，只在api规范上互通。当然这样做的大前提是kissy主干api的稳定。

kissy mini 是否需要有自己的包名？可以有，但最好不要暴露给用户。kissy mini 特点就是一切从简，官方提供的模块不应当有命名空间。关于赫门提到的模块冲突实际上可以规避，用户99%的时间内在用node\io\anim\event\base，主要的模块可用就够了。如果担心kissy主干代码依赖太深不好抽，那就我们重构好了。

依赖原则？赫门始终担心模块依赖层级深，和kissy主干代码有耦合，这个大可不必担心，kissy mini虽然也是模块管理，但原则上应当保持单层依赖，及时不是单层，也不要太多，zepto的模块代码和kissy mini core的代码也基本上做到了。所以，kissy mini 只会有一个很少（不超过50行）的alias映射表，不会出现kissy主干代码那个大的模块依赖map。

总的来说赫门提到的第二种方向，是我们需要坚持的。

base、xtemplate、lang不一定非要复制过来，暂时复制过来的目的是为了让现有项目先run起来，未来是一定需要简化掉的。

本期项目的一些预设模块列表参照这里：

<http://gitlab.alibaba-inc.com/kissy/m/raw/daily/0.1.1/example/plan.html>

除了源码外，最重要的就是kmc工具，这期我会多花些时间来搞这个。

另外，关于模板引擎，我们在无线端做了一年的项目，对[juicer](http://juicer.name)已经依赖很严重了（包括我们用juicer来写tms模板），推荐作为核心模块来，但预设的风险还无法评估，需要各位一起考虑下。
