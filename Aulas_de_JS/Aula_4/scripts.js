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
    const nome = document.getElementById("nomeInput").value.trim();            /*pega o valor do input*/
    const idade = Number(document.getElementById("idadeInput").value);      /*pega o valor do input e converte para número*/
    const hobbiesTexto = document.getElementById("hobbieInput").value.trim();        /*pega o valor do input e cria um array separando pelos vírgulas*/

    // Validação simples para nome vazio
    if (nome === "") {
        document.getElementById("resultado").textContent = "Por favor, insira um nome válido.";
        return;
    }

    // Validação simples para idade negativa ou não numérica
    if (!idade || idade < 0) {
        document.getElementById("resultado").textContent = "Por favor insira uma idade válida.";
        return;
    }

    // Validação simples para hobbies vazios
    if (hobbiesTexto === "") {
        document.getElementById("resultado").textContent = "Por favor, insira pelo menos um hobbie.";
        return;
    }

    //Transformar hobbies em array limpo (sem espaços extras)
    const hobbies = hobbiesTexto        /*pega o texto dos hobbies*/
    .split (",")               /*separa os hobbies em um array*/
    .map (h => h.trim())      /*remove espaços extras*/
    .filter (h => h !== "");          /*remove hobbies vazios*/

    if (hobbies.length === 0) {
        document.getElementById("resultado").textContent = "Digite um hobbie válido, separados por virgulas.";
        return;
    }

    const texto = descrevePessoa(nome, idade, hobbies);             /*chama a função descrevePessoa e armazena o resultado na variável texto*/
    document.getElementById("resultado").textContent = texto;       /*exibe o resultado na página*/
}




