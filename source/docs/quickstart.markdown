### **一. 简介**

**KISSY MINI** 是为移动端量身定制的前端开发框架，它对外提供了两个版本，以适用不同的使用场景：

|类型 | 文件名 | 文件大小 | 包含模块 | 适用场景 |
|:----:|:----:|:----:|:----:|:----:|
| 完整版 | mini-full.js | 13k（gzip）| Node，IO，Event，Loader，Module Manager | 动态加载模块 |
| 精简版 | mini.js | 8k（gzip）| Node，IO，Event，Module Manager | 静态引入模块 |


<br />
### **二. 引用与下载**

在开发页面时，可以这样引用 **KISSY MINI**：

``` html
// 完整版
<script src="http://g.tbcdn.cn/kissy/m/0.2.0/mini-full-min.js"></script>

// 精简版
<script src="http://g.tbcdn.cn/kissy/m/0.2.0/mini-min.js"></script>
```

你也可以从 [gitlab](http://gitlab.alibaba-inc.com/kissy/m) 上下载 **KISSY MINI** 的源码。


<br />
### **三. 如何使用**

如果你用过KISSY，那么对你而言，**KISSY MINI** 是没有学习成本的，因为它与KISSY的用法完全相同，从下列基本用法中可见一斑：

#### 1. 定义模块

``` javascript
KISSY.add('pkg1/index', function(S, Node) {
    function Mod() {}
    return Mod;
}, {requires: [
    'node'
]});
```

#### 2. 使用模块

``` javascript
KISSY.use('pkg1/index', function(Mod) {
    var data = new Mod();
});

```

#### 3. 包配置

``` javascript
KISSY.config({
    packages: [{
        name    : 'pkg1',
        path    : './module',
        charset : 'utf-8'
    }]
});
```

<br />
### **四. 创建自己的Demo**

``` html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>KISSY MINI Mobile Demo Template</title>
    <!-- 
        width=device-width：让文档的宽度与设备的宽度保持一致，且文档最大的宽度比例是1.0
        initial-scale=1：初始的缩放比例
        maximum-scale=1：允许用户缩放到的最大比例（对应还有个minimum-scale）
        user-scalable=no：不允许用户手动缩放
    -->
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
    <!-- 
        telephone=no：禁止自动将页面中的数字识别为电话号码
        address=no：禁止自动地址转为链接
        email=no：禁止自动将email转为链接
    -->
    <meta name="format-detection" content="telephone=no,address=no,email=no" />
    <!-- 强制将页面布局为一列 -->
    <meta name="mobileOptimized" content="width" />
    <!-- 申明页面是移动友好的 -->
    <meta name="handheldFriendly" content="true" />
    <!-- 允许用户使用全屏模式浏览 -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- 当用户使用全屏浏览时，将状态条设置为黑色 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <link rel="stylesheet" href="your_css_url" />
</head>
<body>
    <header>...</header>
    <!-- your content -->
    <footer>...</footer>
    <script src="http://g.tbcdn.cn/kissy/m/0.2.0/mini-full-min.js"></script>
    <script src="your_js_mods_url"></script>
    <script>
        // init mods
    </script>
</body>
</html>
```

