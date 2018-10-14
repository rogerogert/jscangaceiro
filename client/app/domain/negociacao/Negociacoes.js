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
}