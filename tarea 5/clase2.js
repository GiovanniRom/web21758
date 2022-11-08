// console.log("hola mundo");

// Var es un tipo de variable que poodemos declarar mas de una vez
var nombre="GIO";
console.log(nombre);
var nombre="ADN";
console.log(nombre);
nombre="ROM";
console.log(nombre);
nombre = 123.43;
console.log(nombre
    )


let user="th";

console.group(user);
// let user="pp";
// el codigo anterior es un error, con la variable let no se pueden declarar mas de una vez una variable
const pas ="1234"; 
var nombre="gio", edad=26, nacionalidad="mexicana", compromiso=false;

console.log("Su nombre es: ")
console.log(nombre)
console.log("Su edad es :")
console.log(edad)
console.log("Su naciionalidad es: ")
console.log(nacionalidad)
console.log("Esta comprometid@?")
console.log(compromiso)

// Lo anterior usando concatenacion queda de la siguiente forma
console.log("Su nombre es: "+nombre)
console.log("Su edad es: "+edad)
console.log("Su naciionalidad es: "+nacionalidad)
console.log("Esta comprometid@?\n"+compromiso)

// la concatenacion se puede usar con otrosmmetodos con dierentes datos
var a="una vaca", b="vestida de uniforme";
alert(a+a+b+b);

nombre = "gio";
var apellido = "romero";

console.log("Su nombre es: "+nombre+" y su apellido es: "+apellido+" y su edad es: "+edad);

var num1=1, num2=2;

console.log(num1+num2);
var entrada = prompt("Dime tu nombre");
console.log(entrada);