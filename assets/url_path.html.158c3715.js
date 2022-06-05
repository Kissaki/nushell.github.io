import{_ as s,u as r,o as n,c as o,a,t,d as l,e as c}from"./app.3a8901ae.js";const p={computed:{frontmatter(){return r().value}}},i={id:"frontmatter-title",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; url path ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally operate by cell path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get path of a url</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com/foo/bar&#39;</span> <span class="token operator">|</span> url path
</code></pre></div><p>A trailing slash will be reflected in the path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com&#39;</span> <span class="token operator">|</span> url path
</code></pre></div>`,9);function _(g,f,x,b,k,e){return n(),o("div",null,[a("h1",i,[h,d,a("code",null,t(e.frontmatter.title),1)]),a("div",u,t(e.frontmatter.usage),1),m])}var w=s(p,[["render",_],["__file","url_path.html.vue"]]);export{w as default};
