import{_ as t,o as n,c as o,a,t as e,d as r,e as c}from"./app.760d3a08.js";const p={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str screaming-snake-case ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally convert text to SCREAMING_SNAKE_CASE by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert a string to SCREAMING_SNAKE_CASE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&quot;NuShell&quot;</span> <span class="token operator">|</span> str screaming-snake-case
</code></pre></div><p>convert a string to SCREAMING_SNAKE_CASE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&quot;this_is_the_second_case&quot;</span> <span class="token operator">|</span> str screaming-snake-case
</code></pre></div><p>convert a string to SCREAMING_SNAKE_CASE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;this-is-the-first-case&quot;</span> <span class="token operator">|</span> str screaming-snake-case
</code></pre></div><p>convert a column from a table to SCREAMING_SNAKE_CASE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu_test, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str screaming-snake-case lang
</code></pre></div>`,13);function g(s,_){return n(),o("div",null,[a("h1",i,[l,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",h,e(s.$frontmatter.usage),1),u])}var m=t(p,[["render",g],["__file","str_screaming-snake-case.html.vue"]]);export{m as default};
