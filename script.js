/*Carne-400g por pessoa +6hrs-650g
Cerveja-1200ml por pessoa +6hrs-2000ml
Refrigerante/agua-1000ml por pessoa+6hrs-1500ml
Crianças valem por 0,5
*/ 
let inputAdultos= document.getElementById('adultos')
let inputCriancas=document.getElementById('criancas')
let inputDuracao=document.getElementById('duracao')
let resultado=document.getElementById('resultado')

function calcular(){
    
    let adultos=inputAdultos.value
    let criancas=inputCriancas.value
    let duracao=inputDuracao.value

    let qnttotalcarne=carnePP(duracao)*adultos+(carnePP(duracao)/2*criancas)
    let qnttotalcerveja=cervejaPP(duracao)*adultos
    let qnttotalbebidas=bebidasPP(duracao)*adultos+(bebidasPP(duracao)/2*criancas)

    resultado.innerHTML=`<p>${Math.ceil(qnttotalcarne/1000)} Kg de carne.</p>`
    resultado.innerHTML+=`<p>${Math.ceil(qnttotalcerveja/355)} Latas de cerveja.</p>`
    resultado.innerHTML+=`<p>${Math.ceil(qnttotalbebidas/2000)} Garrafas de bebidas(Água e Refrigerantes).</p>`
}
function carnePP(duracao){
    if (duracao>=6){
        return 650
    }else{
        return 400
    }
}
function cervejaPP(duracao){
    if (duracao>=6){
        return 2000
    }else{
        return 1200
    }
}
function bebidasPP(duracao){
    if (duracao>=6){
        return 1500
    }else{
        return 1000
    }
}
