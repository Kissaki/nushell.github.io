import{_ as a,o as e,c as s,e as n}from"./app.3a8901ae.js";const t={},r=n(`<p>Untrust a .nu-env file in the current or given directory</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> autoenv untrust <span class="token punctuation">(</span>dir<span class="token punctuation">)</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(dir)</code> Directory to disallow</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Disallow .nu-env file in current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> autoenv untrust
</code></pre></div><p>Disallow .nu-env file in directory foo</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> autoenv untrust foo
</code></pre></div>`,12),o=[r];function l(i,c){return e(),s("div",null,o)}var d=a(t,[["render",l],["__file","autoenv-untrust.html.vue"]]);export{d as default};
