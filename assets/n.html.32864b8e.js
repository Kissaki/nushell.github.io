import{_ as n,o as s,c as o,a as e,t,d as r,e as c}from"./app.760d3a08.js";const d={},i={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; n </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Make two directories and enter new shells for them, use <code>n</code> to jump to the next shell</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> foo bar<span class="token punctuation">;</span> enter foo<span class="token punctuation">;</span> enter <span class="token punctuation">..</span>/bar<span class="token punctuation">;</span> n
</code></pre></div><p>Run <code>n</code> several times and note the changes of current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> n
</code></pre></div>`,7);function _(a,f){return s(),o("div",null,[e("h1",i,[l,p,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}var m=n(d,[["render",_],["__file","n.html.vue"]]);export{m as default};
