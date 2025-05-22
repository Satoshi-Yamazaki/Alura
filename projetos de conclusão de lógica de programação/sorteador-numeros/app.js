const inputField = document.getElementById("ate"); 

inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sortear()
  }
});

function sortear() {
    let quant = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    console.log(`Quantidade: ${quant}, De: ${de}, Até: ${ate}.`)

    let sorteados = [];
    let numero;

    for (let i = 0; i < quant; i++) {
        numero = numeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = numeroAleatorio(de, ate)
        }

        sorteados.push(numero);
    }

    console.log(sorteados);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

    btn();


    document.getElementById('btn-reiniciar').disabled = false;
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = '0';
    document.getElementById('de').value = '0';
    document.getElementById('ate').value = '0';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    btn();
    document.getElementById('btn-reiniciar').disabled = true;
}

function btn() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}