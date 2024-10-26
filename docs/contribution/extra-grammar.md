# 额外语法

???+ warning "施工中"

    本页面尚未编辑完成

除了基础的markdown语法以外，本手册通过扩展插件与自定义css等方式实现了一些额外扩展语法，以下对其进行介绍，以便于各贡献者进行编辑：

!!! warning "注意"

    此处所列语法可能不受其他支持 markdown 编辑器的支持，请谨慎将此页面语法用于他处。

## 列表

## 脚注

## 代码块

如果要使用大段代码，请在代码块之前和之后的行上使用三个反引号 ` ``` ` 或三个波浪号 `~~~`，代码块应与正文使用一个空行间隔开，可以在行前加入语言标注进行语法高亮，例如

~~~
```cpp
#define _CRT_SECURE_NO_WARNINGS
#include <bits/stdc++.h> 
using namespace std;

void solve(void)
{
    cout << "hello, world" << endl;
    return;
}

int main(void)
{
    ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
    unsigned long long T = 1;
    // cin >> T;
    while (T--)
        solve();
    return 0;
}
```
~~~

其效果为

```cpp
#define _CRT_SECURE_NO_WARNINGS
#include <bits/stdc++.h> 
using namespace std;

void solve(void)
{
    cout << "hello, world" << endl;
    return;
}

int main(void)
{
    ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
    unsigned long long T = 1;
    // cin >> T;
    while (T--)
        solve();
    return 0;
}
```

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

若不想注释被折叠，请使用`!!!`替代`???`，例如：

```markdown
!!! note "此处为标题"

    一段话
```

其效果如下：

!!! note "此处为标题"

    一段话

其中`tip`与`note`处决定了注释的图标，可选用的类型有`note`,  `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`。

对于更完整的使用方法，请参考[Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/?h=admonition)页面。

## 数学公式

> 本手册采用 MathJax 插件

请使用 $\LaTeX$ 语法，并在其两侧各加上一个美元符号`$`。

例如

`欧拉公式：$e^{ix}=\cos x+i\sin x$`

其效果为

欧拉公式：$e^{ix}=\cos x+i\sin x$

若要使公式独占一行并置于中间，请单独将公式置于一行，并在其上下两行各加一行，每行由两个美元符号`$$`组成，并与其他内容之间至少保持一行空行。

例如
```latex
麦克斯韦方程组：

$$
\begin{equation*}
    \begin{cases}
        \nabla\cdot\vec{E}=\frac{\rho_e}{\epsilon_0} \\
        \nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t} \\
        \nabla\cdot\vec{B}=0 \\
        \nabla\times\vec{B}=\epsilon_0\mu_0\frac{\partial \vec{E}}{\partial t}+\mu_0\vec{j}
    \end{cases}
\end{equation*}
$$

```
效果为

麦克斯韦方程组：

$$
\begin{equation*}
    \begin{cases}
        \nabla\cdot\vec{E}=\frac{\rho_e}{\epsilon_0} \\
        \nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t} \\
        \nabla\cdot\vec{B}=0 \\
        \nabla\times\vec{B}=\epsilon_0\mu_0\frac{\partial \vec{E}}{\partial t}+\mu_0\vec{j}
    \end{cases}
\end{equation*}
$$

对于更完整的使用方法，请参考[Math#MathJax](https://squidfunk.github.io/mkdocs-material/reference/math/?h=mathjax#mathjax)页面。