// while (condicion logica){
  //  todo el codigo
  //cambiar la condicion logica
//}
let i = 1;
while(i<=10){
    document.write(`<p>Este es el parrafo N:${i}</p>`);
    i++;

}


// do while 
/*
do{
  todas las lineas de codigo
  cambiar la condicion logica
}while(condicion logica)

*/
let contador = 1;
do{
  document.write(`<p> Este es el parrafo con do-while N:${contador} </p>`);
  contador++;
}while(contador <= 10)

// bucle for
/**
 for(let index = 1 ; condicion logica; modificar la variale que controla la condicion){
  todo el codigo que necesite ejecutar varias veces.
 }
 */
for(let impar=1; impar<=10; impar+=2){
  document.write(`<p> Este es el parrafo con for N:${impar} </p>`)
}