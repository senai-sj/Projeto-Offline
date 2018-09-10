// alert("Eae");

$(document).ready(function() {
	
	$(".fim").hide();
	$("#laser").hide();
	$("#tecla_A").hide();
	$("#tecla_B").hide();

});

function start() {
	$(".inicio").hide();
	$("#laser").show();
	$("#tecla_A").show();
	$("#tecla_B").show();

	// var somTiro = document.getElementById('somTiro');
	// var gameover = document.getElementById('gameover');
	
	// var musica = document.getElementById('musica');
	// musica.addEventListener("ended",function(){musica.currentTime=0;musica.play();},false);
	// musica.play();
  
var pontos = 0;
var vida=10;
var jogo = {};
jogo.press = [];

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

$(function() {

	jogo.timer = setInterval(loop,10);

});

function loop() {
	pontuacao();
	vidas();
	objA();
	objB();
}
document.getElementById("tecla_A").addEventListener("click", cliqueTecla);
document.getElementById("tecla_B").addEventListener("click", cliqueTeclaB);

function cliqueTecla() {
   	respawn = parseInt(Math.random()*610);
	$("#tecla_A").css("left",respawn);
	$("#tecla_A").css("top", 0);
   	pontos+=10;
   }

function cliqueTeclaB() {
    document.getElementById("tecla_B");
    respawn = parseInt(Math.random()*610);
		$("#tecla_B").css("left",respawn);
		$("#tecla_B").css("top", 0);
    pontos+=10;
}

// Funções primárias
function vidas() {

	$("#saude").html("<p>Vidas: "+ vida +"</p>");

}

function objA() {
	posicaoY = parseInt($("#tecla_A").css("top"));
	$("#tecla_A").css("top",posicaoY+2);

	if (posicaoY >= 475) {
		respawn = parseInt(Math.random()*620);
		$("#tecla_A").css("left",respawn);
		$("#tecla_A").css("top", 0);
			// somTiro.play();
		if (vida == 0) {
			fim();
		}
		vida-=1;
	}
}

function objB() {
	posicaoY = parseInt($("#tecla_B").css("top"));
	$("#tecla_B").css("top",posicaoY+2);

	if (posicaoY >= 475) {
		respawn = parseInt(Math.random()*620);
		$("#tecla_B").css("left",respawn);
		$("#tecla_B").css("top", 0);

		// somTiro.play();
	if (vida == 0) {
			vida==0;
			fim();
		}
		vida-=1;
	}
}

function pontuacao(){

	$("#placar").html("<p>Pontuação: "+ pontos +"</p>");

}

function fim() {
	vida=0;
	window.clearInterval(jogo.timer);
	jogo.timer=null;
	$("#player").hide();
	$(".fim").show();
	// musica.pause();
	// gameover.play();

	$(".fim").html("<h1>Fim de Jogo</h1> <h1>Pontuação Final:"+pontos+"</h1><p>Clique aqui para jogar novamente</p>");
	}
}

function reiniciar(){
	
	$(".fim").hide();
	$("#player").show();
	// gameover.pause();
	
	start();
}