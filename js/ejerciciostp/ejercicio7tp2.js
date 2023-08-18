let numeroIngresado = parseInt(prompt('ingrese un numero del 1 al 30'));


let numeroRepeticiones = numeroIngresado;
for (let i = numeroRepeticiones; i > 0; i--) {
    //bucle que controle la columna
    for (let j = i; j > 0; j--) {
        document.write(i)
    }

    document.write('<br>')
}