import{_ as n,r,o as s,c as i,a as e,b as t,d as o,e as d}from"./app.3a8901ae.js";const l={},h=e("h1",{id:"nushell-0-11-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-11-0","aria-hidden":"true"},"#"),o(" Nushell 0.11.0")],-1),c=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=e("p",null,"We're excited to release the 0.11.0 release of Nu. This release continues to push us forward with new commands, improved engine internals, bugfixes, and more.",-1),m=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),o(" Where to get it")],-1),p=o("Nu 0.11.0 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.11.0",target:"_blank",rel:"noopener noreferrer"},g=o("pre-built binaries"),w=o(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=o("crates.io"),_=o(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),y=o("."),k=d(`<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s new</h1><h2 id="compound-shorthand-flags-amanita-muscaria" tabindex="-1"><a class="header-anchor" href="#compound-shorthand-flags-amanita-muscaria" aria-hidden="true">#</a> Compound shorthand flags (Amanita-muscaria)</h2><p>Over the last few releases, we&#39;ve seen the ability for flags to have shorthand version. You no longer needed to use <code>--full</code> if the flag supported the shorter <code>-f</code> version.</p><p>In this release, we&#39;ve taken it one step further and allowed you to combine multiple shorthand flags into one group. For example, <code>ls --full --short-names</code> can now be written as <code>ls -fs</code></p><h2 id="improvements-and-cleanup-for-ls-bocom-quebin31-lincis-equal-l2" tabindex="-1"><a class="header-anchor" href="#improvements-and-cleanup-for-ls-bocom-quebin31-lincis-equal-l2" aria-hidden="true">#</a> Improvements and cleanup for <code>ls</code> (Bocom, quebin31, lincis, equal-l2)</h2><p>A lot of improvements went into <code>ls</code> for this release. The updated <code>ls</code> command is now more forgiving of coming across directories the user can&#39;t access and will simply show what it can and continue, it can work with named pipes on systems with them, it shows a more reasonable display for zero-length files, and the internals of <code>ls</code> have been cleaned a bit to make way for future improvements.</p><h2 id="external-command-output-no-longer-blocks-thegedge" tabindex="-1"><a class="header-anchor" href="#external-command-output-no-longer-blocks-thegedge" aria-hidden="true">#</a> External command output no longer blocks (thegedge)</h2><p>Continuing our series of improvements to working with external commands, we have a few updates in this release. The first of these updates is an improvement to how content streams out of externals. With 0.11.0, this content will no longer block, which allows content to flow more easily between external and internal commands. As a result, some corner cases that came up with a series of commands in a pipeline not working because one blocks no longer is an issue.</p><h2 id="allow-externals-to-output-texts-or-binary-jonathandturner-thegedge" tabindex="-1"><a class="header-anchor" href="#allow-externals-to-output-texts-or-binary-jonathandturner-thegedge" aria-hidden="true">#</a> Allow externals to output texts or binary (jonathandturner, thegedge)</h2><p>The second update to externals now allows externals to freely output either text or strings, and for this content to be read in a block at a time into Nu. This allows externals to stream any content they wish, and for this stream to continue for as long as needed.</p><h2 id="new-shuffle-command-hirschenberger" tabindex="-1"><a class="header-anchor" href="#new-shuffle-command-hirschenberger" aria-hidden="true">#</a> New <code>shuffle</code> command (hirschenberger)</h2><p>With 0.11.0, we introduce a new <code>shuffle</code> command that will let you shuffle the rows of a table. This allows you to choose to not always process data the same way, or to search through data more stochastically.</p><div class="language-text ext-text"><pre class="language-text"><code>\u276F help commands | shuffle
\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #   \u2502 name         \u2502 description
\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   0 \u2502 textview     \u2502 Autoview of text data.
   1 \u2502 pwd          \u2502 Output the current working directory.
   2 \u2502 sort-by      \u2502 Sort by the given columns.
   3 \u2502 tree         \u2502 View the contents of the pipeline as a tree.
   4 \u2502 du           \u2502 Find disk usage sizes of specified items
   5 \u2502 table        \u2502 View the contents of the pipeline as a table.
</code></pre></div><h2 id="new-column-rename-command-andrasio" tabindex="-1"><a class="header-anchor" href="#new-column-rename-command-andrasio" aria-hidden="true">#</a> New column <code>rename</code> command (andrasio)</h2><p>You can also now use the new <code>rename</code> command to rename a column to a new name.</p><div class="language-text ext-text"><pre class="language-text"><code>\u276F help commands | rename action description
\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #   \u2502 action       \u2502 description
\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   0 \u2502 append       \u2502 Append the given row to the table
   1 \u2502 autoview     \u2502 View the contents of the pipeline as a table or list.
   2 \u2502 average      \u2502 Compute the average of a column of numerical values.
   3 \u2502 binaryview   \u2502 Autoview of binary data.
</code></pre></div><h2 id="merge-the-env-command-into-the-nu-variable-jonathandturner" tabindex="-1"><a class="header-anchor" href="#merge-the-env-command-into-the-nu-variable-jonathandturner" aria-hidden="true">#</a> Merge the <code>env</code> command into the <code>$nu</code> variable (jonathandturner)</h2><p>The <code>$nu</code> variable has grown to include values that were previously part of <code>env</code>, effectively merging the two into the <code>$nu</code> variable. This allows you to easily find out where the history file is stored, where config is stored, and where a good temp directory are all in one place:</p><div class="language-text ext-text"><pre class="language-text"><code>\u276F echo $nu.home-dir $nu.temp-dir $nu.config-path $nu.history-path
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 &lt;value&gt;
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 C:\\Users\\joturner
 1 \u2502 C:\\Users\\joturner\\AppData\\Local\\Temp\\
 2 \u2502 C:\\Users\\joturner\\AppData\\Roaming\\nu shell developers\\nu\\config.toml
 3 \u2502 C:\\Users\\joturner\\AppData\\Local\\nu shell developers\\nu\\history.txt
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="the-format-command-can-now-use-column-paths-andrasio" tabindex="-1"><a class="header-anchor" href="#the-format-command-can-now-use-column-paths-andrasio" aria-hidden="true">#</a> The <code>format</code> command can now use column paths (andrasio)</h2><p>The <code>format</code> command is a handy way of putting column data into a string for displaying, but it previously had the restriction that you couldn&#39;t use it to print out information that was deeper in the table. With 0.11.0, we&#39;ve removed that restriction.</p><div class="language-text ext-text"><pre class="language-text"><code>\u276F open Cargo.toml | format &quot;The edition is {package.edition}&quot;
The edition is 2018
</code></pre></div><h2 id="allow-help-to-be-printed-with-h-in-more-cases-rabisg0" tabindex="-1"><a class="header-anchor" href="#allow-help-to-be-printed-with-h-in-more-cases-rabisg0" aria-hidden="true">#</a> Allow help to be printed with <code>-h</code> in more cases (rabisg0)</h2><p>You should now be able to use <code>-h</code> to reach the help of a command in more cases than was previously allowed, making it a universal way to get to the help text.</p><h2 id="improved-documentation-coolshaurya-amanita-muscaria-notryanb" tabindex="-1"><a class="header-anchor" href="#improved-documentation-coolshaurya-amanita-muscaria-notryanb" aria-hidden="true">#</a> Improved documentation (coolshaurya, Amanita-muscaria, notryanb)</h2><p>Documentation for <code>du</code>, <code>uniq</code>, <code>debug</code>, and plugin docs have all been improved in this release.</p><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1>`,29),N=o("We're excited to continue to polish how Nu works to make it more reliable and more efficient. Of course, we're also working on adding new much-requested features like aliases in upcoming releases. If you'd like to help with aliases or with Nu in general -- even if you want to help with a part of the project outside of just coding -- we'd love to have you. Come visit us on "),T={href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"},A=o("github"),j=o(" or the "),q={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},C=o("discord"),I=o(".");function V(W,$){const a=r("ExternalLinkIcon");return s(),i("div",null,[h,c,u,m,e("p",null,[p,e("a",f,[g,t(a)]),w,e("a",b,[v,t(a)]),_,x,y]),k,e("p",null,[N,e("a",T,[A,t(a)]),j,e("a",q,[C,t(a)]),I])])}var B=n(l,[["render",V],["__file","2020-03-10-nushell_0_11_0.html.vue"]]);export{B as default};
