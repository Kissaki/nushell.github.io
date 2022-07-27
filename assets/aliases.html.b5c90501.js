import{_ as n,o as t,c as o,a as s,b as l,w as c,e as p,d as a,r}from"./app.760d3a08.js";const d={},i=p(`<h1 id="\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u522B\u540D" aria-hidden="true">#</a> \u522B\u540D</h1><p>Nushell \u4E2D\u7684\u522B\u540D\u63D0\u4F9B\u4E86\u4E00\u79CD\u7B80\u5355\u7684\u6587\u672C\u66FF\u6362\u65B9\u5F0F\uFF0C\u8FD9\u5141\u8BB8\u4F60\u4E3A\u4E00\u4E2A\u8F83\u957F\u7684\u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A\u7B80\u5199\u540D\u79F0\uFF0C\u5305\u62EC\u5176\u9ED8\u8BA4\u53C2\u6570\u3002</p><p>\u4F8B\u5982\uFF0C\u8BA9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>ll</code> \u7684\u522B\u540D\uFF0C\u5B83\u5C06\u5C55\u5F00\u4E3A <code>ls -l</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">alias</span> ll <span class="token operator">=</span> <span class="token function">ls</span> -l
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u522B\u540D\u6765\u8C03\u7528\u5B83\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ll
</code></pre></div><p>\u4E00\u65E6\u6211\u4EEC\u8FD9\u6837\u505A\u4E86\uFF0C\u5C31\u5982\u540C\u6211\u4EEC\u8F93\u5165\u4E86 <code>ls -l</code> \u4E00\u6837\u3002\u8FD9\u4E5F\u5141\u8BB8\u6211\u4EEC\u4F20\u5165\u6807\u5FD7\u6216\u4F4D\u7F6E\u53C2\u6570\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u73B0\u5728\u4E5F\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ll -a
</code></pre></div><p>\u53EF\u5F97\u5230\u4E0E\u8F93\u5165\u4E86<code>ls -l -a</code>\u4E00\u6837\u7684\u7ED3\u679C\u3002</p><h2 id="\u7F16\u5199\u5E26\u6709\u7BA1\u9053\u7684\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u5E26\u6709\u7BA1\u9053\u7684\u522B\u540D" aria-hidden="true">#</a> \u7F16\u5199\u5E26\u6709\u7BA1\u9053\u7684\u522B\u540D</h2><p>\u5982\u679C\u4F60\u60F3\u5728\u522B\u540D\u4E2D\u6DFB\u52A0\u7BA1\u9053\uFF0C\u4F60\u5FC5\u987B\u7528\u5C0F\u62EC\u53F7\u628A\u5B83\u62EC\u8D77\u6765\uFF0C\u5C0F\u62EC\u53F7\u662F\u4E00\u5BF9\u5706\u62EC\u53F7<code>()</code>\uFF0C\u7528\u6765\u6807\u8BB0\u4F60\u7684\u4E00\u7EC4\u5E26\u6709\u7BA1\u9053\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> lsname <span class="token operator">=</span> <span class="token punctuation">(</span>ls <span class="token operator">|</span> get name<span class="token punctuation">)</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5E26\u6709\u591A\u4E2A\u7BA1\u9053\u7684\u522B\u540D\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> lt <span class="token operator">=</span> <span class="token punctuation">(</span>ls <span class="token operator">|</span> sort-by modified -r <span class="token operator">|</span> sort-by <span class="token builtin class-name">type</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#\u6301\u4E45\u5316" aria-hidden="true">#</a> \u6301\u4E45\u5316</h2>`,15),h=a("\u4E3A\u4E86\u4F7F\u4F60\u7684\u522B\u540D\u6301\u4E45\u5316\uFF0C\u5B83\u5FC5\u987B\u88AB\u6DFB\u52A0\u5230\u4F60\u7684 "),u=s("em",null,"config.nu",-1),_=a(" \u6587\u4EF6\u4E2D\u3002 \u5173\u4E8E\u5982\u4F55\u6301\u4E45\u5316\u522B\u540D\uFF0C\u4EE5\u4FBF\u5728\u4F60\u542F\u52A8 Nushell \u65F6\u5B83\u4EEC\u662F\u53EF\u7528\u7684\uFF0C\u8BF7\u53C2\u8003 "),g=a("\u914D\u7F6E"),k=a(" \u90E8\u5206\u3002");function b(m,x){const e=r("RouterLink");return t(),o("div",null,[i,s("p",null,[h,u,_,l(e,{to:"/zh-CN/book/configuration.html"},{default:c(()=>[g]),_:1}),k])])}var v=n(d,[["render",b],["__file","aliases.html.vue"]]);export{v as default};
