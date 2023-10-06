/* criação dos const e dos let pro intervalo e pro modo automatico */
const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

/* criação do evento geral */
const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

/* a constante pra fazer a sequência que você definir sem alteração das cores */
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

/* a criação da sequência pra imagem seguir */
const changeColor = () => {
    const colors = ['red', 'green', 'yellow']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
/* criação do modo automatico e o pause dele */
const stopAutomatic = () => {
    clearInterval(intervalId);
}

/* as imagens que o painel tem que seguir */
const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 2500),
    'reset':() => intervalId = img.src = 'img/desligado.png',
}
/* comando pra todos os botões sejam em click */
buttons.addEventListener('click', trafficLight);