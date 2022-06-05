import{_ as s,r as t,o,c as r,a as e,b as p,e as c,d as a}from"./app.3a8901ae.js";const l={},d=c(`<p>The tags commands allows users to access the metadata of the previous value in the pipeline. This command may be run on multiple values of input as well.</p><p>As of writing this, the only metadata returned includes:</p><ul><li><code>span</code>: the start and end indices of the previous value&#39;s substring location</li><li><code>anchor</code>: the source where data was loaded from; this may not appear if the previous pipeline value didn&#39;t actually have a source (like trying to <code>open</code> a dir, or running <code>ls</code> on a dir)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> README.md <span class="token operator">|</span> tags
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 span   \u2502 <span class="token punctuation">[</span>row end start<span class="token punctuation">]</span>
 anchor \u2502 /Users/danielh/Projects/github/nushell/README.md
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> README.md <span class="token operator">|</span> tags <span class="token operator">|</span> get span
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 start \u2502 <span class="token number">5</span>
 end   \u2502 <span class="token number">14</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> tags <span class="token operator">|</span> first <span class="token number">3</span> <span class="token operator">|</span> get span
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 start \u2502 end</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502     <span class="token number">0</span> \u2502   <span class="token number">2</span>
 <span class="token number">1</span> \u2502     <span class="token number">0</span> \u2502   <span class="token number">2</span>
 <span class="token number">2</span> \u2502     <span class="token number">0</span> \u2502   <span class="token number">2</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,8),i=a("More useful information on the "),u=e("code",null,"tags",-1),h=a(" command can be found by referencing "),m={href:"https://www.nushell.sh/book/metadata.html",target:"_blank",rel:"noopener noreferrer"},k=a("The Nu Book's entry on Metadata");function g(b,f){const n=t("ExternalLinkIcon");return o(),r("div",null,[d,e("p",null,[i,u,h,e("a",m,[k,p(n)])])])}var v=s(l,[["render",g],["__file","tags.html.vue"]]);export{v as default};
