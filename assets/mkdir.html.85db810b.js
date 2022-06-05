import{_ as s,u as r,o,c as d,a as e,t,d as n,e as c}from"./app.3a8901ae.js";const i={computed:{frontmatter(){return r().value}}},h={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=n(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; mkdir ...rest --show-created-paths</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the name(s) of the path(s) to create</li><li><code>--show-created-paths</code>: show the path(s) created.</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Make a directory named foo</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> foo
</code></pre></div><p>Make multiple directories and show the paths created</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> -s foo/bar foo2
</code></pre></div>`,9);function f(_,g,k,x,b,a){return o(),d("div",null,[e("h1",h,[l,p,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var w=s(i,[["render",f],["__file","mkdir.html.vue"]]);export{w as default};
