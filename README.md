<h1 align="center">Compass-Uol-Desafio-2</h1>
<h2 align="justify">O que será desenvolvido: Uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala. Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede. Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores. Ex: se o usuário precisa de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L.</h2>

<h3>Link da página hospedado no GitHub Pages: https://cruz-andre.github.io/Compass-Uol-Desafio-2/</h3>


☺ Regras de Negócio:
1. Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros
quadrados, mas podem possuir alturas e larguras diferentes.
2. O total de área das portas e janelas deve ser no máximo 50% da área da parede.
3. A altura das paredes com porta deve ser, no mínimo, 30 centímetros maior que a
altura da porta.
4. Cada janela possui as medidas: 2,00 x 1,20 metros
5. Cada porta possui as medidas: 0,80 x 1,90 metros
6. Cada litro de tinta é capaz de pintar 5 metros quadrados.
7. Não considerar teto nem piso.
8. As variações de tamanho das latas de tinta são: 0,5 L - 2,5 L - 3,6 L - 18 L.

#### To-Do:
1. Um cabeçalho padrão de navegação em todas as páginas. ![100% finalizado](https://progress-bar.dev/100/?title=finalizado)
2. Um rodapé padrão em todas as páginas. ![100% finalizado](https://progress-bar.dev/100/?title=finalizado)
3. Na página inicial: uma apresentação dos conteúdos das páginas. ![100% finalizado](https://progress-bar.dev/100/?title=finalizado)
4. Na 2ª página: calculadora de tintas ![100% finalizado](https://progress-bar.dev/100/?title=finalizado)
5. Na 3ª página: Formulário para contato. ![100% finalizado](https://progress-bar.dev/100/?title=finalizado)

<br>

#### Descrição de cada item do To-Do:
1. Um cabeçalho padrão de navegação em todas as páginas:
- [x] Montando um cabecalho com tag ```<nav>``` e em listas não ordenadas (tags ```<ul>``` e ```<li>```)
- [x] Display flexbox para colocar em linha os itens da lista.
- [x] Definindo design, cores, fonte e tamnho.
- [x] Montando os links com a tag ancora ```<a>```
- [x] Menu hamburguer na pagina mobile

<br>

2. Um rodapé padrão em todas as páginas:
- [x] Design de cores igual ao cabeçalho.
- [x] texto simples com simbolo copyright.
- [x] icones para acesso as redes sociais.

<br>

3. Na página inicial: uma apresentação dos conteúdos das páginas:
- [x] um carrossel do bootstrap com apresentação das 3 paginas e link direto.
- [x] a definir a outra section abaixo do carrossel.
- [x] ajustar o design da seção 2 (abaixo do carrossel).
- [x] definir um plano de fundo padrão para o site.
- [x] mudar as fotos do carrossel.
- [x] ajustar a resposividade para telas maiores.

<br>

4. Na 2ª página: calculadora de tintas:
- [x] Preparando o arquivo javascript com as formulas e calculos matemáticos.
- [x] Escrevendo um algoritmo ou pseudo código para definir o passo a passo da lógica do plano de negócios.
- [x] Criar os inputs de usuário
- [x] calcular o m² da parede
- [x] calcular a quantidade de tinta necessária para pintar a parede
- [x] Mostrar quais latas de tintas necessárias, tipos de tamanho em Litros
- [x] Condição if para a parede não ser menor que 1m² e maior que 50m²
- [x] Mostrar que a parede não pode ter menos que 1m² e mais que 50m² quando o usuário digita os dados que aferem o resultado
- [x] condição para colocar porta(s) e/ou janela(s) e cada uma das paredes.
- [x] condição que a soma das áreas das porta(s) e/ou janela(s) não seja maior que 50% da área da parede.
- [x] testar os calculos. ...testando
- [x] testar a lógica (I/O). ...testando
- [x] comentar o código. ...comentando
- [x] arrumar formatação dos textos


<br>

5. Na 3ª página: Formulário para contato.
- [x] Campos de nome e sobrenome ou nome completo com required e validação regex somente caracteres alfabeticos
- [x] Campo de endereço de e-mail com required e validação regex
- [x] Campo de celular com ddd com required, validação regex e mascara
- [x] Campo de escolha (tipo radio) com marcação padrão definida
- [x] Campo de comentários opcional
