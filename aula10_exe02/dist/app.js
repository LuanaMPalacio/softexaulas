"use strict";
class Calculadora {
    somar(a, b) {
        return a + b;
    }
    subtrair(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida");
        }
        return a / b;
    }
}
const calculadora = new Calculadora();
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultadoSpan = document.getElementById('resultado');
function getInputs() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira dois números válidos.');
        return null;
    }
    return [num1, num2];
}
document.getElementById('somar')?.addEventListener('click', () => {
    const inputs = getInputs();
    if (!inputs)
        return;
    const [a, b] = inputs;
    const resultado = calculadora.somar(a, b);
    resultadoSpan.textContent = resultado.toString();
});
document.getElementById('subtrair')?.addEventListener('click', () => {
    const inputs = getInputs();
    if (!inputs)
        return;
    const [a, b] = inputs;
    const resultado = calculadora.subtrair(a, b);
    resultadoSpan.textContent = resultado.toString();
});
document.getElementById('multiplicar')?.addEventListener('click', () => {
    const inputs = getInputs();
    if (!inputs)
        return;
    const [a, b] = inputs;
    const resultado = calculadora.multiplicar(a, b);
    resultadoSpan.textContent = resultado.toString();
});
document.getElementById('dividir')?.addEventListener('click', () => {
    const inputs = getInputs();
    if (!inputs)
        return;
    const [a, b] = inputs;
    try {
        const resultado = calculadora.dividir(a, b);
        resultadoSpan.textContent = resultado.toString();
    }
    catch (e) {
        alert(e.message);
        resultadoSpan.textContent = "Erro";
    }
});
