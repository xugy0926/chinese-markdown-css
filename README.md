这是一套适合显示中文文章的CSS，适合直接使用markdown写文章的项目。

[主页](https://xugy0926.github.io/chinese-markdown-css/)

## 使用

首先在head中引用chinese-article.css

```
<link rel="stylesheet" href="./public/css/chinese-article.css"/> 
```

之后需要在文章的最外层div标签引入Class

```
<div class="chinese-article">
  //文章内容
</div>
```

如果要显示代码样式，引入下列样式

```
<link rel="stylesheet" href="./public/css/github-gist.css"/>
<script href="./public/js/highlight.pack.js"/>
<script>hljs.initHighlightingOnLoad();<script>
```

## 编译方式

如果你想fork并自定义项目，需要重新编译并生成新的 chinese-article.css 文件。

确保全局安装了gulp
```
$ npm install -g gulp
```

执行项目
```
$ npm isntall
$ gulp
```
