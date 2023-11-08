const malta = [
    {
        nome: "Helder",
        sexo: "M",
        idade: 42
    },
    {
        nome: "Ze",
        sexo: "M",
        idade: 20
    },
    {
        nome: "To",
        sexo: "M",
        idade: 3
    },
    {
        nome: "Filipa",
        sexo: "F",
        idade: 8
    },
    {
        nome: "Rute",
        sexo: "F",
        idade: 55
    },
    {
        nome: "Joaozinho",
        sexo: "M",
        idade: 75
    },
]

const maltaDaCerveja = malta.filter(function(pessoa) {
    if (pessoa.idade >= 18) {
        return true;
    } else {
        return false;
    }
});

// const nomes = [];
// for (let i = 0; i < malta.length; i++) {

//     if (malta[i].idade >= 18) {
//         if (malta[i].sexo == "M") {
//             nomes.push("Sr. " + malta[i].nome);
//         } else if (malta[i].sexo == "F") {
//             nomes.push("Dona " + malta[i].nome);
//         }
//     } else {
//         nomes.push(malta[i].nome);
//     }
// }
// console.log(nomes);

const nomes = malta.map(function(pessoa) {
    if (pessoa.idade >= 18) {
        if (pessoa.sexo == "M") {
            return "Sr. " + pessoa.nome;
        } else if (pessoa.sexo == "F") {
            return "Dona " + pessoa.nome;
        }
    } else {
        return pessoa.nome;
    }
});

malta.forEach(function(pessoa) {
    
})