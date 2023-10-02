// EXEMPLO 01

class formaBolo {
    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    mensagem() {
        console.log(`É um delicioso bolo com massa de ${this.saborDaMassa} e com recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaBolo("chocolate", "Nutella")

console.log (boloFesta) // Para imprimir toda informação da class
console.log(boloFesta.saborRecheio) // Para imprimir informação específica da class
console.log()
boloFesta.mensagem()
console.log()
console.log("----------------------")
console.log()


// EXEMPLO 02

class cadastro {
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    }
}

let user1 = new cadastro("Sil", 24)
let user2 = new cadastro("Lô", 24)
let user3 = new cadastro("Maria", 17)

console.log(user1, user2, user3)