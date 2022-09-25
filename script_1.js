
// 1.Siempre hambriento

function alwaysHungry(arr) {
// tu código aquí
let isMeal = null;
for (const element of arr) {
    if ("comida"===element) {
        isMeal = "delicioso"
        console.log(isMeal);
    }
}
if (isMeal!=="delicioso") {
    console.log("tengo hambre");
}
}

// alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
//alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


// 2. Filtro paso alto
// Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.
function highPass(arr, cutoff) {
    let filteredArr = [];
    // tu código aquí
    for (const element of arr) {
        if (cutoff < element) {
            filteredArr.push(element)
        }
    }
    return filteredArr;
}
let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

// 1.Mejor que el promedio
// Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.
function betterThanAverage(arr) {
    let sum = 0;
    // calcula el promedio
    for (const element of arr) {
        sum += (element)/arr.length
    }
    let promedio = Math.floor(sum)
    let count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    for (const element of arr) {
        if (element>promedio) {
            count++
        }
    }
    return count;
}
let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

// 4.Arreglo invertido
// Escribe una función que invierta los valores de un arreglo y los devuelva.
function reverse(arr) {
    // tu código aquí
    //
    let reverseArr=[]
    for (let i = 0; i < arr.length; i++) {
        reverseArr.push(arr[(arr.length-1)-i])
    }
    arr = reverseArr
    return arr;
}
let result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//5-Arreglo de Fibonacci
//Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    let fibArr = [0, 1];
    if (n===0) {
        fibArr = [0]
    }else if(n==1){
        fibArr = [0,1]
    }else{
        for (let i = 2; i < n; i++) {
            fibArr[i]=fibArr[i-2]+fibArr[i-1]
        }
    }
    // tu código aquí
    return fibArr;
}
   
let result = fibonacciArray(11);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]