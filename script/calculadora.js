/*   Uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta
 *   necessária para pintar uma sala. Essa aplicação deve considerar que a sala é
 *   composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada
 *   parede e quantas janelas e portas possuem cada parede. Com base na quantidade
 *   necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve
 *   comprar, sempre priorizando as latas maiores. Ex: se o usuário precisa de 19 litros,
 *   ele deve sugerir 1 lata de 18L + 2 latas de 0,5L
 *
 *   Regras de Negócio:
 *   1. Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros
 *   quadrados, mas podem possuir alturas e larguras diferentes.
 *   
 *   2. O total de área das portas e janelas deve ser no máximo 50% da área da parede.
 *   
 *   3. A altura das paredes com porta deve ser, no mínimo, 30 centímetros maior que a
 *   altura da porta.
 *   
 *   4 Cada janela possui as medidas: 2,00 x 1,20 metros
 *   
 *   5. Cada porta possui as medidas: 0,80 x 1,90 metros
 *   
 *   6. Cada litro de tinta é capaz de pintar 5 metros quadrados.
 *   
 *   7. Não considerar teto nem piso.
 *   
 *   8. As variações de tamanho das latas de tinta são:
 *      o 0,5 L
 *      o 2,5 Lo 3,6 L
 *      o 18 L
 */

/**
 * matemática daqui para baixo
 */

var comprimento = 5.57;
console.log("\nCOMPRIMENTO da parede: " + comprimento);

var altura = 2.20;
console.log("ALTURA da parede: " + altura);

var m2Parede = parseFloat((comprimento * altura).toFixed(2));
console.log("\nm² da parede: " + m2Parede + "\n");

var m2Sala = parseFloat(((comprimento * altura) * 4).toFixed(2)); // descontar portas e janelas.
console.log("m² da sala: " + m2Sala + "\n");

var m2Porta = 0.80 * 1.90; // 1.52m²
var m2Janela = 1.20 * 2.0; // 2.40m²
var somaM2PortaJanela = parseFloat((m2Porta + m2Janela).toFixed(2)); // 3,92m²

var tamMinParComPorJan = somaM2PortaJanela * 2 // 7,84m²

var m2SalaTirandoPJ = m2Sala - somaM2PortaJanela //m2 da sala tirando 1 porta e 1 janela
console.log("m² da sala Tirando Porta e Janela: " + m2SalaTirandoPJ + "\n");

var umlitroTinta5m2 = 5;
var quantosLitros = m2SalaTirandoPJ / umlitroTinta5m2;
console.log("São necessário " + quantosLitros + " litros de tinta\n" + "Para pintar " + m2SalaTirandoPJ + " m² da sala\n");



/**
 * lógica daqui para baixo
 */

var regra2 = (m2Parede / 2).toFixed(2);
var cincoentaPorCento = somaM2PortaJanela < regra2;
var soma = m2Parede - (m2Porta + m2Janela);

console.log("m² da Porta: " + m2Porta + "\n");
console.log("m² da Janela: " + m2Janela + "\n");
console.log("m² da Porta mais Janela: " + somaM2PortaJanela + "\n");
console.log("m² Tamanho mínimo da parede com porta e janela: " + tamMinParComPorJan + "\n");
console.log("m² da parede tirando a 1 porta e 1 janela: " + soma + "\n");
console.log("regra2: " + regra2 + "\n");
console.log("regra2: " + cincoentaPorCento + "\n");



