(window.webpackJsonp=window.webpackJsonp||[]).push([[707],{1166:function(e,a,t){"use strict";t.r(a);var s=t(56),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"加载数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载数据"}},[e._v("#")]),e._v(" 加载数据")]),e._v(" "),t("p",[e._v("之前我们使用了 "),t("code",[e._v("ls")]),e._v(", "),t("code",[e._v("ps")]),e._v(", "),t("code",[e._v("date")]),e._v(", "),t("code",[e._v("sys")]),e._v(" 来从文件系统、进程、日期时间和系统本身加载了数据。每条命令都以表的形式提供了我们能够探索到的信息。\n我们在工作时也可通过其他方法将数据加载为表。")]),e._v(" "),t("h2",{attrs:{id:"打开文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打开文件"}},[e._v("#")]),e._v(" 打开文件")]),e._v(" "),t("p",[e._v("处理数据时 Nu 最有力的工具就是 "),t("code",[e._v("open")]),e._v(" 命令。它时一个多用工具，可以在许多不同数据格式下工作。\n要明白这一点，让我们尝试来打开一个 json 文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open editors/vscode/package.json\n──────────────────┬───────────────────────────────────────────────────────────────────────────────\n name             │ lark\n description      │ Lark support for VS Code\n author           │ Lark developers\n license          │ MIT\n version          │ 1.0.0\n repository       │ [row type url]\n publisher        │ vscode\n categories       │ [table 0 rows]\n keywords         │ [table 1 rows]\n engines          │ [row vscode]\n activationEvents │ [table 1 rows]\n main             │ ./out/extension\n contributes      │ [row configuration grammars languages]\n scripts          │ [row compile postinstall test vscode:prepublish watch]\n devDependencies  │ [row @types/mocha @types/node tslint typescript vscode vscode-languageclient]\n──────────────────┴───────────────────────────────────────────────────────────────────────────────\n")])])]),t("p",[e._v("就像 "),t("code",[e._v("ls")]),e._v(' 一样，打开一个 Nu 能够理解的文件类型将给我们比文本（或字节流）更丰富的信息。\n这里我们打开了一个 JavaScript 项目的 "package.json" 文件。Nu 可以识别 JSON 文本并以表的形式返回数据。')]),e._v(" "),t("p",[e._v("如果我们想要检查这个项目的版本，可以用 "),t("code",[e._v("get")]),e._v(" 指令：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open editors/vscode/package.json | get version\n1.0.0\n")])])]),t("p",[e._v("Nu 目前支持直接从以下格式加载表数据：")]),e._v(" "),t("ul",[t("li",[e._v("json")]),e._v(" "),t("li",[e._v("yaml")]),e._v(" "),t("li",[e._v("toml")]),e._v(" "),t("li",[e._v("xml")]),e._v(" "),t("li",[e._v("csv")]),e._v(" "),t("li",[e._v("ini")])]),e._v(" "),t("p",[e._v("但是，当你加载另外的文本文件时会发生什么呢？让我们试一试：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open README.md\n")])])]),t("p",[e._v("我们展示了文件的内容。如果文件过大，我们可以得到一个受控的滚动视图来查看文件并返回终端。有助于可读性，Nu 还会高亮一般文件格式，例如源代码文件、Markdown 等。")]),e._v(" "),t("p",[e._v("在表象之下，Nu 在这些文本文件中看到的是一个大字符串。 接下来，我们将讨论如何使用这些字符串以从中获取所需的数据。")]),e._v(" "),t("h2",{attrs:{id:"处理字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理字符串"}},[e._v("#")]),e._v(" 处理字符串")]),e._v(" "),t("p",[e._v("处理来自 Nu 外部的数据的一个要点是，它并不总是采用 Nu 可以理解的格式。 通常，此数据以字符串形式提供给我们。")]),e._v(" "),t("p",[e._v("让我们想象我们得到了这样一个数据文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open people.txt\nOctavia | Butler | Writer\nBob | Ross | Painter\nAntonio | Vivaldi | Composer\n")])])]),t("p",[e._v("我们想要的每个数据都用管道符（'|'）分隔，并且每个人在独立的行中。Nu 默认没有管道符分隔的文件格式，所以我们不得不自行解析它。")]),e._v(" "),t("p",[e._v("首先，我们想要做的是每次处理一行：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open people.txt | lines\n───┬──────────────────────────────\n 0 │ Octavia | Butler | Writer\n 1 │ Bob | Ross | Painter\n 2 │ Antonio | Vivaldi | Composer\n───┴──────────────────────────────\n")])])]),t("p",[e._v("我们可以看到我们正在处理这些行，因为我们回到了表格中。 下一步是查看是否可以将行拆分成更有用的内容。 为此，我们将使用 "),t("code",[e._v("split-column")]),e._v(" 命令。 顾名思义，「分隔列」为我们提供了一种将定界字符串拆分为列的方法。 我们告诉它分隔符是什么，其余的将由它完成：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split-column "|"\n───┬──────────┬───────────┬───────────\n # │ Column1  │ Column2   │ Column3\n───┼──────────┼───────────┼───────────\n 0 │ Octavia  │  Butler   │  Writer\n 1 │ Bob      │  Ross     │  Painter\n 2 │ Antonio  │  Vivaldi  │  Composer\n───┴──────────┴───────────┴───────────\n')])])]),t("p",[e._v("这看起来就差不多了。但貌似它还有一些额外的空白字符。让我们 "),t("code",[e._v("trim")]),e._v(" 掉这些空格：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split-column "|" | str trim\n───┬─────────┬─────────┬──────────\n # │ Column1 │ Column2 │ Column3\n───┼─────────┼─────────┼──────────\n 0 │ Octavia │ Butler  │ Writer\n 1 │ Bob     │ Ross    │ Painter\n 2 │ Antonio │ Vivaldi │ Composer\n───┴─────────┴─────────┴──────────\n')])])]),t("p",[e._v("不错。 "),t("code",[e._v("split-column")]),e._v(" 命令得到了我们可以使用的数据。它也给了我们一行默认列名：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split-column "|" | str trim | get Column1\n───┬─────────\n 0 │ Octavia\n 1 │ Bob\n 2 │ Antonio\n───┴─────────\n')])])]),t("p",[e._v("我们也可以用我们提供的列名代替默认的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split-column "|" first_name last_name job | str trim\n───┬────────────┬───────────┬──────────\n # │ first_name │ last_name │ job\n───┼────────────┼───────────┼──────────\n 0 │ Octavia    │ Butler    │ Writer\n 1 │ Bob        │ Ross      │ Painter\n 2 │ Antonio    │ Vivaldi   │ Composer\n───┴────────────┴───────────┴──────────\n')])])]),t("p",[e._v("现在，我们的数据在一个表中了，我们可以使用之前我们对表所用的一切命令来处理它：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split-column "|" first_name last_name job | str trim | sort-by first_name\n───┬────────────┬───────────┬──────────\n # │ first_name │ last_name │ job\n───┼────────────┼───────────┼──────────\n 0 │ Antonio    │ Vivaldi   │ Composer\n 1 │ Bob        │ Ross      │ Painter\n 2 │ Octavia    │ Butler    │ Writer\n───┴────────────┴───────────┴──────────\n')])])]),t("p",[e._v("其他可用于字符串的指令有：")]),e._v(" "),t("ul",[t("li",[e._v("split-row")]),e._v(" "),t("li",[e._v("str")]),e._v(" "),t("li",[e._v("lines")]),e._v(" "),t("li",[e._v("size")])]),e._v(" "),t("p",[e._v("如果我们已经知道数据具有 Nu 能够理解的格式，则可以调用一组帮助程序命令。 例如，我们打开一个 Cargo.lock 文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open Cargo.lock\n# This file is automatically @generated by Cargo.\n# It is not intended for manual editing.\n[[package]]\nname = "adhoc_derive"\nversion = "0.1.2"\n')])])]),t("p",[e._v('"Cargo.lock" 实际上是一个 .toml 文件，但是文件扩展名不是 .toml。也行，我们可以使用 '),t("code",[e._v("from toml")]),e._v(" 命令：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open Cargo.lock | from toml\n──────────┬───────────────────\n metadata │ [row 107 columns]\n package  │ [table 130 rows]\n──────────┴───────────────────\n")])])]),t("p",[e._v("每种 Nu 能理解的格式都有对应的 "),t("code",[e._v("from")]),e._v(" 命令可以使用。")]),e._v(" "),t("h2",{attrs:{id:"以原始模式操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以原始模式操作"}},[e._v("#")]),e._v(" 以原始模式操作")]),e._v(" "),t("p",[e._v("虽然能够打开文件并立即使用其数据表很有帮助，但这并不总是我们想要做的。\n为了获得纯文本，"),t("code",[e._v("open")]),e._v(" 命令可以使用可选的 "),t("code",[e._v("--raw")]),e._v(" 标志：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open Cargo.toml --raw\n[package]\nname = "nu"\nversion = "0.1.3"\nauthors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]\ndescription = "A shell for the GitHub era"\nlicense = "MIT"\n')])])]),t("h2",{attrs:{id:"获取-urls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取-urls"}},[e._v("#")]),e._v(" 获取 URLs")]),e._v(" "),t("p",[e._v("除了从文件系统加载文件之外，您还可以使用 "),t("code",[e._v("fetch")]),e._v(" 命令加载 URL。 这将从互联网上获取URL的内容并将其返回给您：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> fetch https://www.jonathanturner.org/feed.xml\n─────┬───────────────────────────\n rss │ [row attributes children]\n─────┴───────────────────────────\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);