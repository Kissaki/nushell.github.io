import{_ as n,u as t,o,c as p,a,t as e,d as c,e as r}from"./app.3a8901ae.js";const l={computed:{frontmatter(){return t().value}}},u={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; take (n)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>n</code>: the number of elements to take</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Take two elements</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>editions<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">2015</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2018</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2021</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> take <span class="token number">2</span>
</code></pre></div><p>Take the first value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> take
</code></pre></div>`,9);function m(_,b,f,g,x,s){return o(),p("div",null,[a("h1",u,[i,d,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),k])}var w=n(l,[["render",m],["__file","take.html.vue"]]);export{w as default};
