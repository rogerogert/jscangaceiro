class NegociacaoController {

    constructor(){
        //o bind mantém o document como o contexto this
        let $ = document.querySelector.bind(document);
        //busca elementos
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();        

        console.log(this._inputData.value);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));

    }
}