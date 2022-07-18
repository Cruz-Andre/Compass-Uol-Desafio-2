/**
 * Este é o novo código da calculadora após assistir os 3 primeiros módulos do curso: 
 * Javascript programando na linguagem da web do site da Alura cursos.
 * Um pouco mais otimizado que o anterior e com 254 linhas (sem os comentários).
 */

/** 
 * A função calcula a área das portas e janelas de 
 * acordo com a quantidade definida pelo usuário.
 * Soma a as áreas das portas e janelas.
 * O terceido parametro é para o console.log, controle interno durante a construção do código, para
 * comparar a área da parede com a soma da área das portas e janelas.
 * Recebe 3 paramentros da função calcula.
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
 * Função que calcula o comprimento da porta de acordo com a quantidade definida pelo usuário.
 * A altura da porta é fixa. A condicional define se não for escolhido uma porta a
 * altura dela será 0, afinal não importa a quantidade, a altura da
 * porta é uma só. Isso impede que seja colocado uma porta em cima da outra.
 * 
 * No caso da Janela o comprimento e altura são fixos pois as
 * janelas cabem uma em cima da outra e uma do lado da outra.
 * a quantidade de janelas será definida pela sua área total.
 * Condicional apenas para caso não for escolhida um janela.
 * Recebe 2 paramentros da função calcula.
 */
function comprimentoAlturaPortasJanelas(portas, janelas) {
    comprimentoDaPorta = portas * 0.80;
    alturaDaPorta = 1.90;
    if (portas == 0) {
        alturaDaPorta = 0;
    }

    comprimentoDaJanela = 2.00;
    alturaDaJanela = 1.20;
    if (janelas == 0) {
        alturaDaJanela = 0;
        comprimentoDaJanela = 0;
    }
}

/** 
 * Funçao que recebe um parametro, a quantidade de litros.
 * Calcula as latas a serem usadas sempre priorizando a maior lata de acordo
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
         * Como nem sempre a quantidade de litros de tinta será um numero exato as 
         * vezes sobrará menos de 0.5 litros. É necessário um adicional de 
         * latas de 0.5 litros para fechar o resto.
         */
        else if(quantosLitros < 0.50) {
            quantosLitros = 0;
            latas++;
            latasAbaixoDe05++;
        }
    }
}

/**
 * Função que calcula e mostra o Total da área das paredes para pintar, o 
 * total de litros e quais latas necessárias e quantas latas.
 */
function total() {
    var quantosLitrosTotal = 0
    for(var indice = 0; indice < arrLitrosTotal.length; indice++) {
        quantosLitrosTotal = parseFloat((quantosLitrosTotal + arrLitrosTotal[indice]).toFixed(2));
    }
    console.log("Total de litros de tinta: " + quantosLitrosTotal + "L");

    var paredesMenosPeJTotal = 0
    for(var indice = 0; indice < arrParedesMenosPeJTotal.length; indice++) {
        paredesMenosPeJTotal = parseFloat((paredesMenosPeJTotal + arrParedesMenosPeJTotal[indice]).toFixed(2));
    }
    console.log("Total m² das paredes para pintar: " + paredesMenosPeJTotal + "m²");

    var total = document.querySelector("#total");
    total.textContent = "São necessários " + (quantosLitrosTotal.toFixed(2)).replace(".",",") + " litros de tinta " + "para pintar " + (paredesMenosPeJTotal.toFixed(2)).replace(".",",") + "m² das Paredes";

    calcLatas(quantosLitrosTotal);
    
    var lata18lt = document.querySelector("#lata18lt");
    lata18lt.textContent = "Numero de latas de 18L: " + latas18;

    var lata36lt = document.querySelector("#lata36lt");
    lata36lt.textContent = "Numero de latas de 3,6L: " + latas36;

    var lata25lt = document.querySelector("#lata25lt");
    lata25lt.textContent = "Numero de latas de 2,5L: " + latas25;

    var lata05lt = document.querySelector("#lata05lt");
    lata05lt.textContent = "Numero de latas de 0,5L: " + latas05;

    var lata0lt = document.querySelector("#lata0lt");
    lata0lt.textContent = "Numero de latas adicionais de 0,5L: " + latasAbaixoDe05;

    var latast = document.querySelector("#latast");
    latast.textContent = "Numero total de latas: " + latas;

}

/**
 * A função principal
 * O querySelectorAll busca todos os inputs e posições do html para 
 * calcular cada input e depois escreve no html em cada posição.
 * 
 * O loop FOR intera sobre cada input e posição da div class parede__entrada.
 * Cada interação é uma parede com os calculos e avisos dessa parede.
 * 
 * Há 2 variáveis globais do tipo array para reber a quantidade de litros de cada
 * parede e a metragem de cada parade para pintar. Os valores dos arrays serão
 * usados na função total.
 */
function calcula() {
    var paredes = document.querySelectorAll(".parede__entrada");
    
    arrParedesMenosPeJTotal = [];
    arrLitrosTotal = [];

    for(var i = 0; i < paredes.length; i++) {
        var parede = paredes[i];

        var comprimento = parede.querySelector("#comprimento").value;
        var altura = parede.querySelector("#altura").value;
        var m2Parede = parseFloat((comprimento * altura).toFixed(2));

        var compInput = parede.querySelector("#compInput");
        compInput.textContent = "Comprimento da parede: " + comprimento + "m";

        var alturaInput = parede.querySelector("#alturaInput");
        alturaInput.textContent = "Altura da parede: " + altura + "m";

        var m2paredeResultado = parede.querySelector("#m2paredeResultado");
        m2paredeResultado.textContent = "m² da parede: " + m2Parede + "m²";

        var portas = parede.querySelector("#portas").value;
        var janelas = parede.querySelector("#janelas").value;

        areaDasPortasEJanelas(portas, janelas, m2Parede);

        var m2ParedeMenosPeJ = parseFloat((m2Parede - (areaPorta + areaJanela)).toFixed(2));
        var umlitroTinta5m2 = 5;
        var quantosLitros = parseFloat((m2ParedeMenosPeJ / umlitroTinta5m2).toFixed(2));
        
        arrParedesMenosPeJTotal.push(m2ParedeMenosPeJ);

        arrLitrosTotal.push(quantosLitros);
        
        if (m2Parede >= 1 && m2Parede <= 50 && (m2Parede / 2) > somaPeJ) {

            comprimentoAlturaPortasJanelas(portas, janelas)
        
            if (comprimento >= comprimentoDaPorta && comprimento >= comprimentoDaJanela && altura >= (alturaDaPorta + 0.30) && altura >= alturaDaJanela) {

                var precisoDe = parede.querySelector("#precisoDe"); 
                precisoDe.textContent = "São necessários " + quantosLitros + " litros de tinta " + "Para pintar " + m2ParedeMenosPeJ + "m² da parede";

                calcLatas(quantosLitros);

                var lata18l = parede.querySelector("#lata18l");
                lata18l.textContent = "Numero de latas de 18L: " + latas18;
                var lata36l = parede.querySelector("#lata36l");
                lata36l.textContent = "Numero de latas de 3,6L: " + latas36;
                var lata25l = parede.querySelector("#lata25l");
                lata25l.textContent = "Numero de latas de 2,5L: " + latas25;
                var lata05l = parede.querySelector("#lata05l");
                lata05l.textContent = "Numero de latas de 0,5L: " + latas05;
                var lata0l = parede.querySelector("#lata0l");
                lata0l.textContent = "Numero de latas adicionais de 0,5L: " + latasAbaixoDe05;
                var latasT = parede.querySelector("#latas");
                latasT.textContent = "Numero total de latas: " + latas;

                var erroAvisoArea = parede.querySelector("#erroAvisoArea");
                erroAvisoArea.textContent = "";
                var erroAvisoAreaPJ = parede.querySelector("#erroAvisoAreaPJ");
                erroAvisoAreaPJ.textContent = "";
                var erroAvisoAreaSomaPJ = parede.querySelector("#erroAvisoAreaSomaPJ");
                erroAvisoAreaSomaPJ.textContent = "";

                var erroAvisoP = parede.querySelector("#erroAvisoP");
                erroAvisoP.textContent = "";
                var erroAvisoJ = parede.querySelector("#erroAvisoJ");
                erroAvisoJ.textContent = "";
                var erroAvisoArea = parede.querySelector("#erroAvisoArea");
                erroAvisoArea.textContent = "";
                var erroP = parede.querySelector("#erroP");
                erroP.textContent = "";
                var erroJ = parede.querySelector("#erroJ");
                erroJ.textContent = "";
                var erroPeJ = parede.querySelector("#erroPeJ");
                erroPeJ.textContent = "";
            }
            else {
                erroAvisoP = parede.querySelector("#erroAvisoP");
                erroAvisoP.textContent = "A altura mínima da parede, se houver porta, é de 2,20m (1,90m mais 0,30m).";
                erroAvisoJ = parede.querySelector("#erroAvisoJ");
                erroAvisoJ.textContent = "A altura mínima da parede, se houver somente janela, é de 1,20m.";
                erroAvisoArea = parede.querySelector("#erroAvisoArea");
                erroAvisoArea.textContent = "O comprimento da parede não pode ser menor que o comprimento da(s) porta(s) e/ou janela(s)";
                erroP = parede.querySelector("#erroP");
                erroP.textContent = "O comprimento da(s) porta(s) foi: " + (comprimentoDaPorta).toFixed(2) + "m";
                erroJ = parede.querySelector("#erroJ");
                erroJ.textContent = "O comprimento da(s) janela(s) foi: " + (comprimentoDaJanela).toFixed(2) + "m";
                erroPeJ = parede.querySelector("#erroPeJ");
                erroPeJ.textContent = "A soma dos comprimentos foi: " + (comprimentoDaPorta + comprimentoDaJanela).toFixed(2) + "m";

                precisoDe = parede.querySelector("#precisoDe"); 
                precisoDe.textContent = "";
                lata18l = parede.querySelector("#lata18l");
                lata18l.textContent = "";
                lata36l = parede.querySelector("#lata36l");
                lata36l.textContent = "";
                lata25l = parede.querySelector("#lata25l");
                lata25l.textContent = "";
                lata05l = parede.querySelector("#lata05l");
                lata05l.textContent = "";
                lata0l = parede.querySelector("#lata0l");
                lata0l.textContent = "";
                latasT = parede.querySelector("#latas");
                latasT.textContent = "";    

                erroAvisoAreaPJ = parede.querySelector("#erroAvisoAreaPJ");
                erroAvisoAreaPJ.textContent = "";
                erroAvisoAreaSomaPJ = parede.querySelector("#erroAvisoAreaSomaPJ");
                erroAvisoAreaSomaPJ.textContent = "";
            }
        

        }
        else {
            erroAvisoArea = parede.querySelector("#erroAvisoArea");
            erroAvisoArea.textContent = "A área da parede não pode ser menor que 1m² ou maior que 50m²";
            erroAvisoAreaPJ = parede.querySelector("#erroAvisoAreaPJ");
            erroAvisoAreaPJ.textContent = "Ou a soma da área de Porta(s) e/ou Janela(s) não pode ser maior que 50% da área da parede.";
            erroAvisoAreaSomaPJ = parede.querySelector("#erroAvisoAreaSomaPJ");
            erroAvisoAreaSomaPJ.textContent = "O m² da parede dividido por 2 é: " + (m2Parede / 2).toFixed(2) + "m²." + " A Soma das portas e/ou janelas é: "  + somaPeJ + "m²";

            precisoDe = parede.querySelector("#precisoDe"); 
            precisoDe.textContent = "";
            lata18l = parede.querySelector("#lata18l");
            lata18l.textContent = "";
            lata36l = parede.querySelector("#lata36l");
            lata36l.textContent = "";
            lata25l = parede.querySelector("#lata25l");
            lata25l.textContent = "";
            lata05l = parede.querySelector("#lata05l");
            lata05l.textContent = "";
            lata0l = parede.querySelector("#lata0l");
            lata0l.textContent = "";
            latasT = parede.querySelector("#latas");
            latasT.textContent = "";

            erroAvisoP = parede.querySelector("#erroAvisoP");
            erroAvisoP.textContent = "";
            erroAvisoJ = parede.querySelector("#erroAvisoJ");
            erroAvisoJ.textContent = "";
            erroP = parede.querySelector("#erroP");
            erroP.textContent = "";
            erroJ = parede.querySelector("#erroJ");
            erroJ.textContent = "";
            erroPeJ = parede.querySelector("#erroPeJ");
            erroPeJ.textContent = "";
        }
    }
    total();
}
