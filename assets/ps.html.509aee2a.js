import{_ as n,o as s,c as a,e}from"./app.3a8901ae.js";const p={},o=e(`<p>This command shows information about system processes.</p><p>Syntax: <code>ps</code></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment">#  \u2502 pid   \u2502 name                                                               \u2502 status  \u2502 cpu</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">50</span> \u2502 <span class="token number">10184</span> \u2502 firefox.exe                                                        \u2502 Running \u2502 <span class="token number">0.000000000000000</span>
 <span class="token number">51</span> \u2502 <span class="token number">11584</span> \u2502 WindowsTerminal.exe                                                \u2502 Running \u2502 <span class="token number">0.000000000000000</span>
 <span class="token number">52</span> \u2502 <span class="token number">11052</span> \u2502 conhost.exe                                                        \u2502 Running \u2502 <span class="token number">0.000000000000000</span>
 <span class="token number">53</span> \u2502  <span class="token number">7076</span> \u2502 nu.exe                                                             \u2502 Running \u2502 <span class="token number">0.000000000000000</span>
   <span class="token punctuation">..</span>.
 <span class="token number">66</span> \u2502  <span class="token number">3000</span> \u2502 Code.exe                                                           \u2502 Running \u2502 <span class="token number">0.000000000000000</span>
 <span class="token number">67</span> \u2502  <span class="token number">5388</span> \u2502 conhost.exe                                                        \u2502 Running \u2502 <span class="token number">0.000000000000000</span>
 <span class="token number">68</span> \u2502  <span class="token number">6268</span> \u2502 firefox.exe                                                        \u2502 Running \u2502 <span class="token number">0.000000000000000</span>
 <span class="token number">69</span> \u2502  <span class="token number">8972</span> \u2502 nu_plugin_ps.exe                                                   \u2502 Running \u2502 <span class="token number">58.00986000000000</span>
\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Find processes with the highest cpu time</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> -l <span class="token operator">|</span> sort-by cpu_time <span class="token operator">|</span> last <span class="token number">2</span>
 <span class="token comment"># \u2502 pid \u2502       name       \u2502 status  \u2502  cpu   \u2502   mem    \u2502 virtual \u2502     cpu_time      \u2502 parent \u2502         exe          \u2502       command</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">396</span> \u2502 Google Chrome    \u2502 Running \u2502 <span class="token number">0.0000</span> \u2502 <span class="token number">271.6</span> MB \u2502  <span class="token number">5.8</span> GB \u2502 6hr 20min 28sec   \u2502      <span class="token number">1</span> \u2502 /Applications/Google \u2502 /Applications/Google
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502 173ms 641us 315ns \u2502        \u2502 Chrome.app/Contents/ \u2502 Chrome.app/Contents/
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 MacOS/Google         \u2502 MacOS/Google
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 Chrome               \u2502 Chrome
 <span class="token number">1</span> \u2502 <span class="token number">444</span> \u2502 Google Chrome He \u2502 Running \u2502 <span class="token number">0.0000</span> \u2502 <span class="token number">398.9</span> MB \u2502  <span class="token number">5.3</span> GB \u2502 10hr 36min 17sec  \u2502    <span class="token number">396</span> \u2502 /Applications/Google \u2502 /Applications/Google
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502 304ms 66us 889ns  \u2502        \u2502 Chrome.app/Contents/ \u2502 Chrome.app/Contents/
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 Frameworks/Google    \u2502 Frameworks/Google
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 Chrome               \u2502 Chrome
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 Framework.framework/ \u2502 Framework.framework/
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 Versions/84.0.4147.1 \u2502 Versions/84.0.4147.1
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 <span class="token number">25</span>/Helpers/Google    \u2502 <span class="token number">25</span>/Helpers/Google
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 Chrome Helper        \u2502 Chrome Helper
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 <span class="token punctuation">(</span>GPU<span class="token punctuation">)</span>.app/Contents/M \u2502 <span class="token punctuation">(</span>GPU<span class="token punctuation">)</span>.app/Contents/M
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 acOS/Google          \u2502 acOS/Google
   \u2502     \u2502                  \u2502         \u2502        \u2502          \u2502         \u2502                   \u2502        \u2502 Chrome Helper <span class="token punctuation">(</span>GPU<span class="token punctuation">)</span>  \u2502 Chrome Helper <span class="token punctuation">(</span>GPU<span class="token punctuation">)</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,6),t=[o];function c(r,l){return s(),a("div",null,t)}var m=n(p,[["render",c],["__file","ps.html.vue"]]);export{m as default};
