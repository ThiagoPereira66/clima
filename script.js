let chave = 'cebcd482eda57fa9a6714c1c2ba91885' // chave da API

const botao = document.querySelector('button')


// função para modificar as informações na tela
function colocaNaTela(dados){
    console.log(dados)
    document.querySelector('h2').innerHTML = dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + "Cº"
    document.querySelector('.temp').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade = " + dados.main.humidity
    document.querySelector('.icon').src="https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}

// função para BUSCAR AS INFORMAÇÕES NA API
async function buscarCidade(cidade){ // "async" para identificar q é um busca 
    let dados = await fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json()) // importante retornar em "json()"

    colocaNaTela(dados) // resultado da pesquisa vai para "colocaNaTela"
}


// função para o botão pegar o valor do input
function cliquei(){
    let input = document.querySelector('input').value
     
    buscarCidade(input) // valor vai para "busacrCidade" e pesquisar
}








