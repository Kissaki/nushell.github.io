import{_ as a,o as s,c as n,e}from"./app.3a8901ae.js";const t={},o=e(`<p>Sets a value in the config</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;key&gt;</code> variable name to set</li><li><code>&lt;value&gt;</code> value to use</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set auto pivoting</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> pivot_mode always
</code></pre></div><p>Set line editor options</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> line_editor <span class="token punctuation">[</span><span class="token punctuation">[</span>edit_mode, completion_type<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>emacs circular<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre></div><p>Set coloring options</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> color_config <span class="token punctuation">[</span><span class="token punctuation">[</span>header_align header_bold<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>left <span class="token variable">$true</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre></div><p>Set nested options</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> color_config.header_color white
</code></pre></div>`,16),p=[o];function c(l,i){return s(),n("div",null,p)}var u=a(t,[["render",c],["__file","config-set.html.vue"]]);export{u as default};
