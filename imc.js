let alt = ''
let pesado =''


function imc(alt, peso){
let cont = (alt * alt) / pesado

    
}
function situacao(cont) {
    if (cont > 40) {

    console.log(`Seu imc é igual a ${cont}` )
        console.log(`Vc tem obesidade de grau 3`)
        
    }

    else if(cont < 35 || 39,9){

        console.log(`Seu imc é igual a ${cont}` )
        console.log(`Vc tem obesidade de grau 2`)
        
    }

    else if(cont < 30 || 34,9){

        console.log(`Seu imc é igual a ${cont}` )
        console.log(`Vc tem obesidade de grau 1`)
    }

    else if(cont < 25 || 29,9){

        console.log(`Seu imc é igual a ${cont}` )
        console.log(`Vc tem Sobrepeso`)

    }

    else if(cont < 18,5 || 24,9){

        console.log(`Seu imc é igual a ${cont}` )
        console.log(`Vc tem um peso normal`)

    }


    else if(cont <= 18,5){

        console.log(`Seu imc é igual a ${cont}` )
        console.log(`Vc esta abaixo do peso`)

    }

}