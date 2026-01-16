let tarefas = [];                       // Declaração da variavel tarefas como um array vazio

function adicionarTarefa(tarefa) {      // Função para adicionar uma tarefa
    tarefas.push(tarefa);               // Adiciona a tarefa ao array tarefas  
}                                       // Fecha a função adicionarTarefa

function listarTarefas() {              // Função para listar as tarefas
    console.log("Minhas Tarefas:");     // Exibe o título "Minhas Tarefas"
    tarefas.forEach((t, i) => {         // Itera sobre cada tarefa no array
        console.log(i + " - " + t);     // Exibe o índice e a tarefa correspondente
    });                                 // Fecha o loop forEach
}                                       // Fecha a função listarTarefas

function removerTarefa(indice) {        // Função para remover uma tarefa pelo índice
    tarefas.splice(indice, 1);          // Remove a tarefa no índice especificado
}                                       // Fecha a função removerTarefa
// Teste das funções
adicionarTarefa("Estudar JavaScript");  // Adiciona a tarefa "Estudar JavaScript"
adicionarTarefa("Fazer compras");       // Adiciona a tarefa "Fazer compras"
listarTarefas();                        // Lista todas as tarefas
removerTarefa(0);                       // Remove a tarefa no índice 0
listarTarefas();                        // Lista todas as tarefas novamente