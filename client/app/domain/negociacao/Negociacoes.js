class Negociacoes {
    
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray(){
        //retorna referência criada com os itens de _negociações
        return [].concat(this._negociacoes);
    }

    get volumeTotal(){
        let total = 0;

        for(let i = 0; i < this._negociacoes.length; i++){
            total += this._negociacoes[i].volume;
        }
        return total;
    }
}