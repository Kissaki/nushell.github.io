import{_ as s,o as n,c as r,a as e,t as a,d as o,e as i}from"./app.760d3a08.js";const p={},d={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),u={style:{"white-space":"pre-wrap"}},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; input (prompt) --bytes-until --suppress-output</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>prompt</code>: prompt to show the user</li><li><code>--bytes-until {string}</code>: read bytes (not text) until a stop byte</li><li><code>--suppress-output</code>: don&#39;t print keystroke values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get input from the user, and assign to a variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> user-input <span class="token operator">=</span> <span class="token punctuation">(</span>input<span class="token punctuation">)</span>
</code></pre></div>`,7);function m(t,_){return n(),r("div",null,[e("h1",d,[c,l,e("code",null,a(t.$frontmatter.title),1)]),e("div",u,a(t.$frontmatter.usage),1),h])}var g=s(p,[["render",m],["__file","input.html.vue"]]);export{g as default};
