class Retangulo{
    constructor(largura, altura){
    this.largura = largura;
    this.altura = altura;
    }

    area(){
        return `A area é ${this.largura * this.altura}.`
    }
    perimetro(){
        return`O perímetro é ${2*(this.largura + this.altura)}.`
    }
}

//o objeto é:

const retangulo1 = new Retangulo (5,3);
console.log(retangulo1.area());
console.log(retangulo1.perimetro());