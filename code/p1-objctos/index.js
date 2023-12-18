let exemplo = {
    idade: 45,
    nome: "Ze"
}

console.log(exemplo);

const prop1 = "idade";
const prop2 = "pais";

exemplo = {
    ...exemplo,
    cidade: "Porto",
    [prop1]: 30,
    [prop2]: "PT",
}

console.log(exemplo);


let numeros = [1, 2, 3, 4, 5]
console.log(numeros)

numeros = [...numeros, 6, 7, 8, 9]
console.log(numeros)

someFunction1()
someFunction2()
