// Declarando constantes para os elementos do DOM
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const trocar = document.getElementById('trocar');
const lamp = document.getElementById('lamp');

// Inicializando uma variável de contagem
var cont = 0;

// Função para verificar se a lâmpada está quebrada
function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

// Função para ligar a lâmpada
function lampOn() {
    if (!isLampBroken()) {
        lamp.src = 'img/lampadaacesa-removebg.png';
        cont++;
        if (cont > 10) {
            lamp.src = 'img/lampadaquebrada-removebg-preview.png';
            return lamp.src.indexOf('quebrada') > -1;
        }
    }
}

// Função para desligar a lâmpada
function lampOff() {
    if (!isLampBroken()) {
        lamp.src = 'img/lampadaapagada-removebg-preview.png';
    }
}

// Função para quebrar a lâmpada
function lampBroken() {
    lamp.src = 'img/lampadaquebrada-removebg-preview.png';
}

// Função para consertar a lâmpada
function lampBrokenC() {
    lamp.src = 'img/lampadaapagada-removebg-preview.png';
    cont = 0;
    return lamp.src.indexOf('');
}

// Adicionando eventos aos elementos
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);
trocar.addEventListener('click', lampBrokenC);
