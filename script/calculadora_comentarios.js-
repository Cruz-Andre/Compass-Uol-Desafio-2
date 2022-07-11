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
 * Função da 1ª parede. 
 * Devido ao meu conhecimento básico em programação, esse foi o máximo possivel de otimização do código.
 * 
 */
function calcParede1() {
    /**
     * Pega o input do usuário para o comprimento altura da 1ª parede
     * e mostra na tela os valores digitados.
     */
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    document.getElementById("compInput").innerHTML = "COMPRIMENTO da parede: " + comprimento + "m";

    var altura = parseFloat(document.getElementById("altura").value);
    document.getElementById("alturaInput").innerHTML = "ALTURA da parede: " + altura + "m";

    /**
     * Calcula a área da parede e mostra na tela o resultado.
     */
    var m2ParedeP1 = parseFloat((comprimento * altura).toFixed(2));
    document.getElementById("m2paredeResultado").innerHTML = "m² da parede: " + m2ParedeP1 + "m²";

    /**
     * Pega o input do usuário para a quantidade de portas e janelas
     */
    var portasP1 = parseInt(document.getElementById("p1portas").value);
    var janelasP1 = parseInt(document.getElementById("p1janelas").value);

    /**
     * Chama a função que soma a área das portas e janelas de acordo com a quantidade escolhida pelo usuário.
     * o terceido parametro é para o console.log, controle interno durante a construção do código, para
     * comparar a área da parede com a área das portas e janelas.
     */
    areaDasPortasEJanelas(portasP1, janelasP1, m2ParedeP1);
    
    /**
     * Calcula a área da parede que realmente será pintada, e
     * calcula a quantidade de tinta necessária para pintar a parede.
     */
    m2ParedeMenosPeJ1 = parseFloat((m2ParedeP1 - (areaPorta + areaJanela)).toFixed(2));
    var umlitroTinta5m2 = 5;
    quantosLitros1 = parseFloat((m2ParedeMenosPeJ1 / umlitroTinta5m2).toFixed(2));

    /**
     * Condição para verificar se a área da parede está entre 1m² a 50m² e
     * 50% da área da parede é maior que a soma das áreas de portas e janelas.
     */    
    if (m2ParedeP1 >= 1 && m2ParedeP1 <= 50 && (m2ParedeP1 / 2) > somaPeJ) {

        /**
         * Chama a função que calcula o comprimento e a altura das portas e janelas.
         * de acordo com a quantidade escolhida pelo usuário
         */
        comprimentoAlturaPortasJanelas(portasP1, janelasP1);

        /**
         * Condição para verificar se o comprimento e altura da parede é maior que
         * o comprimento e altura das portas e janelas.
         */        
        if (comprimento >= (comprimentoDaPorta + comprimentoDaJanela) && altura >= (alturaDaPorta + 0.30) && altura > alturaDaJanela) {

            /**
             * Mostra na tela a quantidade de litros necessária para pintar a área da parede.
             */
            document.getElementById("precisoDe").innerHTML = "São necessários " + quantosLitros1 + " litros de tinta " + "Para pintar " + m2ParedeMenosPeJ1 + "m² da parede";

            /**
             * Chama a função que calcula as latas que o usuário deve usar e a quantidade de latas
             */
            calcLatas(quantosLitros1);

            /**
             * Mostra na tela as latas que o usuário deve usar e a quantidade de latas
             */            
            document.getElementById("lata18l").innerHTML = "Numero de latas de 18L: " + latas18;
            document.getElementById("lata36l").innerHTML = "Numero de latas de 3.6L: " + latas36;
            document.getElementById("lata25l").innerHTML = "Numero de latas de 2.5L: " + latas25;
            document.getElementById("lata05l").innerHTML = "Numero de latas de 0.5L: " + latas05;
            document.getElementById("lata0l").innerHTML = "Numero de latas adicionais de 0.5L: " + latasAbaixoDe05;
            document.getElementById("latas").innerHTML = "Numero total de latas: " + latas;
            document.getElementById("erroAvisoP").innerHTML = "";
            document.getElementById("erroAvisoJ").innerHTML = "";
            document.getElementById("erroAvisoArea").innerHTML = "";
            document.getElementById("erroAvisoAreaPJ").innerHTML = "";
            document.getElementById("erroAvisoAreaSomaPJ").innerHTML = "";
            document.getElementById("erroP").innerHTML = "";
            document.getElementById("erroJ").innerHTML = "";
            document.getElementById("erroPeJ").innerHTML = "";
            
        }
        /**
         * Condição senão, caso o comprimento ou a altura da parede seja menor que
         * o comprimento e altura das portas e/ou janelas
         */
        else {
            /**
             * Mostra na tela o aviso ao usuário.
             */
            document.getElementById("precisoDe").innerHTML = "";
            document.getElementById("lata18l").innerHTML = "";
            document.getElementById("lata36l").innerHTML = "";
            document.getElementById("lata25l").innerHTML = "";
            document.getElementById("lata05l").innerHTML = "";
            document.getElementById("lata0l").innerHTML = "";
            document.getElementById("latas").innerHTML = "";
            document.getElementById("erroAvisoP").innerHTML = "A altura mínima da parede, se houver porta, é de 2,20m (1,90m mais 0,30m).";
            document.getElementById("erroAvisoJ").innerHTML = "A altura mínima da parede, se houver janela, é de 1,20m.";
            document.getElementById("erroAvisoArea").innerHTML = "O comprimento da parede não pode ser menor que o comprimento da(s) porta(s) e/ou janela(s)";
            document.getElementById("erroAvisoAreaPJ").innerHTML = "";
            document.getElementById("erroAvisoAreaSomaPJ").innerHTML = "";
            document.getElementById("erroP").innerHTML = "O comprimento da(s) porta(s) foi: " + comprimentoDaPorta + "m";
            document.getElementById("erroJ").innerHTML = "O comprimento da(s) janela(s) foi: " + comprimentoDaJanela + "m";
            document.getElementById("erroPeJ").innerHTML = "A soma dos comprimentos foi: " + (comprimentoDaPorta + comprimentoDaJanela).toFixed(2) + "m";    
        }
 
    }
    /**
     * Condição senão, caso a área da parede seja menor que 1m² ou maior que 50m² e/ou
     * 50% da área da parede seja menor que a soma das áreas de portas e janelas.
     */
    else {
        /**
         * Mostra na tela o aviso ao usário
         */
        document.getElementById("precisoDe").innerHTML = "";
        document.getElementById("lata18l").innerHTML = "";
        document.getElementById("lata36l").innerHTML = "";
        document.getElementById("lata25l").innerHTML = "";
        document.getElementById("lata05l").innerHTML = "";
        document.getElementById("lata0l").innerHTML = "";
        document.getElementById("latas").innerHTML = "";
        document.getElementById("erroAvisoP").innerHTML = "";
        document.getElementById("erroAvisoJ").innerHTML = "";
        document.getElementById("erroAvisoArea").innerHTML = "A área da parede não pode ser menor que 1m² ou maior que 50m²";
        document.getElementById("erroAvisoAreaPJ").innerHTML = "Ou a soma da área de Porta(s) e/ou Janela(s) não pode ser maior que 50% da área da parede.";
        document.getElementById("erroAvisoAreaSomaPJ").innerHTML = "O m² da parede dividido por 2 é: " + (m2ParedeP1 / 2).toFixed(2) + "m²." + " A Soma das portas e/ou janelas é: "  + somaPeJ + "m²";
        document.getElementById("erroP").innerHTML = "";
        document.getElementById("erroJ").innerHTML = "";
        document.getElementById("erroPeJ").innerHTML = "";
    }
    
}

/**idem ao comentário da parede 1 */
function calcParede2() {
    var comprimento = parseFloat(document.getElementById("comprimento2").value);
    document.getElementById("compInput2").innerHTML = "COMPRIMENTO da parede: " + comprimento + "m";

    var altura = parseFloat(document.getElementById("altura2").value);
    document.getElementById("alturaInput2").innerHTML = "ALTURA da parede: " + altura + "m";

    var m2ParedeP2 = parseFloat((comprimento * altura).toFixed(2));
    document.getElementById("m2paredeResultado2").innerHTML = "m² da parede: " + m2ParedeP2 + "m²";

    var portasP2 = parseInt(document.getElementById("p2portas").value);
    var janelasP2 = parseInt(document.getElementById("p2janelas").value);

    areaDasPortasEJanelas(portasP2, janelasP2, m2ParedeP2);

    m2ParedeMenosPeJ2 = parseFloat((m2ParedeP2 - (areaPorta + areaJanela)).toFixed(2));
    var umlitroTinta5m2 = 5;
    quantosLitros2 = parseFloat((m2ParedeMenosPeJ2 / umlitroTinta5m2).toFixed(2));
    
    if (m2ParedeP2 >= 1 && m2ParedeP2 <= 50 && (m2ParedeP2 / 2) > somaPeJ) {

        comprimentoAlturaPortasJanelas(portasP2, janelasP2)
        
        if (comprimento >= (comprimentoDaPorta + comprimentoDaJanela) && altura >= (alturaDaPorta + 0.30) && altura > alturaDaJanela) {
            
            document.getElementById("precisoDe2").innerHTML = "São necessários " + quantosLitros2 + " litros de tinta " + "Para pintar " + m2ParedeMenosPeJ2 + "m² da parede";
            
            calcLatas(quantosLitros2);
            
            document.getElementById("lata18l2").innerHTML = "Numero de latas de 18L: " + latas18;
            document.getElementById("lata36l2").innerHTML = "Numero de latas de 3.6L: " + latas36;
            document.getElementById("lata25l2").innerHTML = "Numero de latas de 2.5L: " + latas25;
            document.getElementById("lata05l2").innerHTML = "Numero de latas de 0.5L: " + latas05;
            document.getElementById("lata0l2").innerHTML = "Numero de latas adicionais de 0.5L: " + latasAbaixoDe05;
            document.getElementById("latas2").innerHTML = "Numero total de latas: " + latas;
            document.getElementById("erroAvisoP2").innerHTML = "";
            document.getElementById("erroAvisoJ2").innerHTML = "";
            document.getElementById("erroAvisoArea2").innerHTML = "";
            document.getElementById("erroAvisoAreaPJ2").innerHTML = "";
            document.getElementById("erroAvisoAreaSomaPJ2").innerHTML = "";
            document.getElementById("erroP2").innerHTML = "";
            document.getElementById("erroJ2").innerHTML = "";
            document.getElementById("erroPeJ2").innerHTML = "";
            
        }
        else {        
            document.getElementById("precisoDe2").innerHTML = "";
            document.getElementById("lata18l2").innerHTML = "";
            document.getElementById("lata36l2").innerHTML = "";
            document.getElementById("lata25l2").innerHTML = "";
            document.getElementById("lata05l2").innerHTML = "";
            document.getElementById("lata0l2").innerHTML = "";
            document.getElementById("latas2").innerHTML = "";
            document.getElementById("erroAvisoP2").innerHTML = "A altura mínima da parede, se houver porta, é de 2,20m (1,90m mais 0,30m).";
            document.getElementById("erroAvisoJ2").innerHTML = "A altura mínima da parede, se houver janela, é de 1,20m.";
            document.getElementById("erroAvisoArea2").innerHTML = "O comprimento da parede não pode ser menor que o comprimento da(s) porta(s) e/ou janela(s)";
            document.getElementById("erroAvisoAreaPJ2").innerHTML = "";
            document.getElementById("erroAvisoAreaSomaPJ2").innerHTML = "";
            document.getElementById("erroP2").innerHTML = "O comprimento da(s) porta(s) foi: " + comprimentoDaPorta + "m";
            document.getElementById("erroJ2").innerHTML = "O comprimento da(s) janela(s) foi: " + comprimentoDaJanela + "m";
            document.getElementById("erroPeJ2").innerHTML = "A soma dos comprimentos foi: " + (comprimentoDaPorta + comprimentoDaJanela).toFixed(2) + "m"; 
        }

    }
    else {
        document.getElementById("precisoDe2").innerHTML = "";
        document.getElementById("lata18l2").innerHTML = "";
        document.getElementById("lata36l2").innerHTML = "";
        document.getElementById("lata25l2").innerHTML = "";
        document.getElementById("lata05l2").innerHTML = "";
        document.getElementById("lata0l2").innerHTML = "";
        document.getElementById("latas2").innerHTML = "";
        document.getElementById("erroAvisoP2").innerHTML = "";
        document.getElementById("erroAvisoJ2").innerHTML = "";
        document.getElementById("erroAvisoArea2").innerHTML = "A área da parede não pode ser menor que 1m² ou maior que 50m²";
        document.getElementById("erroAvisoAreaPJ2").innerHTML = "Ou a soma da área de Porta(s) e/ou Janela(s) não pode ser maior que 50% da área da parede.";
        document.getElementById("erroAvisoAreaSomaPJ2").innerHTML = "O m² da parede dividido por 2 é: " + (m2ParedeP2 / 2).toFixed(2) + "m²." + " A Soma das portas e/ou janelas é: "  + somaPeJ + "m²";
        document.getElementById("erroP2").innerHTML = "";
        document.getElementById("erroJ2").innerHTML = "";
        document.getElementById("erroPeJ2").innerHTML = "";
    }
 
}

/**idem ao comentário da parede 1 */
function calcParede3() {
    var comprimento = parseFloat(document.getElementById("comprimento3").value);
    document.getElementById("compInput3").innerHTML = "COMPRIMENTO da parede: " + comprimento + "m";

    var altura = parseFloat(document.getElementById("altura3").value);
    document.getElementById("alturaInput3").innerHTML = "ALTURA da parede: " + altura + "m";

    var m2ParedeP3 = parseFloat((comprimento * altura).toFixed(2));
    document.getElementById("m2paredeResultado3").innerHTML = "m² da parede: " + m2ParedeP3 + "m²";

    var portasP3 = parseInt(document.getElementById("p3portas").value);
    var janelasP3 = parseInt(document.getElementById("p3janelas").value);

    areaDasPortasEJanelas(portasP3, janelasP3, m2ParedeP3);

    m2ParedeMenosPeJ3 = parseFloat((m2ParedeP3 - (areaPorta + areaJanela)).toFixed(2));
    var umlitroTinta5m2 = 5;
    quantosLitros3 = parseFloat((m2ParedeMenosPeJ3 / umlitroTinta5m2).toFixed(2));

    if (m2ParedeP3 >= 1 && m2ParedeP3 <= 50 && (m2ParedeP3 / 2) > somaPeJ) {

        comprimentoAlturaPortasJanelas(portasP3, janelasP3)
        
        if (comprimento >= (comprimentoDaPorta + comprimentoDaJanela) && altura >= (alturaDaPorta + 0.30) && altura > alturaDaJanela) {

            document.getElementById("precisoDe3").innerHTML = "São necessários " + quantosLitros3 + " litros de tinta " + "Para pintar " + m2ParedeMenosPeJ3 + "m² da parede";
            
            calcLatas(quantosLitros3);
            
            document.getElementById("lata18l3").innerHTML = "Numero de latas de 18L: " + latas18;
            document.getElementById("lata36l3").innerHTML = "Numero de latas de 3.6L: " + latas36;
            document.getElementById("lata25l3").innerHTML = "Numero de latas de 2.5L: " + latas25;
            document.getElementById("lata05l3").innerHTML = "Numero de latas de 0.5L: " + latas05;
            document.getElementById("lata0l3").innerHTML = "Numero de latas adicionais de 0.5L: " + latasAbaixoDe05;
            document.getElementById("latas3").innerHTML = "Numero total de latas: " + latas;
            document.getElementById("erroAvisoP3").innerHTML = "";
            document.getElementById("erroAvisoJ3").innerHTML = "";
            document.getElementById("erroAvisoArea3").innerHTML = "";
            document.getElementById("erroAvisoAreaPJ3").innerHTML = "";
            document.getElementById("erroAvisoAreaSomaPJ3").innerHTML = "";
            document.getElementById("erroP3").innerHTML = "";
            document.getElementById("erroJ3").innerHTML = "";
            document.getElementById("erroPeJ3").innerHTML = "";
            
        }
        else {        
            document.getElementById("precisoDe3").innerHTML = "";
            document.getElementById("lata18l3").innerHTML = "";
            document.getElementById("lata36l3").innerHTML = "";
            document.getElementById("lata25l3").innerHTML = "";
            document.getElementById("lata05l3").innerHTML = "";
            document.getElementById("lata0l3").innerHTML = "";
            document.getElementById("latas3").innerHTML = "";
            document.getElementById("erroAvisoP3").innerHTML = "A altura mínima da parede, se houver porta, é de 2,20m (1,90m mais 0,30m).";
            document.getElementById("erroAvisoJ3").innerHTML = "A altura mínima da parede, se houver janela, é de 1,20m.";
            document.getElementById("erroAvisoArea3").innerHTML = "O comprimento da parede não pode ser menor que o comprimento da(s) porta(s) e/ou janela(s)";
            document.getElementById("erroAvisoAreaPJ3").innerHTML = "";
            document.getElementById("erroAvisoAreaSomaPJ3").innerHTML = "";
            document.getElementById("erroP3").innerHTML = "O comprimento da(s) porta(s) foi: " + comprimentoDaPorta + "m";
            document.getElementById("erroJ3").innerHTML = "O comprimento da(s) janela(s) foi: " + comprimentoDaJanela + "m";
            document.getElementById("erroPeJ3").innerHTML = "A soma dos comprimentos foi: " + (comprimentoDaPorta + comprimentoDaJanela).toFixed(2) + "m";   
        }

    }
    else {
        document.getElementById("precisoDe3").innerHTML = "";
        document.getElementById("lata18l3").innerHTML = "";
        document.getElementById("lata36l3").innerHTML = "";
        document.getElementById("lata25l3").innerHTML = "";
        document.getElementById("lata05l3").innerHTML = "";
        document.getElementById("lata0l3").innerHTML = "";
        document.getElementById("latas3").innerHTML = "";
        document.getElementById("erroAvisoP3").innerHTML = "";
        document.getElementById("erroAvisoJ3").innerHTML = "";
        document.getElementById("erroAvisoArea3").innerHTML = "A área da parede não pode ser menor que 1m² ou maior que 50m²";
        document.getElementById("erroAvisoAreaPJ3").innerHTML = "Ou a soma da área de Porta(s) e/ou Janela(s) não pode ser maior que 50% da área da parede.";
        document.getElementById("erroAvisoAreaSomaPJ3").innerHTML = "O m² da parede dividido por 2 é: " + (m2ParedeP3 / 2).toFixed(2) + "m²." + " A Soma das portas e/ou janelas é: "  + somaPeJ + "m²";
        document.getElementById("erroP3").innerHTML = "";
        document.getElementById("erroJ3").innerHTML = "";
        document.getElementById("erroPeJ3").innerHTML = "";
    }
    
}

/**idem ao comentário da parede 1 */
function calcParede4() {
    var comprimento = parseFloat(document.getElementById("comprimento4").value);
    document.getElementById("compInput4").innerHTML = "COMPRIMENTO da parede: " + comprimento + "m";

    var altura = parseFloat(document.getElementById("altura4").value);
    document.getElementById("alturaInput4").innerHTML = "ALTURA da parede: " + altura + "m";

    var m2ParedeP4 = parseFloat((comprimento * altura).toFixed(2));
    document.getElementById("m2paredeResultado4").innerHTML = "m² da parede: " + m2ParedeP4 + "m²";

    var portasP4 = parseInt(document.getElementById("p4portas").value);
    var janelasP4 = parseInt(document.getElementById("p4janelas").value);

    areaDasPortasEJanelas(portasP4, janelasP4, m2ParedeP4);

    m2ParedeMenosPeJ4 = parseFloat((m2ParedeP4 - (areaPorta + areaJanela)).toFixed(2));    
    var umlitroTinta5m2 = 5;
    quantosLitros4 = parseFloat((m2ParedeMenosPeJ4 / umlitroTinta5m2).toFixed(2));

    if (m2ParedeP4 >= 1 && m2ParedeP4 <= 50 && (m2ParedeP4 / 2) > somaPeJ) {

        comprimentoAlturaPortasJanelas(portasP4, janelasP4)
        
        if (comprimento >= (comprimentoDaPorta + comprimentoDaJanela) && altura >= (alturaDaPorta + 0.30) && altura > alturaDaJanela) {

            document.getElementById("precisoDe4").innerHTML = "São necessários " + quantosLitros4 + " litros de tinta " + "Para pintar " + m2ParedeMenosPeJ4 + "m² da parede";
            
            calcLatas(quantosLitros4);

            document.getElementById("lata18l4").innerHTML = "Numero de latas de 18L: " + latas18;
            document.getElementById("lata36l4").innerHTML = "Numero de latas de 3.6L: " + latas36;
            document.getElementById("lata25l4").innerHTML = "Numero de latas de 2.5L: " + latas25;
            document.getElementById("lata05l4").innerHTML = "Numero de latas de 0.5L: " + latas05;
            document.getElementById("lata0l4").innerHTML = "Numero de latas adicionais de 0.5L: " + latasAbaixoDe05;
            document.getElementById("latas4").innerHTML = "Numero total de latas: " + latas;
            document.getElementById("erroAvisoP4").innerHTML = "";
            document.getElementById("erroAvisoJ4").innerHTML = "";
            document.getElementById("erroAvisoArea4").innerHTML = "";
            document.getElementById("erroAvisoAreaPJ4").innerHTML = "";
            document.getElementById("erroAvisoAreaSomaPJ4").innerHTML = "";
            document.getElementById("erroP4").innerHTML = "";
            document.getElementById("erroJ4").innerHTML = "";
            document.getElementById("erroPeJ4").innerHTML = "";

        }
        else {        
            document.getElementById("precisoDe4").innerHTML = "";
            document.getElementById("lata18l4").innerHTML = "";
            document.getElementById("lata36l4").innerHTML = "";
            document.getElementById("lata25l4").innerHTML = "";
            document.getElementById("lata05l4").innerHTML = "";
            document.getElementById("lata0l4").innerHTML = "";
            document.getElementById("latas4").innerHTML = "";
            document.getElementById("erroAvisoP4").innerHTML = "A altura mínima da parede, se houver porta, é de 2,20m (1,90m mais 0,30m).";
            document.getElementById("erroAvisoJ4").innerHTML = "A altura mínima da parede, se houver janela, é de 1,20m.";
            document.getElementById("erroAvisoArea4").innerHTML = "O comprimento da parede não pode ser menor que o comprimento da(s) porta(s) e/ou janela(s)";
            document.getElementById("erroAvisoAreaPJ4").innerHTML = "";
            document.getElementById("erroAvisoAreaSomaPJ4").innerHTML = "";
            document.getElementById("erroP4").innerHTML = "O comprimento da(s) porta(s) foi: " + comprimentoDaPorta + "m";
            document.getElementById("erroJ4").innerHTML = "O comprimento da(s) janela(s) foi: " + comprimentoDaJanela + "m";
            document.getElementById("erroPeJ4").innerHTML = "A soma dos comprimentos foi: " + (comprimentoDaPorta + comprimentoDaJanela).toFixed(2) + "m";    
        }

    }
    else {
        document.getElementById("precisoDe4").innerHTML = "";
        document.getElementById("lata18l4").innerHTML = "";
        document.getElementById("lata36l4").innerHTML = "";
        document.getElementById("lata25l4").innerHTML = "";
        document.getElementById("lata05l4").innerHTML = "";
        document.getElementById("lata0l4").innerHTML = "";
        document.getElementById("latas4").innerHTML = "";
        document.getElementById("erroAvisoP4").innerHTML = "";
        document.getElementById("erroAvisoJ4").innerHTML = "";
        document.getElementById("erroAvisoArea4").innerHTML = "A área da parede não pode ser menor que 1m² ou maior que 50m²";
        document.getElementById("erroAvisoAreaPJ4").innerHTML = "Ou a soma da área de Porta(s) e/ou Janela(s) não pode ser maior que 50% da área da parede.";
        document.getElementById("erroAvisoAreaSomaPJ4").innerHTML = "O m² da parede dividido por 2 é: " + (m2ParedeP4 / 2).toFixed(2) + "m²." + " A Soma das portas e/ou janelas é: "  + somaPeJ + "m²";
        document.getElementById("erroP4").innerHTML = "";
        document.getElementById("erroJ4").innerHTML = "";
        document.getElementById("erroPeJ4").innerHTML = "";
    }
    
}

/** 
 * A função calcula a área das portas e janelas de 
 * acordo com a quantidade definida pelo usuário.
 * Soma a as áreas das portas e janelas.
 * O terceido parametro é para o console.log, controle interno durante a construção do código, para
 * comparar a área da parede com a soma da área das portas e janelas.
 */
function areaDasPortasEJanelas(portas, janelas, m2Parede) {
    /**
    * A a metragem da porta e da janela são fixas:
    * Porta: 0,80m comprimento X 1,90m altura - Área de 1,52m²
    * Janela: 2,00m comprimento X 1,20 altura - Área de 2,40m²
    */
    areaPorta = parseFloat((1.52 * portas).toFixed(2));
    areaJanela = parseFloat((2.40 * janelas).toFixed(2));
    somaPeJ = parseFloat((areaPorta + areaJanela).toFixed(2));
    console.log("soma area PeJ: " + somaPeJ);
    console.log("m2 da parede dividido por 2: " + (m2Parede / 2));
}

/**
 * Função que calcula o comprimento e altura das portas e janelas de
 * acordo com a quantidade definida pelo usuário.
 * Condicionais que definem se não for escolhido porta ou janela a 
 * altura das mesmas será 0, afinal não importa a quantidade a altura deve ser fixa. 
 * Isso impede que seja colocado uma porta em cima da outra ou
 * uma janela em cima da outra e da porta.
 */
function comprimentoAlturaPortasJanelas(portas, janelas) {
    comprimentoDaPorta = portas * 0.80;
    alturaDaPorta = 1.90;
    if (portas == 0) {
        alturaDaPorta = 0;
    }
    comprimentoDaJanela = janelas * 2.00;
    alturaDaJanela = 1.20;
    if (janelas == 0) {
        alturaDaJanela = 0;
    }
}

/** 
 * Funçao que calcula as latas a serem usadas sempre priorizando a maior lata de acordo
 * com a quantidade de litros de tinta necessários para pintar a parede.
 * calcula também a quantidade de latas e o total de latas.
*/
function calcLatas(quantosLitros) {
    latas = 0;
    latas18 = 0;
    latas36 = 0;
    latas25 = 0;
    latas05 = 0;
    latasAbaixoDe05 = 0;
    while (quantosLitros > 0) {

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

        /**
         * Como nem sempre a quantidade de litros de tinta será um numero exato (as vezes sobrará menos de 0.5 litros)
         * é necessário um adicional de latas de 0.5 litros para fechar o resto.
         */
        else if(quantosLitros < 0.50) {
            quantosLitros = 0;
            latas++;
            latasAbaixoDe05++;
        }
    }
}

/**
 * Função que calcula o Total da área das paredes, o total de litros e motra ao usuário quais latas
 * necessárias e quantas latas.
 * foi necessário usar quatro variáveis globais (uma de cada parede e com nome diferente, relacionado ao nº 
 * da parede) para fazer o calculo.
 */
function total() {
    var quantosLitrost = parseFloat((quantosLitros1 + quantosLitros2 + quantosLitros3 + quantosLitros4).toFixed(2));
    calcLatas(quantosLitrost);
    document.getElementById("lata18lt").innerHTML = "Numero de latas de 18L: " + latas18;
    document.getElementById("lata36lt").innerHTML = "Numero de latas de 3.6L: " + latas36;
    document.getElementById("lata25lt").innerHTML = "Numero de latas de 2.5L: " + latas25;
    document.getElementById("lata05lt").innerHTML = "Numero de latas de 0.5L: " + latas05;
    document.getElementById("lata0lt").innerHTML = "Numero de latas adicionais de 0.5L: " + latasAbaixoDe05;
    document.getElementById("latast").innerHTML = "Numero total de latas: " + latas;
}

/**
 * A função que chama todas as outras funções e mostra na tela o
 * Total de litros necessarios e o total da área das paredes tirando 
 * o total da área de portas e janelas
 */
function calcula() {
    calcParede1();
    calcParede2();
    calcParede3();
    calcParede4();
    document.getElementById("total").innerHTML = "São necessários " + (quantosLitros1 + quantosLitros2 + quantosLitros3 + quantosLitros4).toFixed(2) + " litros de tinta " + "Para pintar " + (m2ParedeMenosPeJ1 + m2ParedeMenosPeJ2 + m2ParedeMenosPeJ3 + m2ParedeMenosPeJ4).toFixed(2) + "m² das Paredes";
    total();
}
