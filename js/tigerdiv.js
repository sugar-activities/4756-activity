var tiger_quizgame_result;

/*==================================================
Function that initialises the tigerdiv
==================================================*/
function initialise_tiger_div(){

//Reset the attributes
document.getElementById("tigerdiv_speechbubble").innerHTML = "HaHaHaHa!!! <br /> Juega contra mi. <br/> El primer jugador en alcanzar <br /> seis puntos gana.";
document.getElementById("tigerdiv_okbutton").setAttribute("onclick","tiger_okclicked()");
}

/*=================================================
Function that is called if the ok button is clicked
===================================================*/
function tiger_okclicked(){
  $("#tigerdiv").hide();

  //Stop tigersound1 and play laugh and tigersound 2
  sound_tigerbackground1.pause();
  sound_tigerlaugh.play();
  sound_tigerbackground2.play();

  quizgame_reset_points();
  initialise_quizgame();
  $("#bossquiz").show();
}

/*=================================================
Function that is called if the quizgame is finished
===================================================*/
function quizgame_finished($result){	//-1 = Tiger wins, 0 = draw, 1 = Player wins

switch($result){

case -1: // Tiger wins
document.getElementById("tigerdiv_speechbubble").innerHTML = "Haha. Soy el maestro de las matemáticas. <br /> Dame 30 bananas";
break;

case 0:	// Draw game
document.getElementById("tigerdiv_speechbubble").innerHTML = "Haha. <br /> Estamos empatados, <br /> entonces yo tomo 10 de tus plátanos. Hahaha";
break;

case 1:  //Player wins
document.getElementById("tigerdiv_speechbubble").innerHTML = "Ohhh. Eres mejor que yo, así que <br />te puedes quedar con todos tus plátanos. </br>Iré a entrenar. Nos vemos pronto.";
break;
}

tiger_quizgame_result = $result;
document.getElementById("tigerdiv_okbutton").setAttribute("onclick","tiger_finish()");

$("#bossquiz").hide();
$("#tigerdiv").show();

}

/*=================================================
Function that is called if the game finishes
==================================================*/
function tiger_finish(){
sound_tigerlaugh.play();
checkblackfields(tiger_quizgame_result);	//Call the checkblackfields located in the mainscript.js
}
