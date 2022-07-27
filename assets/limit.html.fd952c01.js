import{_ as s,o as r,c as n,a as e,t,d as o,e as i}from"./app.760d3a08.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),h={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; limit (limit)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>limit</code>: Number of rows to extract for query</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Limits selection from table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> into db
    <span class="token operator">|</span> from table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> limit <span class="token number">10</span>
    <span class="token operator">|</span> describe
</code></pre></div>`,7);function u(a,_){return r(),n("div",null,[e("h1",l,[d,p,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),m])}var b=s(c,[["render",u],["__file","limit.html.vue"]]);export{b as default};
