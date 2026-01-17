function analisarIdade(idade) {
    if (idade < 18) {
        return "É menor de idade";
    }
    else if (idade >= 18 && idade <= 25) {
        return "Você está vivendo a vida"
    }
    else if (idade > 25 && idade <= 45) {
        return "Você está na melhor fase da vida";
    }
    else {
        return "Você está na fase de sabedoria";
    }
}

function descrevePessoa(nome, idade, hobbies) {
    const descricaoIdade = analisarIdade(idade);        /*chama a função analisarIdade e armazena o resultado na variável descricaoIdade*/
    return (nome + " tem " + idade + " anos. " + descricaoIdade + " e gosta de " + hobbies.join(", ") + ".");       /*retorna a descrição completa da pessoa*/
}

function analisar() {
    const nome = document.getElementById("nomeInput").value;            /*pega o valor do input*/
    const idade = Number(document.getElementById("idadeInput").value);      /*pega o valor do input e converte para número*/
    const hobbies = document.getElementById("hobbieInput").value.split(",");        /*pega o valor do input e cria um array separando pelos vírgulas*/
    const texto = descrevePessoa(nome, idade, hobbies);             /*chama a função descrevePessoa e armazena o resultado na variável texto*/
    document.getElementById("resultado").textContent = texto;       /*exibe o resultado na página*/
}