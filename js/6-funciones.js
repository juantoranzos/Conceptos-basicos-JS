// funciones declarativas
// function saludar(){
//     document.write(`<p> Mi nombre es ${nombre}${apellido}, pero me dicen ${apodo}</p>`)
// }
//invocar a la funcion
// saludar();

const nombre = 'Anthony Edwar';
const apellido = 'Stark';
const apodo = 'Tony';
const nombre1 = 'Steve';
const apellido1 = 'Rogers';
const apodo1 = 'Cap';
function saludar(nombrePersonaje, apellido, apodo){
    document.write(`<p> Mi nombre es ${nombre}${apellido}, pero me dicen ${apodo}</p>`)
}
saludar();




// document.write(`<p> Mi nombre es ${nombre1}${apellido1}, pero me dicen ${apodo1}</p>`)

const miNomnbre = 'Juan Ignacio'
const miApellido = 'Toranzos'
function nombreCompleto(){
    document.write(`mi nombre completo es:${miNomnbre + miApellido}`)
}
nombreCompleto();




//funciones anonimas equivalente a funciones de expresion