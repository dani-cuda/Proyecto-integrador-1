
// 41- Crea una variable llamada `nombre` y asígnale tu nombre. Luego, 
// muestra el valor de la variable en la consola.

let nombre = "Yazmin"; 
console.log(nombre);

// 42. Define una variable llamada `edad` y asígnale tu edad. 
 // Luego, muestra un mensaje que diga "Tienes X años" en la consola, 
 //reemplazando X con el valor de la variable.

 let edad = 27;
 console.log("Tengo", edad ,"años");

 // 43. Crea una variable llamada `esEstudiante` 
// y asígnale `true` si eres estudiante o `false` si no lo eres.
// Luego, muestra un mensaje que diga "Eres estudiante" o 
// "No eres estudiante" en la consola según el valor de la variable.

let esEstudiante = true;

if ( esEstudiante =true )
    {
    console.log("Soy estudiante");
}
else{
     console.log("No soy estudiante");
}

// 44. Crea una variable llamada `fruta` y asígnale el nombre de tu fruta favorita. Luego,
// muestra un mensaje que diga "Mi fruta favorita es [nombre de la fruta]" en la consola.

let fruta= "durazno";
console.log ("Mi fruta favorita es", fruta)

// 45. Define una variable llamada `numero1` 
// y otra llamada `numero2`. Realiza una operación 
// aritmética (suma, resta, multiplicación o división) 
// con estas variables y muestra el resultado en la consola.

let numero1 = 3;
let numero2 = 5;

let resultado = numero1 + numero2;
console.log("El resultado es:", resultado);

// 46. Crea una variable llamada `temperaturaCelsius` y asígnale un valor en grados
// Celsius. Convierte esta temperatura a grados Fahrenheit utilizando la fórmula 
//`F = (C *9/5) + 32` y muestra el resultado en la consola.

let temperaturaCelsius = 25;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log("La temperatura en Fahrenheit es: " + temperaturaFahrenheit); 

// 47. Define una variable llamada `precioProducto` y otra llamada `cantidadComprada`.
// Calcula el costo total de la compra multiplicando estas variables y muestra el resultado 
//en la consola.

let precioProducto= 20
let cantidadComprada= 2
let costoTotal= precioProducto * cantidadComprada
console.log ("el costo total de la compra es", costoTotal);

// 48. Crea una variable llamada `radio` y asígnale el radio 
//de un círculo. Calcula el área del círculo utilizando la
// fórmula `A = π * r^2` y muestra el resultado en la consola.

let radio= 12.5;
const PI= 3.1416;

let area= (PI * radio ** 2); 
console.log ("el area es", area)

// 49. Define una variable llamada `num1` y otra llamada `num2`.
// Escribe una expresión que verifique si `num1` es mayor que `num2` 
//y muestra el resultado (true o false) en la consola.

let num1= 6
let num2= 4

let esMayor = num1 > num2; 
console.log("Numero 1 es mayor?", esMayor );

//50. Crea una variable llamada `cadena1` y otra llamada `cadena2`. Concatena 
//estas dos cadenas utilizando el operador `+` y muestra la cadena resultante 
//en la consola.

let cadena1= "hola"
let cadena2= "mundo"

let cadenaConcatenada= cadena1 + cadena2;
console.log ("Cadena Concatenada", cadenaConcatenada);

// 51. Crea una variable llamada `edad` y asigna un valor numérico. Escribe una condición
// que verifique si la persona es mayor de 18 años y muestra un mensaje en la consola,

let suEdad= 17
if (suEdad > 18) {
    console.log ("Es mayor de edad")
} else {
    console.log ("Es menor de edad")
}

// 52. Define una variable llamada `puntuacion` y asigna un valor numérico entre 0 y 100. Utiliza 
// una estructura condicional `if...else` para mostrar un mensaje en la consola que
// indique si la puntuación es "Aprobada" (si es mayor o igual a 60) o "Reprobada" (si es menor a 60).

let puntuacion= 40
if (puntuacion >= 60 ) {
    console.log ("Aprobada")
} else {
    console.log ("Reprobada")
}

// 53. Crea una variable llamada `diaSemana` y asígnale el nombre de un día de la semana.
// Utiliza una declaración `switch` para mostrar un mensaje que indique si es un "Día
// laboral" o "Fin de semana" en función del valor de `diaSemana`.

let diaSemana= "lunes"
switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
    console.log("Es un día laboral");
        break;
    case "sábado":
    case "domingo":
        console.log("Es fin de semana");
        break;
    default:
        console.log("Día no válido");
}

// 54. Define dos variables, `numero1` y `numero2`, y realiza una comparación para determinar 
// cuál de los dos números es mayor. Luego, muestra el número mayor en la consola.

let numero_1= 50;
let numero_2= 20;

if (numero_1 > numero_2) {
    console.log ("el numero 1 es mayor que numero 2")
} else {
    console.log ("el numero 1 es menor que numero 2")
}

// 55. Crea una variable llamada `color` y asígnale el nombre de un color. Utiliza una serie
//de declaraciones `if...else if` para determinar si el color es "Rojo," "Verde," o "Azul," y
//muestra un mensaje correspondiente en la consola.

let color = "Verde";
if (color === "Rojo") {
console.log("El color es Rojo");
} else if (color === "Verde") {
console.log("El color es Verde");
} else if (color === "Azul") {
console.log("El color es Azul");
} else {
console.log("El color no es Rojo, Verde ni Azul");
}

//56. Crea una variable llamada `calificacion` y asígnale un valor numérico entre 0 y 100. Utiliza una 
//estructura condicional `if...else if...else` para mostrar en la consola si la
//calificación es "Excelente," "Aprobado," o "Reprobado" según un rango de calificaciones.

let calificacion= "70";
if (calificacion >= 80) {
  console.log ("La calificacion es Excelente"); 
} else if (calificacion >= 60) {
  console.log ("La calificacion es Aprobado");
} else {
  console.log ("La calificacion es Reprobado");
}

// 57. Define una variable `numero` y verifica si es positivo, negativo o igual a cero utilizando
//  una declaracion if y muestra el resultado en consola

let numero= "2";
if (numero > 0) {
    console.log ("El numero es Positivo")
} else if( numero < 0 ) {
    console.log ( " El numero es Negativo")
} else {
    console.log ("El numero es igual a cero")
}

// 58. Escribe una función llamada `esPar` que tome un número como argumento y retorne
// `true` si es par o `false` si es impar. Luego, muestra el resultado en la consola.

function esPar(numero) {
    return numero %2===0
}

console.log (esPar (3) ); 

// 59. Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una
// estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en
// función de la hora.

let hora= "11"

if (hora >= 0 && hora < 12) {
    console.log ("Buenos dias")
} else if ( hora >12 && hora < 18 ) {
    console.log ("Buenas tardes")
} else {
    console.log ( "Buenas noches")
}

// 60. Define tres variables `lado1`, `lado2` y `lado3` que representen las longitudes de los lados de un triángulo. 
// Escribe una estructura condicional para determinar si el triángulo es
// equilátero (todos los lados iguales), isósceles (dos lados iguales), o escaleno 
// (ningún lado igual).

let lado1= "4"
let lado2= "2"
let lado3= "6"

if ( lado1=== lado2=== lado3) {
    console.log ("El triangulo es equilatero")
}
else if (lado1===lado2 || lado2 === lado3 || lado1 === lado3) {
    consolole.log ("El triangulo es isosceles" )
} else {
    console.log ("El triangulo es escaleno")
}

// 4-Desarrolla una función llamada invertirNumero que tome un número como parámetro y devuelva el número invertido. 
// Por ejemplo, si se pasa el número 123, la función debería devolver 321. Utiliza un ciclo for para invertir el número


function invertirNumero(numeroEjercicio) {
    let numeroString = numeroEjercicio.toString();
    let numeroInvertido = "";
    for (let i = numeroString.length - 1; i >= 0; i--) {
        numeroInvertido = numeroInvertido + numeroString[i];
    }
    return numeroInvertido;
}

let numeroEjercicio = 123;
console.log(invertirNumero(numeroEjercicio)); 
