import{_ as c,o as l,c as d,a as s,b as a,w as o,e as t,d as n,r}from"./app.760d3a08.js";const i={},m=t(`<h1 id="moving-around-your-system" tabindex="-1"><a class="header-anchor" href="#moving-around-your-system" aria-hidden="true">#</a> Moving around your system</h1><p>Early shells allow you to move around your filesystem and run commands, and modern shells like Nu allow you to do the same. Let&#39;s take a look at some of the common commands you might use when interacting with your system.</p><h2 id="viewing-directory-contents" tabindex="-1"><a class="header-anchor" href="#viewing-directory-contents" aria-hidden="true">#</a> Viewing directory contents</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
</code></pre></div>`,4),h=n("As we've seen in other chapters, "),u=s("code",null,"ls",-1),p=n(" is a command for viewing the contents of a path. Nu will return the contents as a table that we can use."),_=n("The "),g=s("code",null,"ls",-1),b=n(` command also takes an optional argument, to change what you'd like to view. For example, we can list the files that end in ".md"`),k=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.md
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 name               \u2502 type \u2502 size    \u2502 modified </span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502  <span class="token number">3.4</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">1</span> \u2502 CONTRIBUTING.md    \u2502 File \u2502   <span class="token number">886</span> B \u2502 <span class="token number">5</span> days ago 
 <span class="token number">2</span> \u2502 README.md          \u2502 File \u2502 <span class="token number">15.0</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">3</span> \u2502 TODO.md            \u2502 File \u2502  <span class="token number">1.6</span> KB \u2502 <span class="token number">5</span> days ago 
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>The asterisk (*) in the above optional argument &quot;*.md&quot; is sometimes called a wildcard or a glob. It lets us match anything. You could read the glob &quot;*.md&quot; as &quot;match any filename, so long as it ends with &#39;.md&#39; &quot;</p><p>Nu also uses modern globs as well, which allow you access to deeper directories.</p><div class="language-bash ext-sh"><pre class="language-bash"><code> <span class="token function">ls</span> **/*.md
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name                                      \u2502 type \u2502 size    \u2502 modified </span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 .github/ISSUE_TEMPLATE/bug_report.md      \u2502 File \u2502   <span class="token number">592</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">1</span> \u2502 .github/ISSUE_TEMPLATE/feature_request.md \u2502 File \u2502   <span class="token number">595</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">2</span> \u2502 CODE_OF_CONDUCT.md                        \u2502 File \u2502  <span class="token number">3.4</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">3</span> \u2502 CONTRIBUTING.md                           \u2502 File \u2502   <span class="token number">886</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">4</span> \u2502 README.md                                 \u2502 File \u2502 <span class="token number">15.0</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">5</span> \u2502 TODO.md                                   \u2502 File \u2502  <span class="token number">1.6</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">6</span> \u2502 crates/nu-source/README.md                \u2502 File \u2502  <span class="token number">1.7</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">7</span> \u2502 docker/packaging/README.md                \u2502 File \u2502  <span class="token number">1.5</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">8</span> \u2502 docs/commands/README.md                   \u2502 File \u2502   <span class="token number">929</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">9</span> \u2502 docs/commands/alias.md                    \u2502 File \u2502  <span class="token number">1.7</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">10</span> \u2502 docs/commands/append.md                   \u2502 File \u2502  <span class="token number">1.4</span> KB \u2502 <span class="token number">5</span> days ago
</code></pre></div><p>Here, we&#39;re looking for any file that ends with &quot;.md&quot;, and the two asterisks further say &quot;in any directory starting from here&quot;.</p><h2 id="changing-the-current-directory" tabindex="-1"><a class="header-anchor" href="#changing-the-current-directory" aria-hidden="true">#</a> Changing the current directory</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> new_directory
</code></pre></div>`,7),y=n("To change from the current directory to a new one, we use the "),f=s("code",null,"cd",-1),w=n(" command. Just as in other shells, we can use either the name of the directory, or if we want to go up a directory we can use the "),v=s("code",null,"..",-1),x=n(" shortcut."),B=n("Changing the current working directory can also be done if "),E=s("code",null,"cd",-1),F=n(" is omitted and a path by itself is given:"),T=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">"),n(` ./new_directory
`)])])],-1),N=s("strong",null,"Note:",-1),O=n(" changing the directory with "),C=s("code",null,"cd",-1),D=n(" changes the "),q=s("code",null,"PWD",-1),K=n(" environment variable. This means that a change of a directory is kept to the current block. Once you exit the block, you'll return to the previous directory. You can learn more about working with this in the "),R=n("environment chapter"),A=n("."),M=s("h2",{id:"filesystem-commands",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#filesystem-commands","aria-hidden":"true"},"#"),n(" Filesystem commands")],-1),I=s("p",null,"Nu also provides some basic filesystem commands that work cross-platform.",-1),U=n("We can move an item from one place to another using the "),L=s("code",null,"mv",-1),S=n(" command:"),V=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">"),n(),s("span",{class:"token function"},"mv"),n(` item location
`)])])],-1),W=n("We can copy an item from one location to another with the "),P=s("code",null,"cp",-1),z=n(" command:"),G=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">"),n(),s("span",{class:"token function"},"cp"),n(` item location
`)])])],-1),Y=n("We can remove an item with the "),H=s("code",null,"rm",-1),J=n(" command:"),j=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">"),n(),s("span",{class:"token function"},"rm"),n(` item
`)])])],-1),Q=n("The three commands also can use the glob capabilities we saw earlier with "),X=s("code",null,"ls",-1),Z=n("."),$=n("Finally, we can create a new directory using the "),ss=s("code",null,"mkdir",-1),ns=n(" command:"),es=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">"),n(),s("span",{class:"token function"},"mkdir"),n(` new_directory
`)])])],-1);function as(os,ts){const e=r("RouterLink");return l(),d("div",null,[m,s("p",null,[h,a(e,{to:"/book/commands/ls.html"},{default:o(()=>[u]),_:1}),p]),s("p",null,[_,a(e,{to:"/book/commands/ls.html"},{default:o(()=>[g]),_:1}),b]),k,s("p",null,[y,a(e,{to:"/book/commands/cd.html"},{default:o(()=>[f]),_:1}),w,v,x]),s("p",null,[B,a(e,{to:"/book/commands/cd.html"},{default:o(()=>[E]),_:1}),F]),T,s("p",null,[N,O,a(e,{to:"/book/commands/cd.html"},{default:o(()=>[C]),_:1}),D,q,K,a(e,{to:"/book/environment.html"},{default:o(()=>[R]),_:1}),A]),M,I,s("p",null,[U,a(e,{to:"/book/commands/mv.html"},{default:o(()=>[L]),_:1}),S]),V,s("p",null,[W,a(e,{to:"/book/commands/cp.html"},{default:o(()=>[P]),_:1}),z]),G,s("p",null,[Y,a(e,{to:"/book/commands/rm.html"},{default:o(()=>[H]),_:1}),J]),j,s("p",null,[Q,a(e,{to:"/book/commands/ls.html"},{default:o(()=>[X]),_:1}),Z]),s("p",null,[$,a(e,{to:"/book/commands/mkdir.html"},{default:o(()=>[ss]),_:1}),ns]),es])}var ls=c(i,[["render",as],["__file","moving_around.html.vue"]]);export{ls as default};
