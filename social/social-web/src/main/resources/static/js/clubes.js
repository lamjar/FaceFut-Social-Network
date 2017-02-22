
var jogos = {};

$(function () {
    jogos.carregarElementos();
    jogos.carregarPlacares();
});

jogos.carregarElementos = function () {
    jogos.jogosContent = $('#box-jogos');
}

jogos.carregarPlacares = function () {
    $.getJSON('https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/en.1.json', function (json) {
        let rounds = json.rounds.map(r => r.matches);
        jogos.renderizarJogosPorData(rounds);
    });
};

jogos.renderizarJogosPorData = function(rounds) {
    let agora = new Date();
    
    for (var i = 0; i < rounds.length; i++) {
        for (var j = 0; j < rounds[i].length; j++) {
            let mesRodada = rounds[i][j].date.split("-")[1];
            if(mesRodada ==  eval(agora.getMonth() + 1))
                jogos.jogosContent.append(rounds[i][j].team1.code + " x " + rounds[i][j].team2.code + "<br/>Data: " + rounds[i][j].date + "<br/><br/>");
        }
    }
};

jogos.separarJogosPorData = function(){
    
};

var a = [
    [{nome: "Arthur"}],
    [{nome: "Messias"}],
    [{nome: "Rafael"}]
];