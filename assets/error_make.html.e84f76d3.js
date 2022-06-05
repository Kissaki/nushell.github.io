import{_ as t,u as e,o,c as r,a,t as n,d as p,e as c}from"./app.3a8901ae.js";const i={computed:{frontmatter(){return e().value}}},u={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; error make (error_struct)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>error_struct</code>: the error to create</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a custom error for a custom command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def foo <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">{</span>
      <span class="token builtin class-name">let</span> span <span class="token operator">=</span> <span class="token punctuation">(</span>metadata <span class="token variable">$x</span><span class="token punctuation">)</span>.span<span class="token punctuation">;</span>
      error <span class="token function">make</span> <span class="token punctuation">{</span>msg: <span class="token string">&quot;this is fishy&quot;</span>, label: <span class="token punctuation">{</span>text: <span class="token string">&quot;fish right here&quot;</span>, start: <span class="token variable">$span</span>.start, end: <span class="token variable">$span</span>.end <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>Create a simple custom error for a custom command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def foo <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">{</span>
      error <span class="token function">make</span> <span class="token punctuation">{</span>msg: <span class="token string">&quot;this is fishy&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div>`,9);function k(f,_,g,x,b,s){return o(),r("div",null,[a("h1",u,[l,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),m])}var q=t(i,[["render",k],["__file","error_make.html.vue"]]);export{q as default};
