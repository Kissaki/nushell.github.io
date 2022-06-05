import{_ as s,u as r,o,c as n,a as e,t,d as c,e as d}from"./app.3a8901ae.js";const l={computed:{frontmatter(){return r().value}}},p={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),_={style:{"white-space":"pre-wrap"}},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db collect </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Collect from a select query</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.db <span class="token operator">|</span> db <span class="token keyword">select</span> a <span class="token operator">|</span> db from table_1 <span class="token operator">|</span> db collect
</code></pre></div>`,5);function f(m,b,g,x,k,a){return o(),n("div",null,[e("h1",p,[i,h,e("code",null,t(a.frontmatter.title),1)]),e("div",_,t(a.frontmatter.usage),1),u])}var y=s(l,[["render",f],["__file","db_collect.html.vue"]]);export{y as default};
