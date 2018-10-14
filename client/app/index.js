var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    var tr = document.createElement('tr');
    campos.forEach(function(campo){
        //cria uma td sem informações
        var td = document.createElement('td');
        //atribui o valor do campo à td
        td.textContent = campo.value;
        tr.appendChild(td);
    });
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    //limpa os campos após o submit e foca no campo data
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();
});

console.log(campos);