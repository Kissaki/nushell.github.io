import{_ as o,r as t,o as s,c as l,a as e,b as r,w as c,d as a}from"./app.3a8901ae.js";const i={},u=e("h1",{id:"entorno",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#entorno","aria-hidden":"true"},"#"),a(" Entorno")],-1),d=e("p",null,"Una tarea com\xFAn al usar una shell es controlar el ambiente de entorno que aplicaciones externas usar\xE1n. Com\xFAnmente esto sucede autom\xE1ticamente, a medida que el entorno se empaqueta y se entrega a la aplicaci\xF3n externa cuando se inicia. Sin embargo, hay veces que vamos a desear tener control m\xE1s preciso sobre qu\xE9 variables de entorno una aplicaci\xF3n pueda ver.",-1),_=e("p",null,[a("Puedes ver las variables de entorno actuales que se enviar\xE1n a las aplicaciones explorando "),e("code",null,"#nu.env"),a(":")],-1),m=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> echo $nu.env
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 COLORTERM                \u2502 truecolor
 DBUS_SESSION_BUS_ADDRESS \u2502 unix:path=/run/user/1000/bus
 DESKTOP_SESSION          \u2502 gnome
 DISPLAY                  \u2502 :1
`)])],-1),h=a("El ambiente es creador a trav\xE9s de los ajustes en la configuraci\xF3n de Nu y a partir del entorno en el que se ejecuta Nu. Puedes actualizar el ambiente permanentement usando t\xE9cnicas enumeradas en el cap\xEDtulo de "),p=a("configuraci\xF3n"),v=a("."),b=e("p",null,"Tambi\xE9n puedes temporalmente actualizar una variable de entorno cuando ejecutas un comando o tuber\xEDa de comandos.",-1),x=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> with-env [MI_VARIABLE VALOR] { echo $nu.env.MI_VARIABLE }
VALOR
`)])],-1),g=e("p",null,[a("El comando "),e("code",null,"with-env"),a(' establecer\xE1 temporalmente la variable de entorno dada (aqu\xED: la variable "MI_VARIABLE" es dada el valor "VALOR"). Una vez hecho esto, el bloque se ejecutar\xE1 con esta nueva variable de entorno establecida.')],-1),A=e("p",null,"A common shorthand, inspired by Bash and others, is also available. You can write the above example as:",-1),R=e("p",null,"Una atajo com\xFAn, inspirada en Bash y otros, tambi\xE9n est\xE1 disponible. Puedes escribir el ejemplo anterior como:",-1),E=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> MI_VARIABLE=VALOR echo $nu.env.MI_VARIABLE
VALOR
`)])],-1);function L(I,S){const n=t("RouterLink");return s(),l("div",null,[u,d,_,m,e("p",null,[h,r(n,{to:"/es/book/configuracion.html"},{default:c(()=>[p]),_:1}),v]),b,x,g,A,R,E])}var f=o(i,[["render",L],["__file","entorno.html.vue"]]);export{f as default};
