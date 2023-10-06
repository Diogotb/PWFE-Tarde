// Constantes para elementos
const board = document.getElementById("game-board"); // Obtém o elemento do tabuleiro de jogo
const message = document.getElementById("message"); // Obtém o elemento da mensagem do jogo
const resetButton = document.getElementById("reset-button"); // Obtém o elemento do botão de reiniciar o jogo

// Variáveis
let currentPlayer = "X"; // Inicializa o jogador atual como "X"
let gameOver = false; // Indica se o jogo terminou

// Função para criar uma célula do tabuleiro
function createCell() {
    const cell = document.createElement("div"); // Cria um elemento de div (representando uma célula)
    cell.classList.add("cell"); // Adiciona a classe "cell" à célula
    cell.addEventListener("click", handleCellClick); // Adiciona um ouvinte de evento de clique à célula
    return cell; // Retorna a célula criada
}

// Função para alternar entre os jogadores
function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Alterna entre "X" e "O" como jogador atual
}

// Função para verificar o vencedor ou empate
function checkResult(cells) {
    const winningCombos = [ // Possíveis combinações vencedoras no jogo da velha
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;

        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent; // Retorna o jogador vencedor
        }
    }

    return cells.every(cell => cell.textContent) ? "empate" : null; // Retorna "empate" se todas as células estiverem preenchidas, caso contrário, retorna nulo
}

// Função para atualizar o estado do jogo após um clique na célula
function handleCellClick() {
    const cell = this; // Obtém a célula clicada

    if (!gameOver && !cell.textContent) { // Verifica se o jogo não terminou e a célula está vazia
        cell.textContent = currentPlayer; // Preenche a célula com o símbolo do jogador atual
        const cells = Array.from(document.querySelectorAll(".cell")); // Obtém todas as células
        const result = checkResult(cells); // Verifica o resultado do jogo

        if (result) { // Se houver um resultado
            message.textContent = result === "empate" ? "Empate!" : `Jogador ${result} venceu!`; // Exibe a mensagem de empate ou vitória
            gameOver = true; // Define o jogo como encerrado
            resetButton.style.display = "block"; // Exibe o botão de reinício
        } else {
            togglePlayer(); // Alterna para o próximo jogador
            message.textContent = `É a vez do jogador ${currentPlayer}`; // Exibe a mensagem de vez do jogador
        }
    }
}

// Função para reiniciar o jogo
function resetGame() {
    const cells = Array.from(document.querySelectorAll(".cell")); // Obtém todas as células
    cells.forEach(cell => {
        cell.textContent = ""; // Limpa o conteúdo de todas as células
    });

    currentPlayer = "X"; // Reinicia o jogador atual como "X"
    gameOver = false; // Define o jogo como não encerrado

    message.textContent = `É a vez do jogador ${currentPlayer}`; // Exibe a mensagem de vez do jogador
    resetButton.style.display = "none"; // Oculta o botão de reinício
}

// Adiciona ouvintes de eventos para escolher o jogador e reiniciar o jogo
document.getElementById("choose-X").addEventListener("click", () => {
    currentPlayer = "X"; // Define o jogador atual como "X"
    message.textContent = `É a vez do jogador ${currentPlayer}`; // Exibe a mensagem de vez do jogador
});

document.getElementById("choose-O").addEventListener("click", () => {
    currentPlayer = "O"; // Define o jogador atual como "O"
    message.textContent = `É a vez do jogador ${currentPlayer}`; // Exibe a mensagem de vez do jogador
});

resetButton.addEventListener("click", resetGame); // Adiciona um ouvinte de evento ao botão de reinício

// Inicializa o tabuleiro criando as células
for (let i = 0; i < 9; i++) {
    const cell = createCell(); // Cria uma célula
    board.appendChild(cell); // Adiciona a célula ao tabuleiro
}

// Exibe a mensagem inicial
message.textContent = `É a vez do jogador ${currentPlayer}`;
