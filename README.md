## Compass-Uol-Desafio-2
#### O que será desenvolvido: Uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala. Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede. Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores. Ex: se o usuário precisa de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L.

GitHub Pages: https://cruz-andre.github.io/Compass-Uol-Desafio-2/


☺ Regras de Negócio:
1. Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros
quadrados, mas podem possuir alturas e larguras diferentes.
2. O total de área das portas e janelas deve ser no máximo 50% da área da parede.
3. A altura das paredes com porta deve ser, no mínimo, 30 centímetros maior que a
altura da porta.
4 Cada janela possui as medidas: 2,00 x 1,20 metros
5. Cada porta possui as medidas: 0,80 x 1,90 metros
6. Cada litro de tinta é capaz de pintar 5 metros quadrados.
7. Não considerar teto nem piso.
8. As variações de tamanho das latas de tinta são:
o 0,5 L
o 2,5 L

#### To-Do:
1. Um cabeçalho padrão de navegação em todas as páginas. ![100% finalizado](https://progress-bar.dev/100/?title=finalizado)
2. Um rodapé padrão em todas as páginas. ![100% finalizado](https://progress-bar.dev/100/?title=finalizado)
3. Na página inicial: uma apresentação dos conteúdos das páginas. ![99% quase](https://progress-bar.dev/99/?title=quase)
4. Na 2ª página: calculadora de tintas ![95% construindo](https://progress-bar.dev/95/?title=construindo)
5. Na 3ª página: Formulário para contato. ![100% finalizado](https://progress-bar.dev/100/?title=finalizado)

<br>

#### Descrição de cada item do To-Do:
1. Um cabeçalho padrão de navegação em todas as páginas:
- ~~Montando um cabecalho com tag ```<nav>``` e em listas não ordenadas (tags ```<ul>``` e ```<li>```)~~
- ~~Display flexbox para colocar em linha os itens da lista.~~
- ~~Definindo design, cores, fonte e tamnho.~~
- ~~montando os links com a tag ancora ```<a>```~~
- ~~menu hamburguer na pagina mobile~~

<br>

2. Um rodapé padrão em todas as páginas:
- ~~Design de cores igual ao cabeçalho.~~
- ~~texto simples.~~
- ~~icones para acesso as redes sociais.~~

<br>

3. Na página inicial: uma apresentação dos conteúdos das páginas:
- ~~um carrossel do bootstrap com apresentação das 3 paginas e link direto.~~
- ~~a definir a outra section abaixo do carrossel.~~
- ~~ajustar o design da seção 2 (abaixo do carrossel).~~
- ~~definir um plano de fundo padrão para o site.~~
- mudar as fotos do carrossel.
- talves inverter a posição do carrossel com a seção 2.
- ~~ajustar a resposividade para telas maiores.~~

<br>

4. Na 2ª página: calculadora de tintas:
- ~~Preparando o arquivo javascript com as formulas e calculos matemáticos.~~
- ~~Escrevendo um algoritmo ou pseudo código para definir o passo a passo da lógica do plano de negócios.~~
- ~~Criar os inputs de usuário~~
- ~~calcular o m² da parede~~
- ~~calcular a quantidade de tinta necessária para pintar a parede~~
- ~~Mostrar quais latas de tintas necessárias, tipos de tamanho em Litros~~
- ~~Condição if para a parede não ser menor que 1m² e maior que 50m²~~
- ~~Mostrar que a parede não pode ter menos que 1m² e mais que 50m² quando o usuário digita os dados que aferem o resultado~~
- ~~condição para colocar porta(s) e/ou janela(s) e cada uma das paredes.~~
- ~~condição que a soma das áreas das porta(s) e/ou janela(s) não seja maior que 50% da área da parede.~~
- testar os calculos. ...testando
- testar a lógica (I/O). ...testando
- comentar o código. ...comentando
- arrumar formatação dos textos


<br>

5. Na 3ª página: Formulário para contato.
- ~~Campos de nome e sobrenome ou nome completo com required e validação regex somente caracteres alfabeticos~~
- ~~Campo de endereço de e-mail com required e validação regex~~
- ~~Campo de celular com ddd com required, validação regex e mascara~~
- ~~Campo de escolha (tipo radio) com marcação padrão definida~~
- ~~Campo de comentários opcional~~
