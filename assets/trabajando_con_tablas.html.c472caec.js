import{_ as a,o as e,c as s,e as o}from"./app.760d3a08.js";const n={},d=o(`<h1 id="trabajando-con-tablas" tabindex="-1"><a class="header-anchor" href="#trabajando-con-tablas" aria-hidden="true">#</a> Trabajando con tablas</h1><p>Una de las maneras comunes de mirar datos en Nu es a trav\xE9s de una tabla. Nu viene con una serie de comandos que trabajan con tablas para que pueda ser m\xE1s conveniente encontrar lo que est\xE1s buscando y para limitar los datos a solo lo que necesites.</p><p>Para empezar, consigamos una tabla que podamos usar:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
---+---------------+------+----------+---------+------------+------------
 # | name          | type | readonly | size    | accessed   | modified
---+---------------+------+----------+---------+------------+------------
 0 | add.rs        | File |          | 2.7 KB  | 2 days ago | 2 days ago
 1 | sum.rs        | File |          | 3.0 KB  | 2 days ago | 2 days ago
 2 | inc.rs        | File |          | 11.8 KB | 2 days ago | 2 days ago
 3 | str.rs        | File |          | 21.4 KB | 2 days ago | 2 days ago
 4 | skip.rs       | File |          | 1.7 KB  | 2 days ago | 2 days ago
 5 | textview.rs   | File |          | 9.4 KB  | 2 days ago | 2 days ago
 6 | binaryview.rs | File |          | 13.0 KB | a day ago  | a day ago
 7 | edit.rs       | File |          | 2.7 KB  | 2 days ago | 2 days ago
 8 | tree.rs       | File |          | 3.0 KB  | 2 days ago | 2 days ago
 9 | sys.rs        | File |          | 9.2 KB  | 2 days ago | 2 days ago
---+---------------+------+----------+---------+------------+------------
</code></pre></div><h2 id="ordenando-los-datos" tabindex="-1"><a class="header-anchor" href="#ordenando-los-datos" aria-hidden="true">#</a> Ordenando los datos</h2><p>Podemos ordenar la tabla llamando el comando <code>sort-by</code> e indic\xE1ndole qu\xE9 columnas queremos usar al ordenar. Digamos que deseamos ordenar nuestra tabla por tama\xF1o de archivo:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size
---+---------------+------+----------+---------+------------+------------
 # | name          | type | readonly | size    | accessed   | modified
---+---------------+------+----------+---------+------------+------------
 0 | skip.rs       | File |          | 1.7 KB  | 2 days ago | 2 days ago
 1 | add.rs        | File |          | 2.7 KB  | 2 days ago | 2 days ago
 2 | edit.rs       | File |          | 2.7 KB  | 2 days ago | 2 days ago
 3 | sum.rs        | File |          | 3.0 KB  | 2 days ago | 2 days ago
 4 | tree.rs       | File |          | 3.0 KB  | 2 days ago | 2 days ago
 5 | sys.rs        | File |          | 9.2 KB  | 2 days ago | 2 days ago
 6 | textview.rs   | File |          | 9.4 KB  | 2 days ago | 2 days ago
 7 | inc.rs        | File |          | 11.8 KB | 2 days ago | 2 days ago
 8 | binaryview.rs | File |          | 13.0 KB | a day ago  | a day ago
 9 | str.rs        | File |          | 21.4 KB | 2 days ago | 2 days ago
---+---------------+------+----------+---------+------------+------------
</code></pre></div><p>Podemos ordenar una tabla con cualquier columna que pueda ser comparada. Por ejemplo, tambi\xE9n pudimos haber ordenador usando las columnas &quot;name&quot;, &quot;accessed&quot;, o &quot;modified&quot;.</p><h1 id="seleccionando-los-datos-que-quieres" tabindex="-1"><a class="header-anchor" href="#seleccionando-los-datos-que-quieres" aria-hidden="true">#</a> Seleccionando los datos que quieres</h1><p>Podemos seleccionar datos de una tabla seleccionando columnas o filas espec\xEDficas. Escojamos algunas columnas de nuestra tabla para usar:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name size
---+---------------+---------
 # | name          | size
---+---------------+---------
 0 | add.rs        | 2.7 KB
 1 | sum.rs        | 3.0 KB
 2 | inc.rs        | 11.8 KB
 3 | str.rs        | 21.4 KB
 4 | skip.rs       | 1.7 KB
 5 | textview.rs   | 9.4 KB
 6 | binaryview.rs | 13.0 KB
 7 | edit.rs       | 2.7 KB
 8 | tree.rs       | 3.0 KB
 9 | sys.rs        | 9.2 KB
---+---------------+---------
</code></pre></div><p>Esto ayuda a crear una table m\xE1s enfocada para lo que necesitamos. Siguiente, digamos que queremos ver los 5 archivos m\xE1s livianos de este directorio:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5
---+---------+------+----------+--------+------------+------------
 # | name    | type | readonly | size   | accessed   | modified
---+---------+------+----------+--------+------------+------------
 0 | skip.rs | File |          | 1.7 KB | 2 days ago | 2 days ago
 1 | add.rs  | File |          | 2.7 KB | 2 days ago | 2 days ago
 2 | edit.rs | File |          | 2.7 KB | 2 days ago | 2 days ago
 3 | sum.rs  | File |          | 3.0 KB | 2 days ago | 2 days ago
 4 | tree.rs | File |          | 3.0 KB | 2 days ago | 2 days ago
---+---------+------+----------+--------+------------+------------
</code></pre></div><p>Notar\xE1s que primero ordenamos la tabla por tama\xF1o para llegar hasta el archivo m\xE1s peque\xF1o y luego usamos <code>first 5</code> que nos devuelve las primeras 5 filas de la tabla.</p><p>Tambi\xE9n puedes saltarte filas con <code>skip</code> que no deseas. Saltemos las primeras dos de las 5 filas que obtuvimos arriba:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5 | skip 2
---+---------+------+----------+--------+------------+------------
 # | name    | type | readonly | size   | accessed   | modified
---+---------+------+----------+--------+------------+------------
 0 | edit.rs | File |          | 2.7 KB | 2 days ago | 2 days ago
 1 | sum.rs  | File |          | 3.0 KB | 2 days ago | 2 days ago
 2 | tree.rs | File |          | 3.0 KB | 2 days ago | 2 days ago
---+---------+------+----------+--------+------------+------------
</code></pre></div><p>Hemos reducido a tres filas que nos interesa.</p><p>Veamos algunos otros comandos para seleccionar datos. Es posible que te hayas preguntado por qu\xE9 las filas de la tabla son n\xFAmeros. Esto act\xFAa como una forma pr\xE1ctica de llegar a una sola fila. Ordenemos nuestra tabla por el nombre del archivo y luego escojamos una de las filas con el comando <code>n-th</code> usando el n\xFAmero de fila:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by name
---+---------------+------+----------+---------+------------+------------
 # | name          | type | readonly | size    | accessed   | modified
---+---------------+------+----------+---------+------------+------------
 0 | add.rs        | File |          | 2.7 KB  | 2 days ago | 2 days ago
 1 | binaryview.rs | File |          | 13.0 KB | a day ago  | a day ago
 2 | edit.rs       | File |          | 2.7 KB  | 2 days ago | 2 days ago
 3 | inc.rs        | File |          | 11.8 KB | 2 days ago | 2 days ago
 4 | skip.rs       | File |          | 1.7 KB  | 2 days ago | 2 days ago
 5 | str.rs        | File |          | 21.4 KB | 2 days ago | 2 days ago
 6 | sum.rs        | File |          | 3.0 KB  | 2 days ago | 2 days ago
 7 | sys.rs        | File |          | 9.2 KB  | 2 days ago | 2 days ago
 8 | textview.rs   | File |          | 9.4 KB  | 2 days ago | 2 days ago
 9 | tree.rs       | File |          | 3.0 KB  | 2 days ago | 2 days ago
---+---------------+------+----------+---------+------------+------------

&gt; ls | sort-by name | nth 5
--------+------+----------+---------+------------+------------
 name   | type | readonly | size    | accessed   | modified
--------+------+----------+---------+------------+------------
 str.rs | File |          | 21.4 KB | 2 days ago | 2 days ago
--------+------+----------+---------+------------+------------
</code></pre></div><h2 id="obteniendo-datos-de-una-tabla" tabindex="-1"><a class="header-anchor" href="#obteniendo-datos-de-una-tabla" aria-hidden="true">#</a> Obteniendo datos de una tabla</h2><p>Hasta ahora hemos trabajado con tablas reduciendo la tabla a solo lo que necesitamos. A veces es posible que queramos ir un paso m\xE1s all\xE1 y solo mirar los valores en las celdas en lugar the tomar una columna completa. Digamos, por ejemplo, que queramos obtener una lista de los nombres de los archivos. Para esto usamos el comando <code>get</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name
---+---------------
 # | value
---+---------------
 0 | add.rs
 1 | sum.rs
 2 | inc.rs
 3 | str.rs
 4 | skip.rs
 5 | textview.rs
 6 | binaryview.rs
 7 | edit.rs
 8 | tree.rs
 9 | sys.rs
---+---------------
</code></pre></div><p>Ahora tenemos los valores de cada nombre de los archivos.</p><p>Puede parecerse al comando <code>select</code> que vimos previamente, probemos <code>select</code> para comparar los dos:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name
---+---------------
 # | name
---+---------------
 0 | add.rs
 1 | sum.rs
 2 | inc.rs
 3 | str.rs
 4 | skip.rs
 5 | textview.rs
 6 | binaryview.rs
 7 | edit.rs
 8 | tree.rs
 9 | sys.rs
---+---------------
</code></pre></div><p>\xA1Se ven muy similares! Veamos si podemos explicar la diferencia entre estos dos comandos para aclarar:</p><ul><li><code>select</code> - crea una tabla donde incluye \xFAnicamente las columnas indicadas</li><li><code>get</code> - devuelve los valores dentro de la columna indicada</li></ul><p>La manera de distinguirlas mirando la tabla de forma caracter\xEDstica es con el nombre de columna <code>value</code> que nos permite saber que ser\xE1 una lista de valores con la que podemos trabajar.</p><p>El comando <code>get</code> puede ir m\xE1s all\xE1 y tomar una ruta para datos m\xE1s profundos en la tabla. Esto simplifica trabajar con datos m\xE1s complejos como las estructuras que podr\xEDas encontrar en archivos .json.</p><h2 id="cambiando-datos-de-una-tabla" tabindex="-1"><a class="header-anchor" href="#cambiando-datos-de-una-tabla" aria-hidden="true">#</a> Cambiando datos de una tabla</h2><p>Adem\xE1s de seleccionar datos de una tabla, tambi\xE9n podemos actualizar lo que contiene una tabla. Es posible que queramos agregar nuevas columnas o editar el contenido de una celda. En Nu, en lugar la misma tabla, cada uno de los comandos en la secci\xF3n devolvera una nueva tabla en la tuber\xEDa.</p><h3 id="agregando-una-nueva-columna" tabindex="-1"><a class="header-anchor" href="#agregando-una-nueva-columna" aria-hidden="true">#</a> Agregando una nueva columna</h3><p>Podemos utilizar el comando <code>add</code> para agregar una nueva columna a la tabla. Veamos un ejemplo:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
---------
 edition
---------
 2018
---------
</code></pre></div><p>Agreguemos una columna llamada &quot;next_edition&quot; con el valor 2021:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | add next_edition 2021
---------+--------------
 edition | next_edition
---------+--------------
 2018    | 2021
---------+--------------
</code></pre></div><p>Observa que si abrimos el archivo original el contenido permanece igual:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
---------
 edition
---------
 2018
---------
</code></pre></div><p>Los cambios en Nu son cambios funcionales, lo que significa que funcionan en los valores mismos en vez de causar cambios permanentes. Esto nos permite realizar diferentes tipos de trabajo en nuestra tuber\xEDa hasta que estemos listos para grabar los resultados con cualquier cambio que nos gustar\xEDa si as\xED decidimos. Aqu\xED podr\xEDamos grabar los resultados usando el comando <code>save</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | add next_edition 2021 | save rustfmt2.toml
/home/jonathan/Source/nushell(master)&gt; open rustfmt2.toml
---------+--------------
 edition | next_edition
---------+--------------
 2018    | 2021
---------+--------------
</code></pre></div><h3 id="editando-una-columna" tabindex="-1"><a class="header-anchor" href="#editando-una-columna" aria-hidden="true">#</a> Editando una columna</h3><p>Similarmente al comando <code>add</code>, tambi\xE9n podemos usar el comando <code>edit</code> para cambiar el contenido de una columna a un nuevo valor. Abramos el mismo archivo para verlo en acci\xF3n:</p><div class="language-text ext-text"><pre class="language-text"><code>open rustfmt.toml
---------
 edition
---------
 2018
---------
</code></pre></div><p>y ahora, actualizemos la edici\xF3n y que apunte a la siguiente edici\xF3n que esperamos soportar:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | edit edition 2021
---------
 edition
---------
 2021
---------
</code></pre></div><h3 id="incrementando-valores" tabindex="-1"><a class="header-anchor" href="#incrementando-valores" aria-hidden="true">#</a> Incrementando valores</h3><p>Hay un comando m\xE1s en Nu que nos ayudar\xE1 a trabajar con n\xFAmeros y versiones: <code>inc</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
---------
 edition
---------
 2018
---------
&gt; open rustfmt.toml | inc edition
---------
 edition
---------
 2019
---------
</code></pre></div><p>Como el valor en &quot;edition&quot; es un n\xFAmero, podemos usar <code>inc</code> para actualizarlo. <code>inc</code> realmente brilla cuando trabajamos con versiones:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | get package.version
0.1.3
&gt; open Cargo.toml | inc package.version --minor | get package.version
0.2.0
</code></pre></div><p>Cuando trabajamos con versiones podemos usar banderas e indicar c\xF3mo incrementar la versi\xF3n:</p><ul><li><strong>--major</strong> - incrementar major (0.1.3 -&gt; 1.0.0)</li><li><strong>--minor</strong> - incrementar minor (0.1.3 -&gt; 0.2.0)</li><li><strong>--patch</strong> - incrementar patch (0.1.3 -&gt; 0.1.4)</li></ul>`,52),t=[d];function r(i,l){return e(),s("div",null,t)}var u=a(n,[["render",r],["__file","trabajando_con_tablas.html.vue"]]);export{u as default};
