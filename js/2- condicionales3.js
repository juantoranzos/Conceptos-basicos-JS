let altura = parseInt(prompt('ingrese su altura'));
let peso = parseInt (prompt('ingrese su peso'));

// calcular el IMC
let imc = peso / (altura * altura);

let categoria = "";
if(imc< 18.5){
    categoria = 'Bajo peso'
}else if(imc < 24.9){
    categoria = 'Peso normal'
}else if(imc <29.9){
    categoria = 'Sobre peso'
}else{
    categoria = 'obesidad'
}

document.write(categoria)
