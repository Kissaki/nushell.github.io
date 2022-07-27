import{_ as n,o as t,c as l,a,t as s,d as r,e as o}from"./app.760d3a08.js";const i={},c={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),u={style:{"white-space":"pre-wrap"}},h=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fill-null (fill)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>fill</code>: Expression to use to fill the null values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Fills the null values by 0</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> <span class="token builtin class-name">shift</span> <span class="token number">2</span> <span class="token operator">|</span> fill-null <span class="token number">0</span>
</code></pre></div>`,7);function f(e,m){return t(),l("div",null,[a("h1",c,[p,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",u,s(e.$frontmatter.usage),1),h])}var k=n(i,[["render",f],["__file","_fill-null.html.vue"]]);export{k as default};
