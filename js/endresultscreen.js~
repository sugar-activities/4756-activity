/*=========================================
     Initialise the endresultscreen
=========================================*/
function initialise_endresultscreen(){

$("#endresultdiv_newrecorddiv").hide();

//Initialise the elements for the played round
document.getElementById("adventuregame_endresultdiv_actual_correct").innerHTML = "Respuestas correctas: " + number_correct_answered;
document.getElementById("adventuregame_endresultdiv_actual_false").innerHTML = "Respuestas incorrectas: " + number_wrong_answered;

var total = number_correct_answered - number_wrong_answered;	//Calculate the total
document.getElementById("adventuregame_endresultdiv_actual_total").innerHTML = "Resultado: " + total;

//================================================================================

//Initialise the elements from the record round
var record_correct_answered;
var record_wrong_answered;

//Read the stored score corresponding to the level
switch(selected_level){
case "level1":
record_correct_answered = localStorage.getItem("correct_level1");
record_wrong_answered = localStorage.getItem("wrong_level1");
break;
case "level2":
record_correct_answered = localStorage.getItem("correct_level2");
record_wrong_answered = localStorage.getItem("wrong_level2");
break;
case "level3":
record_correct_answered = localStorage.getItem("correct_level3");
record_wrong_answered = localStorage.getItem("wrong_level3");
break;
}


//-----------------Create the display for the record value----------------------

if(record_correct_answered == null && record_wrong_answered == null){	//Check if it is the first time the player plays the round

document.getElementById("adventuregame_endresultdiv_record_correct").innerHTML = "Respuestas correcta: - ";
document.getElementById("adventuregame_endresultdiv_record_false").innerHTML = "Respuestas incorrecta: - ";
document.getElementById("adventuregame_endresultdiv_record_total").innerHTML = "Resultado: - ";

//Overwrite the old record
switch(selected_level){
case "level1":
localStorage.setItem("correct_level1", number_correct_answered);
localStorage.setItem("wrong_level1", number_wrong_answered);
break;
case "level2":
localStorage.setItem("correct_level2", number_correct_answered);
localStorage.setItem("wrong_level2", number_wrong_answered);
break;
case "level3":
localStorage.setItem("correct_level3", number_correct_answered);
localStorage.setItem("wrong_level3", number_wrong_answered);
break;
}

//Show the record div
$("#endresultdiv_newrecorddiv").show();
}
else{

var record_result = record_correct_answered - record_wrong_answered;

if(record_result >= total){	//Check if the record is bigger than your total
document.getElementById("adventuregame_endresultdiv_record_correct").innerHTML = "Respuestas correcta: " + record_correct_answered;
document.getElementById("adventuregame_endresultdiv_record_false").innerHTML = "Respuestas incorrecta: " + record_wrong_answered;
document.getElementById("adventuregame_endresultdiv_record_total").innerHTML = "Resultado: " + record_result;
}
else		//New record
{

//Show the record div
$("#endresultdiv_newrecorddiv").show();

document.getElementById("adventuregame_endresultdiv_record_correct").innerHTML = "Respuestas correcta: " + record_correct_answered;
document.getElementById("adventuregame_endresultdiv_record_false").innerHTML = "Respuestas incorrecta: " + record_wrong_answered;
document.getElementById("adventuregame_endresultdiv_record_total").innerHTML = "Resultado: " + record_result;

//Overwrite the old record
switch(selected_level){
case 1:
localStorage.setItem("correct_level1", number_correct_answered);
localStorage.setItem("wrong_level1", number_wrong_answered);
break;
case 2:
localStorage.setItem("correct_level2", number_correct_answered);
localStorage.setItem("wrong_level2", number_wrong_answered);
break;
case 3:
localStorage.setItem("correct_level3", number_correct_answered);
localStorage.setItem("wrong_level3", number_wrong_answered);
break;
}

}

}

}

/*====================================
	Continue Button clicked
=====================================*/

function endresultscreen_continue_clicked(){

$("#adventuregame_endresultdiv").hide();
sound_intromusic.play();
$("#caracterselection").show();

initialise_levels_selectionsscreen();
reset_maingamesvg(); //Reset the maingamediv

}
