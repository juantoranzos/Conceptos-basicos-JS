// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. si,por ejemplo, la tabla es de 7x5 los números irán del 35 al 1.
const filas = parseInt(prompt('ingrese un numero de filas'));
const columnas =parseInt(prompt('ingrese un numero de columnas'));
let numeroCeldas = filas * columnas
document.write(`  <table><tbody>`)
for(let indiceFilas = 0 ; indiceFilas < filas ; indiceFilas++)
document.write(` 
 <tr>
<td>1</td>
<td>2</td>
</tr>
`)
document.write(` </tbody></table>`)