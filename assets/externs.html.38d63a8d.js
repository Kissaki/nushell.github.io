import{_ as t,o,c as p,a as s,b as c,w as r,e,d as n,r as l}from"./app.760d3a08.js";const u={},i=e(`<h1 id="\u5916\u90E8\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u547D\u4EE4" aria-hidden="true">#</a> \u5916\u90E8\u547D\u4EE4</h1><p>\u8C03\u7528\u5916\u90E8\u547D\u4EE4\u662F\u5C06 Nushell \u4F5C\u4E3A\u4E00\u4E2A Shell \u4F7F\u7528\u7684\u57FA\u672C\u90E8\u5206\uFF08\u901A\u5E38\u4E5F\u5C06 Nushell \u4F5C\u4E3A\u4E00\u79CD\u8BED\u8A00\u4F7F\u7528\uFF09\u3002\u4F46\u662F\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5BF9\u4E8E Nushell \u4E4B\u5916\u7684\u547D\u4EE4\u800C\u8A00\uFF0CNushell \u4E0D\u80FD\u5E2E\u52A9\u5BFB\u627E\u8C03\u7528\u4E2D\u7684\u9519\u8BEF\uFF0C\u6216\u8005\u81EA\u52A8\u8865\u5168\uFF0C\u6216\u8005\u8BED\u6CD5\u9AD8\u4EAE\u3002</p><p>\u8FD9\u5C31\u662F <code>extern</code> \u7684\u4F5C\u7528\u3002<code>extern</code>\u5173\u952E\u5B57\u5141\u8BB8\u4F60\u4E3A Nushell \u4E4B\u5916\u7684\u547D\u4EE4\u5199\u4E00\u4E2A\u5B8C\u6574\u7684\u7B7E\u540D\uFF0C\u8FD9\u6837\u4F60\u5C31\u80FD\u5F97\u5230\u4E0A\u8FF0\u6240\u6709\u7684\u597D\u5904\u3002\u5982\u679C\u4F60\u770B\u4E00\u4E0B\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5176\u4E2D\u6709\u4E00\u4E9B<code>extern</code>\u8C03\u7528\u3002\u4E0B\u9762\u662F\u5176\u4E2D\u4E4B\u4E00\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">export</span> extern <span class="token string">&quot;git push&quot;</span> <span class="token punctuation">[</span>
    remote?: string@<span class="token string">&quot;nu-complete git remotes&quot;</span>,   <span class="token comment"># the name of the remote</span>
    refspec?: string@<span class="token string">&quot;nu-complete git branches&quot;</span>  <span class="token comment"># the branch / refspec</span>
    --verbose<span class="token punctuation">(</span>-v<span class="token punctuation">)</span>                                <span class="token comment"># be more verbose</span>
    --quiet<span class="token punctuation">(</span>-q<span class="token punctuation">)</span>                                  <span class="token comment"># be more quiet</span>
    --repo: string                               <span class="token comment"># repository</span>
    --all                                        <span class="token comment"># push all refs</span>
    --mirror                                     <span class="token comment"># mirror all refs</span>
    --delete<span class="token punctuation">(</span>-d<span class="token punctuation">)</span>                                 <span class="token comment"># delete refs</span>
    --tags                                       <span class="token comment"># push tags (can&#39;t be used with --all or --mirror)</span>
    --dry-run<span class="token punctuation">(</span>-n<span class="token punctuation">)</span>                                <span class="token comment"># dry run</span>
    --porcelain                                  <span class="token comment"># machine-readable output</span>
    --force<span class="token punctuation">(</span>-f<span class="token punctuation">)</span>                                  <span class="token comment"># force updates</span>
    --force-with-lease: string                   <span class="token comment"># require old value of ref to be at this value</span>
    --recurse-submodules: string                 <span class="token comment"># control recursive pushing of submodules</span>
    --thin                                       <span class="token comment"># use thin pack</span>
    --receive-pack: string                       <span class="token comment"># receive pack program</span>
    --exec: string                               <span class="token comment"># receive pack program</span>
    --set-upstream<span class="token punctuation">(</span>-u<span class="token punctuation">)</span>                           <span class="token comment"># set upstream for git pull/status</span>
    --progress                                   <span class="token comment"># force progress reporting</span>
    --prune                                      <span class="token comment"># prune locally removed refs</span>
    --no-verify                                  <span class="token comment"># bypass pre-push hook</span>
    --follow-tags                                <span class="token comment"># push missing but relevant tags</span>
    --signed: string                             <span class="token comment"># GPG sign the push</span>
    --atomic                                     <span class="token comment"># request atomic transaction on remote side</span>
    --push-option<span class="token punctuation">(</span>-o<span class="token punctuation">)</span>: string                    <span class="token comment"># option to transmit</span>
    --ipv4<span class="token punctuation">(</span>-4<span class="token punctuation">)</span>                                   <span class="token comment"># use IPv4 addresses only</span>
    --ipv6<span class="token punctuation">(</span>-6<span class="token punctuation">)</span>                                   <span class="token comment"># use IPv6 addresses only</span>
  <span class="token punctuation">]</span>
</code></pre></div><p>\u4F60\u4F1A\u6CE8\u610F\u5230\u8FD9\u7ED9\u4E86\u4F60\u6240\u6709\u4E0E\u5185\u90E8\u547D\u4EE4\u76F8\u540C\u7684\u63CF\u8FF0\u6027\u8BED\u6CD5\uFF0C\u8BA9\u4F60\u63CF\u8FF0\u6807\u5FD7(Flags)\u3001\u77ED\u6807\u5FD7(Short Flags)\u3001\u4F4D\u7F6E\u53C2\u6570\u3001\u7C7B\u578B\u7B49\u7B49\u3002</p><h2 id="\u7C7B\u578B\u548C\u81EA\u5B9A\u4E49\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u548C\u81EA\u5B9A\u4E49\u8865\u5168" aria-hidden="true">#</a> \u7C7B\u578B\u548C\u81EA\u5B9A\u4E49\u8865\u5168</h2>`,6),m=n("\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u4F60\u4F1A\u6CE8\u610F\u5230\u6709\u4E9B\u7C7B\u578B\u540E\u9762\u6709"),d=s("code",null,"@",-1),h=n("\uFF0C\u63A5\u7740\u540E\u9762\u662F\u547D\u4EE4\u7684\u540D\u79F0\u3002\u6211\u4EEC\u6709\u72EC\u7ACB\u7684\u7AE0\u8282\u8FDB\u4E00\u6B65\u8C08\u8BBA "),k=n("\u81EA\u5B9A\u4E49\u8865\u5168"),g=n("\u3002"),_=e('<p>\u53C2\u6570\u7684\u7C7B\u578B\uFF08\u6216\u5F62\u72B6\uFF09\u548C\u81EA\u5B9A\u4E49\u8865\u5168\u90FD\u544A\u8BC9 Nushell \u5982\u4F55\u5B8C\u6210\u5BF9\u8BE5\u6807\u5FD7\u6216\u4F4D\u7F6E\u503C\u7684\u8865\u5168\u3002\u4F8B\u5982\uFF0C\u5C06\u7C7B\u578B\u8BBE\u7F6E\u4E3A<code>path</code>\u5141\u8BB8 Nushell \u4E3A\u4F60\u5C06\u503C\u8865\u5168\u4E3A\u4E00\u4E2A\u6587\u4EF6\u8DEF\u5F84\u3002\u4F7F\u7528<code>@</code>\u548C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u8865\u5168\u65B9\u5F0F\u8986\u76D6\u4E86\u8FD9\u4E2A\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u8BA9\u8BE5\u81EA\u5B9A\u4E49\u8865\u5168\u65B9\u5F0F\u8FD4\u56DE\u7ED9\u4F60\u5B8C\u6574\u7684\u8865\u5168\u5217\u8868\u3002</p><h2 id="\u5C40\u9650\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C40\u9650\u6027" aria-hidden="true">#</a> \u5C40\u9650\u6027</h2><p>\u76EE\u524D\u7684<code>extern</code>\u8BED\u6CD5\u6709\u4E00\u4E9B\u9650\u5236\u3002\u5728 Nushell \u4E2D\uFF0C\u6807\u5FD7\u548C\u4F4D\u7F6E\u53C2\u6570\u662F\u975E\u5E38\u7075\u6D3B\u7684\uFF1A\u6807\u5FD7\u53EF\u4EE5\u5728\u4F4D\u7F6E\u53C2\u6570\u4E4B\u524D, \u4E5F\u53EF\u4EE5\u4E0E\u4F4D\u7F6E\u53C2\u6570\u6DF7\u5408, \u8FD8\u53EF\u4EE5\u8DDF\u968F\u4F4D\u7F6E\u53C2\u6570\u3002\u8BB8\u591A\u5916\u90E8\u547D\u4EE4\u6CA1\u6709\u8FD9\u79CD\u7075\u6D3B\u6027\u3002\u76EE\u524D\u8FD8\u6CA1\u6709\u4E00\u79CD\u65B9\u6CD5\u6765\u786E\u4FDD\u6807\u5FD7\u548C\u4F4D\u7F6E\u53C2\u6570\u7684\u7279\u5B9A\u987A\u5E8F\u4E0E\u5916\u90E8\u547D\u4EE4\u6240\u8981\u6C42\u7684\u98CE\u683C\u4FDD\u6301\u4E00\u81F4\u3002</p><p>\u7B2C\u4E8C\u4E2A\u9650\u5236\u662F\uFF0C\u6709\u4E9B\u5916\u90E8\u547D\u4EE4\u8981\u6C42\u4F7F\u7528<code>=</code>\u6765\u4F20\u9012\u6807\u5FD7\u548C\u503C\u3002\u5728 Nushell \u4E2D\uFF0C<code>=</code>\u662F\u4E00\u79CD\u65B9\u4FBF\u7684\u53EF\u9009\u9ED8\u8BA4\u53C2\u6570\u8BED\u6CD5\uFF0C\u76EE\u524D\u8FD8\u6CA1\u6709\u529E\u6CD5\u6309\u8981\u6C42\u4F7F\u7528\u5B83\u3002</p>',4);function f(v,b){const a=l("RouterLink");return o(),p("div",null,[i,s("p",null,[m,d,h,c(a,{to:"/zh-CN/book/custom_completions.html"},{default:r(()=>[k]),_:1}),g]),_])}var N=t(u,[["render",f],["__file","externs.html.vue"]]);export{N as default};
