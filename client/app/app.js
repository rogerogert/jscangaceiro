//cria instancia de negociacaoController
let controller = new NegociacaoController();

document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));