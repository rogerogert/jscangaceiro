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

        let data = new Date(this._inputData.value.replace(/-/g, ','));

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        console.log(negociacao);

    }
}