(window.webpackJsonp=window.webpackJsonp||[]).push([[711],{1171:function(a,e,_){"use strict";_.r(e);var t=_(56),v=Object(t.a)({},(function(){var a=this,e=a.$createElement,_=a._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"管道"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#管道"}},[a._v("#")]),a._v(" 管道")]),a._v(" "),_("p",[a._v("Nu  的核心设计之一就是管道，这种设计思想可以追溯到几十年前的 Unix 背后的原始哲学。 正如 Nu 从 Unix 的字符串数据类型扩展而来，Nu 还扩展了管道的思想，使其不仅包含文本。")]),a._v(" "),_("h2",{attrs:{id:"基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[a._v("#")]),a._v(" 基础")]),a._v(" "),_("p",[a._v("一个管道由三个部分组成：输入、过滤器和输出。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v('> open "Cargo.toml" | inc package.version | save "Cargo_new.toml"\n')])])]),_("p",[a._v("第一个命令，"),_("code",[a._v('open "Cargo.toml"')]),a._v("，是一个输入（有时也被称为源或供应）。它创建或加载输出并提供给一个管道。")]),a._v(" "),_("p",[a._v("第一个命令 "),_("code",[a._v('open "Cargo.toml"')]),a._v(" 是输入（有时也称为「源」或「生产者」）。 这将创建或加载数据并将其馈送到管道中。 管道具有输入要使用的值，这是来自输入的。 像 "),_("code",[a._v("ls")]),a._v(" 这样的命令也是输入，因为它们从文件系统中获取数据并通过管道发送数据，以便可以使用它们。")]),a._v(" "),_("p",[a._v("第二个命令 "),_("code",[a._v("inc package.version")]),a._v(" 是一个过滤器。 过滤器获取给定的数据，并经常对其进行处理。 他们可以更改它（就像在我们的示例中使用 "),_("code",[a._v("inc")]),a._v(" 命令一样），或者在值通过时可以做其他操作，例如记录。")]),a._v(" "),_("p",[a._v("最后一个命令 "),_("code",[a._v('save "Cargo_new.toml"')]),a._v(" 是输出（有时称为「接收器」）。 输出从管道获取输入并对其进行一些最终操作。 在我们的示例中，我们将通过管道传输的内容保存到文件中作为最后一步。 其他类型的输出命令可能会使用这些值并为用户查看它们。")]),a._v(" "),_("h2",{attrs:{id:"与外部命令协作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#与外部命令协作"}},[a._v("#")]),a._v(" 与外部命令协作")]),a._v(" "),_("p",[a._v("Ni 命令使用 Nu 数据类型来与其他命令协作（查看 "),_("RouterLink",{attrs:{to:"/zh-cn/book/types_of_data.html"}},[a._v("数据类型")]),a._v("，但 Nu 之外的命令又如何呢？让我们看看一些与外部命令协作的例子：")],1),a._v(" "),_("p",[_("code",[a._v("internal_command | external_command")])]),a._v(" "),_("p",[a._v("数据将从 internal_command 流到 external_command 。 该数据应为字符串，以便可以将它们发送到 external_command 的 "),_("code",[a._v("stdin")]),a._v("。")]),a._v(" "),_("p",[_("code",[a._v("external_command | internal_command")])]),a._v(" "),_("p",[a._v("来自外部命令的数据将被 Nu 收集到一个字符串中，然后将被传递到 internal_command 中。 像 "),_("code",[a._v("lines")]),a._v(" 这样的命令有助于更轻松地从外部命令中引入数据，并使其易于使用。")]),a._v(" "),_("p",[_("code",[a._v("external_command_1 | external_command_2")])]),a._v(" "),_("p",[a._v("Nu像Bash一样，以与其他 Shell 相同的方式处理在两个外部命令之间传递的数据。 external_command_1 的 "),_("code",[a._v("stdout")]),a._v(" 连接到external_command_2的 "),_("code",[a._v("stdin")]),a._v(" 。 这使数据在两个命令之间自然流动。")]),a._v(" "),_("h2",{attrs:{id:"幕后"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#幕后"}},[a._v("#")]),a._v(" 幕后")]),a._v(" "),_("p",[a._v("你可能想知道为什么 "),_("code",[a._v("ls")]),a._v(" 是输入而不是输出的情况下我们是如何看到表的。 Nu 使用另一个名为 "),_("code",[a._v("autoview")]),a._v(" 的命令自动为我们添加此输出。 "),_("code",[a._v("autoview")]),a._v(" 命令会附加到没有输出的任何管道中，以使我们能够浏览结果。")]),a._v(" "),_("p",[a._v("事实上，这个命令：")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("> ls\n")])])]),_("p",[a._v("和这条管道：")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("> ls | autoview\n")])])]),_("p",[a._v("是一样的。")])])}),[],!1,null,null,null);e.default=v.exports}}]);