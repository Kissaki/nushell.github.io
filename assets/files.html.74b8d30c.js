import{_ as a,o as e,c as s,e as n}from"./app.3a8901ae.js";const t={},o=n(`<h1 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h1><h3 id="editing-a-file-and-then-saving-the-changes" tabindex="-1"><a class="header-anchor" href="#editing-a-file-and-then-saving-the-changes" aria-hidden="true">#</a> Editing a file and then saving the changes</h3><p>Here we are making edits to <code>Cargo.toml</code>. We increase the patch version of the crate using <code>inc</code> and then save it back to the file. Use <code>help inc</code> to get more information.</p><p>Read the file&#39;s initial contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> get package.version
</code></pre></div><p>Output</p><p><code>0.59.0</code></p><p>Make the edit to the version number and save it.</p><p><em>Note: running this command should work but it will reorder the toml file alphabetically by section.</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> upsert package.version <span class="token punctuation">{</span> <span class="token operator">|</span>p<span class="token operator">|</span> <span class="token variable">$p</span> <span class="token operator">|</span> get package.version <span class="token operator">|</span> inc --patch <span class="token punctuation">}</span> <span class="token operator">|</span> save Cargo.toml
</code></pre></div><p>Output <em>none</em></p><p>View the changes we made to the file.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> get package.version
</code></pre></div><p>Output</p><p><code>0.59.1</code></p><hr><h3 id="parsing-a-file-in-a-non-standard-format" tabindex="-1"><a class="header-anchor" href="#parsing-a-file-in-a-non-standard-format" aria-hidden="true">#</a> Parsing a file in a non-standard format</h3><p>Suppose you have a file with the following format.</p><div class="language-text ext-text"><pre class="language-text"><code>band:album:year
Fugazi:Steady Diet of Nothing:1991
Fugazi:The Argument:2001
Fugazi:7 Songs:1988
Fugazi:Repeater:1990
Fugazi:In On The Kill Taker:1993
</code></pre></div><p>You can parse it into a table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> bands.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;:&quot;</span> Band Album Year <span class="token operator">|</span> skip <span class="token number">1</span> <span class="token operator">|</span> sort-by Year
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501
 # \u2502 Band   \u2502 Album                  \u2502 Year
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Fugazi \u2502 7 Songs                \u2502 1988
 1 \u2502 Fugazi \u2502 Repeater               \u2502 1990
 2 \u2502 Fugazi \u2502 Steady Diet of Nothing \u2502 1991
 3 \u2502 Fugazi \u2502 In On The Kill Taker   \u2502 1993
 4 \u2502 Fugazi \u2502 The Argument           \u2502 2001
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>You can alternatively do this using <code>parse</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">open</span> bands.txt <span class="token operator">|</span> lines <span class="token operator">|</span> parse <span class="token string">&quot;{Band}:{Album}:{Year}&quot;</span> <span class="token operator">|</span> skip <span class="token number">1</span> <span class="token operator">|</span> sort-by Year
</code></pre></div><p>Or, you can utilize the <code>headers</code> command to use the first row as a header row like. The only difference would be the headers would match the case of the text file. So, in this case, the headers would be lowercase.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> bands.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">|</span> headers <span class="token operator">|</span> sort-by year
</code></pre></div><hr><h3 id="word-occurrence-count-with-ripgrep" tabindex="-1"><a class="header-anchor" href="#word-occurrence-count-with-ripgrep" aria-hidden="true">#</a> Word occurrence count with Ripgrep</h3><p>Suppose you would like to check the number of lines the string &quot;Value&quot; appears per file in the nushell project, then sort those files by largest line count.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> rg -c Value <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;:&quot;</span> <span class="token function">file</span> line_count <span class="token operator">|</span> into int line_count <span class="token operator">|</span> sort-by line_count <span class="token operator">|</span> reverse
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 file                                 \u2502 line_count
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 crates/nu-source/src/meta.rs         \u2502         27
 1 \u2502 crates/nu-protocol/src/value/dict.rs \u2502         10
 2 \u2502 src/commands/config.rs               \u2502         10
 3 \u2502 crates/nu_plugin_sys/src/sys.rs      \u2502         10
 4 \u2502 src/commands/from_bson.rs            \u2502          9
 5 \u2502 src/utils/data_processing.rs         \u2502          9
 6 \u2502 src/deserializer.rs                  \u2502          8
 7 \u2502 src/commands/histogram.rs            \u2502          7
 8 \u2502 src/commands/split_column.rs         \u2502          6
 9 \u2502 src/data/dict.rs                     \u2502          6
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
... example output limited due to large output
</code></pre></div>`,33),p=[o];function r(c,i){return e(),s("div",null,p)}var d=a(t,[["render",r],["__file","files.html.vue"]]);export{d as default};
