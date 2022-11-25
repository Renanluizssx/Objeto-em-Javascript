//Objeto 
let pessoa = {
    nome: "jonatas", 
    idade: 35,
    feliz: true,
    pets: ["cachorro", "gato"],
        // podemos criar objetos dentro de outros objetos no javascript
        camaro: {
            placa: "123456",
            cor: "verde"
        },
        uno: {
            placa: "9876543",
            cor: "branco"
        }
};
//para acessar valores dentro de um objeto,
//tem que utilizar ponto

pessoa.nome = "Renan";
pessoa.idade = 20;
pessoa.feliz = false;
pessoa.pets[0] = "tartaruga";

