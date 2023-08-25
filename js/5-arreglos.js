// arrays
// crea un arreglo vacio
let colores = [];
//arreglo con valores
let peliculas = ['El padrino', 'Endgame', '2019', 'true']
//mostrar el arreglo
document.write(peliculas)

//recorrer el arreglo
//length: devuelve la cantidad de elementos del arreglo
//array.length
document.write('<h2>Mostrar el arreglo de peliculas</h2>')
document.write('<ul>')

for (let posicion = 0; posicion <= peliculas.length; posicion++) {
   document.write(`<li>${peliculas[posicion]}</li>`)
}

document.write('</ul>')
document.write(`<p>Cantidad de peliculas:${peliculas.length}</p>`);

//agregar un item al arreglo
document.write('<h2>Agregar un item al principio del arreglo</h2>')

peliculas.unshift('Thor love and thunder', 'Iron Man')
document.write('<ul>')

for (let posicion = 0; posicion <= peliculas.length; posicion++) {
   document.write(`<li>${peliculas[posicion]}</li>`)
}

document.write('</ul>')


//agregar un item al final del arreglo

document.write('<h2>Agregar un item al final del arreglo</h2>')

peliculas.push('Black Phanter', 'Engame')
document.write('<ul>')

for (let posicion = 0; posicion <= peliculas.length; posicion++) {
   document.write(`<li>${peliculas[posicion]}</li>`)
}

document.write('</ul>')

//agregar un item en una posicion particular del arreglo

document.write('<h2>Agregar un item en una posicion particular del arreglo (4)</h2>')

peliculas.splice(4, 0, 'Spiderman: NO WAY HOME')
document.write('<ul>')

for (let posicion = 0; posicion <= peliculas.length; posicion++) {
   document.write(`<li>${peliculas[posicion]}</li>`)
}

document.write('</ul>')


//modificar un elemento del arreglo
document.write('<h2>Modificar un elemento del arreglo(6)</h2>')

peliculas[6] = 'DR STRANGE'
document.write('<ul>')

for (let posicion = 0; posicion <= peliculas.length; posicion++) {
   document.write(`<li>${peliculas[posicion]}</li>`)
}

document.write('</ul>')

// eliminar items del arregle

document.write('<h2>Eliminar el primer elemento del arreglo</h2>')

peliculas.shift();
document.write('<ul>')

for (let posicion = 0; posicion <= peliculas.length; posicion++) {
   document.write(`<li>${peliculas[posicion]}</li>`)
}

document.write('</ul>')

document.write('<h2>Eliminar el ultimo elemento del arreglo</h2>')

peliculas.pop();
document.write('<ul>')

for (let posicion = 0; posicion <= peliculas.length; posicion++) {
   document.write(`<li>${peliculas[posicion]}</li>`)
}

document.write('</ul>')

//
document.write('<h2>Eliminar un elemento de una posicion particular del arreglo(4)</h2>')

peliculas.splice(4,1);
document.write('<ul>')

for (let posicion = 0; posicion <= peliculas.length; posicion++) {
   document.write(`<li>${peliculas[posicion]}</li>`)
}

document.write('</ul>')

//operaciones extra
// buscar un elemento en el arreglo
document.write('<h2>Buscar un elemento en el arreglo</h2>')
document.write(peliculas.includes('Endgame'))
document.write('<br>'+peliculas.includes('Capitana Marvel'))











