//criei uma classe para rodar essa aplicação - o JS também é orientado a Objetos
class App {
    constructor() {
        this.notasGravadas = [];//esse array serve pra armazenar as notas gravadas
        this.estaGravando = false; //variavel para compor a lógica de gravar e reproduzir

        //métodos de inicialização de elementos html
        this.inicializarBotoes();
        this.inicializarEventos();
    }

    inicializarBotoes() {
        this.botoes = Array.from(document.querySelectorAll('.piano-key'));//armazena todos os botoes do html neste array
    }

    //espinha dorsal - iniciar eventos e associa os metodos
    inicializarEventos() {
        this.botoes.forEach((botao, indice) => {
            //agora manipulo o indice de cada botao no array
            botao.addEventListener('click', () => this.reproduzirIndice(indice));
        });

        //adicionando os eventos(função) aos botões de gravar/parar e reproduzir
        document.getElementById('iniciarGravacao').addEventListener('click', () => //função anônima
            this.iniciarGravacao()
        );

        document.getElementById('pararGravacao').addEventListener('click', () =>
            this.pararGravacao()
        );

        document.getElementById('reproduzirGravacao').addEventListener('click', () =>
            this.reproduzirGravacao()
        );
    }


    //alinha as notas com seu indíce -> fez com que a reprodução não se perdesse 
    reproduzirIndice(indice) {
        const audio = document.getElementById(`audio${indice}`);
        audio.currentTime = 0;
        audio.play();
        //se estiver gravando registra a nota e seu indíce
        if (this.estaGravando) {
            const tempo = Date.now() - this.horaInicio;
            this.notasGravadas.push({ indice, tempo });
        }
    }

    //Inicia a gravação das notas/índices 
    iniciarGravacao() {
        this.estaGravando = true;
        this.notasGravadas = [];
        this.horaInicio = Date.now();

        //só pra indicar a gravação
        document.getElementById('iniciarGravacao').style.backgroundColor = 'red';
    }

    //para a gravação e retorna o botão
    pararGravacao() {
        this.estaGravando = false;
        document.getElementById('iniciarGravacao').style.backgroundColor = 'white';
    }

 
    reproduzirGravacao() {
        if (this.notasGravadas.length === 0) return;
        this.reproduzirNotasGravadas(0);

    }

    //método que reproduz as notas a partir do 'indice' -> o parametro:)
    reproduzirNotasGravadas(indice) {
        //lógica para percorrer o array
        if (indice < this.notasGravadas.length) {
            //a constante redefine os atributos do indice
            const { indice: indiceNota, tempo } = this.notasGravadas[indice];

            //tempo para reproduzir a proxima nota, que no caso é o audio completo
            setTimeout(() => {
                this.botoes[indiceNota].click();
                this.reproduzirNotasGravadas(indice + 1);
            }, tempo);
        }
    }
}

const app = new App();