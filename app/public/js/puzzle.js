alert("Eae");

$(document).ready(function() {

});

function start() {
	$("#mapa1").show();
	$("#mapa2").show();
	$("#mapa3").show();
	$("#mapa4").show();
	$("#mapa5").show();
	$("#mapa6").show();
	$("#mapa7").show();
	$("#mapa8").show();

	var musica = document.getElementById('musica');
	musica.addEventListener("ended",function(){musica.currentTime=0;musica.play();},false);
	musica.play();

var timer = 42000;
var pontos = 0;
var jogo = {};
jogo.press = [];
var pos1 = 

var TECLA = {}

$(function() {

	jogo.timer = setInterval(loop,10);

});

function loop() {
	pontuacao();
	tempo();
	//movimentos
}

function pontuacao(){

	$("#placar").html("<p>Pontos: "+ pontos +"</p>");

}

function tempo() {
	timer--;
	$("#tempo").html("<p>["+timer+"]</p>");
	if (timer == 0) {
		fim();
	}
}

}
		