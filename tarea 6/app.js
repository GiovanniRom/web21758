var resultado = 1+1;
console.log(resultado);
var resultado = 1-1;
console.log(resultado);
var resultado = 1*1;
console.log(resultado);
var resultado = 1/1;
console.log(resultado);
// En java script se usan tres iguales para evitar errores
var resultado = 1===1;
console.log(resultado);
var resultado = 1<=1;
console.log(resultado);
var resultado = 1!=1;
console.log(resultado);

console.log("Tabla de verdad de &&");
var resultado = false && false;
console.log("false && false = "+resultado);
var resultado = false && true;
console.log("false && true = "+resultado);
var resultado = true && false;
console.log("true && false = "+resultado);
var resultado = true && true;
console.log("true && true = "+resultado);

console.log("Tabla de verdad de ||");
var resultado = false || false;
console.log("false && false = "+resultado);
var resultado = false || true;
console.log("false && true = "+resultado);
var resultado = true || false;
console.log("true && false = "+resultado);
var resultado = true || true;
console.log("true && true = "+resultado);

// var test = prompt("Esribe 'JavaScript'")
// if(test === "JavaScript"){
//     console.log("Muy Bien!");
// }else{
//     console.log("Error de Esritura");
// }

var num = parseInt(prompt("Teclea un numero del 1 al 10"));

if(num <= 10){
    if(num >= 1){
        console.log("Muy Bien!");
    }else{
        console.log("Numero fuera de rango");
    }   
}else{
    console.log("Numero fuera de rango");
}
var opc = 1;
do{
    var opc = parseInt(prompt("Teclea una opcion del menu \n1- opc 1\n2- opc 2\n3- opc 3\n4- opc 4\n5- opc 5 6- salir"));
    switch(opc){
    case 1:
        console.log("opcion 1 elegida");
        break;
    case 2:
        console.log("opcion 2 elegida");
        break;
    case 3:
        console.log("opcion 3 elegida");
        break;
    case 4:
        console.log("opcion 4 elegida");
        break;
    case 5:
        console.log("opcion 5 elegida");
        break;
    case 6:
        console.log("Hasta luego!")
    default:
        console.log("Opcion no valida");
    }
}
while(opc != 6);