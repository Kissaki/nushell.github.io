import{_ as s,o as t,c as o,a,t as e,d as c,e as p}from"./app.760d3a08.js";const l={},r={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),d={style:{"white-space":"pre-wrap"}},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; melt --columns --values --variable-name --value-name</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: column names for melting</li><li><code>--values {table}</code>: column names used as value columns</li><li><code>--variable-name {string}</code>: optional name for variable column</li><li><code>--value-name {string}</code>: optional name for value column</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>melt dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b c d<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>x <span class="token number">1</span> <span class="token number">4</span> a<span class="token punctuation">]</span> <span class="token punctuation">[</span>y <span class="token number">2</span> <span class="token number">5</span> b<span class="token punctuation">]</span> <span class="token punctuation">[</span>z <span class="token number">3</span> <span class="token number">6</span> c<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> melt -c <span class="token punctuation">[</span>b c<span class="token punctuation">]</span> -v <span class="token punctuation">[</span>a d<span class="token punctuation">]</span>
</code></pre></div>`,7);function h(n,k){return t(),o("div",null,[a("h1",r,[i,u,a("code",null,e(n.$frontmatter.title),1)]),a("div",d,e(n.$frontmatter.usage),1),m])}var f=s(l,[["render",h],["__file","_melt.html.vue"]]);export{f as default};
