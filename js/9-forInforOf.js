// for in recorre objetos
// for(variable in object){
//    logica
//}
// al for of se lo utiliza para iterar arreglos
const colores =[
    'azul ', 'rojo ', 'verde ', 'negro '
];
for(let i of colores){
    document.write(i)
}
//al for in se lo utiliza para iterar objetos
const heroe = { nombre: 'Tony Strark', personaje: 'Iron Man', poder:'tecnologia' };
for(let i in heroe){
    console.log(i);
    console.log(heroe[i])
}