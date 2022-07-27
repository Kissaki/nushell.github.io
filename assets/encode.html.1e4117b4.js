import{_ as n,o as s,c as o,a as e,t,d as r,e as d}from"./app.760d3a08.js";const i={},c={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=r(),p={style:{"white-space":"pre-wrap"}},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; encode (encoding)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>encoding</code>: the text encoding to use</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Multiple encodings are supported, here is an example of a few:
big5, euc-jp, euc-kr, gbk, iso-8859-1, cp1252, latin5

Note that since the Encoding Standard doesn&#39;t specify encoders for utf-16le and utf-16be, these are not yet supported.

For a more complete list of encodings please refer to the encoding_rs
documentation link at https://docs.rs/encoding_rs/0.8.28/encoding_rs/#statics
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Encode an UTF-8 string into Shift-JIS</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8CA0\u3051\u308B\u3068\u77E5\u3063\u3066\u6226\u3046\u306E\u304C\u3001\u9065\u304B\u306B\u7F8E\u3057\u3044\u306E\u3060&quot;</span> <span class="token operator">|</span> encode shift-jis
</code></pre></div>`,9);function g(a,f){return s(),o("div",null,[e("h1",c,[h,l,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),u])}var m=n(i,[["render",g],["__file","encode.html.vue"]]);export{m as default};
