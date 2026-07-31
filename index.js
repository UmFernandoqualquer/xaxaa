const Dragao = require('./ListaDragonCity');

function menorRaridade(arrProdutos, posicaoInicial){
   let menosRaro= posicaoInicial;
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[menosRaro].preco){
            menosRaro = atual;
         }
    }
    return menosRaro;
}

module.exports = menorRaridade;