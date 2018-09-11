// alert("Eae");

$(document).ready(function() {
	
	$(".fim").hide();
	$("#laser").hide();
	$("#tecla_A").hide();
	$("#tecla_B").hide();
	$("#tecla_C").hide();
	$("#tecla_D").hide();
	$("#tecla_E").hide();

});

function start() {
	$(".inicio").hide();
	$("#laser").show();
	$("#tecla_A").show();
	$("#tecla_B").show();
	$("#tecla_C").show();
	$("#tecla_D").show();
	$("#tecla_E").show();

	// var somTiro = document.getElementById('somTiro');
	// var gameover = document.getElementById('gameover');
	
	// var musica = document.getElementById('musica');
	// musica.addEventListener("ended",function(){musica.currentTime=0;musica.play();},false);
	// musica.play();

var timer = 5000;
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
	tempo();
	vidas();
	objA();
	objB();
	objC();
	objD();
	objE();
}

document.getElementById("tecla_A").addEventListener("click", cliqueTecla);
document.getElementById("tecla_B").addEventListener("click", cliqueTeclaB);
document.getElementById("tecla_C").addEventListener("click", cliqueTeclaC);
document.getElementById("tecla_D").addEventListener("click", cliqueTeclaD);
document.getElementById("tecla_E").addEventListener("click", cliqueTeclaE);

function cliqueTecla() {
	posY = parseInt($("#tecla_A").css("top"));
   	respawn = parseInt(Math.random()*515);
	$("#tecla_A").css("left",respawn);
	$("#tecla_A").css("top", 0);
	if (posY <= 299) {
   	pontos+=1;
    }
	if (posY >= 300 && posY <= 399) {
   	pontos+=5;
    }
    if (posY >= 400 && posY <= 549) {
   	pontos+=10;
    }
    if (posY >= 550 && posY <= 599) {
   	pontos+=15;
    }
    if (posY >= 600) {
   	pontos+=20;
    }
}
function cliqueTeclaB() {
    document.getElementById("tecla_B");
    posY = parseInt($("#tecla_B").css("top"));
    respawn = parseInt(Math.random()*515);
		$("#tecla_B").css("left",respawn);
		$("#tecla_B").css("top", 0);
 	if (posY <= 299) {
   	pontos+=1;
    }
	if (posY >= 300 && posY <= 399) {
   	pontos+=5;
    }
    if (posY >= 400 && posY <= 549) {
   	pontos+=10;
    }
    if (posY >= 550 && posY <= 599) {
   	pontos+=15;
    }
    if (posY >= 600) {
   	pontos+=20;
    }
}
function cliqueTeclaC() {
    document.getElementById("tecla_C");
    posY = parseInt($("#tecla_C").css("top"));
    respawn = parseInt(Math.random()*515);
		$("#tecla_C").css("left",respawn);
		$("#tecla_C").css("top", 0);
 	if (posY <= 299) {
   	pontos+=1;
    }
	if (posY >= 300 && posY <= 399) {
   	pontos+=5;
    }
    if (posY >= 400 && posY <= 549) {
   	pontos+=10;
    }
    if (posY >= 550 && posY <= 599) {
   	pontos+=15;
    }
    if (posY >= 600) {
   	pontos+=20;
    }
}
function cliqueTeclaD() {
    document.getElementById("tecla_D");
    posY = parseInt($("#tecla_D").css("top"));
    respawn = parseInt(Math.random()*515);
		$("#tecla_D").css("left",respawn);
		$("#tecla_D").css("top", 0);
 	if (posY <= 299) {
   	pontos+=1;
    }
	if (posY >= 300 && posY <= 399) {
   	pontos+=5;
    }
    if (posY >= 400 && posY <= 549) {
   	pontos+=10;
    }
    if (posY >= 550 && posY <= 599) {
   	pontos+=15;
    }
    if (posY >= 600) {
   	pontos+=20;
    }
}
function cliqueTeclaE() {
    document.getElementById("tecla_E");
    posY = parseInt($("#tecla_E").css("top"));
    respawn = parseInt(Math.random()*515);
		$("#tecla_E").css("left",respawn);
		$("#tecla_E").css("top", 0);
 	if (posY <= 299) {
   	pontos+=1;
    }
	if (posY >= 300 && posY <= 399) {
   	pontos+=5;
    }
    if (posY >= 400 && posY <= 549) {
   	pontos+=10;
    }
    if (posY >= 550 && posY <= 599) {
   	pontos+=15;
    }
    if (posY >= 600) {
   	pontos+=20;
    }
}

// Funções primárias
function vidas() {

	$("#saude").html("<p>Vidas: "+ vida +"</p>");

}

function objA() {
	posicaoY = parseInt($("#tecla_A").css("top"));
	$("#tecla_A").css("top",posicaoY+1);

	if (posicaoY >= 640) {
		respawn = parseInt(Math.random()*515);
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
	$("#tecla_B").css("top",posicaoY+1);

	if (posicaoY >= 640) {
		respawn = parseInt(Math.random()*515);
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
function objC() {
	posicaoY = parseInt($("#tecla_C").css("top"));
	$("#tecla_C").css("top",posicaoY+1);

	if (posicaoY >= 640) {
		respawn = parseInt(Math.random()*515);
		$("#tecla_C").css("left",respawn);
		$("#tecla_C").css("top", 0);
			// somTiro.play();
		if (vida == 0) {
			fim();
		}
		vida-=1;
	}
}
function objD() {
	posicaoY = parseInt($("#tecla_D").css("top"));
	$("#tecla_D").css("top",posicaoY+1);

	if (posicaoY >= 640) {
		respawn = parseInt(Math.random()*515);
		$("#tecla_D").css("left",respawn);
		$("#tecla_D").css("top", 0);
			// somTiro.play();
		if (vida == 0) {
			fim();
		}
		vida-=1;
	}
}
function objE() {
	posicaoY = parseInt($("#tecla_E").css("top"));
	$("#tecla_E").css("top",posicaoY+1);

	if (posicaoY >= 640) {
		respawn = parseInt(Math.random()*515);
		$("#tecla_E").css("left",respawn);
		$("#tecla_E").css("top", 0);
			// somTiro.play();
		if (vida == 0) {
			fim();
		}
		vida-=1;
	}
}

function pontuacao(){

	$("#placar").html("<p>Pontuação: "+ pontos +"</p>");

}
function tempo() {
	timer--;
	$("#tempo").html("<p>"+timer+"</p>");
	if (timer == 0) {
		fim();
	}

}

function fim() {
	vida=0;
	window.clearInterval(jogo.timer);
	jogo.timer=null;
	$("#tecla_A").css("top", 0);
	$("#tecla_B").css("top", 0);
	$("#tecla_A").hide();
	$("#tecla_B").hide();
	$(".fim").show();
	// musica.pause();
	// gameover.play();

	$(".fim").html("<h1>Fim de Jogo</h1> <h1>Pontuação Final:"+pontos+"</h1><p>Clique aqui para jogar novamente</p>");
	}
}

function reiniciar(){
	$(".fim").hide();
	$("#tecla_A").show();
	$("#tecla_B").show();
	// gameover.pause();
	
	start();
}
