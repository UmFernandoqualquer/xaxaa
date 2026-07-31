const Dragao = require('./ListaDragonCity');

function menorRaridade(arrPodutos, posicaoInicial){
    let menosRaro = posicaoInicial;    
    
    for(let atual = posicaoInicial; atual < arrPodutos.length; atual++){
        if (arrPodutos[atual].preco < arrPodutos[menosRaro].raridade){
            menosRaro= atual;
        }
    }    
    return menosRaro;
}

module.exports = menorRaridade;