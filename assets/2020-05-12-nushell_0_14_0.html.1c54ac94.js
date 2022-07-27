import{_ as s,o as i,c as r,a as e,b as t,d as a,e as n,r as d}from"./app.760d3a08.js";var h="/assets/0_14_0_help_examples.7db6f4dc.png";const l={},c=e("h1",{id:"nushell-0-14-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-14-0","aria-hidden":"true"},"#"),a(" Nushell 0.14.0")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),m=e("p",null,"We're excited to release version 0.14.0 of Nu!",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),g=a("Nu 0.14.0 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.14.0",target:"_blank",rel:"noopener noreferrer"},w=a("pre-built binaries"),b=a(" or from "),y={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},_=a("crates.io"),v=a(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),k=a("."),j=n(`<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="temporary-environment-variables-jonathandturner" tabindex="-1"><a class="header-anchor" href="#temporary-environment-variables-jonathandturner" aria-hidden="true">#</a> Temporary environment variables (jonathandturner)</h2><p>A feature requested by many, many folks is finally here. Up until now, to change an environment variable, you had to update the <code>config</code> settings, and then these changes would be permanent. This makes working with certain kinds of commands, which need some additional environment information, annoying to use.</p><p>With 0.14.0, you&#39;ll now be able to temporarily set an environment variable. To do so, you can use the new <code>with-env</code> command. This command takes the variable/value pair and the block to run once the environment is set:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; with-env [DEBUG true] { command arg1 arg2 }
</code></pre></div><p>Bash, as well as many other shells, use a handy shorthand form, which we also now support. You can write the above as:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; DEBUG=true command arg1 arg2
</code></pre></div><h2 id="starting-things-off-right-1ntegr8" tabindex="-1"><a class="header-anchor" href="#starting-things-off-right-1ntegr8" aria-hidden="true">#</a> Starting things off right (1ntEgr8)</h2><p>Modern desktops have a way to associate file types with applications and often have a way to run that application automatically when you open a file of that type. In macOS, you can use the <code>open</code> command, <code>start</code> on Windows, and a variety of related <code>start</code> command in Linux.</p><p>In 0.14.0, we&#39;ve added a unified <code>start</code> command that works across platforms that will run the associated application for a file type. For example, if you&#39;ve associated your .py files with VSCode, you can edit them now using <code>start myfile.py</code>.</p><h2 id="nu-gets-a-calendar-josephtlyons" tabindex="-1"><a class="header-anchor" href="#nu-gets-a-calendar-josephtlyons" aria-hidden="true">#</a> Nu gets a calendar (JosephTLyons)</h2><p>A fun surprise for this release is the recently-added <code>cal</code> command, which will give you a calendar in table form.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cal
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 sunday \u2502 monday \u2502 tuesday \u2502 wednesday \u2502 thursday \u2502 friday \u2502 saturday
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502        \u2502        \u2502         \u2502           \u2502          \u2502      1 \u2502        2
 1 \u2502      3 \u2502      4 \u2502       5 \u2502         6 \u2502        7 \u2502      8 \u2502        9
 2 \u2502     10 \u2502     11 \u2502      12 \u2502        13 \u2502       14 \u2502     15 \u2502       16
 3 \u2502     17 \u2502     18 \u2502      19 \u2502        20 \u2502       21 \u2502     22 \u2502       23
 4 \u2502     24 \u2502     25 \u2502      26 \u2502        27 \u2502       28 \u2502     29 \u2502       30
 5 \u2502     31 \u2502        \u2502         \u2502           \u2502          \u2502        \u2502
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>You can pass in flags to give you additional columns for the year, month, and even get calendars from the past or future.</p><h2 id="commands-get-some-helpful-examples-elichai" tabindex="-1"><a class="header-anchor" href="#commands-get-some-helpful-examples-elichai" aria-hidden="true">#</a> Commands get some helpful examples (elichai)</h2><p>A last minute update also gave us a big improvement in our built-in help. Starting with 0.14, we&#39;ll now have examples as part of the help commands can use:</p><p><img src="`+h+'" alt="image of new command help with colored example"></p>',19),N=a("We're working to add examples to all commands. If that's something you're interested in helping with, come join us on "),I={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},T=a("discord"),W=a("."),q=n(`<h2 id="subcommands-jonathandturner" tabindex="-1"><a class="header-anchor" href="#subcommands-jonathandturner" aria-hidden="true">#</a> Subcommands (jonathandturner)</h2><p>As we fill out more forms of commands that Nu can represent, one type that we weren&#39;t able to do was subcommands. This meant all of our commands were at the top level, making it more difficult to find what you needed. Additionally, many external commands use subcommands, which meant we had no way to effectively wrap them in Nu.</p><p>With 0.14, you can now define subcommands. Subcommands each get a unique signature which has its own coloring, autocomplete, etc.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open myfile.txt | from csv --headerless
</code></pre></div><h2 id="breaking-changes-renaming-some-commands-jonathandturner-andrasio" tabindex="-1"><a class="header-anchor" href="#breaking-changes-renaming-some-commands-jonathandturner-andrasio" aria-hidden="true">#</a> Breaking changes: renaming some commands (jonathandturner, andrasio)</h2><p>You may have noticed above that the <code>from-csv</code> is now <code>from csv</code>, that is, the <code>csv</code> part is now a subcommand of the <code>from</code> command. We&#39;ve moved all <code>from-*</code> and <code>to-*</code> commands to be subcommands. This change was requested by users as part of an effort to streamline how conversion commands work.</p><p>Another set of changes requested by users was to update the names of some of the commands to the more common forms:</p><ul><li><code>pick</code> is now <code>select</code>. This matches more closely with SQL, LINQ, and shells with similar functionality.</li><li><code>edit</code> is now <code>update</code></li></ul><p>While we are cautious to take breaking changes, we&#39;re confident - judging from user feedback - that these changes make Nu more ergonomic and easier to learn.</p><h2 id="ls-learns-read-directory-sizes-josephtlyons" tabindex="-1"><a class="header-anchor" href="#ls-learns-read-directory-sizes-josephtlyons" aria-hidden="true">#</a> <code>ls</code> learns read directory sizes (JosephTLyons)</h2><p>A few users have wondered why Nu doesn&#39;t print the full directory size as part of <code>ls</code>. With 0.14, you&#39;ll now be able to get just that with the new <code>--du</code> argument to <code>ls</code>. Note: this isn&#39;t enabled by default as calculating the directory size can take quite a lot of processing.</p><h2 id="startup-speedups-fdncred" tabindex="-1"><a class="header-anchor" href="#startup-speedups-fdncred" aria-hidden="true">#</a> Startup speedups (fdncred)</h2><p>It&#39;s important to make a good first impression, and with this release Nu gets a speed boost for the initial startup. It will now load plugins in parallel rather than one after another. In some cases, this can lead to startups 3x-4x faster than previous versions.</p><h2 id="auto-cd-speedups-quebin31" tabindex="-1"><a class="header-anchor" href="#auto-cd-speedups-quebin31" aria-hidden="true">#</a> Auto-cd speedups (quebin31)</h2><p>We&#39;ve also gotten a boost when using the automatic change directory. You&#39;ll notice that 0.14 is a lot snappier when you type a directory to automatically jump to.</p><h2 id="lots-of-new-commands" tabindex="-1"><a class="header-anchor" href="#lots-of-new-commands" aria-hidden="true">#</a> Lots of new commands</h2><ul><li><code>from eml</code> (aeshirey) - have lots of saved emails lying around and want to process them? With 0.14, you can now easily load them into Nu</li><li><code>empty?</code> (andrasio) - you can now check multiple columns for emptiness, and if empty, give them a value</li><li><code>skip-until</code>, <code>keep-while</code>, <code>keep-until</code> (andrasio) - similar to <code>skip-while</code>, you can optionally <code>skip</code> or <code>keep</code> rows if they meet a condition or until they meet a condition</li><li><code>merge</code> (andrasio) - ever have two related tables and wish you could merge them into one? The new <code>merge</code> command can help you do that</li><li><code>not-in:</code> operator (jonathandturner) - going along with the <code>in:</code> operator is the new <code>not-in:</code>, which checks that a value isn&#39;t in the given list</li></ul><h2 id="it-expansion-jonathandturner-thegedge" tabindex="-1"><a class="header-anchor" href="#it-expansion-jonathandturner-thegedge" aria-hidden="true">#</a> It-expansion (jonathandturner, thegedge)</h2><p>We&#39;ve streamlined how <code>$it</code> is handled. The <code>$it</code> variable has always implied iteration (<code>$it</code> gets the name from iteration, item, and being &quot;it&quot;). In 0.14, we&#39;ve made this more explicit with an expansion that happens inside of Nu.</p><p>Now, with Nu sees an <code>$it</code>, it expands it to a full <code>each</code> call.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | echo $it.name
</code></pre></div><p>Internally, now expands to:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | each { echo $it.name }
</code></pre></div><p>This helps us be more uniform about when iteration will happen. We&#39;ve also updated how externals are handled so they can take advantage of this, making them work a lot more closely with how internals work.</p><h2 id="doc-and-book-updates-nespera-jonathandturner-fdncred-jzaefferer-siedentop" tabindex="-1"><a class="header-anchor" href="#doc-and-book-updates-nespera-jonathandturner-fdncred-jzaefferer-siedentop" aria-hidden="true">#</a> Doc and book updates (nespera, jonathandturner, fdncred, jzaefferer, siedentop)</h2><p>We&#39;re continuing to fill out help information on each of the commands. This release adds a few more to the list of documented commands.</p>`,26),A=a("The "),L={href:"https://www.nushell.sh/book/",target:"_blank",rel:"noopener noreferrer"},S=a("book"),B=a(" has also gone through a big revision to bring it up-to-date with the 0.14 release. We've also added tables to help you transition from Bash, PowerShell, SQL, and LINQ. A big thanks to our contributors to help find and fix issues. There's more work to do here. If you're writing-inclined, come join us!"),z=e("h2",{id:"bugfixes-and-polish-quebin31-burniintree-avandesa-pka-homburg-rimathia-thegedge-jonathandturner-mhmdanas-jesterornot",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bugfixes-and-polish-quebin31-burniintree-avandesa-pka-homburg-rimathia-thegedge-jonathandturner-mhmdanas-jesterornot","aria-hidden":"true"},"#"),a(" Bugfixes and polish (quebin31, BurNiinTree, avandesa, pka, homburg, rimathia, thegedge, jonathandturner, mhmdanas, JesterOrNot)")],-1),E=e("p",null,'Lots of bugfixes and polish for this release. A big "thanks!" to everyone that joined in and filed bugs, fixed bugs, and gave feedback on discord, github, and twitter.',-1),$=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),a(" Looking forward")],-1),V=e("p",null,"We've got lots of fun things planned for upcoming releases: more intelligent autocomplete, autocomplete for popular external commands, and more streamlining of the engine itself.",-1),G=a("If you'd like to help out by writing code, writing docs, helping with the website, or just have an idea, come join us on "),Q={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},Y=a("discord"),C=a(" or "),D={href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"},J=a("github"),U=a(". We'd love to hear from you!");function O(F,M){const o=d("ExternalLinkIcon");return i(),r("div",null,[c,u,m,p,e("p",null,[g,e("a",f,[w,t(o)]),b,e("a",y,[_,t(o)]),v,x,k]),j,e("p",null,[N,e("a",I,[T,t(o)]),W]),q,e("p",null,[A,e("a",L,[S,t(o)]),B]),z,E,$,V,e("p",null,[G,e("a",Q,[Y,t(o)]),C,e("a",D,[J,t(o)]),U])])}var R=s(l,[["render",O],["__file","2020-05-12-nushell_0_14_0.html.vue"]]);export{R as default};
