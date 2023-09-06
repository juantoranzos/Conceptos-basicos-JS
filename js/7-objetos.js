//objetos con notacion literal
let pelicula = {
//propiedades -> clave: valor;
id:2000,
genero:'Comedia',
nombre:'Son como niños',
duracion: '1hs 45min',
region: true,
clasificacion: 'ATP',
//metodos
reproducir: function(){
document.write(`<p>La pelicula ${this.nombre} se esta reproduciendo...</p>`)
},
pausar: function(){
document.write(`<p>La pelicula  ${this.nombre} esta pausada</p>`)
}

}
//usar el objeto
document.write('Pelicula: '+ pelicula.nombre)
document.write('<br> Genero: '+ pelicula.genero)
document.write('<br>Duracion: '+ pelicula.duracion)
document.write('<br>Clasificaion: '+ pelicula.clasificacion)

//invocar a un metodo
pelicula.reproducir()
pelicula.pausar()

//modificar una propiedad del objeto

pelicula.duracion= '1hs 55min'
document.write('<br>Duracion: '+ pelicula.duracion)

// agregar una nueva propiedad
pelicula.fechaEstreno = '28/08/23'
document.write('<br>Pelicula: '+ pelicula.nombre)
document.write('<br>Fecha de estreno: '+ pelicula.fechaEstreno)

// borrar una propiedad del objeto
delete pelicula.fechaEstreno
console.log(pelicula)
// averiguar si una propiedad esta dentro del objeto

console.log(pelicula.hasOwnProperty('region'))
console.log(pelicula.hasOwnProperty('id'))

//definir un prototipo
