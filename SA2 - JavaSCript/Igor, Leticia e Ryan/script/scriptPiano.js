//iteração pra não ter que fazer tudo manualmente
for (let i = 0; i <= 30; i++) {
    //cria uma constante e captura um elemento no html a partir de seu id
    const btn = document.getElementById(`btn${i}`); //coloca a variavel 'i' pra representar o final do id
    const audio = document.getElementById(`audio${i}`);
    //adiciona um evento ao botao
    btn.addEventListener('click', function () {
        audio.play();
    });
}