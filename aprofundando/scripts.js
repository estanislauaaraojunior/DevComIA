let tarefas = [];

function adicionarTarefa() {
    const input = document.getElementById("inputTarefa");
    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push(texto);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${tarefa}
            <button class="remover" onclick="removerTarefa(${index})">X</button>
        `;

        lista.appendChild(li);
    });
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    atualizarLista();
}


function treino(nome) {
    console.log("Iniciando o treino de " + nome);
}
treino("João");

function saudacao(nome) {
    return "Olá, " + nome + "! Bem-vindo ao treino.";
}
console.log(saudacao("Maria"));