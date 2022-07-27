import{_ as e,o as t,c as o,a,t as n,d as p,e as c}from"./app.760d3a08.js";const l={},r={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; transpose ...rest --header-row --ignore-titles --as-record --keep-last --keep-all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the names to give columns once transposed</li><li><code>--header-row</code>: treat the first row as column names</li><li><code>--ignore-titles</code>: don&#39;t transpose the column names into values</li><li><code>--as-record</code>: transfer to record if the result is a table and contains only one row</li><li><code>--keep-last</code>: on repetition of record fields due to <code>header-row</code>, keep the last value obtained</li><li><code>--keep-all</code>: on repetition of record fields due to <code>header-row</code>, keep all the values obtained</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Transposes the table contents with default column names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c1 c2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> transpose
</code></pre></div><p>Transposes the table contents with specified column names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c1 c2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> transpose key val
</code></pre></div><p>Transposes the table without column names and specify a new column name</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c1 c2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> transpose -i val
</code></pre></div><p>Transfer back to record with -d flag</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>c1: <span class="token number">1</span>, c2: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> transpose <span class="token operator">|</span> transpose -i -r -d
</code></pre></div>`,13);function k(s,m){return t(),o("div",null,[a("h1",r,[i,u,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),h])}var g=e(l,[["render",k],["__file","transpose.html.vue"]]);export{g as default};
