

function calcularIMC(peso, altura) {
    return peso / (altura* altura);
}

function classificarIMC(imc) {
    if(imc <= 18.5)
        return "Magreza";
    else if (imc > 18.5 && imc <= 24.9)
        return "Normal";
    else if (imc >= 25 && imc <= 29.9)
        return "Sobrepeso";
    else
        return "Obesidade"; 
}

function resultado() {
    document.getElementById("resultadoIMC").textContent = "Seu indice de massa corporal é: " + imc.toFixed(2) + " e está classificado como " + classificarIMC();
}