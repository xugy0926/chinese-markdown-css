这是一套适合显示中文文章的CSS，适合直接使用markdown写文章的项目。

样式参考主页。

## 使用

首先在head中引用chinese-article.css

```
<link rel="stylesheet" href="../src/static/css/chinese-article.css"/> 
```

之后需要在文章的最外层div标签引入Class

```
<div class="chinese-article">
  //文章内容
</div>
```

如果要显示代码样式，引入下列样式

```
<link rel="stylesheet" href="../src/static/css/github-gist.css"/>
<script href="../src/static/js/highlight.pack.js"/>
<script>hljs.initHighlightingOnLoad();<script>
```

## 编译方式

确保全局安装了gulp
```
$ npm install -g gulp
```

执行项目
```
$ npm isntall
$ gulp
```