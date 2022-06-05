import{_ as s,r as i,o as a,c as r,a as e,b as o,d as t}from"./app.3a8901ae.js";const l={},u=e("h1",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),t(" Plugins")],-1),h=e("p",null,"The functionality of Nu can be extended using plugins. The plugins can perform many of the same operations that Nu's built-in commands can, with the added benefit that they can be added separately of Nu itself.",-1),c=e("p",null,[t("To add a plugin, simply build it and put the binary in your PATH. Nu plugins begin with the filename "),e("code",null,"nu_plugin_"),t(" so that Nu can find them among other binaries in your PATH.")],-1),d=e("p",null,[e("strong",null,"Note:"),t(" in the future, plugins may have a specific place they need to be put into in order for Nu to find them.")],-1),p=e("p",null,"When Nu starts up, it scans your system and loads the plugins it finds.",-1),_=t("The protocol that Nu plugins use is subject to change while Nu is under heavy development. The best place to learn more about the protocol and how to create your own plugins is by reading the source for the "),f={href:"https://github.com/nushell/nushell/tree/main/crates",target:"_blank",rel:"noopener noreferrer"},g=t("plugins in the Nu repository"),m=t(". You can also refer to the "),b={href:"https://www.nushell.sh/contributor-book/plugins.html",target:"_blank",rel:"noopener noreferrer"},y=t("plugins chapter of the contributor book");function N(k,w){const n=i("ExternalLinkIcon");return a(),r("div",null,[u,h,c,d,p,e("p",null,[_,e("a",f,[g,o(n)]),m,e("a",b,[y,o(n)])])])}var T=s(l,[["render",N],["__file","plugins.html.vue"]]);export{T as default};
