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

        let negociacao = new Negociacao(
            this._inputData.value,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        console.log(negociacao);

    }
}