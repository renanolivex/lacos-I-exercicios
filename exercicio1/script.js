let coxinha = prompt("Você quer comer mais coxinha? Digite S Para sim e N para não")
coxinha = coxinha.toUpperCase()
let conta =0

while (coxinha === "S"){

conta = conta + 2.50
    
coxinha = prompt(console.log("Gostaria de mais uma?"))
    
}

console.log("O valor total da sua conta é " +conta)

