import{_ as a,r as n,o as r,c as i,a as e,b as o,d as t,e as l}from"./app.3a8901ae.js";const h={},d=e("h1",{id:"nushell-0-39",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-39","aria-hidden":"true"},"#"),t(" Nushell 0.39")],-1),c=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=e("p",null,"Today, we're releasing 0.39 of Nu. This release is a bugfix release of 0.38.",-1),_=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),p=t("Nu 0.39 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.39.0",target:"_blank",rel:"noopener noreferrer"},g=t("pre-built binaries"),m=t(" or from "),w={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},b=t("crates.io"),y=t(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),k=t("."),N=l('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><ul><li>History file is now removed when the history is cleared (fdncred)</li><li>HTML selector has a regression fixed (lucassmmg)</li><li>Unused dependencies were removed (lucassmmg)</li><li>Updated clippy warnings were fixed (jt)</li></ul><h1 id="engine-q-progress" tabindex="-1"><a class="header-anchor" href="#engine-q-progress" aria-hidden="true">#</a> Engine-q progress</h1><p>You&#39;ll notice that this release is pretty light, only a set of fixes on 0.38. This is because our energy is now largely focused on engine-q. We&#39;re excited to get this in front of you.</p><p>Just to tease a little of what will be possible, this week we added support for processing streams in parallel in engine-q using a new <code>par-each</code> command. We&#39;ll talk more about this as it develops.</p><h1 id="looking-forward" tabindex="-1"><a class="header-anchor" href="#looking-forward" aria-hidden="true">#</a> Looking forward</h1>',8),v=t("We're excited about what the new engine changes will bring in terms of performance, correctness, and new capabilities. If you're interested in helping out, come "),I={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},T=t("join us on the discord"),q=t("!");function W(E,L){const s=n("ExternalLinkIcon");return r(),i("div",null,[d,c,u,_,e("p",null,[p,e("a",f,[g,o(s)]),m,e("a",w,[b,o(s)]),y,x,k]),N,e("p",null,[v,e("a",I,[T,o(s)]),q])])}var B=a(h,[["render",W],["__file","2021-10-26-nushell_0_39.html.vue"]]);export{B as default};
