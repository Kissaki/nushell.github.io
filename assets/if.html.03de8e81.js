import{_ as a,o as s,c as n,e}from"./app.3a8901ae.js";const t={},o=e(`<p>Run blocks if a condition is true or false.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>then_case<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>else_case<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;condition&gt;</code> the condition that must match</li><li><code>&lt;then_case&gt;</code> block to run if condition is true</li><li><code>&lt;else_case&gt;</code> block to run if condition is false</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Run a block if a condition is true</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token variable">$x</span> <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;greater than 5&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;less than or equal to 5&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Run a block if a condition is false</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token variable">$x</span> <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;greater than 5&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;less than or equal to 5&#39;</span> <span class="token punctuation">}</span>
</code></pre></div>`,12),p=[o];function l(c,i){return s(),n("div",null,p)}var u=a(t,[["render",l],["__file","if.html.vue"]]);export{u as default};
