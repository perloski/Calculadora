const prompt = require('prompt-sync')();

//funciones utilizadas
function menu(){
console.log("\n=====CALCULADORA====");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");
console.log("5. Salir\n");
}


//función principal
function main (){

let valor1, valor2, resultado, opcion, num_opcion, numero1, numero2 ;

do{
    menu();
    opcion = prompt('Ingrese la operacion que desea realizar: ');
    num_opcion = parseInt(opcion);

    switch (num_opcion){
        case 1:
            console.log("\nEsta calculadora por el momento solo puede sumar dos numeros.")
            valor1 = prompt('Ingrese el primer valor: ');
            valor2 = prompt('Ingrese el segundo valor: ');
            numero1=parseFloat(valor1);
            numero2=parseFloat(valor2);
            resultado= numero1+numero2;
            console.log('El resultado de la suma es ' +resultado);

            break;
        case 2:
            console.log("\nEsta calculadora por el momento solo puede restar dos numeros.")
            valor1 = prompt('Ingrese el primer valor: ');
            valor2 = prompt('Ingrese el segundo valor: ');
            numero1=parseFloat(valor1);
            numero2=parseFloat(valor2);
            resultado= numero1-numero2;
            console.log('El resultado de la resta es ' +resultado);
            break;
        case 3:
            console.log("\nEsta calculadora por el momento solo puede multiplicar dos numeros.")
            valor1 = prompt('Ingrese el primer valor: ');
            valor2 = prompt('Ingrese el segundo valor: ');
            numero1=parseFloat(valor1);
            numero2=parseFloat(valor2);
            resultado= numero1*numero2;
            console.log('El resultado de la multiplicacion es ' +resultado);
            break;
        case 4:
            console.log("\nEsta calculadora por el momento solo puede dividir dos numeros.")
            valor1 = prompt('Ingrese el primer valor: ');
            valor2 = prompt('Ingrese el segundo valor: ');
            numero1=parseFloat(valor1);
            numero2=parseFloat(valor2);
            resultado= numero1/numero2;
            console.log('El resultado de la division es ' +resultado);
            break;
        case 5:
            console.log("Saliendo . . .\n");
            break;
        default: console.log("Ingrese una opcion del 1 al 5");
        break;

    }

} while (num_opcion!=5);



}

//tenemos que llamar a la funcion
main();


