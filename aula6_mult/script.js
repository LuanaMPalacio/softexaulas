function dobro(x) { //função que calcula o dobro
    return x * 2;
}

//escopo principal

document.addEventListener("DOMContentLoaded",() =>{
    const btn=document.getElementById('btnCalcular');
    const input =document.getElementById('numero');
    const resultado=document.getElementById('resultado');

    btn.addEventListener("click", ()=>{
        const valor= Number(input.value);
        if(isNaN(valor)) {
            resultado.textContent="Digite um número válido!";
            return;
        }
        resultado.textContent = `O dobro de ${valor} é ${dobro(valor)}.`;
    });
});