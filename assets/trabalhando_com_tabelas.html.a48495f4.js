import{_ as a,o as s,c as n,e as o}from"./app.3a8901ae.js";const e={},p=o(`<h1 id="trabalhando-com-tabelas" tabindex="-1"><a class="header-anchor" href="#trabalhando-com-tabelas" aria-hidden="true">#</a> Trabalhando com tabelas</h1><p>Uma forma comum de ver os dados no Nu \xE9 por meio de uma tabela. O Nu traz um conjunto de comandos para se trabalhar com tabelas, facilitar a localiza\xE7\xE3o do que voc\xEA procura e restringir os dados apenas ao que voc\xEA precisa.</p><p>Para come\xE7ar, vamos usar a seguinte tabela:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
---+---------------+------+----------+---------+------------+------------
 <span class="token comment"># | name          | type | readonly | size    | accessed   | modified</span>
---+---------------+------+----------+---------+------------+------------
 <span class="token number">0</span> <span class="token operator">|</span> add.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">1</span> <span class="token operator">|</span> sum.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">2</span> <span class="token operator">|</span> inc.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">11.8</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">3</span> <span class="token operator">|</span> str.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">21.4</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">4</span> <span class="token operator">|</span> skip.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">1.7</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">5</span> <span class="token operator">|</span> textview.rs   <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">9.4</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">6</span> <span class="token operator">|</span> binaryview.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">13.0</span> KB <span class="token operator">|</span> a day ago  <span class="token operator">|</span> a day ago
 <span class="token number">7</span> <span class="token operator">|</span> edit.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">8</span> <span class="token operator">|</span> tree.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">9</span> <span class="token operator">|</span> sys.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">9.2</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
---+---------------+------+----------+---------+------------+------------
</code></pre></div><h2 id="ordenando-os-dados" tabindex="-1"><a class="header-anchor" href="#ordenando-os-dados" aria-hidden="true">#</a> Ordenando os dados</h2><p>Podemos ordenar uma tabela chamando o comando <code>sort-by</code> e informando quais colunas queremos usar na ordena\xE7\xE3o. Digamos que queremos ordenar nossa tabela pelo tamanho do arquivo:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size
---+---------------+------+----------+---------+------------+------------
 <span class="token comment"># | name          | type | readonly | size    | accessed   | modified</span>
---+---------------+------+----------+---------+------------+------------
 <span class="token number">0</span> <span class="token operator">|</span> skip.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">1.7</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">1</span> <span class="token operator">|</span> add.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">2</span> <span class="token operator">|</span> edit.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">3</span> <span class="token operator">|</span> sum.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">4</span> <span class="token operator">|</span> tree.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">5</span> <span class="token operator">|</span> sys.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">9.2</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">6</span> <span class="token operator">|</span> textview.rs   <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">9.4</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">7</span> <span class="token operator">|</span> inc.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">11.8</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">8</span> <span class="token operator">|</span> binaryview.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">13.0</span> KB <span class="token operator">|</span> a day ago  <span class="token operator">|</span> a day ago
 <span class="token number">9</span> <span class="token operator">|</span> str.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">21.4</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
---+---------------+------+----------+---------+------------+------------
</code></pre></div><p>Podemos ordenar uma tabela por qualquer coluna que possa ser comparada. Por exemplo, poder\xEDamos tamb\xE9m ter ordenado a tabela acima usando as colunas &quot;name&quot;, &quot;accessed&quot; ou &quot;modified&quot;.</p><h2 id="selecionando-os-dados-que-deseja" tabindex="-1"><a class="header-anchor" href="#selecionando-os-dados-que-deseja" aria-hidden="true">#</a> Selecionando os dados que deseja</h2><p>Podemos selecionar dados de uma tabela escolhendo colunas ou linhas espec\xEDficas. Vamos escolher algumas colunas da nossa tabela:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token keyword">select</span> name size
---+---------------+---------
 <span class="token comment"># | name          | size</span>
---+---------------+---------
 <span class="token number">0</span> <span class="token operator">|</span> add.rs        <span class="token operator">|</span> <span class="token number">2.7</span> KB
 <span class="token number">1</span> <span class="token operator">|</span> sum.rs        <span class="token operator">|</span> <span class="token number">3.0</span> KB
 <span class="token number">2</span> <span class="token operator">|</span> inc.rs        <span class="token operator">|</span> <span class="token number">11.8</span> KB
 <span class="token number">3</span> <span class="token operator">|</span> str.rs        <span class="token operator">|</span> <span class="token number">21.4</span> KB
 <span class="token number">4</span> <span class="token operator">|</span> skip.rs       <span class="token operator">|</span> <span class="token number">1.7</span> KB
 <span class="token number">5</span> <span class="token operator">|</span> textview.rs   <span class="token operator">|</span> <span class="token number">9.4</span> KB
 <span class="token number">6</span> <span class="token operator">|</span> binaryview.rs <span class="token operator">|</span> <span class="token number">13.0</span> KB
 <span class="token number">7</span> <span class="token operator">|</span> edit.rs       <span class="token operator">|</span> <span class="token number">2.7</span> KB
 <span class="token number">8</span> <span class="token operator">|</span> tree.rs       <span class="token operator">|</span> <span class="token number">3.0</span> KB
 <span class="token number">9</span> <span class="token operator">|</span> sys.rs        <span class="token operator">|</span> <span class="token number">9.2</span> KB
---+---------------+---------
</code></pre></div><p>Isso ajuda a criar uma tabela mais focada no que precisamos. A seguir, digamos que queremos ver apenas os 5 menores arquivos do diret\xF3rio:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> first <span class="token number">5</span>
---+---------+------+----------+--------+------------+------------
 <span class="token comment"># | name    | type | readonly | size   | accessed   | modified</span>
---+---------+------+----------+--------+------------+------------
 <span class="token number">0</span> <span class="token operator">|</span> skip.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">1.7</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">1</span> <span class="token operator">|</span> add.rs  <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">2</span> <span class="token operator">|</span> edit.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">3</span> <span class="token operator">|</span> sum.rs  <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">4</span> <span class="token operator">|</span> tree.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
---+---------+------+----------+--------+------------+------------
</code></pre></div><p>Note que primeiro ordenamos a tabela por tamanho e depois usamos o <code>first 5</code> para retornar as primeiras 5 linhas da tabela.</p><p>Voc\xEA tamb\xE9m pode usar <code>skip</code> para pular as linhas que n\xE3o quiser. Vamos pular as duas primeiras das 5 linhas que retornamos acima:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> first <span class="token number">5</span> <span class="token operator">|</span> skip <span class="token number">2</span>
---+---------+------+----------+--------+------------+------------
 <span class="token comment"># | name    | type | readonly | size   | accessed   | modified</span>
---+---------+------+----------+--------+------------+------------
 <span class="token number">0</span> <span class="token operator">|</span> edit.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">1</span> <span class="token operator">|</span> sum.rs  <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">2</span> <span class="token operator">|</span> tree.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
---+---------+------+----------+--------+------------+------------
</code></pre></div><p>Restringimos os dados \xE0s 3 linhas que nos interessam.</p><p>Vamos examinar alguns outros comandos para selecionar dados. Voc\xEA pode ter se perguntado por que as linhas da tabela s\xE3o numeradas. Isso serve como uma maneira pr\xE1tica de acessar uma linha espec\xEDfica. Vamos ordenar nossa tabela pelo nome do arquivo e ent\xE3o escolher uma das linhas com o comando <code>nth</code>, usando o n\xFAmero da linha:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by name
---+---------------+------+----------+---------+------------+------------
 <span class="token comment"># | name          | type | readonly | size    | accessed   | modified</span>
---+---------------+------+----------+---------+------------+------------
 <span class="token number">0</span> <span class="token operator">|</span> add.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">1</span> <span class="token operator">|</span> binaryview.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">13.0</span> KB <span class="token operator">|</span> a day ago  <span class="token operator">|</span> a day ago
 <span class="token number">2</span> <span class="token operator">|</span> edit.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">3</span> <span class="token operator">|</span> inc.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">11.8</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">4</span> <span class="token operator">|</span> skip.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">1.7</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">5</span> <span class="token operator">|</span> str.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">21.4</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">6</span> <span class="token operator">|</span> sum.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">7</span> <span class="token operator">|</span> sys.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">9.2</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">8</span> <span class="token operator">|</span> textview.rs   <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">9.4</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">9</span> <span class="token operator">|</span> tree.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
---+---------------+------+----------+---------+------------+------------

<span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by name <span class="token operator">|</span> nth <span class="token number">5</span>
--------+------+----------+---------+------------+------------
 name   <span class="token operator">|</span> <span class="token builtin class-name">type</span> <span class="token operator">|</span> <span class="token builtin class-name">readonly</span> <span class="token operator">|</span> size    <span class="token operator">|</span> accessed   <span class="token operator">|</span> modified
--------+------+----------+---------+------------+------------
 str.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">21.4</span> KB <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
--------+------+----------+---------+------------+------------
</code></pre></div><h2 id="obtendo-dados-de-uma-tabela" tabindex="-1"><a class="header-anchor" href="#obtendo-dados-de-uma-tabela" aria-hidden="true">#</a> Obtendo dados de uma tabela</h2><p>At\xE9 agora, trabalhamos as tabelas reduzindo-as para somente o que precisamos. \xC0s vezes queremos ir um passo al\xE9m e s\xF3 ver os valores das c\xE9lulas e n\xE3o de uma coluna toda. Digamos, por exemplo, que queremos somente uma lista com os nomes do arquivos. Para isso, usamos o comando <code>get</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name
---+---------------
 <span class="token comment"># | value</span>
---+---------------
 <span class="token number">0</span> <span class="token operator">|</span> add.rs
 <span class="token number">1</span> <span class="token operator">|</span> sum.rs
 <span class="token number">2</span> <span class="token operator">|</span> inc.rs
 <span class="token number">3</span> <span class="token operator">|</span> str.rs
 <span class="token number">4</span> <span class="token operator">|</span> skip.rs
 <span class="token number">5</span> <span class="token operator">|</span> textview.rs
 <span class="token number">6</span> <span class="token operator">|</span> binaryview.rs
 <span class="token number">7</span> <span class="token operator">|</span> edit.rs
 <span class="token number">8</span> <span class="token operator">|</span> tree.rs
 <span class="token number">9</span> <span class="token operator">|</span> sys.rs
---+---------------
</code></pre></div><p>Agora temos os valores para cada um dos nomes de arquivo.</p><p>Parece muito com o comando <code>select</code> que vimos antes, ent\xE3o vamos coloc\xE1-lo aqui de novo para compararmos os dois:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token keyword">select</span> name
---+---------------
 <span class="token comment"># | name</span>
---+---------------
 <span class="token number">0</span> <span class="token operator">|</span> add.rs
 <span class="token number">1</span> <span class="token operator">|</span> sum.rs
 <span class="token number">2</span> <span class="token operator">|</span> inc.rs
 <span class="token number">3</span> <span class="token operator">|</span> str.rs
 <span class="token number">4</span> <span class="token operator">|</span> skip.rs
 <span class="token number">5</span> <span class="token operator">|</span> textview.rs
 <span class="token number">6</span> <span class="token operator">|</span> binaryview.rs
 <span class="token number">7</span> <span class="token operator">|</span> edit.rs
 <span class="token number">8</span> <span class="token operator">|</span> tree.rs
 <span class="token number">9</span> <span class="token operator">|</span> sys.rs
---+---------------
</code></pre></div><p>S\xE3o muito parecidos! Vamos tentar explicar a diferen\xE7a entre esses dois comandos para esclarecer:</p><ul><li><code>select</code> - cria uam nova tabela que inclui apenas as colunas especificadas</li><li><code>get</code> - retorna os valores dentro da coluna especificada</li></ul><p>A \xFAnica maneira de diferenci\xE1-los olhando para a tabela \xE9 o nome caracter\xEDstico da coluna <code>value</code>, que nos permite saber que se trata de uma lista de valores com a qual podemos trabalhar.</p><p>O comando <code>get</code> pode ir um passo al\xE9m e receber um caminho para os dados mais profundos na tabela. Isso simplifica o trabalho com dados mais complexos, como as estruturas que voc\xEA pode encontrar num arquivo .json.</p><h2 id="modificando-dados-em-uma-tabela" tabindex="-1"><a class="header-anchor" href="#modificando-dados-em-uma-tabela" aria-hidden="true">#</a> Modificando dados em uma tabela</h2><p>Al\xE9m de selecionar dados de uma tabela, podemos tamb\xE9m alterar o que a tabela traz. Podemos querer adicionar novas colunas ou editar o conte\xFAdo de uma c\xE9lula. No Nu, em vez de editar localmente, cada comando nesta se\xE7\xE3o retornar\xE1 uma nova tabela no pipeline.</p><h3 id="adicionando-uma-nova-coluna" tabindex="-1"><a class="header-anchor" href="#adicionando-uma-nova-coluna" aria-hidden="true">#</a> Adicionando uma nova coluna</h3><p>Podemos usar o comando <code>add</code> para adicionar uma nova coluna na tabela. Vejamos um exemplo:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt.toml
---------
 edition
---------
 <span class="token number">2018</span>
---------
</code></pre></div><p>Vamos adicionar uma coluna chamada &quot;next_edition&quot; com o valor 2021:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt.toml <span class="token operator">|</span> <span class="token function">add</span> next_edition <span class="token number">2021</span>
---------+--------------
 edition <span class="token operator">|</span> next_edition
---------+--------------
 <span class="token number">2018</span>    <span class="token operator">|</span> <span class="token number">2021</span>
---------+--------------
</code></pre></div><p>Note que, se abrirmos o arquivo original, seu conte\xFAdo permanece o mesmo:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt.toml
---------
 edition
---------
 <span class="token number">2018</span>
---------
</code></pre></div><p>Altera\xE7\xF5es no Nu s\xE3o altera\xE7\xF5es funcionais, isto \xE9, atuam sobre os valores em si ao inv\xE9s de tentar causar uma altera\xE7\xE3o permanente, o que nos permite executar muitos tipos diferentes de a\xE7\xF5es no nosso pipeline at\xE9 que estejamos prontos para escrever o resultado com quaisquer mudan\xE7as, se assim quisermos. Aqui poder\xEDamos salvar o resultado usando o comando <code>save</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt.toml <span class="token operator">|</span> <span class="token function">add</span> next_edition <span class="token number">2021</span> <span class="token operator">|</span> save rustfmt2.toml
<span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt2.toml
---------+--------------
 edition <span class="token operator">|</span> next_edition
---------+--------------
 <span class="token number">2018</span>    <span class="token operator">|</span> <span class="token number">2021</span>
---------+--------------
</code></pre></div><h3 id="editando-uma-coluna" tabindex="-1"><a class="header-anchor" href="#editando-uma-coluna" aria-hidden="true">#</a> Editando uma coluna</h3><p>Semelhante ao comando <code>add</code>, podemos usar o comando <code>edit</code> para alterar o conte\xFAdo de uma coluna para um novo valor. Para ver isso funcionando, vamos abrir o mesmo arquivo:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">open</span> rustfmt.toml
---------
 edition
---------
 <span class="token number">2018</span>
---------
</code></pre></div><p>E agora vamos alterar a coluna <code>edition</code> para mostrar a pr\xF3xima edi\xE7\xE3o \xE0 qual esperamos dar suporte:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt.toml <span class="token operator">|</span> edit edition <span class="token number">2021</span>
---------
 edition
---------
 <span class="token number">2021</span>
---------
</code></pre></div><h3 id="incrementando-valores" tabindex="-1"><a class="header-anchor" href="#incrementando-valores" aria-hidden="true">#</a> Incrementando valores</h3><p>Existe mais um comando do Nu que nos ajudar\xE1 a trabalhar com n\xFAmeros e vers\xF5es: <code>inc</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt.toml
---------
 edition
---------
 <span class="token number">2018</span>
---------
<span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt.toml <span class="token operator">|</span> inc edition
---------
 edition
---------
 <span class="token number">2019</span>
---------
</code></pre></div><p>Como o valor em &quot;edition&quot; \xE9 um n\xFAmero, podemos usar <code>inc</code> para alter\xE1-lo. Onde <code>inc</code> realmente se destaca \xE9 trabalhando com vers\xF5es:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> get package.version
<span class="token number">0.1</span>.3
<span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> inc package.version --minor <span class="token operator">|</span> get package.version
<span class="token number">0.2</span>.0
</code></pre></div><p>Quando estamos trabalhando com vers\xF5es, podemos usar um dos modificadores a seguir para informar como incrementar a vers\xE3o:</p><ul><li><strong>--major</strong> - incrementa a vers\xE3o major (0.1.3 -&gt; 1.0.0)</li><li><strong>--minor</strong> - incrementa a vers\xE3o minor (0.1.3 -&gt; 0.2.0)</li><li><strong>--patch</strong> - incrementa a vers\xE3o patch (0.1.3 -&gt; 0.1.4)</li></ul>`,52),r=[p];function t(c,l){return s(),n("div",null,r)}var d=a(e,[["render",t],["__file","trabalhando_com_tabelas.html.vue"]]);export{d as default};
