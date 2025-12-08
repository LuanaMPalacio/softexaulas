document.addEventListener("DOMContentLoaded", () => {
const btn = document.getElementById("btnCalcular");
const maiorEl = document.getElementById("resMaior");
const menorEl = document.getElementById("resMenor");
const divResultado = document.getElementById("resultado");


btn.addEventListener("click", () => {
const valores = [
document.getElementById("n1").value,
document.getElementById("n2").value,
document.getElementById("n3").value,
document.getElementById("n4").value,
document.getElementById("n5").value
].map(Number);


if (valores.some(v => isNaN(v))) {
alert("Todos os campos devem conter números válidos!");
return;
}


const maior = Math.max(...valores);
const menor = Math.min(...valores);


maiorEl.textContent = `Maior número: ${maior}`;
menorEl.textContent = `Menor número: ${menor}`;


divResultado.classList.remove("hidden");
});
});