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

        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)            
        );

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        let diaMesAno = negociacao.data.getDate() + '/'
            + (negociacao.data.getMonth() + 1) + '/'
            + negociacao.data.getFullYear();        

        console.log(diaMesAno);

    }
}