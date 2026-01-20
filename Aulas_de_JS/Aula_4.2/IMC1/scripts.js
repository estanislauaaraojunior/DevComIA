

function calcularIMC() {
    let peso = Number(document.getElementById("pesoInput").value);
    let altura = Number(document.getElementById("alturaInput").value);
    imc = peso / (altura * altura);
    document.getElementById("resultadoIMC").textContent = "Seu indice de massa corporal é: " + imc.toFixed(2);
}

function classificarIMC() {
    if (imc <= 18.5)
        document.getElementById("classificacao").textContent = "Está classificado como Magreza"

    else if (imc > 18.5 && imc <= 24.9)
        document.getElementById("classificacao").textContent = "Está classificado como Normal"

    else if (imc >= 25 && imc <= 29.9)
        document.getElementById("classificacao").textContent = "Está classificado como Sobrepeso"

    else
        document.getElementById("classificacao").textContent = "Está classificado como Obesidade";
    console
}








