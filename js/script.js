function verificaRumo() {
    var rumoPista = document.getElementById('rumoPista').value;
    if (rumoPista > 0 && rumoPista <= 360)
        return rumoPista;
    else {
        document.getElementById('rumoPista').value = '';
        return false;
    }
}

function calculaPernaDoVento(rumoPista) {
    if (rumoPista != false) {
        if (rumoPista >= 1 && rumoPista <= 180) {
            rumoPista = parseInt(rumoPista) + 180;
        }
        else if (rumoPista >= 181 && rumoPista <= 189) {
            rumoPista -= 180;
            rumoPista = ("00" + rumoPista).slice(-3);
        }
        else {
            rumoPista -= 180;
            rumoPista = ("0" + rumoPista).slice(-3);
        }
        document.getElementById('pernaDoVento').innerHTML = rumoPista;
    }
    else {
        document.getElementById('pernaDoVento').innerHTML = '';
    }
}

function calculaTudo() {
    var rumoPista = verificaRumo();
    calculaPernaDoVento(rumoPista);
}