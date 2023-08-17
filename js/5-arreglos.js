// arrays
// crea un arreglo vacio
let colores = [];
// crear un arreglo con valores
let peliculas = ['Ant-man', 'endgame', '2019', true]
document.write(peliculas)
// recorrer el arreglo
//length: devuelve la cantidad de elementos del arreglo
// array.length

document.write('<h2> mostrar el arreglo de peliculas</h2>')
document.write('<ul>')

for ( let posicion=0; posicion < peliculas.length ; posicion++ )
document.write(`<li>${peliculas[posicion]}</li>`)

document.write ('</ul>')
document.write(`<p>Cantidad de peliculas: ${peliculas.length}</p>`)

// agregar un item al arreglo
document.write('<h2> Agragar un item al inicio del arreglo</h2>');
peliculas.unshift('thor love and thunder', 'Iron Man')
document.write('<ul>')

for ( let posicion=0; posicion < peliculas.length ; posicion++ )
document.write(`<li>${peliculas[posicion]}</li>`)
document.write ('</ul>')
//agregar un item al final del arreglo
document.write('<h2>agregar un item al final del arreglo</h2>')
peliculas.push('Civil War')
document.write('<ul>')
for ( let posicion=0; posicion < peliculas.length ; posicion++ )
document.write(`<li>${peliculas[posicion]}</li>`)
document.write ('</ul>')
//agreagar un item en una posicion particular
document.write('<h2> agregar un item en una posicion particular del arreglo(4)</h2>');
peliculas.splice(4,0,'Spiderman No Way Home')
document.write('<ul>')
for ( let posicion=0; posicion < peliculas.length ; posicion++ )
document.write(`<li>${peliculas[posicion]}</li>`)
document.write ('</ul>')
//modificar elementos del arreglo
document.write('<h2> modificar elementos del arreglo(6)</h2>');
peliculas[6] = 'Dr. Strange' 
document.write('<ul>')
for ( let posicion=0; posicion < peliculas.length ; posicion++ )
document.write(`<li>${peliculas[posicion]}</li>`)
document.write ('</ul>')

//Eliminar items del arreglo
document.write('<h2>Eliminar el primer elemento del arreglo</h2>')
peliculas.shift();
document.write('<ul>')
for ( let posicion=0; posicion < peliculas.length ; posicion++ )
document.write(`<li>${peliculas[posicion]}</li>`)
document.write ('</ul>')

//eliminar el ultimo elemento
document.write('<h2>Eliminar el ultimo elemento del arreglo</h2>')
peliculas.pop();
document.write('<ul>')
for ( let posicion=0; posicion < peliculas.length ; posicion++ )
document.write(`<li>${peliculas[posicion]}</li>`)
document.write ('</ul>')

//elimanar de una posicion especifica

document.write('<h2>Eliminar elemento de una posicion particular del arreglo</h2>')
peliculas.splice(4,1);
document.write('<ul>')
for ( let posicion=0; posicion < peliculas.length ; posicion++ )
document.write(`<li>${peliculas[posicion]}</li>`)
document.write ('</ul>')

//Operaciones extras
document.write('<h2>Operaciones extra</h2>')
//buscar un elemento en el arreglo
 
document.write(peliculas.includes('endgame'))
document.write('<br>'+peliculas.includes('Capitana marvel'))
document.write(`<br> ¿Encontramos Endgame?: ${peliculas.includes('endgame')}`)

//el operador condicional ternario(condicion logica)? si es true: si es false
let existeendgame = peliculas.includes('endgame') === true ? 'si existe en nuestra lista de peliculas': 'no existe la pelicula en nuestra lista';
document.write(`<p> ¿Encontramos endgame?: ${existeendgame}</p>`)



