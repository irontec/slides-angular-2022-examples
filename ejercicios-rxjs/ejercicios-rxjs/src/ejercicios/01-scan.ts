/**
 * INSTRUCCIONES
 *
 * Ejercicio:
 * Obtén el valor acumulado de los números impares del array usando un scan.
 * La salida debe de ser 16
 *
 * */

 import { from, filter, pipe, last, scan } from 'rxjs';

 const datos = [1, 2, 3, 5, 6, 7, 8];

 from(datos).pipe(
 // Completar el código aquí

 ).subscribe( console.log ) // La salida debe de ser 16


