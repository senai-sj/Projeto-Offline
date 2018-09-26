alert("!");

$(document).ready(function() {
	
	$(".fim").hide();
	$("#player").hide();

});

function start() {
	$(".inicio").hide();
	$("#player").show();

	var somTiro = document.getElementById('somTiro');
	var gameover = document.getElementById('gameover');
	
	var musica = document.getElementById('musica');
	musica.addEventListener("ended",function(){musica.currentTime=0;musica.play();},false);
	musica.play();
  
var vida = 10;
var pontos = 0;
var recorde = 0;
var limpaTiro = true;
var velocidade = 5;
var positionY = parseInt(Math.random()*410);

var TECLA = {
	// WASD
	W:87,
	A:65,
	S:83,
	D:68,

	// Setas do Teclado
	UP:38,
	LEFT:39,
	DOWN:40,
	RIGHT:37,
}

var jogo = {};
jogo.press = [];

$(function() {

	jogo.timer = setInterval(loop,10);

	$(document).keydown(function(e){
	jogo.press[e.which] = true;
	});

	$(document).keyup(function(e){
	jogo.press[e.which] = false;
	});

});

function loop() {
	// pontuacao();
	// vidas();
}
}