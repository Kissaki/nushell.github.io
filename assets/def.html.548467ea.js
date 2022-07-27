import{_ as n,o as t,c as o,a,t as s,d as i,e as c}from"./app.760d3a08.js";const r={},d={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=i(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; def (def_name) (params) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>def_name</code>: definition name</li><li><code>params</code>: parameters</li><li><code>block</code>: body of the definition</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Define a command and run it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def say-hi <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> say-hi
</code></pre></div><p>Define a command and run it with parameter(s)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def say-sth <span class="token punctuation">[</span>sth: string<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$sth</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> say-sth hi
</code></pre></div>`,11);function m(e,f){return t(),o("div",null,[a("h1",d,[p,l,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var _=n(r,[["render",m],["__file","def.html.vue"]]);export{_ as default};
