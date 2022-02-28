(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{990:function(s,a,t){"use strict";t.r(a);var e=t(56),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Mathematical functions that generally only operate on a list of numbers (integers, decimals, bytes) and tables.\nCurrently the following functions are implemented:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("math abs")]),s._v(": Returns absolute values of a list of numbers")]),s._v(" "),t("li",[t("code",[s._v("math avg")]),s._v(": Finds the average of a list of numbers or tables")]),s._v(" "),t("li",[t("code",[s._v("math ceil")]),s._v(": Applies the ceil function to a list of numbers")]),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/old_book/commands/math-eval.html"}},[t("code",[s._v("math eval")])]),s._v(": Evaluates a list of math expressions into numbers")],1),s._v(" "),t("li",[t("code",[s._v("math floor")]),s._v(": Applies the floor function to a list of numbers")]),s._v(" "),t("li",[t("code",[s._v("math max")]),s._v(": Finds the maximum within a list of numbers or tables")]),s._v(" "),t("li",[t("code",[s._v("math median")]),s._v(": Finds the median of a list of numbers or tables")]),s._v(" "),t("li",[t("code",[s._v("math min")]),s._v(": Finds the minimum within a list of numbers or tables")]),s._v(" "),t("li",[t("code",[s._v("math mode")]),s._v(": Finds the most frequent element(s) within a list of numbers or tables")]),s._v(" "),t("li",[t("code",[s._v("math round")]),s._v(": Applies the round function to a list of numbers")]),s._v(" "),t("li",[t("code",[s._v("math sqrt")]),s._v(": Applies the square root function to a list of numbers")]),s._v(" "),t("li",[t("code",[s._v("math stddev")]),s._v(": Finds the standard deviation of a list of numbers or tables")]),s._v(" "),t("li",[t("code",[s._v("math sum")]),s._v(": Finds the sum of a list of numbers or tables")]),s._v(" "),t("li",[t("code",[s._v("math product")]),s._v(": Finds the product of a list of numbers or tables")]),s._v(" "),t("li",[t("code",[s._v("math variance")]),s._v(": Finds the variance of a list of numbers or tables")])]),s._v(" "),t("p",[s._v("However, the mathematical functions like "),t("code",[s._v("min")]),s._v(" and "),t("code",[s._v("max")]),s._v(" are more permissive and also work on "),t("code",[s._v("Dates")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("p",[s._v("To get the average of the file sizes in a directory, simply pipe the size column from the ls command to the average command.")]),s._v(" "),t("h3",{attrs:{id:"list-of-numbers-integers-decimals-bytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-of-numbers-integers-decimals-bytes"}},[s._v("#")]),s._v(" List of Numbers (Integers, Decimals, Bytes)")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ name               │ type │ size     │ modified")]),s._v("\n────┼────────────────────┼──────┼──────────┼─────────────\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ CODE_OF_CONDUCT.md │ File │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ CONTRIBUTING.md    │ File │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Cargo.lock         │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.3")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" mins ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Cargo.toml         │ File │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.6")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ LICENSE            │ File │   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ Makefile.toml      │ File │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("449")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ README.md          │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.0")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" mins ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ TODO.md            │ File │      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" mins ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ assets             │ Dir  │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ build.rs           │ File │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" │ crates             │ Dir  │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("672")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" │ debian             │ Dir  │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("352")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("             │ Dir  │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("288")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" │ docs               │ Dir  │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("160")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" │ features.toml      │ File │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("632")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" │ images             │ Dir  │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("160")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" │ justfile           │ File │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("234")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" │ rustfmt.toml       │ File │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" │ src                │ Dir  │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" │ target             │ Dir  │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" hours ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" │ tests              │ Dir  │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" days ago\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math avg\n───┬────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │")]),s._v("\n───┼────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.2")]),s._v(" KB\n───┴────────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math min\n───┬─────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │")]),s._v("\n───┼─────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" B\n───┴─────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math max\n───┬──────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │")]),s._v("\n───┼──────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.6")]),s._v(" KB\n───┴──────────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math median\n───┬───────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │")]),s._v("\n───┼───────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("320")]),s._v(" B\n───┴───────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),s._v("\n───┬──────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │")]),s._v("\n───┼──────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("143.6")]),s._v(" KB\n───┴──────────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math mode\n───┬────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n───┴────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math product\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),s._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math stddev\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.1372")]),s._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math variance\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("328.96")]),s._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v(" -3.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math ceil\n───┬────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ -3\n───┴────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v(" -3.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math floor\n───┬────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ -4\n───┴────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v(" -3.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math round\n───┬────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ -3\n───┴────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math sqrt\n───┬────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("\n───┴────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -2 -3.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math abs\n───┬────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0000")]),s._v("\n───┴────────\n")])])]),t("h3",{attrs:{id:"dates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dates"}},[s._v("#")]),s._v(" Dates")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get modified "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math min\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-06-09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":25:51.798743222 UTC\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get modified "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math max\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-06-14 05:49:59.637449186 UT\n")])])]),t("h3",{attrs:{id:"operations-on-tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operations-on-tables"}},[s._v("#")]),s._v(" Operations on tables")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" row / "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" size\n───┬───────┬───────┬───────┬────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ lines │ words │ chars │ bytes")]),s._v("\n───┼───────┼───────┼───────┼────────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" │         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" │         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" │         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n───┴───────┴───────┴───────┴────────────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" row / "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math max\n────────────┬────\n lines      │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n words      │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n chars      │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n bytes │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n────────────┴────\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" row / "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math avg\n────────────┬────────\n lines      │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000")]),s._v("\n words      │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1666")]),s._v("\n chars      │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.3333")]),s._v("\n bytes │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.3333")]),s._v("\n────────────┴────────\n")])])]),t("p",[s._v("To get the sum of the characters that make up your present working directory.")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" row / "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get chars "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\n")])])]),t("h2",{attrs:{id:"errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[s._v("#")]),s._v(" Errors")]),s._v(" "),t("p",[t("code",[s._v("math")]),s._v(" functions are aggregation functions so empty lists are invalid")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" math avg\nerror: Error: Unexpected: Cannot perform aggregate math operation on empty data\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);