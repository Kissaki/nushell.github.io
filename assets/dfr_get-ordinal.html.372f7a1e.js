import{_ as t,u as e,o,c as r,a,t as n,d as p,e as c}from"./app.3a8901ae.js";const l={computed:{frontmatter(){return e().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr get-ordinal </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns ordinal from a date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> dt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;2020-08-04T16:39:18+00:00&#39;</span> <span class="token operator">|</span> into datetime -z <span class="token string">&#39;UTC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$dt</span> <span class="token variable">$dt</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> dfr get-ordinal
</code></pre></div>`,5);function k(_,m,g,x,b,s){return o(),r("div",null,[a("h1",i,[d,u,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),f])}var $=t(l,[["render",k],["__file","dfr_get-ordinal.html.vue"]]);export{$ as default};
