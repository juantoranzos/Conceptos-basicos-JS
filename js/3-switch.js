/*
switch(opcion){
    case 1:
        todas las acciones a realizar si el caso es 1;
        break;
    case 2:
        todas las acciones a realizar si el caso es 2;
        break;
    case lunes:
        todas las acciones a realizar si el caso es lunes;
        break;
    case martes:
        todas las acciones a realizar si el caso es martes;
        break;
        default:
            aqui agrego el codigo cuando no se cumplio ningun case;
}
*/
 //pedir al usuario seleccionar una estacion del año, y ofrecer un menu con las opciones de plato principal, bebida y postre.


 const estacion = prompt  ('seleccione su estacion preferida:1-verano, 2-primavera, 3-otoño, 4-invierno');

 switch(estacion){
    case '1':
    case 'verano':
    case 'Verano':
    case 'VERANO':
   document.write(`<p class="subtitulo">Verano:</p>
   <ul>
   <li>Plato principal:Ensalada Cesar</li>
   <li>Bebida:Limonada</li>
   <li>Postre:Helado con brownie</li>
   </ul>
 `);
 break;
 case '2':
    document.write(`<p class="subtitulo">Primavera:</p>
    <ul>
    <li>Plato principal:Pastel de Arroz</li>
    <li>Bebida:sprite</li>
    <li>Postre:Ensalada de Frutas</li>
    </ul>
  `);
  break;
  case '3':
    document.write(`<p class="subtitulo">Invierno</p>
    <ul>
    <li>Plato Principal: Guiso de lentejas</li>
    <li>Bebida:Coca-Cola</li>
    <li>Postre:Peras al vino</li>
    </ul>
    `);
    break;

    case '4':
        document.write(`<p class="subtitulo">Otoño</p>
        <ul>
        <li>Plato principal:Sopa de champignones</li>
        <li>Bebida: Coca-Cola</li>
        <li>Postre:Flan con dulce de leche</li>
        </ul>`);
        break;

   default:
    document.write('Ingrese un numero del 1 al 4')
 }
