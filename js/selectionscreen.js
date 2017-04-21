var selectedcharacter = null;
var imageclickedbefore = null;
var item_display_color = "black";
var selected_level;
var level;
var charakter_locked;

var lastclicked_round_button;
var adventuregame_number_of_rounds;

var level_operator = "/";
//Global variable for the operators
var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '/': function(a, b) { return a / b },
    '*': function(a, b) { return a * b }
};

/*===================================================
Function that is called if the round_button is clicked
====================================================*/
function round_button_clicked($id){

if(lastclicked_round_button == null){
lastclicked_round_button = $id;
document.getElementById($id).style.background = "yellow";
document.getElementById($id).style.color = "black";
assignround($id);
}
else{
if(lastclicked_round_button != $id){

document.getElementById(lastclicked_round_button).style.background = "#3498db";
document.getElementById(lastclicked_round_button).style.color = "white";

lastclicked_round_button = $id;
document.getElementById($id).style.background = "yellow";
document.getElementById($id).style.color = "black";

assignround($id);
}

}

}

/*==========================================
Function that assigns the round
==========================================*/
function assignround($id){

switch($id){

case "roundbutton1":
adventuregame_number_of_rounds = 3;
break;
case "roundbutton2":
adventuregame_number_of_rounds = 5;
break;
case "roundbutton3":
adventuregame_number_of_rounds = 10;
break;

}

}

/*==========================================================
Function that is responsible for initialising the levels
===========================================================*/
function initialise_levels_selectionsscreen(){

charakter_locked = localStorage.getItem("character");
level = localStorage.getItem("level");	//Read the level value from the local storage

if(charakter_locked == null){
localStorage.setItem("character", 0);
charakter_locked = 0;
}

if(level == null){
localStorage.setItem("level", 1);
level = "1";
}

if(charakter_locked != "0"){
document.getElementById("character4").setAttribute("src", "./images/caracterselection/lion.png");
document.getElementById("character4").setAttribute("onclick", "characterclicked($(this).attr('id'))");
}
else{
document.getElementById("character4").setAttribute("src", "./images/caracterselection/Locked_character.png");
document.getElementById("character4").setAttribute("onclick", "alert('Lo sentimos, este personaje está bloqueado. Para desbloquearlo, primero juega el nivel 3 (recoger 3 oro)')");
}

switch(level){	//Lock the levels corresponding to the level variable

case "1":
//Lock the second level
document.getElementById("levelimage2").style.backgroundImage = 'url(./images/Level2_locked.png)';
document.getElementById("levelimage2").setAttribute("onclick","alert_locked(1)");

//Lock the third level
document.getElementById("levelimage3").style.backgroundImage = 'url(./images/Level3_locked.png)';
document.getElementById("levelimage3").setAttribute("onclick","alert_locked(2)");

break;
case "2":		//Only the third level is locked

//Lock the second level
document.getElementById("levelimage2").style.backgroundImage = 'url(./images/Background-Level2_gray.png)';
document.getElementById("levelimage2").setAttribute("onclick","levelimageclicked($(this).attr('id'))");

//Make the third element uncklickable
document.getElementById("levelimage3").style.backgroundImage = 'url(./images/Level3_locked.png)';
document.getElementById("levelimage3").setAttribute("onclick","alert_locked(2)");

break;
case "3": //All levels are playable

//Unlock the second level
document.getElementById("levelimage2").style.backgroundImage = 'url(./images/Background-Level2_gray.png)';
document.getElementById("levelimage2").setAttribute("onclick","levelimageclicked($(this).attr('id'))");

//Unlock the third level
document.getElementById("levelimage3").style.backgroundImage = 'url(./images/Background-Level3_gray.png)';
document.getElementById("levelimage3").setAttribute("onclick","levelimageclicked($(this).attr('id'))");

break;
}

}

/*===============================================
Function that alerts that an element is locked
================================================*/
function alert_locked($leveltoplay){
alert("Lo sentimos, este mundo está bloqueado. Para desbloquearlo, primero juega el nivel " + $leveltoplay + ". (recoger 3 oro)");
}

/*===============================================
Function that is called if a character is clicked
================================================*/
function characterclicked($id){

if(selectedcharacter != null){
  selectedcharacter.style.backgroundColor="white";
}

selectedcharacter = document.getElementById($id);
selectedcharacter.style.backgroundColor='lightskyblue';
}

/*===============================================
Function that is called by the continue button
================================================*/
function characterselectioncontinue(){

if(selectedcharacter == null || imageclickedbefore == null || adventuregame_number_of_rounds == null){
alert("Por favor, selecciona el número de rondas, un personaje y un mundo");
}
else{
$("#caracterselection").hide();

bananacounter = 0;	//Bananamount at the beginning
moneycounter = 0;	//Reset the amount of bananas
setfilename(selectedcharacter.getAttribute("src"));	//Call the setfilename method located in the mainscript.js
drawgameboard();	//Function that draws the gameboard - method is located in the mainscript.js
sound_intromusic.pause();
sound_buttonclicked.play();

switch(selected_level){	//Choose the sound that needs to be played corresponding to the selected level

case "level1":
sound_backgroundmusic_level1.play();
break;
case "level2":
sound_level2.play();
break;
case "level3":
sound_level3.play();
break;

}

$("#maingamesvg").show();
}
}

/*======================================================
Function that is called when a levelimage is clicked
=======================================================*/
function levelimageclicked($id){

if(imageclickedbefore != null){

switch (imageclickedbefore){	//Set the image at the startscreen

case "levelimage1":
document.getElementById("levelimage1").style.backgroundImage = 'url(./images/Background_gray.png)';
break;
case "levelimage2":
document.getElementById("levelimage2").style.backgroundImage = 'url(./images/Background-Level2_gray.png)';
break;
case "levelimage3":
document.getElementById("levelimage3").style.backgroundImage = 'url(./images/Background-Level3_gray.png)';
break;

 }//End switch case
}//End if

switch($id){

//=============================================================================================
//Set all the properties for level 1
//=============================================================================================

case "levelimage1":
selected_level = "level1";

document.getElementById("levelimage1").style.backgroundImage = 'url(./images/Background.png)';
document.getElementById("maingamesvg").style.backgroundImage = 'url(./images/Background.png)';	//Change the Background of the level

circleData = level1;

//Background for the bananadelivery 
document.getElementById("bananadelivery").style.backgroundImage = "url(./images/delivery/level1/bananadelivery.png)";
//Background for the wallgame 
document.getElementById("wallgame").style.backgroundImage = "url(./images/selectiongame/Walls.png)";
//Background for the end of the round
document.getElementById("endofround").style.backgroundImage = "url(./images/endofround/Round.png)";
//Background for the tigergame
document.getElementById("tigerdiv").style.backgroundImage = "url(./images/quizgame/Tiger_Level1.png)";

//Choose the settings for the display
item_display_color = "black";
//Choose the operator for level1
level_operator = "+";
break;

//=======================================================================================
//Set all the properties for level 2
//=======================================================================================

case "levelimage2":

selected_level = "level2";

document.getElementById("levelimage2").style.backgroundImage = 'url(./images/Background-Level2.png)';
circleData = level2;
document.getElementById("maingamesvg").style.backgroundImage = 'url(./images/Background-Level2.png)';

//Background for the bananadelivery 
document.getElementById("bananadelivery").style.backgroundImage = "url(./images/delivery/level2/bananadelivery.png)";
//Background for the wallgame 
document.getElementById("wallgame").style.backgroundImage = "url(./images/selectiongame/Walls_level2.png)";
//Background for the end of the round
document.getElementById("endofround").style.backgroundImage = "url(./images/endofround/Round_level2.png)";
//Background for the tigergame
document.getElementById("tigerdiv").style.backgroundImage = "url(./images/quizgame/Tiger_Level2.png)";

//Choose the settings for the display
item_display_color = "white";

//Set the difficulty of the level
level_operator = "*";
break;

//=======================================================================================
//Set all the properties for level 3
//=======================================================================================

case "levelimage3":

selected_level = "level3";

document.getElementById("levelimage3").style.backgroundImage = 'url(./images/Background-Level3.png)';
circleData = level3;
document.getElementById("maingamesvg").style.backgroundImage = 'url(./images/Background-Level3.png)';

//Background for the bananadelivery
document.getElementById("bananadelivery").style.backgroundImage = "url(./images/delivery/level3/bananadelivery.png)";
//Background for the wallgame 
document.getElementById("wallgame").style.backgroundImage = "url(./images/selectiongame/Walls_level3.png)";
//Background for the end of the round
document.getElementById("endofround").style.backgroundImage = "url(./images/endofround/Round_level3.png)";
//Background for the tigergame
document.getElementById("tigerdiv").style.backgroundImage = "url(./images/quizgame/Tiger_Level3.png)";
//Choose the settings for the display
item_display_color = "black";

//Set the difficulty of the level
level_operator = "*";
break;

}
imageclickedbefore = $id;
}
