// funciones declarativas
// function saludar(nombrePersonaje,  apellido, apodo){
//     document.write(`<p> Mi nombre es ${nombre}${apellido}, pero me dicen ${apodo}</p>`)
// }
//invocar a la funcion
// saludar();

const nombre = 'Anthony Edward'
const apellido = 'Stark'
const apodo = 'Tony'

  function nombreCompleto(nombre, apellido){
    document.write(`<p>Mi nombre completo es: ${nombre}, ${apellido}</p>`)
  }
  nombreCompleto(nombre, apellido)

  //funciones anonimas wquicalente a duinciones de expresion
//   const nombreCompleto = function(){
//     //.....
//   }
//   const nombreCompleto = (nombre, apellido)=>{
//  //.....
//   }

// pedir a un usuario un nombre y un precio de un juego, crear una funcion que informe el precio final en pesos argentino. Preguntar si quiere saber el precio de otro juego
const precioFinal = precio => (precio * 1.75).toFixed(2)
do{
    const nombreJuego = prompt('Ingrese un nombre de algun juego')
let precio = parseInt(prompt('Ingrese el precio del juego'))

console.log(precioFinal(precio))
alert(`El juego ${nombreJuego} cuesta en argentina : $${precioFinal(precio)} ARS (todos los impuestos incluidos)`)

}while(confirm('¿Desea consultar otro juego?'))


