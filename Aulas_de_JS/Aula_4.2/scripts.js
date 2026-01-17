


function calcularIMC() {
    const peso = Number(document.getElementById("pesoInput").value);
    const altura = Number(document.getElementById("alturaInput").value);
    const resultado = peso / (altura * altura);

 document.getElementById("resultado").textContent = "Seu indice de massa corporal é: " + resultado.toFixed(2);
}

