import{_ as n,r as d,o as r,c,a as e,b as a,w as s,e as i,d as t}from"./app.3a8901ae.js";const l={},h=i(`<h1 id="stdout-stderr-and-exit-codes" tabindex="-1"><a class="header-anchor" href="#stdout-stderr-and-exit-codes" aria-hidden="true">#</a> Stdout, Stderr, and Exit Codes</h1><p>An important piece of interop between Nushell and external commands is working with the standard streams of data coming from the external.</p><p>The first of these important streams is stdout.</p><h2 id="stdout" tabindex="-1"><a class="header-anchor" href="#stdout" aria-hidden="true">#</a> Stdout</h2><p>Stdout is the way that most external apps will send data into the pipeline or to the screen. Data sent by an external app to its stdout is received by Nushell by default if it&#39;s part of a pipeline:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; external | str collect
</code></pre></div><p>The above would call the external named <code>external</code> and would redirect the stdout output stream into the pipeline. With this redirection, Nushell can then pass the data to the next command in the pipeline, here <code>str collect</code>.</p><p>Without the pipeline, Nushell will not do any redirection, allowing it to print directly to the screen.</p><h2 id="stderr" tabindex="-1"><a class="header-anchor" href="#stderr" aria-hidden="true">#</a> Stderr</h2><p>Another common stream that external applications often use to print error messages is stderr. By default, Nushell does not do any redirection of stderr, which means that by default it will print to the screen.</p><p>You can force Nushell to do a redirection by using <code>do -i { ... }</code>. For example, if we wanted to call the external above and redirect its stderr, we would write:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; do -i { external }
</code></pre></div><h2 id="exit-code" tabindex="-1"><a class="header-anchor" href="#exit-code" aria-hidden="true">#</a> Exit code</h2><p>Finally, external commands have an &quot;exit code&quot;. These codes help give a hint to the caller whether the command ran successfully.</p><p>Nushell tracks the last exit code of the recently completed external in one of two ways. The first way is with the <code>LAST_EXIT_CODE</code> environment variable.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; do -i { external }
&gt; echo $env.LAST_EXIT_CODE
</code></pre></div>`,16),u=t("The second uses a command called "),m=e("code",null,"complete",-1),p=t("."),_={id:"using-the-complete-command",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#using-the-complete-command","aria-hidden":"true"},"#",-1),f=t(" Using the "),w=e("code",null,"complete",-1),g=t(" command"),y=t("The "),b=e("code",null,"complete",-1),v=t(" command allows you to run an external to completion, and gather the stdout, stderr, and exit code together in one record."),N=t("If we try to run the external "),k=e("code",null,"cat",-1),T=t(" on a file that doesn't exist, we can see what "),S=e("code",null,"complete",-1),E=t(" does with the streams, including the redirected stderr:"),B=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> do -i { cat unknown.txt } | complete
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 stdout    \u2502                                             \u2502
\u2502 stderr    \u2502 cat: unknown.txt: No such file or directory \u2502
\u2502 exit_code \u2502 1                                           \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
`)])],-1),C=e("h2",{id:"raw-streams",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#raw-streams","aria-hidden":"true"},"#"),t(" Raw streams")],-1),I=e("p",null,'Both stdout and stderr are represented as "raw streams" inside of Nushell. These are streams that are streams of bytes rather than structured streams, which are what internal Nushell commands use.',-1),A=e("p",null,"Because streams of bytes can be difficult to work with, especially given how common it is to use output as it was text data, Nushell attempts to convert raw streams into text data. This allows other commands to pull on the output of external commands and receive strings they can further process.",-1),F=e("p",null,"Nushell attempts to convert to text using UTF-8. If at any time the conversion fails, the rest of the stream is assumed to always be bytes.",-1),L=t("If you want more control over the decoding of the byte stream, you can use the "),V=e("code",null,"decode",-1),D=t(" command. The "),R=e("code",null,"decode",-1),j=t(" command can be inserted into the pipeline after the external, or other raw stream-creating command, and will handle decoding the bytes based on the argument you give decode. For example, you could decode shift-jis text this way:"),q=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> 0x[8a 4c] | decode shift-jis
\u8C9D
`)])],-1);function O(U,W){const o=d("RouterLink");return r(),c("div",null,[h,e("p",null,[u,a(o,{to:"/book/commands/complete.html"},{default:s(()=>[m]),_:1}),p]),e("h2",_,[x,f,a(o,{to:"/book/commands/complete.html"},{default:s(()=>[w]),_:1}),g]),e("p",null,[y,a(o,{to:"/book/commands/complete.html"},{default:s(()=>[b]),_:1}),v]),e("p",null,[N,k,T,a(o,{to:"/book/commands/complete.html"},{default:s(()=>[S]),_:1}),E]),B,C,I,A,F,e("p",null,[L,a(o,{to:"/book/commands/decode.html"},{default:s(()=>[V]),_:1}),D,a(o,{to:"/book/commands/decode.html"},{default:s(()=>[R]),_:1}),j]),q])}var Y=n(l,[["render",O],["__file","stdout_stderr_exit_codes.html.vue"]]);export{Y as default};
