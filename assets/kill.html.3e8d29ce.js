import{_ as t,u as n,o,c as r,a as e,t as s,d as l,e as i}from"./app.3a8901ae.js";const c={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=l(),u={style:{"white-space":"pre-wrap"}},f=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; kill (pid) ...rest --force --quiet --signal</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pid</code>: process id of process that is to be killed</li><li><code>...rest</code>: rest of processes to kill</li><li><code>--force</code>: forcefully kill the process</li><li><code>--quiet</code>: won&#39;t print anything to the console</li><li><code>--signal {int}</code>: signal decimal number to be sent instead of the default 15 (unsupported on Windows)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Kill the pid using the most memory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> sort-by mem <span class="token operator">|</span> last <span class="token operator">|</span> <span class="token function">kill</span> <span class="token variable">$in</span>.pid
</code></pre></div><p>Force kill a given pid</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">kill</span> --force <span class="token number">12345</span>
</code></pre></div><p>Send INT signal</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">kill</span> -s <span class="token number">2</span> <span class="token number">12345</span>
</code></pre></div>`,11);function g(m,k,_,b,x,a){return o(),r("div",null,[e("h1",p,[d,h,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),f])}var y=t(c,[["render",g],["__file","kill.html.vue"]]);export{y as default};
