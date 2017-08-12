
/* **************************************
             LABORATORIO No.1 
*****************************************/


/* Array en JavaScript 
linea 2
linea 3
linea 4
*/

// 'use strict';

var my_array = new Array();

var other_array = [];

my_array = [1,3,3,3,4,4,555,55,666,6,6,666666];

console.log(my_array);

console.log(my_array[3]);

other_array = ['a', 'n', 'ggjggjjggjgj', 'fjfjfjf'];

console.log(other_array);

/* metodos sobre los arreglos */

// Agregando elemento despues de la ultima posicion

my_array.push(39);

other_array.push('hola mundo');

console.log(other_array);

console.log(my_array);

// Eliminar el ultimo elemento
my_array.pop();

other_array.pop();

// eliminar el primer elemento
my_array.shift();

other_array.shift();

console.log(other_array);

console.log(my_array);


// Organizar elementos
my_array.sort();

other_array.sort();

console.log(other_array);

console.log(my_array);

var tasks;

tasks = ['comer', 'dormir', 'jugar'];

console.log(tasks);



/* **************************************
             LABORATORIO No.2 
*****************************************/

/* Variables t elementos Booleanos */

var verdadero = true;
var falso = false;

/* Elementos de Comparación */

/* igualdad (==) */

console.log('Cuando es 1 == 1 es: ' + (1 == 1));

console.log('Cuando es "1" == 1 es: ' + ("1" == 1));

console.log('Cuando es 0 == false es: ' + (0 == false));

console.log('cuando es 1 == true es: ' + (1 == true));

console.log('Cuando es "" == 0' + ("" == 0)); // Convierte "" a 0

console.log('Cuando es 0 == ""' + (0 == "")); // Convierte "" a 0

console.log('CUando es "     " == 0' + (0 == "     "));

var x = {};

var y = x;

console.log("La Comparación entre los objetos X y Y es: " + (x == y));

/* igualdad estricta (===) */

console.log('Cuando es "1" === 1 es: ' + ("1" === 1));

console.log('Cuando es "0" === 0 es: ' + ("0" === 0));


/* Comparación no estricta de no igual (!=) */

console.log('Cuando es "" != 0' + ("" != 0));

/* Comparación estricta de no igual (!==)*/


console.log('Cuando es "" !== 0' + ("" !== 0));

/* Flujos logicos */

console.log("----- flujos logicos -----");

// Operador del tipo and `&&`
console.log( true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

// Operador del tipo or `or`
console.log( true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);


/* **************************************
             LABORATORIO No.3 
*****************************************/

/* Uso de funciones, variables y estructuras de control */

var d, minutes, time, hours, message;

// Utilizando el objeto Date de JS para trabajar con fechas, tiempo y timestamps
d = new Date();

hours = d.getHours();
minutes = d.getMinutes();

alert("Las hora es: " + hours);
alert("Minutos: " + minutes);

if(minutes < 10){
	minutes = "0" + minutes; // agrega un cero a la izquierda si son números menores a 10
} else {
	minutes = minutes.toString(); // convertir la variable `minutes` en un string o cadena de caracteres
}

if(hours < 10){
	hours = "0" + hours;
} else {
	hours = hours.toString();
}

alert("el tipo de dato de lo minutos y los segundos es: " + typeof(minutes) + " "+ typeof(hours));

time = Number(hours + minutes);


alert("La variable `time` convertida a un valor numerico es: " + time);

if(time >= 0000 && time < 1200){
	alert("Buenos días");
} else if(time >= 1200 && time < 1700){
	alert("Buenas tardes");
} else if(time >=1700 && time < 2359){
	alert("Buenas noches");
}




/* **************************************
             LABORATORIO No.4
*****************************************/


/* objetos y funciones */
var my_object = new Object();

var other_object = {};

my_object = {
	firstName: 'Alejandro',
	lastName: 'Romero',
	phone: 1137373
};

my_object.address = 'Cra xxxxxxxxxx';

console.log(my_object.firstName);

console.log(my_object['lastName']); 

var key;

for(key in my_object){
	console.log(my_object[key]);
}

// Funciones 
function test(){
  lastName= 'Romero',
  phone= 1137373
};
my_object.address = 'Cra xxxxxxxxxx'
 
console.log(my_object.firstName);
console.log(my_object['lastName']); 
var key;
for(key in my_object){
  console.log(my_object[key]);
}
// Funciones 
function test(){
  console.log('ejecutando una funcion');
}
test();
// usando funcion anonima
var bye_bye = function(){
  console.log('Que tengan una feliz semana santa');
}
bye_bye();
console.log('ejecutando una funcion');


test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();