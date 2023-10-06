// Criando as variaveis (horas, minutos, segundos e milissegundos)
let horas = 0; 
let minutos = 0; 
let segundos = 0; 
let milissegundos = 0; 

let cron; // Variável para armazenar o identificador do intervalo de tempo (para atualizar o cronômetro).

// Define os manipuladores de eventos para os botões de start, pause e reset.
document.querySelector('#start').addEventListener('click',start);
document.querySelector('#pause').addEventListener('click',pause);
document.querySelector('#reset').addEventListener('click',reset);

// document.cronometro.start.onclick = () => start();
// document.cronometro.pause.onclick = () => pause();
// document.cronometro.reset.onclick = () => reset();

// Função para iniciar o cronômetro.
function start() {
    // Para evitar que vários cronômetros sejam executados simultaneamente, primeiro, é chamada a função 'pause' para parar qualquer cronômetro em execução.
    pause();
    // Em seguida, inicia um novo intervalo de tempo que chama a função 'cronometro' a cada 10 milissegundos.
    cron = setInterval(cronometro, 10);
}

// Função para pausar o cronômetro.
function pause() {
    // Para o intervalo de tempo em execução, interrompendo a atualização do cronômetro.
    clearInterval(cron);
}

// Função para redefinir o cronômetro.
function reset() {
    // Reinicia todas as variáveis do cronômetro para zero.
    horas = 0;
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    // Atualiza os elementos HTML que mostram o tempo para "00".
    document.getElementById('horas').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('segundos').innerText = '00';
    document.getElementById('milissegundos').innerText = '000';
}

// Função que atualiza o cronômetro a cada 10 milissegundos (1 centésimo de segundo).
function cronometro() {
    if ((milissegundos += 10) == 1000) {
        milissegundos = 0;
        segundos++;
    } else if (segundos == 60) {
        segundos = 0;
        minutos++;
    } else if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    // Atualiza os elementos HTML que mostram o tempo com os valores atualizados, usando a função 'returnData' para adicionar um zero à esquerda, se necessário.
    document.getElementById('horas').innerText = returnData(horas);
    document.getElementById('minutos').innerText = returnData(minutos);
    document.getElementById('segundos').innerText = returnData(segundos);
    document.getElementById('milissegundos').innerText = returnData(milissegundos);
}

// Função auxiliar que adiciona um zero à esquerda para valores menores que 10.
function returnData(input) {
    return input >= 10 ? input : `0${input}`;
}
