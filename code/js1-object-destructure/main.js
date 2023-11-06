// OBJECT DESTRUCTURING
// Introduced in ES6 (acho eu...)

const person = {
    name: "Joe",
    age: 30,
    height: 180,
    city: "London",
    profession: "Roofer"
}

// const name = person.name;
// const age = person.age;

const { name, age } = person;

console.log(name);
console.log(age);

const numbers = [5, 12, 4, 5, 3, 4, 12, 20, 34, 2, 4, 10, 65]
// const smallNumbers = []
// 
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 10) {
//         smallNumbers.push(numbers[i])
//     }
// }

const smallNumbers = numbers.filter(number => number < 10)

console.log(smallNumbers)