import{_ as o,o as t,c,a as s,b as p,w as l,e as n,d as a,r as i}from"./app.760d3a08.js";const u={},r=n(`<h1 id="valores" tabindex="-1"><a class="header-anchor" href="#valores" aria-hidden="true">#</a> Valores</h1><p>Un Value es el tipo de dato de estructura b\xE1sica en Nu.</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Value</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> value<span class="token punctuation">:</span> <span class="token class-name">UntaggedValue</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> tag<span class="token punctuation">:</span> <span class="token class-name">Tag</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),d=a("Donde el campo "),k=s("code",null,"value",-1),m=a(" es cualquier tipo de valor "),g=s("code",null,"UntaggedValue",-1),h=a(" dado y el campo "),v=s("code",null,"tag",-1),b=a(" contiene "),_=a("metadatos"),f=a(" asociado con \xE9l."),y=n(`<p>Un <code>UntaggedValue</code> cubre los siguientes tipos de valores:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">UntaggedValue</span> <span class="token punctuation">{</span>
    <span class="token class-name">Primitive</span><span class="token punctuation">(</span><span class="token class-name">Primitive</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Row</span><span class="token punctuation">(</span><span class="token class-name">Dictionary</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Table</span><span class="token punctuation">(</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token class-name">ShellError</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token class-name">Block</span><span class="token punctuation">(</span><span class="token class-name">Evaluate</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Donde <code>Primitive</code> es:</p><div class="language-rust ext-rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">Primitive</span> <span class="token punctuation">{</span>
    <span class="token class-name">Nothing</span><span class="token punctuation">,</span>
    <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token class-name">BigInt</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Decimal</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Bytes</span><span class="token punctuation">(</span><span class="token keyword">u64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Line</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">ColumnPath</span><span class="token punctuation">(</span><span class="token class-name">ColumnPath</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Pattern</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token keyword">bool</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">DateTime</span><span class="token operator">&lt;</span><span class="token class-name">Utc</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Duration</span><span class="token punctuation">(</span><span class="token keyword">u64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Range</span><span class="token punctuation">(</span><span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">Range</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token class-name">PathBuf</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Binary</span><span class="token punctuation">(</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">u8</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// Stream markers (used as bookend markers rather than actual values)</span>
    <span class="token class-name">BeginningOfStream</span><span class="token punctuation">,</span>
    <span class="token class-name">EndOfStream</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Revisemos al rev\xE9s para ver c\xF3mo se construyen tipos de datos completos a partir de los primitivos:</p><h2 id="primitivos-primitive" tabindex="-1"><a class="header-anchor" href="#primitivos-primitive" aria-hidden="true">#</a> Primitivos (<code>Primitive</code>)</h2><p>El tipo de dato <code>Primitive</code> es el tipo fundamental en Nu. Mientras hay similaridades a tipos de datos fundamentales de lenguajes de programaci\xF3n, hay algunas diferencias debido a las capacidades en la shell de Nu.</p><p>Nu viene con dos tipos de n\xFAmeros &#39;grandes&#39;: <code>BigInt</code> para enteros y <code>BigDecimal</code> para n\xFAmeros decimales. Esto permite en el futuro lograr operaciones matem\xE1ticas y mantener precisi\xF3n m\xE1s tiempo en Nu.</p><p>Otros tipo de datos, quiz\xE1s un poco diferentes a la norma:</p><ul><li><code>Nothing</code> = representa un valor vac\xEDo</li><li><code>Bytes(u64)</code> = tama\xF1os de archivo en n\xFAmeros de bytes</li><li><code>Line(String)</code> = valor de cadena con un final de retorno de carro impl\xEDcito (o cr / lf)</li><li><code>ColumnPath(ColumnPath)</code> = rutas para extraer valores de las tablas</li><li><code>Pattern(string)</code> = un patr\xF3n glob (como <code>nu*</code> en <code>ls nu*</code>)</li><li><code>Duration(u64)</code> = representa duraci\xF3n en segundos (como <code>1hr</code> en <code>ls | where modified &lt; 1hr</code> )</li><li><code>Range(Box&lt;Range&gt;)</code> = rangos (como <code>0..2</code> en <code>ls | range 0..2</code>)</li><li><code>Path(PathBuf)</code> = una ruta de archivo</li><li><code>Binary(Vec&lt;u8&gt;)</code> = un arreglo de bytes</li><li><code>BeginningOfStream</code> = un marcador para denotar el inicio de un stream</li><li><code>EndOfStream</code> = un marador para denotar el fin de un stream</li></ul><h2 id="untaggedvalue" tabindex="-1"><a class="header-anchor" href="#untaggedvalue" aria-hidden="true">#</a> UntaggedValue</h2><p>Adem\xE1s de los tipos primitivos, Nu admite tipos de datos agregados. Colectivamente, estos tipos agregados se llaman <code>UntaggedValue</code>s.</p><p>Actualmente, Nu admite 5 tipos de valor <code>UntaggedValue</code>: <code>Row</code>, <code>Table</code>, <code>Block</code>, <code>Primitive</code>, y <code>Error</code>.</p><h3 id="tablas-y-filas-table-y-row" tabindex="-1"><a class="header-anchor" href="#tablas-y-filas-table-y-row" aria-hidden="true">#</a> Tablas y Filas (<code>Table</code> y <code>Row</code>)</h3><p>Nu utiliza un conjunto de t\xE9rminos que coinciden un poco m\xE1s con las hojas de c\xE1lculo. En lugar de tener listas de objetos, Nu tiene una tabla que contiene filas. Cada fila contiene los nombres de columna y sus valores correspondientes.</p><h3 id="bloques-block" tabindex="-1"><a class="header-anchor" href="#bloques-block" aria-hidden="true">#</a> Bloques (<code>Block</code>)</h3><p>Bloques representa c\xF3digo listo para ser ejecutado por el evaluador. Un ejemplo de esto es la condici\xF3n <code>where {$it &gt; 10}</code>.</p><h3 id="errores-error" tabindex="-1"><a class="header-anchor" href="#errores-error" aria-hidden="true">#</a> Errores (<code>Error</code>)</h3><p>Representa los errores que pueden ocurrir cuando se ejecutan los comandos en la tuber\xEDa.</p>`,19);function B(w,P){const e=i("RouterLink");return t(),c("div",null,[r,s("p",null,[d,k,m,g,h,v,b,p(e,{to:"/es/contributor-book/metadatos.html"},{default:l(()=>[_]),_:1}),f]),y])}var x=o(u,[["render",B],["__file","valores.html.vue"]]);export{x as default};
