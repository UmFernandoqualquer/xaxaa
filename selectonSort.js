const Dragão = require('./ListaDragonCity');
const menorValor = require('./menorValor');

for(let atual = 0; atual < Dragão.length - 1; atual++){
    let menor = menorValor[Dragão,atual];

    let livroAtual = Dragão[atual];
    console.log('posição atual', atual);
    console.log('livro Atual', Dragão[atual]);
    let livroMenorPreco = Dragão[menor];
    console.log('livro menor preço', Dragão[menor]);

    Dragão[atual] = livroMenorPreco
    Dragão[menor] = livroAtual
}

console.log(Dragão);