//16 a 18 años es optativo
// 18 hasta 70 es obligatorio
// mayores de 70 es optativo
// quiero saber si es la primera vez que vota el usuario

let edadUsuario = parseInt(prompt('Ingrese su edad'));
if(edadUsuario >= 16 && edadUsuario < 18 || edadUsuario >=71){
    document.write('es optativo que votes')
}else{
   if(edadUsuario >=18 && edadUsuario <= 70){
    document.write('es obligatorio votar')
   }else{
    document.write('no podes votar')

   }
}


