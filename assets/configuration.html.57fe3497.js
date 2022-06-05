import{_ as p,r as l,o as d,c as i,a as e,b as s,w as a,e as t,d as n}from"./app.3a8901ae.js";const h={},u=t('<h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><h2 id="nushell-\u914D\u7F6E\u4E0Eenv-nu\u548Cconfig-nu" tabindex="-1"><a class="header-anchor" href="#nushell-\u914D\u7F6E\u4E0Eenv-nu\u548Cconfig-nu" aria-hidden="true">#</a> Nushell \u914D\u7F6E\u4E0E<code>env.nu</code>\u548C<code>config.nu</code></h2><p>Nushell \u4F7F\u7528\u4E00\u4E2A\u914D\u7F6E\u7CFB\u7EDF\uFF0C\u5728\u542F\u52A8\u65F6\u52A0\u8F7D\u5E76\u8FD0\u884C\u4E24\u4E2A Nushell \u811A\u672C\u6587\u4EF6\uFF1A \u9996\u5148\u662F<code>env.nu</code>\uFF0C\u7136\u540E\u662F<code>config.nu</code>\u3002 \u8FD9\u4E9B\u6587\u4EF6\u7684\u8DEF\u5F84\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528<code>echo $nu.env-path</code>\u548C<code>echo $nu.config-path</code>\u627E\u5230\u3002 <code>env.nu</code>\u662F\u7528\u6765\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\u7684\uFF0C\u4E4B\u540E\u8FD9\u4E9B\u73AF\u5883\u53D8\u91CF\u5B9A\u4E49\u5C06\u5728<code>config.nu</code>\u4E2D\u53EF\u7528\uFF1B <code>config.nu</code>\u53EF\u4EE5\u7528\u6765\u5728\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u4E2D\u6DFB\u52A0\u5B9A\u4E49\u3001\u522B\u540D\u7B49\u7B49\u3002</p>',3),r=n("(\u4F60\u53EF\u4EE5\u628A Nushell \u7684\u914D\u7F6E\u52A0\u8F7D\u987A\u5E8F\u60F3\u8C61\u6210\u5728\u542F\u52A8\u65F6\u6267\u884C\u4E24\u884C "),_={href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"},k=n("REPL"),g=n("\uFF1A"),f=e("code",null,"source /path/to/env.nu",-1),b=n("\u548C"),v=e("code",null,"source /path/to/config.nu",-1),m=n("\u3002\u56E0\u6B64\uFF0C\u7528"),N=e("code",null,"env.nu",-1),x=n("\u8868\u793A\u73AF\u5883\uFF0C\u7528"),T=e("code",null,"config.nu",-1),P=n("\u8868\u793A\u5176\u4ED6\u914D\u7F6E\u53EA\u662F\u4E00\u4E2A\u7EA6\u5B9A\u3002)"),R=n("\u5F53\u4F60\u5728\u6CA1\u6709\u8BBE\u7F6E\u8FD9\u4E9B\u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\u542F\u52A8 Nushell\uFF0CNushell \u4F1A\u63D0\u793A\u4F60\u4E0B\u8F7D"),O={href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"default env.nu",-1),$=n("\u548C"),A={href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"default config.nu",-1),q=n("\u3002 \u4F60\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u8FD9\u4E9B\u9ED8\u8BA4\u6587\u4EF6\uFF0C\u4E86\u89E3\u73AF\u5883\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u548C\u6240\u6709\u53EF\u914D\u7F6E\u9879\u7684\u5217\u8868\u3002"),w=t(`<h3 id="\u914D\u7F6E-env-config" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-env-config" aria-hidden="true">#</a> \u914D\u7F6E <code>$env.config</code></h3><p>Nushell \u7684\u4E3B\u8981\u8BBE\u7F6E\u662F\u4EE5\u8BB0\u5F55\u7684\u5F62\u5F0F\u4FDD\u5B58\u5728 <code>config</code> \u73AF\u5883\u53D8\u91CF\u4E2D\u3002\u8FD9\u4E2A\u8BB0\u5F55\u53EF\u4EE5\u7528\u4EE5\u4E0B\u65B9\u5F0F\u521B\u5EFA\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F60\u4E5F\u53EF\u4EE5\u9690\u85CF(shadow)<code>$env.config</code>\u5E76\u66F4\u65B0\u5B83\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert <span class="token operator">&lt;</span>field name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>field value<span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6309\u7167\u7EA6\u5B9A\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u88AB\u5B9A\u4E49\u5728<code>config.nu</code>\u6587\u4EF6\u4E2D\u3002</p><h3 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h3>`,7),C=n("\u4F60\u53EF\u4EE5\u5728 Nushell \u4F1A\u8BDD\u671F\u95F4\u4F7F\u7528"),L=e("code",null,"let-env",-1),S=n("\u5728"),E=e("code",null,"env.nu",-1),H=n("\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u3002\u6BD4\u5982\uFF1A"),D=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code>let-env FOO <span class="token operator">=</span> <span class="token string">&#39;BAR&#39;</span>
</code></pre></div><p><em>(\u5C3D\u7BA1 <code>$env.config</code> \u662F\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u6309\u7167\u60EF\u4F8B\u5B83\u4ECD\u7136\u5728 <code>config.nu</code> \u4E2D\u5B9A\u4E49\u3002)</em></p><p>\u4EE5\u4E0B\u662F\u503C\u5F97\u5173\u6CE8\u7684\u4E14\u4E3A Nushell \u6240\u7279\u6709\u7684\u51E0\u4E2A\u76F8\u5BF9\u91CD\u8981\u7684\u73AF\u5883\u53D8\u91CF\uFF1A</p><ul><li><code>LS_COLORS</code>: \u5728<code>ls</code>\u4E2D\u4E3A\u6BCF\u4E2A\u6587\u4EF6\u7C7B\u578B\u8BBE\u7F6E\u989C\u8272</li><li><code>PROMPT_COMMAND</code>: \u4E3A\u8BBE\u7F6E\u63D0\u793A\u800C\u6267\u884C\u7684\u4EE3\u7801\uFF08\u5757\u6216\u5B57\u7B26\u4E32\uFF09</li><li><code>PROMPT_COMMAND_RIGHT</code>: \u4E3A\u8BBE\u7F6E\u6B63\u786E\u7684\u63D0\u793A\u800C\u6267\u884C\u7684\u4EE3\u7801\uFF08\u5757\uFF09</li><li><code>PROMPT_INDICATOR = &quot;\u3009&quot;</code>: \u63D0\u793A\u540E\u6253\u5370\u7684\u63D0\u793A\u7B26\uFF08\u9ED8\u8BA4\u4E3A &quot;&gt;&quot; \u7C7B\u4F3C\u7684 Unicode \u7B26\u53F7\uFF09</li><li><code>PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;</code></li><li><code>PROMPT_INDICATOR_VI_NORMAL = &quot;\u3009 &quot;</code></li><li><code>PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;</code></li></ul><h3 id="\u989C\u8272\u914D\u7F6E\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272\u914D\u7F6E\u90E8\u5206" aria-hidden="true">#</a> \u989C\u8272\u914D\u7F6E\u90E8\u5206</h3>`,5),V=n("\u4F60\u53EF\u4EE5\u5728 "),B=n("\u76F8\u5173\u7AE0\u8282"),y=n(" \u4E2D\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u8BBE\u7F6E\u989C\u8272\u548C\u4E3B\u9898\u7684\u4FE1\u606F\u3002"),U=t(`<h2 id="\u5C06-nu-\u914D\u7F6E\u4E3A\u767B\u5F55-shell" tabindex="-1"><a class="header-anchor" href="#\u5C06-nu-\u914D\u7F6E\u4E3A\u767B\u5F55-shell" aria-hidden="true">#</a> \u5C06 Nu \u914D\u7F6E\u4E3A\u767B\u5F55 Shell</h2><p>\u8981\u628A Nu \u4F5C\u4E3A\u4E00\u4E2A\u767B\u5F55 Shell\uFF0C\u4F60\u9700\u8981\u914D\u7F6E<code>$env</code>\u53D8\u91CF\u3002\u8FD9\u6837\uFF0C\u5728\u4F60\u5C06\u4F7F\u7528 Nu \u4E3A\u767B\u5F55 Shell \u65F6\u624D\u6709\u8DB3\u591F\u7684\u652F\u6301\u6765\u8FD0\u884C\u5916\u90E8\u547D\u4EE4\u3002</p><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u5728\u53E6\u4E00\u4E2A Shell\uFF08\u5982 Bash\uFF09\u4E2D\u8FD0\u884C Nu \u6765\u5EFA\u7ACB\u5B8C\u6574\u7684\u73AF\u5883\u53D8\u91CF\u96C6\u3002\u4E00\u65E6\u4F60\u8FDB\u5165 Nu\uFF0C\u4F60\u53EF\u4EE5\u8FD0\u884C\u8FD9\u6837\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">env</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token builtin class-name">echo</span> $<span class="token string">&quot;let-env (<span class="token variable">$it</span>.name) = &#39;(<span class="token variable">$it</span>.raw)&#39;&quot;</span> <span class="token punctuation">}</span> <span class="token operator">|</span> str collect <span class="token punctuation">(</span>char <span class="token function">nl</span><span class="token punctuation">)</span>
</code></pre></div>`,4),j=n("\u8FD9\u5C06\u6253\u5370\u51FA"),z=e("code",null,"let-env",-1),F=n("\u6240\u6709\u884C\uFF0C\u4E14\u5305\u542B\u6BCF\u4E2A\u73AF\u5883\u53D8\u91CF\u53CA\u5176\u8BBE\u7F6E\u3002"),G=t(`<p>\u63A5\u4E0B\u6765\uFF0C\u5728\u4E00\u4E9B\u53D1\u884C\u7248\u4E0A\uFF0C\u4F60\u8FD8\u9700\u8981\u786E\u4FDD Nu \u5728<code>/etc/shells</code>\u5217\u8868\u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> /etc/shells
<span class="token comment"># /etc/shells: valid login shells</span>
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u4F7F\u7528<code>chsh</code>\u547D\u4EE4\u6765\u5C06 Nu \u8BBE\u7F6E\u4E3A\u4F60\u7684\u767B\u5F55 Shell\u3002\u5728\u4F60\u6CE8\u9500\u540E\u4E0B\u6B21\u767B\u5F55\u65F6\uFF0C\u5E94\u8BE5\u53EF\u4EE5\u770B\u5230\u4E00\u4E2A\u95EA\u4EAE\u7684 Nu \u63D0\u793A\u3002</p><h3 id="macos-\u4FDD\u6301-open-\u4E3A-usr-bin-open" tabindex="-1"><a class="header-anchor" href="#macos-\u4FDD\u6301-open-\u4E3A-usr-bin-open" aria-hidden="true">#</a> macOS: \u4FDD\u6301 <code>open</code> \u4E3A <code>/usr/bin/open</code></h3>`,4),J=n("\u4E00\u4E9B\u5DE5\u5177\uFF08\u4F8B\u5982 Emacs\uFF09\u4F9D\u9760"),K=e("code",null,"open",-1),Q=n("\u547D\u4EE4\u6765\u6253\u5F00 Mac \u4E0A\u7684\u6587\u4EF6\u3002 \u7531\u4E8E Nushell \u6709\u81EA\u5DF1\u7684"),W=e("code",null,"open",-1),X=n("\u547D\u4EE4\uFF0C\u5B83\u6709\u4E0D\u540C\u7684\u8BED\u4E49\u5E76\u9690\u85CF\u4E86"),Y=e("code",null,"/usr/bin/open",-1),Z=n("\uFF0C\u8FD9\u6837\u67D0\u4E9B\u5DE5\u5177\u5728\u8BD5\u56FE\u4F7F\u7528\u5B83\u65F6\u5C06\u51FA\u9519\u3002 \u4E00\u4E2A\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u65B9\u6CD5\u662F\u4E3A Nushell \u7684"),nn=e("code",null,"open",-1),en=n("\u5B9A\u4E49\u4E00\u4E2A\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF0C\u5E76\u5728\u4F60\u7684"),sn=e("code",null,"config.nu",-1),on=n("\u6587\u4EF6\u4E2D\u4E3A\u7CFB\u7EDF\u7684"),an=e("code",null,"open",-1),tn=n("\u521B\u5EFA\u4E00\u4E2A\u522B\u540D\uFF0C\u50CF\u8FD9\u6837\uFF1A"),cn=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code>def nuopen <span class="token punctuation">[</span>arg, --raw <span class="token punctuation">(</span>-r<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token variable">$raw</span> <span class="token punctuation">{</span> <span class="token function">open</span> -r <span class="token variable">$arg</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token function">open</span> <span class="token variable">$arg</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token builtin class-name">alias</span> <span class="token function">open</span> <span class="token operator">=</span> ^open
</code></pre></div><h2 id="path-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#path-\u914D\u7F6E" aria-hidden="true">#</a> <code>PATH</code> \u914D\u7F6E</h2>`,2),ln=n("\u8981\u5728 "),pn={href:"https://en.wikipedia.org/wiki/PATH_(variable)",target:"_blank",rel:"noopener noreferrer"},dn=n("PATH \u53D8\u91CF"),hn=n(" \u4E2D\u6DFB\u52A0\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u4F60\u53EF\u4EE5\u5728"),un=e("code",null,"env.nu",-1),rn=n("\u4E2D\u4F7F\u7528 "),_n=e("code",null,"let-env",-1),kn=n(" \u548C "),gn=e("code",null,"append",-1),fn=n(" \u5B8C\u6210\uFF0C\u5982\u4E0B\uFF1A"),bn=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code>let-env <span class="token environment constant">PATH</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token environment constant">PATH</span> <span class="token operator">|</span> append <span class="token string">&#39;/some/path&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,1),vn=n("\u8FD9\u5C06\u628A"),mn=e("code",null,"/some/path",-1),Nn=n("\u8FFD\u52A0\u5230"),xn=e("code",null,"PATH",-1),Tn=n("\u7684\u672B\u5C3E\uFF1B\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),Pn=e("code",null,"prepend",-1),Rn=n(" \u5C06\u8BE5\u8DEF\u5F84\u6DFB\u52A0\u5230"),On=e("code",null,"PATH",-1),In=n("\u7684\u5F00\u5934\u3002");function $n(An,Mn){const c=l("ExternalLinkIcon"),o=l("RouterLink");return d(),i("div",null,[u,e("p",null,[e("em",null,[r,e("a",_,[k,s(c)]),g,f,b,v,m,N,x,T,P])]),e("p",null,[R,e("a",O,[I,s(c)]),$,e("a",A,[M,s(c)]),q]),w,e("p",null,[C,s(o,{to:"/book/commands/let-env.html"},{default:a(()=>[L]),_:1}),S,E,H]),D,e("p",null,[V,s(o,{to:"/zh-CN/book/coloring_and_theming.html"},{default:a(()=>[B]),_:1}),y]),U,e("p",null,[j,s(o,{to:"/book/commands/let-env.html"},{default:a(()=>[z]),_:1}),F]),G,e("p",null,[J,K,Q,s(o,{to:"/book/commands/open.html"},{default:a(()=>[W]),_:1}),X,Y,Z,nn,en,sn,on,an,tn]),cn,e("p",null,[ln,e("a",pn,[dn,s(c)]),hn,un,rn,s(o,{to:"/book/commands/let-env.html"},{default:a(()=>[_n]),_:1}),kn,s(o,{to:"/book/commands/append.html"},{default:a(()=>[gn]),_:1}),fn]),bn,e("p",null,[vn,mn,Nn,xn,Tn,s(o,{to:"/book/commands/prepend.html"},{default:a(()=>[Pn]),_:1}),Rn,On,In])])}var wn=p(h,[["render",$n],["__file","configuration.html.vue"]]);export{wn as default};
