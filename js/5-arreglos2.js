let productos = [
    "Hidratante facial",
    "Tonico exfoliante",
    "protector solar factor 50",
    "Protector solar toque seco factor 50",
    "Protector solar con color factor 50",
    "Gel de limpieza facial",
    "Tonico hidratante",
    "Sérum hidratante",
    "Exfoliante de azúcar cherry",
    "Pads de hidrogel para contorno de ojos",
    "Mascarilla facial",
    "Sérum facial con PHA",
    "Agua micellar",
    "Mascara de hidratación y reparación",
    "Protector solar en barra",
    "Crema contorno de ojos",
    "Bálsamo labial"
    ];

    function mostrarProducto(titulo = "No hay un titulo disponible", arregloProductos){
        document.write(`<h2>El titulo es: ${titulo}</h2>`)

    document .write('<ul>');
    arregloProductos.map(producto => document.write(`<li>${producto}</li>`))
    document .write('</ul>');
}
    mostrarProducto('Lista original de los productos', productos)

    //filtrar los productos por protectores solares
  
let protectoresSolares = productos.filter(producto => producto.includes('Protector'));
mostrarProducto('Productos filtrados por protector solar', protectoresSolares)
// buscar un elemento en el arreglo de productos

let buscarProducto = productos.find(producto => producto.includes('Sérum') );
document.write('El producto buscado es: '+ buscarProducto)