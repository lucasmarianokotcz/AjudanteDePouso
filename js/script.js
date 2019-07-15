/**
 * Função que valida o campo de rumo da pista.
 */
function verificaRumo() {
    var rumoPista = document.getElementById('rumoPista').value;
    if (rumoPista > 0 && rumoPista <= 360)
        return rumoPista;

    document.getElementById('rumoPista').value = '';
    return false;
}

/**
 * Função que calcula a perna do vento.
 * @param {rumoPista} rumoPista 
 */
function calculaPernaDoVento(rumoPista) {
    if (rumoPista != false) {
        rumoPista >= 1 && rumoPista <= 180 ? rumoPista = parseInt(rumoPista) + 180 : rumoPista -= 180;
        rumoPista = ("00" + rumoPista).slice(-3);
        document.getElementById('pernaDoVento').innerHTML = rumoPista + "°";
        return rumoPista;
    }
    else {
        document.getElementById('pernaDoVento').innerHTML = '';
        return false;
    }
}

/**
 * Função que calcula o rumo de entrada da perna do vento.
 * @param {pernaDoVento} pernaDoVento 
 */
function calculaRumoDeEntrada(pernaDoVento) {
    if (pernaDoVento != false) {
        if (document.getElementById('circuitoPadrao').checked)
            pernaDoVento > 0 && pernaDoVento <= 45 ? pernaDoVento = parseInt(pernaDoVento) + 315 : pernaDoVento -= 45;
        else if (document.getElementById('circuitoNaoPadrao').checked)
            pernaDoVento > 315 && pernaDoVento <= 360 ? pernaDoVento -= 315 : pernaDoVento = parseInt(pernaDoVento) + 45;
        pernaDoVento = ("00" + pernaDoVento).slice(-3);
        document.getElementById('rumoEntrada').innerHTML = pernaDoVento + "°";
        return pernaDoVento;
    }
    else {
        document.getElementById('rumoEntrada').innerHTML = '';
        return false;
    }
}

/**
 * Função que calcula a posição em relação a pista.
 * @param {rumoDeEntrada} rumoDeEntrada 
 */
function calculaPosicaoPista(rumoDeEntrada) {
    if (rumoDeEntrada != false) {
        rumoDeEntrada > 0 && rumoDeEntrada <= 180 ? rumoDeEntrada = parseInt(rumoDeEntrada) + 180 : rumoDeEntrada -= 180;
        rumoDeEntrada = ("00" + rumoDeEntrada).slice(-3);
        document.getElementById('radial').innerHTML = rumoDeEntrada + "°";
        return rumoDeEntrada;
    }
    else {
        document.getElementById('cardeal').innerHTML = '';
        document.getElementById('radial').innerHTML = '';
        return false;
    }
}

/**
 * Função que calcula o cardeal da posição em relação a pista.
 * @param {posicaoPista} posicaoPista
 */
function calculaCardeal(posicaoPista) {
    if (posicaoPista != false) {
        if (posicaoPista >= 337 && posicaoPista <= 360 || posicaoPista >= 1 && posicaoPista <= 21)
            document.getElementById('cardeal').innerHTML = 'N';
        else if (posicaoPista >= 22 && posicaoPista <= 66)
            document.getElementById('cardeal').innerHTML = 'NE';
        else if (posicaoPista >= 67 && posicaoPista <= 111)
            document.getElementById('cardeal').innerHTML = 'E';
        else if (posicaoPista >= 112 && posicaoPista <= 156)
            document.getElementById('cardeal').innerHTML = 'SE';
        else if (posicaoPista >= 157 && posicaoPista <= 201)
            document.getElementById('cardeal').innerHTML = 'S';
        else if (posicaoPista >= 202 && posicaoPista <= 246)
            document.getElementById('cardeal').innerHTML = 'SO';
        else if (posicaoPista >= 247 && posicaoPista <= 291)
            document.getElementById('cardeal').innerHTML = 'O';
        else if (posicaoPista >= 292 && posicaoPista <= 336)
            document.getElementById('cardeal').innerHTML = 'NO';
    }
    else {
        document.getElementById('cardeal').innerHTML = '';
        document.getElementById('radial').innerHTML = '';
    }
}

/**
 * Função que chama todas as funções que fazem os cálculos.
 */
function calculaTudo() {
    var rumoPista = verificaRumo();
    var pernaDoVento = calculaPernaDoVento(rumoPista);
    var rumoDeEntrada = calculaRumoDeEntrada(pernaDoVento);
    var posicaoPista = calculaPosicaoPista(rumoDeEntrada);
    calculaCardeal(posicaoPista);
}