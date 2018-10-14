class NegociacaoController {

    adiciona(event){
        event.preventDefault();

        //o bind mantém o document como o contexto this
        let $ = document.querySelector.bind(document);
        //busca elementos
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));

    }
}