import{_ as s,u as r,o as n,c as o,a as e,t,d as i,e as c}from"./app.3a8901ae.js";const l={computed:{frontmatter(){return r().value}}},d={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=i(),f={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; format filesize (field) (format value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>field</code>: the name of the column to update</li><li><code>format value</code>: the format into which convert the filesizes</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the size row to KB</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">format</span> filesize size KB
</code></pre></div><p>Convert the apparent row to B</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">du</span> <span class="token operator">|</span> <span class="token function">format</span> filesize apparent B
</code></pre></div>`,9);function m(_,g,v,x,k,a){return n(),o("div",null,[e("h1",d,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",f,t(a.frontmatter.usage),1),u])}var z=s(l,[["render",m],["__file","format_filesize.html.vue"]]);export{z as default};
