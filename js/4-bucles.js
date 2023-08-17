// while (condicion logica){
  //  todo el codigo
  //cambiar la condicion logica
//}
let i = 1;
while(i<=10){
    document.write(`<p>Este es el parrafo N:${i}</p>`);
    i++;

}


// do-while
/* do{
    lineas de codigo
    cambiar la condicion logica 
 }while(condicion logica)
 */
let contador = 1;
do {
    document.write(`<p>Este es el parrafo con do-while N:${contador}</p>`);
    contador++;
} while (contador<=10);
//for
 /*
 for( let index =1; condicion logica;modificar la variable que controla la condicion){
    todo el codigo que necesitemos ejecutar varias veces
 }
 */
for (let numeroImpar=1; numeroImpar<=10; numeroImpar+=2){
    document.write(`<p>Este es el parrafo con For N:${numeroImpar}</p>`);
}