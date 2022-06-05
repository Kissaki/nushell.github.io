import{_ as a,o as e,c as s,e as n}from"./app.3a8901ae.js";const t={},c=n(`<p>Execute command.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;command&gt;</code> the command to execute</li><li>...args: any additional arguments for command</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Execute &#39;ps aux&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span> <span class="token function">ps</span> aux
</code></pre></div><p>Execute &#39;nautilus&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span> nautilus
</code></pre></div>`,12),l=[c];function o(r,p){return e(),s("div",null,l)}var d=a(t,[["render",o],["__file","exec.html.vue"]]);export{d as default};
