import{_ as a,r as d,o as c,c as n,a as s,b as r,w as i,e as o,d as e}from"./app.3a8901ae.js";const p={},l=o(`<h1 id="\u30CF\u309A\u30A4\u30D5\u309A\u30E9\u30A4\u30F3" tabindex="-1"><a class="header-anchor" href="#\u30CF\u309A\u30A4\u30D5\u309A\u30E9\u30A4\u30F3" aria-hidden="true">#</a> \u30D1\u30A4\u30D7\u30E9\u30A4\u30F3</h1><p>Nu \u306E\u30B3\u30A2\u30C7\u30B6\u30A4\u30F3\u306E\u3072\u3068\u3064\u304C\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3067\u3059\u3002\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306F Unix \u306E\u80CC\u5F8C\u306B\u3042\u308B\u54F2\u5B66\u306B\u307E\u3067\u305D\u306E\u30EB\u30FC\u30C4\u3092\u9061\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u30C7\u30B6\u30A4\u30F3\u30A2\u30A4\u30C7\u30A2\u3067\u3059\u3002Nu \u306F\u3001Unix \u306E\u6587\u5B57\u5217\u30C7\u30FC\u30BF\u3092\u62E1\u5F35\u3057\u305F\u3088\u3046\u306B\u3001\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306E\u6982\u5FF5\u3082\u62E1\u5F35\u3057\u3066\u30C6\u30AD\u30B9\u30C8\u4EE5\u5916\u306E\u3082\u306E\u3082\u6271\u3048\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002</p><h2 id="\u57FA\u790E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u790E" aria-hidden="true">#</a> \u57FA\u790E</h2><p>\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306F\u3001\u5165\u529B\u3001\u30D5\u30A3\u30EB\u30BF\u30FC\u3001\u51FA\u529B\u306E\uFF13\u3064\u306E\u90E8\u5206\u304B\u3089\u69CB\u6210\u3055\u308C\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open &quot;Cargo.toml&quot; | inc package.version | save &quot;Cargo_new.toml&quot;
</code></pre></div><p>\u6700\u521D\u306E\u30B3\u30DE\u30F3\u30C9<code>open &quot;Cargo.toml&quot;</code>\u304C\u5165\u529B\u3067\u3059(\u3057\u3070\u3057\u3070&quot;source&quot;\u3084&quot;producer&quot;\u3068\u547C\u3070\u308C\u307E\u3059)\u3002\u3053\u308C\u306B\u3088\u308A\u30C7\u30FC\u30BF\u304C\u4F5C\u6210\u307E\u305F\u306F\u30ED\u30FC\u30C9\u3055\u308C\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306B\u9001\u3089\u308C\u307E\u3059\u3002\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306F\u5165\u529B\u304B\u3089\u6E21\u3055\u308C\u305F\u5024\u3092\u6271\u3044\u307E\u3059\u3002<code>ls</code>\u306E\u3088\u3046\u306A\u30B3\u30DE\u30F3\u30C9\u3082\u5165\u529B\u3067\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u30B7\u30B9\u30C6\u30E0\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u3001\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3092\u7D4C\u7531\u3057\u3066\u6271\u3048\u308B\u3088\u3046\u306B\u3059\u308B\u304B\u3089\u3067\u3059\u3002</p><p>\uFF12\u756A\u76EE\u306E\u30B3\u30DE\u30F3\u30C9<code>inc package.version</code>\u306F\u30D5\u30A3\u30EB\u30BF\u30FC\u3067\u3059\u3002\u30D5\u30A3\u30EB\u30BF\u30FC\u306F\u4E0E\u3048\u3089\u308C\u305F\u30C7\u30FC\u30BF\u3092\u3046\u3051\u3068\u308B\u3068\u5927\u62B5\u306E\u5834\u5408\u306F\u306A\u306B\u304B\u3057\u307E\u3059\u3002\u305D\u308C\u306F\u5909\u66F4(<code>inc</code>\u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u306E\u3088\u3046\u306B)\u3067\u3042\u3063\u305F\u308A\u3001\u30ED\u30AE\u30F3\u30B0\u306A\u3069\u306E\u5225\u306E\u64CD\u4F5C\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002</p><p>\u6700\u5F8C\u306E\u30B3\u30DE\u30F3\u30C9<code>save &quot;Cargo_new.toml&quot;</code>\u304C\u51FA\u529B\u3067\u3059(&quot;sink&quot;\u3068\u547C\u3070\u308C\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059)\u3002\u51FA\u529B\u306F\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u304B\u3089\u5165\u529B\u3092\u53D7\u3051\u53D6\u308A\u3001\u6700\u7D42\u7684\u306A\u64CD\u4F5C\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u3053\u306E\u4F8B\u3067\u306F\u3001\u6700\u7D42\u30B9\u30C6\u30C3\u30D7\u3068\u3057\u3066\u3001\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3092\u4ECB\u3057\u3066\u304A\u304F\u3089\u308C\u3066\u304D\u305F\u3082\u306E\u3092\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3057\u3066\u3044\u307E\u3059\u3002\u4ED6\u306E\u51FA\u529B\u30B3\u30DE\u30F3\u30C9\u3068\u3057\u3066\u306F\u3001\u5024\u3092\u3046\u3051\u3068\u308A\u30E6\u30FC\u30B6\u306E\u305F\u3081\u306B\u8868\u793A\u3059\u308B\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u3002</p><h2 id="\u5916\u90E8\u30B3\u30DE\u30F3\u30C8\u3099\u306E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u30B3\u30DE\u30F3\u30C8\u3099\u306E\u4F7F\u7528" aria-hidden="true">#</a> \u5916\u90E8\u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528</h2>`,9),u=e("Nu \u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4E92\u3044\u306B Nu \u306E\u30C7\u30FC\u30BF\u578B("),_=e("types of data"),h=e("\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3092\u5229\u7528\u3057\u3066\u3084\u308A\u3068\u308A\u3057\u307E\u3059\u3002\u3057\u304B\u3057\u3001Nu \u4EE5\u5916\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3069\u3046\u3067\u3057\u3087\u3046\u304B\u3002\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u4F8B\u3092\u307F\u3066\u307F\u307E\u3057\u3087\u3046\u3002"),x=o(`<p><code>internal_command | external_command</code></p><p>\u30C7\u30FC\u30BF\u306F\u5185\u90E8\u30B3\u30DE\u30F3\u30C9\u304B\u3089\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\u306B\u3080\u304B\u3063\u3066\u6D41\u308C\u307E\u3059\u3002\u3053\u306E\u30C7\u30FC\u30BF\u306F\u6587\u5B57\u5217\u3067\u3042\u308B\u3053\u3068\u304C\u671F\u5F85\u3055\u308C\u308B\u306E\u3067\u3001\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\u306E<code>stdin</code>\u306B\u9001\u3089\u308C\u307E\u3059\u3002</p><p><code>external_command | internal_command</code></p><p>\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\u304B\u3089 Nu \u306B\u9001\u3089\u308C\u308B\u30C7\u30FC\u30BF\u306F\u5358\u4E00\u306E\u6587\u5B57\u5217\u306B\u307E\u3068\u3081\u3089\u308C\u3001\u5185\u90E8\u30B3\u30DE\u30F3\u30C9\u306B\u6E21\u3055\u308C\u307E\u3059\u3002<code>lines</code>\u306E\u3088\u3046\u306A\u30B3\u30DE\u30F3\u30C9\u306F\u5916\u90E8\u304B\u3089\u306E\u30C7\u30FC\u30BF\u3092\u53D6\u308A\u8FBC\u3080\u969B\u306B\u4FBF\u5229\u3067\u3059\u3002</p><p><code>external_command_1 | external_command_2</code></p><p>Nu \u306F Bash \u306E\u3088\u3046\u306A\u4ED6\u306E\u30B7\u30A7\u30EB\u3068\u540C\u3058\u3088\u3046\u306B\uFF12\u3064\u306E\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\u3067\u30D1\u30A4\u30D7\u3055\u308C\u308B\u30C7\u30FC\u30BF\u3092\u51E6\u7406\u3057\u307E\u3059\u3002\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\uFF11\u306E<code>stdout</code>\u306F\u5916\u90E8\u30B3\u30DE\u30F3\u30C9\uFF12\u306E<code>stdin</code>\u306B\u3064\u306A\u304C\u308C\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\uFF12\u3064\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u9593\u3067\u30C7\u30FC\u30BF\u306F\u81EA\u7136\u306B\u3084\u308A\u3068\u308A\u3055\u308C\u307E\u3059\u3002</p><h2 id="\u5185\u90E8\u306E\u4ED5\u7D44\u307F" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8\u306E\u4ED5\u7D44\u307F" aria-hidden="true">#</a> \u5185\u90E8\u306E\u4ED5\u7D44\u307F</h2><p><code>ls</code>\u304C\u51FA\u529B\u3067\u306F\u306A\u304F\u5165\u529B\u306E\u5834\u5408\u3001\u30C6\u30FC\u30D6\u30EB\u304C\u3069\u306E\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u308B\u306E\u304B\u7591\u554F\u306B\u601D\u308F\u308C\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002Nu \u306F<code>autoview</code>\u3068\u3088\u3070\u308C\u308B\u30B3\u30DE\u30F3\u30C9\u3092\u81EA\u52D5\u7684\u306B\u51FA\u529B\u306B\u52A0\u3048\u307E\u3059\u3002<code>autoview</code>\u30B3\u30DE\u30F3\u30C9\u306F\u7D50\u679C\u3092\u78BA\u8A8D\u3067\u304D\u308B\u51FA\u529B\u3092\u3082\u305F\u306A\u3044\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306B\u8FFD\u52A0\u3055\u308C\u308B\u306E\u3067\u3059\u3002</p><p>\u5B9F\u8CEA\u7684\u306B\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3068</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
</code></pre></div><p>\u3053\u306E\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306F</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | autoview
</code></pre></div><p>\u540C\u3058\u3082\u306E\u3067\u3059\u3002</p>`,13);function m(g,v){const t=d("RouterLink");return c(),n("div",null,[l,s("p",null,[u,r(t,{to:"/ja/book/types_of_data.html"},{default:i(()=>[_]),_:1}),h]),x])}var q=a(p,[["render",m],["__file","pipeline.html.vue"]]);export{q as default};
