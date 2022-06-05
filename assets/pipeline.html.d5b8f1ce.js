import{_ as d,r as s,o as c,c as h,a as e,b as o,w as a,e as l,d as t}from"./app.3a8901ae.js";const r={},u=l(`<h1 id="pipelines" tabindex="-1"><a class="header-anchor" href="#pipelines" aria-hidden="true">#</a> Pipelines</h1><p>One of the core designs of Nu is the pipeline, a design idea that traces its roots back decades to some of the original philosophy behind Unix. Just as Nu extends from the single string data type of Unix, Nu also extends the idea of the pipeline to include more than just text.</p><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> Basics</h2><p>A pipeline is composed of three parts: the input, the filter, and the output.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open &quot;Cargo.toml&quot; | inc package.version --minor | save &quot;Cargo_new.toml&quot;
</code></pre></div>`,5),m=t("The first command, "),_=e("code",null,'open "Cargo.toml"',-1),p=t(`, is an input (sometimes also called a "source" or "producer"). This creates or loads data and feeds it into a pipeline. It's from input that pipelines have values to work with. Commands like `),f=e("code",null,"ls",-1),g=t(" are also inputs, as they take data from the filesystem and send it through the pipelines so that it can be used."),x=t("The second command, "),w=e("code",null,"inc package.version --minor",-1),b=t(", is a filter. Filters take the data they are given and often do something with it. They may change it (as with the "),k=e("code",null,"inc",-1),v=t(" command in our example), or they may do another operation, like logging, as the values pass through."),y=l(`<p>The last command, <code>save &quot;Cargo_new.toml&quot;</code>, is an output (sometimes called a &quot;sink&quot;). An output takes input from the pipeline and does some final operation on it. In our example, we save what comes through the pipeline to a file as the final step. Other types of output commands may take the values and view them for the user.</p><p>The <code>$in</code> variable will collect the pipeline into a value for you, allowing you to access the whole stream as a parameter:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>&gt; echo 1 2 3 | $in.1 * $in.2
6
</code></pre></div><h2 id="multi-line-pipelines" tabindex="-1"><a class="header-anchor" href="#multi-line-pipelines" aria-hidden="true">#</a> Multi-line pipelines</h2><p>If a pipeline is getting a bit long for one line, you can enclose it within <code>(</code> and <code>)</code> to create a subexpression:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>(
    &quot;01/22/2021&quot; |
    parse &quot;{month}/{day}/{year}&quot; |
    get year
)
</code></pre></div>`,6),N=t("Also see "),T={href:"https://www.nushell.sh/book/variables_and_subexpressions.html#subexpressions",target:"_blank",rel:"noopener noreferrer"},q=t("Subexpressions"),C=e("h2",{id:"working-with-external-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#working-with-external-commands","aria-hidden":"true"},"#"),t(" Working with external commands")],-1),I=t("Nu commands communicate with each other using the Nu data types (see "),B=t("types of data"),A=t("), but what about commands outside of Nu? Let's look at some examples of working with external commands:"),L=e("p",null,[e("code",null,"internal_command | external_command")],-1),V=e("p",null,[t("Data will flow from the internal_command to the external_command. This data will get converted to a string, so that they can be sent to the "),e("code",null,"stdin"),t(" of the external_command.")],-1),E=e("p",null,[e("code",null,"external_command | internal_command")],-1),U=t("Data coming from an external command into Nu will come in as bytes that Nushell will try to automatically convert to UTF-8 text. If successful, a stream of text data will be sent to internal_command. If unsuccessful, a stream of binary data will be sent to internal command.. Commands like "),$=e("code",null,"lines",-1),D=t(" help make it easier to bring in data from external commands, as it gives discrete lines of data to work with."),F=e("p",null,[e("code",null,"external_command_1 | external_command_2")],-1),O=e("p",null,[t("Nu works with data piped between two external commands in the same way as other shells, like Bash would. The "),e("code",null,"stdout"),t(" of external_command_1 is connected to the "),e("code",null,"stdin"),t(" of external_command_2. This lets data flow naturally between the two commands.")],-1),R=e("h2",{id:"behind-the-scenes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#behind-the-scenes","aria-hidden":"true"},"#"),t(" Behind the scenes")],-1),S=t("You may have wondered how we see a table if "),j=e("code",null,"ls",-1),J=t(" is an input and not an output. Nu adds this output for us automatically using another command called "),M=e("code",null,"table",-1),P=t(". The "),W=e("code",null,"table",-1),Y=t(" command is appended to any pipeline that doesn't have an output. This allows us to see the result."),z=e("p",null,"In effect, the command:",-1),G=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls
`)])],-1),H=e("p",null,"And the pipeline:",-1),K=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | table
`)])],-1),Q=e("p",null,"Are one and the same.",-1);function X(Z,ee){const n=s("RouterLink"),i=s("ExternalLinkIcon");return c(),h("div",null,[u,e("p",null,[m,_,p,o(n,{to:"/book/commands/ls.html"},{default:a(()=>[f]),_:1}),g]),e("p",null,[x,w,b,o(n,{to:"/book/commands/inc.html"},{default:a(()=>[k]),_:1}),v]),y,e("p",null,[N,e("a",T,[q,o(i)])]),C,e("p",null,[I,o(n,{to:"/book/types_of_data.html"},{default:a(()=>[B]),_:1}),A]),L,V,E,e("p",null,[U,o(n,{to:"/book/commands/lines.html"},{default:a(()=>[$]),_:1}),D]),F,O,R,e("p",null,[S,o(n,{to:"/book/commands/ls.html"},{default:a(()=>[j]),_:1}),J,o(n,{to:"/book/commands/table.html"},{default:a(()=>[M]),_:1}),P,o(n,{to:"/book/commands/table.html"},{default:a(()=>[W]),_:1}),Y]),z,G,H,K,Q])}var oe=d(r,[["render",X],["__file","pipeline.html.vue"]]);export{oe as default};
