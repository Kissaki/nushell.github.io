import{_ as s,u as r,o as n,c as o,a,t,d,e as c}from"./app.3a8901ae.js";const i={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=d(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; metadata (expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>expression</code>: the expression you want metadata for</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the metadata of a variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> metadata <span class="token variable">$a</span>
</code></pre></div><p>Get the metadata of the input</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> metadata
</code></pre></div>`,9);function _(f,g,x,v,b,e){return n(),o("div",null,[a("h1",l,[p,h,a("code",null,t(e.frontmatter.title),1)]),a("div",u,t(e.frontmatter.usage),1),m])}var w=s(i,[["render",_],["__file","metadata.html.vue"]]);export{w as default};
