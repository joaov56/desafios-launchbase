//CALCULO APOSENTADORIA

const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

const calculoContribuicao = idade + contribuicao


const homemAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemAposentar || mulherAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}