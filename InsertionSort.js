const Dragao = require('./ListaDragonCity');
const troca = require('./troca');


function insertionSort(lista){  
    
    for(let atual =0; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise].raridade < lista[analise - 1].raridade){
            troca(lista, analise);
            analise--
        }
    }
    console.log(lista);
}

insertionSort(Dragao);