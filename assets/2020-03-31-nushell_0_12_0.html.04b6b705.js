import{_ as r,r as s,o as i,c as d,a as o,b as a,d as e,e as n}from"./app.3a8901ae.js";var l="/assets/0_12_0_jupyter.53cad4ec.png";const h={},c=o("h1",{id:"nushell-0-12-0",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#nushell-0-12-0","aria-hidden":"true"},"#"),e(" Nushell 0.12.0")],-1),u=o("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),m=o("p",null,"We're excited to release version 0.12.0 of Nu!",-1),p=o("h1",{id:"where-to-get-it",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),g=e("Nu 0.12.0 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.12.0",target:"_blank",rel:"noopener noreferrer"},w=e("pre-built binaries"),_=e(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=e("crates.io"),y=e(". If you have Rust installed you can install it using "),x=o("code",null,"cargo install nu",-1),k=e("."),j=n(`<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s new</h1><h2 id="automatic-cd-jonathandturner" tabindex="-1"><a class="header-anchor" href="#automatic-cd-jonathandturner" aria-hidden="true">#</a> Automatic <code>cd</code> (jonathandturner)</h2><div class="language-text ext-text"><pre class="language-text"><code>nushell on \u{1F4D9} master is \u{1F4E6} v0.12.0 via \u{1F980} v1.42.0
\u276F docs
nushell/docs on \u{1F4D9} master
\u276F ..
nushell on \u{1F4D9} master is \u{1F4E6} v0.12.0 via \u{1F980} v1.42.0
</code></pre></div><p>Fish and Windows users rejoice, you can now <code>cd</code> to a directory or drive by typing its name in the shell. This also allows Windows users to change drives by giving just the drive name. Now, when you use the drive letter, we&#39;ll switch drives and return you to your previous working directory on that drive (eg <code>D:</code> will change to the D: drive and <code>cd</code> to the path you had been at previousy).</p><h2 id="type-inference-andrasio" tabindex="-1"><a class="header-anchor" href="#type-inference-andrasio" aria-hidden="true">#</a> Type inference (andrasio)</h2><div class="language-text ext-text"><pre class="language-text"><code>\u276F open tests/fixtures/formats//caco3_plastics.csv | get cif_per_net_weight
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 &lt;value&gt;
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502  0.2300
 1 \u2502  0.3100
 2 \u2502  0.1400
 3 \u2502  0.2300
 4 \u2502  0.2100
 5 \u2502  0.2800
 6 \u2502  0.3000
 7 \u2502  0.2500
 8 \u2502  0.2800
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
nushell on \u{1F4D9} master is \u{1F4E6} v0.12.0 via \u{1F980} v1.42.0
\u276F open tests/fixtures/formats//caco3_plastics.csv | get cif_per_net_weight | sum
2.23
</code></pre></div><p>We&#39;ve been hard at work at improving how we read in unstructured data. In this release, you&#39;ll see the beginning of type inference as data is read in. In the above example, you can see how we now autodetect decimal numbers and then can later sum them together.</p><h2 id="jupyter-notebook-support-jonathandturner" tabindex="-1"><a class="header-anchor" href="#jupyter-notebook-support-jonathandturner" aria-hidden="true">#</a> Jupyter notebook support (jonathandturner)</h2><p><img src="`+l+'" alt="image of Nu in Jupyter notebook"></p>',11),C=e("Nu's core design goal is that it should be easier to work with your system and your data. In this release, we take a step beyond being just a shell with "),N={href:"https://github.com/nushell/nu_jupyter",target:"_blank",rel:"noopener noreferrer"},D=e("Jupyter notebook support"),I=e("."),W=n(`<h2 id="ls-all-quebin31" tabindex="-1"><a class="header-anchor" href="#ls-all-quebin31" aria-hidden="true">#</a> <code>ls --all</code> (quebin31)</h2><div class="language-text ext-text"><pre class="language-text"><code>\u276F ls
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502                        name                         \u2502 type \u2502   size   \u2502   modified
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 CODE_OF_CONDUCT.md                                  \u2502 File \u2502   3.4 KB \u2502 5 months ago
  1 \u2502 Cargo.lock                                          \u2502 File \u2502 104.5 KB \u2502 23 mins ago
  2 \u2502 Cargo.toml                                          \u2502 File \u2502   5.5 KB \u2502 23 mins ago
...

\u276F ls --all
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502                        name                         \u2502 type \u2502   size   \u2502   modified
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 .azure                                              \u2502 Dir  \u2502          \u2502 2 weeks ago
  1 \u2502 .cargo                                              \u2502 Dir  \u2502          \u2502 2 weeks ago
  2 \u2502 .circleci                                           \u2502 Dir  \u2502          \u2502 2 weeks ago
...
</code></pre></div><p>With 0.12.0, you can now show hidden files when listing directory contents with <code>ls</code>.</p><h2 id="from-ics-and-from-vcf-pulpdrew" tabindex="-1"><a class="header-anchor" href="#from-ics-and-from-vcf-pulpdrew" aria-hidden="true">#</a> <code>from-ics</code> and <code>from-vcf</code> (pulpdrew)</h2><p>The file support contines to improve, as we add support for vCard and iCal file formats.</p><h2 id="to-md-and-to-html-jonathandturner" tabindex="-1"><a class="header-anchor" href="#to-md-and-to-html-jonathandturner" aria-hidden="true">#</a> <code>to-md</code> and <code>to-html</code> (jonathandturner)</h2><div class="language-text ext-text"><pre class="language-text"><code>\u276F ls | to-md
|name|type|size|modified|
|-|-|-|-|
|CODE_OF_CONDUCT.md|File|3.4 KB|5 months ago|
|Cargo.lock|File|104.5 KB|21 mins ago|
</code></pre></div><p>You can now output to markdown and html using the new converters.</p><h2 id="headers-samhedin" tabindex="-1"><a class="header-anchor" href="#headers-samhedin" aria-hidden="true">#</a> <code>headers</code> (samhedin)</h2><div class="language-text ext-text"><pre class="language-text"><code>\u276F open tests/fixtures/formats/sample_data.ods | get SalesOrders
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502  Column0   \u2502 Column1 \u2502 Column2  \u2502 Column3 \u2502 Column4 \u2502  Column5  \u2502  Column6
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 OrderDate  \u2502 Region  \u2502 Rep      \u2502 Item    \u2502 Units   \u2502 Unit Cost \u2502 Total
  1 \u2502 2018-01-06 \u2502 East    \u2502 Jones    \u2502 Pencil  \u2502 95.0000 \u2502    1.9900 \u2502  189.0500

\u276F open tests/fixtures/formats/sample_data.ods | get SalesOrders | headers
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502 OrderDate  \u2502 Region  \u2502   Rep    \u2502  Item   \u2502  Units  \u2502 Unit Cost \u2502   Total
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 2018-01-06 \u2502 East    \u2502 Jones    \u2502 Pencil  \u2502 95.0000 \u2502    1.9900 \u2502  189.0500
  1 \u2502 2018-01-23 \u2502 Central \u2502 Kivell   \u2502 Binder  \u2502 50.0000 \u2502   19.9900 \u2502  999.4999
</code></pre></div><p>Sometimes when working with data, you&#39;ve managed to read in columns of data and notice that the first row is the headers you want. Previously, this required a lot of twiddling to lift the row into being the header. With 0.12.0, this has become much simpler with the <code>header</code> command.</p><h2 id="ps-full-mode-jonathandturner" tabindex="-1"><a class="header-anchor" href="#ps-full-mode-jonathandturner" aria-hidden="true">#</a> <code>ps --full</code> mode (jonathandturner)</h2><p>We&#39;re extending the information you can get back from <code>ps</code>. You are now able to get the original commandline and more for each process using the new <code>ps --full</code>.</p><h2 id="rm-can-now-take-multiple-arguments-to-remove-multiple-files-at-once-pulpdrew" tabindex="-1"><a class="header-anchor" href="#rm-can-now-take-multiple-arguments-to-remove-multiple-files-at-once-pulpdrew" aria-hidden="true">#</a> <code>rm</code> can now take multiple arguments to remove multiple files at once (pulpdrew)</h2><p>Sometimes we&#39;re missing a feature and you wonder how we made it that long \u{1F604}. In this release, you can now pass multiple files to <code>rm</code> for deletion.</p><h2 id="row-rotation-jonathandturner" tabindex="-1"><a class="header-anchor" href="#row-rotation-jonathandturner" aria-hidden="true">#</a> Row rotation (jonathandturner)</h2><div class="language-text ext-text"><pre class="language-text"><code>\u276F sys
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 host    \u2502 [row 7 columns]
 cpu     \u2502 [row cores current ghz max ghz min ghz]
 disks   \u2502 [table 9 rows]
 mem     \u2502 [row free swap free swap total total]
 temp    \u2502 [table 8 rows]
 net     \u2502 [table 4 rows]
 battery \u2502 [table 1 rows]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>When working with data with lots of columns, it can sometimes be a pain to watch it print to the screen only to see that the data is missing columns because they won&#39;t fit. In this version, we&#39;re experimenting with a way to help this by auto-rotating a row when it is printed by itself. This will allow more of the row to fit into the screen.</p><h2 id="configurable-table-headers-amanita-muscaria" tabindex="-1"><a class="header-anchor" href="#configurable-table-headers-amanita-muscaria" aria-hidden="true">#</a> Configurable table headers (Amanita-muscaria)</h2><p>You may have noticed that the headers in the above examples were centered. How&#39;s that for sneaking a feature in?</p><p>With 0.12.0, you can configure your table look a bit more by changing how the headers are displayed. Here are the new <code>config</code> settings:</p><ul><li>header_color: Available colors are from term::color module</li><li>header_align: Sets header alignment center/left/right</li><li>header_style: Sets style bold, underlined, italic. More than one can be used</li></ul><h2 id="lots-of-bugfixes-improvements-sosthene-guedon-quebin31-neuronull-andrasio-thegedge-vsoch-jonathandturner-jonstodle" tabindex="-1"><a class="header-anchor" href="#lots-of-bugfixes-improvements-sosthene-guedon-quebin31-neuronull-andrasio-thegedge-vsoch-jonathandturner-jonstodle" aria-hidden="true">#</a> Lots of bugfixes/improvements (Sosthene-Guedon, quebin31, neuronull, andrasio, thegedge, vsoch, jonathandturner, jonstodle)</h2><p>Open no longer fails silently, improved CSV opening, improve canonicalize of filenames, <code>sys</code> now properly says user sessions, moved <code>shuffle</code> to being an internal command, relaxed file modes, cleaned up <code>which</code> implementation, fix Docker build matrix, streams can now be interrupted, improvements to <code>du</code>, <code>get</code> now will remove blank values for easier processing, respect CARGO_TARGET_DIR when set, allow <code>..</code> and <code>/</code> to be mv targets,</p><h2 id="documentation-improvements-pulpdrew-nickgerace-waldyrious-kloun" tabindex="-1"><a class="header-anchor" href="#documentation-improvements-pulpdrew-nickgerace-waldyrious-kloun" aria-hidden="true">#</a> Documentation improvements (pulpdrew, nickgerace, waldyrious, kloun)</h2><p>Docs for <code>from-ics</code> and <code>from-vcf</code>, quickstart section for Docker users, docs for <code>skip</code> and <code>skip-while</code>, typos and whitespace fixes, typo in <code>calc</code> docs</p><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>&quot;Just keep going!&quot; as Yehuda Katz would say, and we intend to. Lots of internal improvements are coming, and of course aliases which has become a daily request.</p>`,28),O=e("We'd also like to hear from you. Let us know what would make Nu work better for your workflows, drop us a line in "),T={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},q=e("discord"),z=e(" or "),B={href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"},R=e("github"),S=e(". We'd love to hear from you!");function E(F,A){const t=s("ExternalLinkIcon");return i(),d("div",null,[c,u,m,p,o("p",null,[g,o("a",f,[w,a(t)]),_,o("a",b,[v,a(t)]),y,x,k]),j,o("p",null,[C,o("a",N,[D,a(t)]),I]),W,o("p",null,[O,o("a",T,[q,a(t)]),z,o("a",B,[R,a(t)]),S])])}var J=r(h,[["render",E],["__file","2020-03-31-nushell_0_12_0.html.vue"]]);export{J as default};
