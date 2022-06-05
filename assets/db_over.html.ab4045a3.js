import{_ as r,u as s,o,c as n,a as e,t,d,e as i}from"./app.3a8901ae.js";const c={computed:{frontmatter(){return s().value}}},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=d(),u={style:{"white-space":"pre-wrap"}},_=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db over ...partition-by</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...partition-by</code>: columns to partition the window function</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Adds a partition to a function expresssion</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token keyword">function</span> avg col_a <span class="token operator">|</span> db over col_b
</code></pre></div>`,7);function m(f,b,g,x,v,a){return o(),n("div",null,[e("h1",l,[h,p,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),_])}var w=r(c,[["render",m],["__file","db_over.html.vue"]]);export{w as default};
