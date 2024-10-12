# 额外语法

除了基础的markdown语法以外，本手册通过扩展插件与自定义css等方式实现了一些额外扩展语法，以下对其进行介绍，以便于各贡献者进行编辑：

!!! warning "注意"

    此处所列语法可能不受其他支持 markdown 页面的支持，请谨慎将此页面语法用于他处。

## ^^下划线^^

要使用 ^^下划线^^ 语法，请于文本两端各加入两个乘方符号`^^`，例如：

`^^文本^^`

其效果如下：

^^文本^^

## ~~删除线~~

要使用 ~~删除线~~ 语法，请于文本两端各加入两个浪线`~~`，例如：

`~~文本~~`

其效果如下：

~~文本~~

## 上^标^

要使用 ^上标^ 语法，请于文本两端各加入一个乘方符号`^`，例如：

`底数^指数^`

其效果如下：

底数^指数^

## 下~标~

要使用 ~下标~ 语法，请于文本两端各加入一个浪线`~`，例如：

`CuSO~4~`

其效果如下：

CuSO~4~

## 黑幕

要使用 <span class="heimu" title="这个是黑幕哦OvO">黑幕</span> 语法，请参考如下例子：

`<span class="heimu" title="此处不是文本">此处为文本</span>`

其效果如下：

<span class="heimu" title="此处不是文本">此处为文本</span>

## 注释

要使用注释语法，请参考如下例子

```markdown
??? note "此处为标题"

    一段话

    另一段话
```

其效果如下：

??? tip "此处为标题"

    一段话

    另一段话

若不想注释被折叠，请在`???`后边加上一个加号`+`，例如：

```markdown
???+ note "此处为标题"

    一段话
```

其效果如下：

???+ note "此处为标题"

    一段话

其中`tip`与`note`处决定了注释的图标，可选用的类型有`note`,  `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`。

对于更完整的使用方法，请参考[Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/?h=admonition)页面。

## 数学公式

请使用 $\LaTeX$ 语法，并在其两侧各加上一个美元符号`$`。

例如`$e^{ix}=\cos x+i\sin x$`其效果为 $e^{ix}=\cos x+i\sin x$

若要使公式独占一行并置于中间，请将公式置于单独一行，并在公式上下两行各加上两个美元符号`$$`

例如
```
$$
\nabla\cdot\vec{E}=\frac{\rho_e}{\epsilon_0}
$$
$$
\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}
$$
$$
\nabla\cdot\vec{B}=0
$$
$$
\nabla\times\vec{B}=\epsilon_0\mu_0\frac{\partial \vec{E}}{\partial t}+\mu_0\vec{j}
$$
```
效果为
$$
\nabla\cdot\vec{E}=\frac{\rho_e}{\epsilon_0}
$$
$$
\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}
$$
$$
\nabla\cdot\vec{B}=0
$$
$$
\nabla\times\vec{B}=\epsilon_0\mu_0\frac{\partial \vec{E}}{\partial t}+\mu_0\vec{j}
$$