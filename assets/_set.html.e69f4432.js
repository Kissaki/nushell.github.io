import{_ as e,o as t,c as o,a,t as n,d as p,e as r}from"./app.760d3a08.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; set (value) --mask</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>value</code>: value to be inserted in series</li><li><code>--mask {any}</code>: mask indicating insertions</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Shifts the values by a given period</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> <span class="token builtin class-name">shift</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> mask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> <span class="token operator">|</span> is-null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$s</span> <span class="token operator">|</span> <span class="token builtin class-name">set</span> <span class="token number">0</span> --mask <span class="token variable">$mask</span>
</code></pre></div>`,7);function k(s,m){return t(),o("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),h])}var _=e(c,[["render",k],["__file","_set.html.vue"]]);export{_ as default};
