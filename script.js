// Array dos Sorteados
let listaVencedora = [];

// PASSO 1: ADICIONAR JOGOS
function gerarJogos() {
    let inputJogos = document.getElementById("listaJogos").value;
    let container = document.getElementById("container-jogos");
    container.innerHTML = ""; // Limpa a tela

    let quebraLinhas = inputJogos.trim().split("\n"); // Organizando os jogos

    quebraLinhas.forEach(function(linhaJogo) {
        if (linhaJogo.trim() === "") return; // Remove linhas vazias
        
        let numeros = linhaJogo.trim().split(/\s+/); // Organizando os números dentro dos jogos

        let divJogo = document.createElement("div"); // Cria o grupo de jogos
        divJogo.classList.add("grupoJogo");

        let p = document.createElement("p"); // Texto com o resultado
        p.classList.add("resultado");
        divJogo.appendChild(p);
    

        numeros.forEach(function(num) { // Números em bolinhas
            let span = document.createElement("span");
            span.classList.add("dezena");
            span.textContent = num.padStart(2, '0'); 
            divJogo.appendChild(span);
        });

        container.appendChild(divJogo);
    });
}

// PASSO 2 

function verificarNumeros() { // Chamar os números sorteados

    listaVencedora = [];
    let inputsVencedores = window.document.querySelectorAll("input.sorteado");

    inputsVencedores.forEach(function(cadaVencedor) {
    listaVencedora.push(Number(cadaVencedor.value));

    })

        let meusJogos = document.querySelectorAll("div.grupoJogo"); // Chamar meus números

        meusJogos.forEach(function(jogoAtual) {
        let contadorAcertos = 0;
        let dezenasDoJogo = jogoAtual.querySelectorAll("span.dezena");

        dezenasDoJogo.forEach(function(dezenaAtual) {
        let dezenaJogada = Number(dezenaAtual.textContent);

        // Comparar e Editar
            if (listaVencedora.includes(dezenaJogada)) {
                dezenaAtual.style.backgroundColor = "#1b9466";
                dezenaAtual.style.color = "white";
                dezenaAtual.style.fontWeight = "700";
                contadorAcertos++;
            } else {
                dezenaAtual.style.backgroundColor = "";
                dezenaAtual.style.color = "";
                dezenaAtual.style.fontWeight = "";
            }
        });

        let ganhou = jogoAtual.querySelector("p.resultado")
        if (contadorAcertos === 6) {
            jogoAtual.style.borderColor = "#1b9466";
            jogoAtual.style.backgroundColor = "#1b94661a";
            ganhou.innerHTML = "SENA";
            ganhou.style.color = ""
        } else if (contadorAcertos === 5) {
            jogoAtual.style.borderColor = "#1b9466";
            jogoAtual.style.backgroundColor = "#1b94661a";
            ganhou.innerHTML = "Quina";
            ganhou.style.color = ""
        } else if (contadorAcertos === 4) {
            jogoAtual.style.borderColor = "#1b9466";
            jogoAtual.style.backgroundColor = "#1b94661a";
            ganhou.innerHTML = "Quadra";
            ganhou.style.color = ""
        } else {
            jogoAtual.style.borderColor = "#d74444";
            jogoAtual.style.backgroundColor = "";
            ganhou.innerHTML = "Perdeu"
            ganhou.style.color = "#d74444"
        }

    });
}