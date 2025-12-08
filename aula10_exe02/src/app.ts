class Calculadora {
    somar(a: number, b: number): number {
        return a + b;
    }

    subtrair(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida");
        }
        return a / b;
    }
}

const calculadora = new Calculadora();

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const resultadoSpan = document.getElementById('resultado') as HTMLSpanElement;

function getInputs(): [number, number] | null {
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
    if (!inputs) return;
    const [a, b] = inputs;
    const resultado = calculadora.somar(a, b);
    resultadoSpan.textContent = resultado.toString();
});

document.getElementById('subtrair')?.addEventListener('click', () => {
    const inputs = getInputs();
    if (!inputs) return;
    const [a, b] = inputs;
    const resultado = calculadora.subtrair(a, b);
    resultadoSpan.textContent = resultado.toString();
});

document.getElementById('multiplicar')?.addEventListener('click', () => {
    const inputs = getInputs();
    if (!inputs) return;
    const [a, b] = inputs;
    const resultado = calculadora.multiplicar(a, b);
    resultadoSpan.textContent = resultado.toString();
});

document.getElementById('dividir')?.addEventListener('click', () => {
    const inputs = getInputs();
    if (!inputs) return;
    const [a, b] = inputs;
    try {
        const resultado = calculadora.dividir(a, b);
        resultadoSpan.textContent = resultado.toString();
    } catch (e) {
        alert((e as Error).message);
        resultadoSpan.textContent = "Erro";
    }
});