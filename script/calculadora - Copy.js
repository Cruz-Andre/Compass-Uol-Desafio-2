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

function calcParede1() {
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    document.getElementById("compInput").innerHTML = "COMPRIMENTO da parede: " + comprimento + "m";

    var altura = parseFloat(document.getElementById("altura").value);
    document.getElementById("alturaInput").innerHTML = "ALTURA da parede: " + altura + "m";

    var m2Parede = parseFloat((comprimento * altura).toFixed(2));
    document.getElementById("m2paredeResultado").innerHTML = "m² da parede: " + m2Parede + "m²";

    var portas = parseInt(document.getElementById("p1portas").value);
    var janelas = parseInt(document.getElementById("p1janelas").value);

    /**
     * A a metragem da porta e da janela são fixas:
     * Porta: 0,80m comprimento X 1,90m altura - Área de 1,52m²
     * Janela: 2,00m comprimento X 1,20 altura - Área de 2,40m²
     */

    var areaPorta = parseFloat((1.52 * portas).toFixed(2));
    var areaJanela = parseFloat((2.40 * janelas).toFixed(2));
    m2Parede = parseFloat((m2Parede - (areaPorta + areaJanela)).toFixed(2));

    if ((m2Parede / 2) > (areaPorta + areaJanela)) {

        var umlitroTinta5m2 = 5;
        var quantosLitros = parseFloat((m2Parede / umlitroTinta5m2).toFixed(2));
        document.getElementById("precisoDe").innerHTML = "São necessários " + quantosLitros + " litros de tinta\n" + "Para pintar " + m2Parede + "m² da parede";
        

        if (m2Parede >= 1 && m2Parede <= 50) {
            var latas = 0;
            var latas18 = 0;
            var latas36 = 0;
            var latas25 = 0;
            var latas05 = 0;
            var latasAbaixoDe05 = 0;
            while (quantosLitros != 0) {
                if(quantosLitros >= 18.00) {
                    quantosLitros = quantosLitros - 18.00;
                    latas++;
                    latas18++;
                }
                else if(quantosLitros >= 3.60) {
                    quantosLitros = quantosLitros - 3.60;
                    latas++;
                    latas36++;
                }
                else if(quantosLitros >= 2.50) {
                    quantosLitros = quantosLitros - 2.50;
                    latas++;
                    latas25++;
                }
                else if(quantosLitros >= 0.50) {
                    quantosLitros = quantosLitros - 0.50;
                    latas++;
                    latas05++;
                }
                else if(quantosLitros < 0.50) {
                    quantosLitros = 0;
                    latas++;
                    latasAbaixoDe05++;
                }
            }
            document.getElementById("lata18l").innerHTML = "Numero de latas de 18L: " + latas18;
            document.getElementById("lata36l").innerHTML = "Numero de latas de 3.6L: " + latas36;
            document.getElementById("lata25l").innerHTML = "Numero de latas de 2.5L: " + latas25;
            document.getElementById("lata05l").innerHTML = "Numero de latas de 0.5L: " + latas05;
            document.getElementById("lata0l").innerHTML = "Numero de latas adicionais de 0.5L: " + latasAbaixoDe05;
            document.getElementById("latas").innerHTML = "Numero total de latas: " + latas;
            document.getElementById("erro").innerHTML = "";
        
        }

        else {
            document.getElementById("erro").innerHTML = "O tamanho da parede não pode ter menos de 1m² ou mais de 50m²";
            document.getElementById("precisoDe").innerHTML = "";
            document.getElementById("lata18l").innerHTML = "";
            document.getElementById("lata36l").innerHTML = "";
            document.getElementById("lata25l").innerHTML = "";
            document.getElementById("lata05l").innerHTML = "";
            document.getElementById("lata0l").innerHTML = "";
            document.getElementById("latas").innerHTML = "";
        }

    }   
    // else {
    //     document.getElementById("erro").innerHTML = "O tamanho da parede não pode ter menos de 1m² ou mais de 50m²";
    //     document.getElementById("precisoDe").innerHTML = "";
    //     document.getElementById("lata18l").innerHTML = "";
    //     document.getElementById("lata36l").innerHTML = "";
    //     document.getElementById("lata25l").innerHTML = "";
    //     document.getElementById("lata05l").innerHTML = "";
    //     document.getElementById("lata0l").innerHTML = "";
    //     document.getElementById("latas").innerHTML = "";

    //     }

}

function calcParede2() {
    var comprimento = parseFloat(document.getElementById("comprimento2").value);
    document.getElementById("compInput2").innerHTML = "COMPRIMENTO da parede: " + comprimento + "m";

    var altura = parseFloat(document.getElementById("altura2").value);
    document.getElementById("alturaInput2").innerHTML = "ALTURA da parede: " + altura + "m";

    var m2Parede = parseFloat((comprimento * altura).toFixed(2));
    document.getElementById("m2paredeResultado2").innerHTML = "m² da parede: " + m2Parede + "m²";

    var umlitroTinta5m2 = 5;
    var quantosLitros = parseFloat((m2Parede / umlitroTinta5m2).toFixed(2));
    document.getElementById("precisoDe2").innerHTML = "São necessários " + quantosLitros + " litros de tinta\n" + "Para pintar " + m2Parede + "m² da parede";

    // var areaPorta = parseFloat((0.80 * 1.90).toFixed(2));
    // var areaJanela = parseFloat((2.00 * 1.20).toFixed(2));

    // var porta = parseInt(document.getElementById("portas").value);
    // var janela = parseInt(document.getElementById("janelas").value);

    if (m2Parede >= 1 && m2Parede <= 50) {
        var latas = 0;
        var latas18 = 0;
        var latas36 = 0;
        var latas25 = 0;
        var latas05 = 0;
        var latasAbaixoDe05 = 0;
        while (quantosLitros != 0) {
            if(quantosLitros >= 18.00) {
                quantosLitros = quantosLitros - 18.00;
                latas++;
                latas18++;
            }
            else if(quantosLitros >= 3.60) {
                quantosLitros = quantosLitros - 3.60;
                latas++;
                latas36++;
            }
            else if(quantosLitros >= 2.50) {
                quantosLitros = quantosLitros - 2.50;
                latas++;
                latas25++;
            }
            else if(quantosLitros >= 0.50) {
                quantosLitros = quantosLitros - 0.50;
                latas++;
                latas05++;
            }
            else if(quantosLitros < 0.50) {
                quantosLitros = 0;
                latas++;
                latasAbaixoDe05++;
            }
        }
        document.getElementById("lata18l2").innerHTML = "Numero de latas de 18L: " + latas18;
        document.getElementById("lata36l2").innerHTML = "Numero de latas de 3.6L: " + latas36;
        document.getElementById("lata25l2").innerHTML = "Numero de latas de 2.5L: " + latas25;
        document.getElementById("lata05l2").innerHTML = "Numero de latas de 0.5L: " + latas05;
        document.getElementById("lata0l2").innerHTML = "Numero de latas adicionais de 0.5L: " + latasAbaixoDe05;
        document.getElementById("latas2").innerHTML = "Numero total de latas: " + latas;
        document.getElementById("erro2").innerHTML = "";
    
    }

    else {
        document.getElementById("erro2").innerHTML = "O tamanho da parede não pode ter menos de 1m² ou mais de 50m²";
        document.getElementById("precisoDe2").innerHTML = "";
        document.getElementById("lata18l2").innerHTML = "";
        document.getElementById("lata36l2").innerHTML = "";
        document.getElementById("lata25l2").innerHTML = "";
        document.getElementById("lata05l2").innerHTML = "";
        document.getElementById("lata0l2").innerHTML = "";
        document.getElementById("latas2").innerHTML = "";
    }

}

function calcula() {
    calcParede1();
    calcParede2();
}


  // var m2Sala = parseFloat(((comprimento * altura) * 4).toFixed(2)); // descontar portas e janelas.
  // console.log("m² da sala: " + m2Sala + "\n");

  // var m2Porta = 0.80 * 1.90; // 1.52m²2
  // var m2Janela = 1.20 * 2.0; // 2.40m²
  // var somaM2PortaJanela = parseFloat((m2Porta + m2Janela).toFixed(2)); // 3,92m²

  // var tamMinParComPorJan = somaM2PortaJanela * 2 // 7,84m²

  // var m2SalaTirandoPJ = m2Sala - somaM2PortaJanela //m2 da sala tirando 1 porta e 1 janela
  // console.log("m² da sala Tirando Porta e Janela: " + m2SalaTirandoPJ + "\n");

  // var umlitroTinta5m2 = 5;
  // var quantosLitros = m2SalaTirandoPJ / umlitroTinta5m2;
  // console.log("São necessário " + quantosLitros + " litros de tinta\n" + "Para pintar " + m2SalaTirandoPJ + " m² da sala\n");



  /**
   * lógica daqui para baixo
   */

  // var regra2 = (m2Parede / 2).toFixed(2);
  // var cincoentaPorCento = somaM2PortaJanela < regra2;
  // var soma = m2Parede - (m2Porta + m2Janela);

  // console.log("m² da Porta: " + m2Porta + "\n");
  // console.log("m² da Janela: " + m2Janela + "\n");
  // console.log("m² da Porta mais Janela: " + somaM2PortaJanela + "\n");
  // console.log("m² Tamanho mínimo da parede com porta e janela: " + tamMinParComPorJan + "\n");
  // console.log("m² da parede tirando a 1 porta e 1 janela: " + soma + "\n");
  // console.log("regra2: " + regra2 + "\n");
  // console.log("regra2: " + cincoentaPorCento + "\n");