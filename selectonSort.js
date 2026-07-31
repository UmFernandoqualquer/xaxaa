const menorRaridade = require('.');
const Dragao = require('./ListaDragonCity');
const menorValor = require('./menorRaridade');

for(let atual = 0; atual < Dragao.length - 1; atual++){
    let menor = menorRaridade[Dragao,atual];

    let dragaoAtualAtual = Dragao[atual];
    console.log('posição atual', atual);
    console.log('Dragão Atual', Dragao[atual]);
    let dragaoMenorRaridade = Dragao[menor];
    console.log('Dragão menor Raridade', Dragao[menor]);

    Dragao[atual] = dragaoMenorRaridade
    Dragao[menor] = dragaoAtual
}

console.log(Dragao);