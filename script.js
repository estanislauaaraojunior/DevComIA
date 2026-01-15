let tarefas = [];
    
function adicionarTarefa() {
    tarefas.push(tarefa);
}

function listarTarefas() {
    console.log("Minhas Tarefas:");
    tarefas.forEach((t, i) => {
        console.log(i + " - " + t);
    });
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);
}
// Teste das funções
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer compras");
listarTarefas();
removerTarefa(0);
listarTarefas();