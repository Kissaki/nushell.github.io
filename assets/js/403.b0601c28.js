(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{863:function(s,t,e){"use strict";e.r(t);var a=e(56),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[s._v("#")]),s._v(" Introduction")]),s._v(" "),e("p",[s._v("Hello, and welcome to the Nushell project. The goal of this project is to take the Unix philosophy of shells, where pipes connect simple commands together, and bring it to the modern style of development.")]),s._v(" "),e("p",[s._v("Nu takes cues from a lot of familiar territory: traditional shells like bash, object based shells like PowerShell, functional programming, systems programming, and more. But rather than trying to be the jack of all trades, Nu focuses its energy on doing a few things well:")]),s._v(" "),e("ul",[e("li",[s._v("Create a flexible cross-platform shell with a modern feel")]),s._v(" "),e("li",[s._v("Allow you to mix and match commandline applications with a shell that understands the structure of your data")]),s._v(" "),e("li",[s._v("Have the level of UX polish that modern CLI apps provide")])]),s._v(" "),e("p",[s._v("The easiest way to see what Nu can do is to start with some examples, so let's dive in.")]),s._v(" "),e("p",[s._v("The first thing you'll notice when you run a command like "),e("code",[s._v("ls")]),s._v(" is that instead of a block of text coming back, you get a structured table.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n────┬────────────────────┬──────┬────────┬────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ name               │ type │ size   │ modified")]),s._v("\n────┼────────────────────┼──────┼────────┼────────────\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(".html           │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("429")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ CONTRIBUTING.md    │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" mins ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Gemfile            │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Gemfile.lock       │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ LICENSE            │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ README.md          │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("213")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),e("p",[s._v("The table is more than just showing the directory in a different way. Just like tables in a spreadsheet, this table allows us to work with the data more interactively.")]),s._v(" "),e("p",[s._v("The first thing we'll do is to sort our table by the size. To do this, we'll take the output from "),e("code",[s._v("ls")]),s._v(" and feed it into a command that can sort tables based on the contents of a column.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sort-by size "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" reverse\n────┬────────────────────┬──────┬────────┬────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ name               │ type │ size   │ modified")]),s._v("\n────┼────────────────────┼──────┼────────┼────────────\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Gemfile.lock       │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ SUMMARY.md         │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Gemfile            │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ LICENSE            │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ CONTRIBUTING.md    │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" mins ago\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ books.md           │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("687")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),e("p",[s._v("You can see that to make this work we didn't pass commandline arguments to "),e("code",[s._v("ls")]),s._v(". Instead, we used the "),e("code",[s._v("sort-by")]),s._v(" command that Nu provides to do the sorting of the output of the "),e("code",[s._v("ls")]),s._v(" command. To see the biggest files on top, we also used "),e("code",[s._v("reverse")]),s._v(".")]),s._v(" "),e("p",[s._v("Nu provides many commands that can work on tables. For example, we could filter the contents of the "),e("code",[s._v("ls")]),s._v(" table so that it only shows files over 1 kilobyte:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where size "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 1kb\n───┬──────────────┬──────┬────────┬────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ name         │ type │ size   │ modified")]),s._v("\n───┼──────────────┼──────┼────────┼────────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Gemfile      │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ Gemfile.lock │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ LICENSE      │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ SUMMARY.md   │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago\n───┴──────────────┴──────┴────────┴────────────\n")])])]),e("p",[s._v("Just as in the Unix philosophy, being able to have commands talk to each other gives us ways to mix-and-match in many different combinations. Let's look at a different command:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n─────┬───────┬──────────────────┬─────────┬─────────┬──────────┬─────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   │ pid   │ name             │ status  │ cpu     │ mem      │ virtual")]),s._v("\n─────┼───────┼──────────────────┼─────────┼─────────┼──────────┼─────────\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("33155")]),s._v(" │ nu_plugin_core_p │ Running │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8496")]),s._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(" MB │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(" GB\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32841")]),s._v(" │ mdworker_shared  │ Running │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.3")]),s._v(" MB │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(" GB\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32829")]),s._v(" │ CoreServicesUIAg │ Running │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.1")]),s._v(" MB │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.5")]),s._v(" GB\n   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32828")]),s._v(" │ mdworker_shared  │ Running │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23.0")]),s._v(" MB │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(" GB\n")])])]),e("p",[s._v("You may be familiar with the "),e("code",[s._v("ps")]),s._v(" command if you've used Linux. With it, we can get a list of all the current processes that the system is running, what their status is, and what their name is. We can also see the CPU load for the processes.")]),s._v(" "),e("p",[s._v("What if we wanted to show the processes that were actively using the CPU? Just like we did with the "),e("code",[s._v("ls")]),s._v(" command earlier, we can also work with the table that the "),e("code",[s._v("ps")]),s._v(" command gives back to us:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where cpu "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n───┬──────┬──────────────────┬─────────┬────────┬──────────┬─────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ pid  │ name             │ status  │ cpu    │ mem      │ virtual")]),s._v("\n───┼──────┼──────────────────┼─────────┼────────┼──────────┼─────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3971")]),s._v(" │ Google Chrome He │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1263")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.4")]),s._v(" MB │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(" GB\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("360")]),s._v(" │ iTerm2           │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.6635")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("218.6")]),s._v(" MB │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.0")]),s._v(" GB\n───┴──────┴──────────────────┴─────────┴────────┴──────────┴─────────\n")])])]),e("p",[s._v("So far, we've been using "),e("code",[s._v("ls")]),s._v(" and "),e("code",[s._v("ps")]),s._v(" to list files and processes. Nu also offers other commands that can create tables of useful information. Next, let's explore "),e("code",[s._v("date")]),s._v(" and "),e("code",[s._v("sys")]),s._v(".")]),s._v(" "),e("p",[s._v("Running "),e("code",[s._v("date now")]),s._v(" gives us information about the current day and time:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" now\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-09-09 09:14:51.684619600 +00:00\n")])])]),e("p",[s._v("To get the date as a table we can feed it into "),e("code",[s._v("date to-table")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" now "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" to-table\n───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ year │ month │ day │ hour │ minute │ second │ timezone")]),s._v("\n───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v(" │ +00:00\n───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────\n")])])]),e("p",[s._v("Running "),e("code",[s._v("sys")]),s._v(" gives information about the system that Nu is running on:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys\n─────────┬─────────────────────────────────────────\n "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("    │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("row "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" columns"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n cpu     │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("row cores current ghz max ghz min ghz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n disks   │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n mem     │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("row "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" swap "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" swap total total"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n net     │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n battery │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n─────────┴─────────────────────────────────────────\n")])])]),e("p",[s._v("This is a bit different than the tables we saw before. The "),e("code",[s._v("sys")]),s._v(" command gives us a table that contains structured tables in the cells instead of simple values. To take a look at this data, we need to "),e("em",[s._v("get")]),s._v(" the column to view:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n──────────┬─────────────────────────────────────────────\n name     │ Linux\n release  │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v(".0-1019-azure\n version  │ "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#20-Ubuntu SMP Fri Mar 27 23:54:23 UTC 2020")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" │ lifeless\n arch     │ x86_64\n "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("   │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":03:47:32\n sessions │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n──────────┴─────────────────────────────────────────────\n")])])]),e("p",[s._v("The "),e("code",[s._v("get")]),s._v(" command lets us jump into the contents of a column of the table. Here, we're looking into the \"host\" column, which contains information about the host that Nu is running on. The name of the OS, the hostname, the CPU, and more. Let's get the name of the users on the system:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get host.sessions.name\n───┬────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ jt\n───┴────\n")])])]),e("p",[s._v("Right now, there's just one user on the system named \"jt\". You'll notice that we can pass a column path (the "),e("code",[s._v("host.sessions")]),s._v(" part) and not just the name of the column. Nu will take the column path and go to the corresponding bit of data in the table.")]),s._v(" "),e("p",[s._v('You might have noticed something else that\'s different. Rather than having a table of data, we have just a single element: the string "jt". Nu works with both tables of data as well as strings. Strings are an important part of working with commands outside of Nu.')]),s._v(" "),e("p",[s._v("Let's see how strings work outside of Nu in action. We'll take our example from before and run the external "),e("code",[s._v("echo")]),s._v(" command (the "),e("code",[s._v("^")]),s._v(" tells Nu to not use the built-in "),e("code",[s._v("echo")]),s._v(" command):")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get host.sessions.name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" each "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ^echo "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\njt\n")])])]),e("p",[s._v("If this looks very similar to what we had before, you have a keen eye! It is similar, but with one important difference: we've called "),e("code",[s._v("^echo")]),s._v(" with the value we saw earlier. This allows us to pass data out of Nu into "),e("code",[s._v("echo")]),s._v(" (or any command outside of Nu, like "),e("code",[s._v("git")]),s._v(" for example).")]),s._v(" "),e("p",[e("em",[s._v("Note: help text for any of Nu's builtin commands can be discovered with the "),e("code",[s._v("help")]),s._v(" command")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" config\nConfiguration management.\n\nUsage:\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("subcommand"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nSubcommands:\n  config get - Gets a value from the config\n  config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" - Sets a value "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the config\n  config set_into - Sets a value "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the config\n  config "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" - "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" the config\n  config remove - Removes a value from the config\n  config path - "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" the path to the config "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\nFlags:\n  -h, --help: Display this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);