//aqui es donde vamos a implementar el proyecto

console.log('Holis soy lizzzzz owo');

console.log('Hola soy andres owo');

console.log('Hola soy axell owo');

console.log('Hola, soy dario owo');

const calcular = (a, b)=> {

    let suma = a+b
    let rest = a-b
    let mult = a*b
    let div = a/b

    multiplicarTotales(suma, rest, mult, div) // Llamada a la funcion multiplicar

}

// Recibe multiples parametros y retorna la multiplicacion de todos ellos
const multiplicarTotales = (...resultados)=> {

    let total = 1
    resultados.forEach((resultado)=> {
        total *= resultado
    })

    console.log(total);

}