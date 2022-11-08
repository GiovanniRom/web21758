let numeromaquina=Math.floor(Math.random()*(10 - 1)) +1;
console.log(numeromaquina);

let numerouser = parseInt(prompt("Adivina el numero del 0 al 10"));

let vida=3;

while(numeromaquina !== numerouser && vida > 1){
    vida--;
    if(numeromaquina > numerouser){
        console.log("El  numero es mayor");
    }
    else{
        console.log("El  numero es menor");
    }
    numerouser=parseInt(prompt("Intentalo otra  vez, tus  vidas son: "+vida))
}

if(numeromaquina === numerouser){
    console.log("Ganaste");
}else{
    console.log("Perdiste, el numero correcta era: "+numeromaquina);
}