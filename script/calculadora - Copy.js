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
    var somaPeJ = parseFloat((areaPorta + areaJanela).toFixed(2));
    console.log("soma area PeJ: " + somaPeJ);
    console.log("m2 da parede dividido por 2: " + (m2Parede / 2));
    
    if (m2Parede >= 1 && m2Parede <= 50 && (m2Parede / 2) > somaPeJ) {
        m2Parede = parseFloat((m2Parede - (areaPorta + areaJanela)).toFixed(2));

        var comprimentoDaPorta = portas * 0.80;
        var alturaDaPorta = 1.90;
        if (portas == 0) {
            alturaDaPorta = 0;
        }
        var comprimentoDaJanela = janelas * 2.00;
        var alturaDaJanela = 1.20;
        if (janelas == 0) {
            alturaDaJanela = 0;
        }
        
        if (comprimento > (comprimentoDaPorta + comprimentoDaJanela) && altura >= (alturaDaPorta + 0.30) && altura > alturaDaJanela) {
            var umlitroTinta5m2 = 5;
            var quantosLitros = parseFloat((m2Parede / umlitroTinta5m2).toFixed(2));
            document.getElementById("precisoDe").innerHTML = "São necessários " + quantosLitros + " litros de tinta\n" + "Para pintar " + m2Parede + "m² da parede";
    
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
            document.getElementById("erroAvisoP").innerHTML = "";
            document.getElementById("erroAvisoJ").innerHTML = "";
            document.getElementById("erro").innerHTML = "";
            document.getElementById("erroP").innerHTML = "";
            document.getElementById("erroJ").innerHTML = "";
            document.getElementById("erroPeJ").innerHTML = "";
        }
        else {        
            document.getElementById("precisoDe").innerHTML = "";
            document.getElementById("lata18l").innerHTML = "";
            document.getElementById("lata36l").innerHTML = "";
            document.getElementById("lata25l").innerHTML = "";
            document.getElementById("lata05l").innerHTML = "";
            document.getElementById("lata0l").innerHTML = "";
            document.getElementById("latas").innerHTML = "";
            document.getElementById("erroAvisoP").innerHTML = "A altura mínima da parede, se houver porta, é de 2,20m (1,90m mais 0,30m).";
            document.getElementById("erroAvisoJ").innerHTML = "A altura mínima da parede, se houver janela, é de 1,20m.";
            document.getElementById("erro").innerHTML = "O comprimento da parede não pode ser menor que o comprimento da(s) porta(s) e/ou janela(s)";
            document.getElementById("erroP").innerHTML = "O comprimento da(s) porta(s) foi: " + comprimentoDaPorta + "m";
            document.getElementById("erroJ").innerHTML = "O comprimento da(s) janela(s) foi: " + comprimentoDaJanela + "m";
            document.getElementById("erroPeJ").innerHTML = "A soma dos comprimentos foi: " + (comprimentoDaPorta + comprimentoDaJanela).toFixed(2) + "m";
            
        }

        
    }
    else {
        document.getElementById("precisoDe").innerHTML = "";
        document.getElementById("lata18l").innerHTML = "";
        document.getElementById("lata36l").innerHTML = "";
        document.getElementById("lata25l").innerHTML = "";
        document.getElementById("lata05l").innerHTML = "";
        document.getElementById("lata0l").innerHTML = "";
        document.getElementById("latas").innerHTML = "";
        document.getElementById("erroAvisoP").innerHTML = "";
        document.getElementById("erroAvisoJ").innerHTML = "";
        document.getElementById("erro").innerHTML = "A área da parede não pode ser menor que 1m² ou maior que 50m²";
        document.getElementById("erroP").innerHTML = "";
        document.getElementById("erroJ").innerHTML = "";
        document.getElementById("erroPeJ").innerHTML = "";
    }
}

function calcParede2() {
    var comprimento = parseFloat(document.getElementById("comprimento2").value);
    document.getElementById("compInput2").innerHTML = "COMPRIMENTO da parede: " + comprimento + "m";

    var altura = parseFloat(document.getElementById("altura2").value);
    document.getElementById("alturaInput2").innerHTML = "ALTURA da parede: " + altura + "m";

    var m2Parede = parseFloat((comprimento * altura).toFixed(2));
    document.getElementById("m2paredeResultado2").innerHTML = "m² da parede: " + m2Parede + "m²";

    var portas = parseInt(document.getElementById("p2portas").value);
    var janelas = parseInt(document.getElementById("p2janelas").value);

    /**
    * A a metragem da porta e da janela são fixas:
    * Porta: 0,80m comprimento X 1,90m altura - Área de 1,52m²
    * Janela: 2,00m comprimento X 1,20 altura - Área de 2,40m²
    */
    var areaPorta = parseFloat((1.52 * portas).toFixed(2));
    var areaJanela = parseFloat((2.40 * janelas).toFixed(2));
    var somaPeJ = parseFloat((areaPorta + areaJanela).toFixed(2));
    console.log("soma area PeJ: " + somaPeJ);
    console.log("m2 da parede dividido por 2: " + (m2Parede / 2));
    
    if (m2Parede >= 1 && m2Parede <= 50 && (m2Parede / 2) > somaPeJ) {
        m2Parede = parseFloat((m2Parede - (areaPorta + areaJanela)).toFixed(2));

        var comprimentoDaPorta = portas * 0.80;
        var alturaDaPorta = 1.90;
        if (portas == 0) {
            alturaDaPorta = 0;
        }
        var comprimentoDaJanela = janelas * 2.00;
        var alturaDaJanela = 1.20;
        if (janelas == 0) {
            alturaDaJanela = 0;
        }
        
        if (comprimento > (comprimentoDaPorta + comprimentoDaJanela) && altura >= (alturaDaPorta + 0.30) && altura > alturaDaJanela) {
            var umlitroTinta5m2 = 5;
            var quantosLitros = parseFloat((m2Parede / umlitroTinta5m2).toFixed(2));
            document.getElementById("precisoDe2").innerHTML = "São necessários " + quantosLitros + " litros de tinta\n" + "Para pintar " + m2Parede + "m² da parede";
    
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
            document.getElementById("erroAvisoP2").innerHTML = "";
            document.getElementById("erroAvisoJ2").innerHTML = "";
            document.getElementById("erro2").innerHTML = "";
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
            document.getElementById("erro2").innerHTML = "O comprimento da parede não pode ser menor que o comprimento da(s) porta(s) e/ou janela(s)";
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
        document.getElementById("erro2").innerHTML = "A área da parede não pode ser menor que 1m² ou maior que 50m²";
        document.getElementById("erroP2").innerHTML = "";
        document.getElementById("erroJ2").innerHTML = "";
        document.getElementById("erroPeJ2").innerHTML = "";
    }

    

}

function calcParede3() {
    var comprimento = parseFloat(document.getElementById("comprimento3").value);
    document.getElementById("compInput3").innerHTML = "COMPRIMENTO da parede: " + comprimento + "m";

    var altura = parseFloat(document.getElementById("altura3").value);
    document.getElementById("alturaInput3").innerHTML = "ALTURA da parede: " + altura + "m";

    var m2Parede = parseFloat((comprimento * altura).toFixed(2));
    document.getElementById("m2paredeResultado3").innerHTML = "m² da parede: " + m2Parede + "m²";

    var portas = parseInt(document.getElementById("p3portas").value);
    var janelas = parseInt(document.getElementById("p3janelas").value);

    /**
    * A a metragem da porta e da janela são fixas:
    * Porta: 0,80m comprimento X 1,90m altura - Área de 1,52m²
    * Janela: 2,00m comprimento X 1,20 altura - Área de 2,40m²
    */
    var areaPorta = parseFloat((1.52 * portas).toFixed(2));
    var areaJanela = parseFloat((2.40 * janelas).toFixed(2));
    var somaPeJ = parseFloat((areaPorta + areaJanela).toFixed(2));
    console.log("soma area PeJ: " + somaPeJ);
    console.log("m2 da parede dividido por 2: " + (m2Parede / 2));
    
    if (m2Parede >= 1 && m2Parede <= 50 && (m2Parede / 2) > somaPeJ) {
        m2Parede = parseFloat((m2Parede - (areaPorta + areaJanela)).toFixed(2));

        var comprimentoDaPorta = portas * 0.80;
        var alturaDaPorta = 1.90;
        if (portas == 0) {
            alturaDaPorta = 0;
        }
        var comprimentoDaJanela = janelas * 2.00;
        var alturaDaJanela = 1.20;
        if (janelas == 0) {
            alturaDaJanela = 0;
        }
        
        if (comprimento > (comprimentoDaPorta + comprimentoDaJanela) && altura >= (alturaDaPorta + 0.30) && altura > alturaDaJanela) {
            var umlitroTinta5m2 = 5;
            var quantosLitros = parseFloat((m2Parede / umlitroTinta5m2).toFixed(2));
            document.getElementById("precisoDe3").innerHTML = "São necessários " + quantosLitros + " litros de tinta\n" + "Para pintar " + m2Parede + "m² da parede";
    
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
            document.getElementById("lata18l3").innerHTML = "Numero de latas de 18L: " + latas18;
            document.getElementById("lata36l3").innerHTML = "Numero de latas de 3.6L: " + latas36;
            document.getElementById("lata25l3").innerHTML = "Numero de latas de 2.5L: " + latas25;
            document.getElementById("lata05l3").innerHTML = "Numero de latas de 0.5L: " + latas05;
            document.getElementById("lata0l3").innerHTML = "Numero de latas adicionais de 0.5L: " + latasAbaixoDe05;
            document.getElementById("latas3").innerHTML = "Numero total de latas: " + latas;
            document.getElementById("erroAvisoP3").innerHTML = "";
            document.getElementById("erroAvisoJ3").innerHTML = "";
            document.getElementById("erro3").innerHTML = "";
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
            document.getElementById("erro3").innerHTML = "O comprimento da parede não pode ser menor que o comprimento da(s) porta(s) e/ou janela(s)";
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
        document.getElementById("erro3").innerHTML = "A área da parede não pode ser menor que 1m² ou maior que 50m²";
        document.getElementById("erroP3").innerHTML = "";
        document.getElementById("erroJ3").innerHTML = "";
        document.getElementById("erroPeJ3").innerHTML = "";
    }

    

}

function calcParede4() {
    var comprimento = parseFloat(document.getElementById("comprimento4").value);
    document.getElementById("compInput4").innerHTML = "COMPRIMENTO da parede: " + comprimento + "m";

    var altura = parseFloat(document.getElementById("altura4").value);
    document.getElementById("alturaInput4").innerHTML = "ALTURA da parede: " + altura + "m";

    var m2Parede = parseFloat((comprimento * altura).toFixed(2));
    document.getElementById("m2paredeResultado4").innerHTML = "m² da parede: " + m2Parede + "m²";

    var portas = parseInt(document.getElementById("p4portas").value);
    var janelas = parseInt(document.getElementById("p4janelas").value);

    /**
    * A a metragem da porta e da janela são fixas:
    * Porta: 0,80m comprimento X 1,90m altura - Área de 1,52m²
    * Janela: 2,00m comprimento X 1,20 altura - Área de 2,40m²
    */
    var areaPorta = parseFloat((1.52 * portas).toFixed(2));
    var areaJanela = parseFloat((2.40 * janelas).toFixed(2));
    var somaPeJ = parseFloat((areaPorta + areaJanela).toFixed(2));
    console.log("soma area PeJ: " + somaPeJ);
    console.log("m2 da parede dividido por 2: " + (m2Parede / 2));
    
    if (m2Parede >= 1 && m2Parede <= 50 && (m2Parede / 2) > somaPeJ) {
        m2Parede = parseFloat((m2Parede - (areaPorta + areaJanela)).toFixed(2));

        var comprimentoDaPorta = portas * 0.80;
        var alturaDaPorta = 1.90;
        if (portas == 0) {
            alturaDaPorta = 0;
        }
        var comprimentoDaJanela = janelas * 2.00;
        var alturaDaJanela = 1.20;
        if (janelas == 0) {
            alturaDaJanela = 0;
        }
        
        if (comprimento > (comprimentoDaPorta + comprimentoDaJanela) && altura >= (alturaDaPorta + 0.30) && altura > alturaDaJanela) {
            var umlitroTinta5m2 = 5;
            var quantosLitros = parseFloat((m2Parede / umlitroTinta5m2).toFixed(2));
            document.getElementById("precisoDe4").innerHTML = "São necessários " + quantosLitros + " litros de tinta\n" + "Para pintar " + m2Parede + "m² da parede";
    
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
            document.getElementById("lata18l4").innerHTML = "Numero de latas de 18L: " + latas18;
            document.getElementById("lata36l4").innerHTML = "Numero de latas de 3.6L: " + latas36;
            document.getElementById("lata25l4").innerHTML = "Numero de latas de 2.5L: " + latas25;
            document.getElementById("lata05l4").innerHTML = "Numero de latas de 0.5L: " + latas05;
            document.getElementById("lata0l4").innerHTML = "Numero de latas adicionais de 0.5L: " + latasAbaixoDe05;
            document.getElementById("latas4").innerHTML = "Numero total de latas: " + latas;
            document.getElementById("erroAvisoP4").innerHTML = "";
            document.getElementById("erroAvisoJ4").innerHTML = "";
            document.getElementById("erro4").innerHTML = "";
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
            document.getElementById("erro4").innerHTML = "O comprimento da parede não pode ser menor que o comprimento da(s) porta(s) e/ou janela(s)";
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
        document.getElementById("erro4").innerHTML = "A área da parede não pode ser menor que 1m² ou maior que 50m²";
        document.getElementById("erroP4").innerHTML = "";
        document.getElementById("erroJ4").innerHTML = "";
        document.getElementById("erroPeJ4").innerHTML = "";
    }

}

function calcula() {
    calcParede1();
    calcParede2();
    calcParede3();
    calcParede4();
}
