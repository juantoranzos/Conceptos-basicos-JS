// pedirle al usuario que seleccione un mes y le informaremos si el mes seleccionado tiene 31 dias, 30 o entre 28 y 29
// 31 dias- 1 enero,3 marzo,5 mayo,7 julio,8 agosto, 10octubre,12 dic.
// 30 dias-4 abril, 6 junio,9 sep,11 nov
// 28 o 29 dias - 2 feb

let mes = parseInt( prompt('ingresa el numero de mes (1 al 12).'));
if(mes > 0 && mes <=12){
    if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
        document.write(`el mes que seleccionaste (${mes}) tiene 31 días`);
    
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
        document.write(`el mes que seleccionaste (${mes}) tiene 3o días`)
    
    }else {
        document.write(`el mes que seleccionaste (${mes}) tiene 28 o 29 días dependiendo el año`)
    }
}else{
    document.write('los datos que ingresaste son incorrectos')
}
