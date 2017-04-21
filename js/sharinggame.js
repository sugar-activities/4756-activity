var applenumber_plate1 = 0;
var applenumber_plate2 = 0;
var applenumber_plate3 = 0;
var applenumber_plate4 = 0;
var numberofapples;
var numberofplates;

/*================================================
Function that initialises the sharinggame
================================================*/
function initialise_sharinggame(){

reset_apples();	//Call the reset function

//Show all the table images
for(var i=1; i<=4; i++){
$("#dropapples" + (i)).show();
}

//Show all the apple images
for(var i=1; i<=12; i++){
$("#appleimage" + (i)).show();		
}

do{
numberofapples = Math.floor(Math.random() * 12) + 1;
}while(numberofapples <= 4);

do{
numberofplates = Math.floor(Math.random() * 4) + 1;
}while(numberofplates <= 2);

//Hide the elements that are not needed
for(var i = numberofapples; i<=12; i++){
$("#appleimage" + (i+1)).hide();		//Hide the next one
}

//Hide the tables that are not needed
for(var i = numberofplates; i<=4; i++){
$("#dropapples" + (i+1)).hide();
}

}

/*===========================================
Function that controls the sharing_game
============================================*/
function control_sharing_game(){

sound_buttonclicked.play();

var correct = true;
var result = parseInt(numberofapples / numberofplates);

switch(numberofplates){
case 2:
if(applenumber_plate1 != result || applenumber_plate2 != result)
correct = false;
break;
case 3:
if(applenumber_plate1 != result || applenumber_plate2 != result || applenumber_plate3 != result)
correct = false;
break;
case 4:
if(applenumber_plate1 != result || applenumber_plate2 != result || applenumber_plate3 != result || applenumber_plate4 != result)
correct = false;
break;
}

checkdodgerblue(correct);	//Check the dodgerblue method in the mainscript.js
}

//Function that is called by the reset button
function reset_apples(){

$(".appleimages").animate({left:0,top:0});	//Reset the apples back to the original position

//Reset the number of dropped apples per plate
applenumber_plate1 = 0;	
applenumber_plate2 = 0;
applenumber_plate3 = 0;
applenumber_plate4 = 0;

}

/*================================================================
Functions for inkrementing the variables if an element is dropped
================================================================*/
function apple_on_plate1(){
sound_blop.play();
applenumber_plate1++;
}

function apple_on_plate2(){
sound_blop.play();
applenumber_plate2++;
}

function apple_on_plate3(){
sound_blop.play();
applenumber_plate3++;
}

function apple_on_plate4(){
sound_blop.play();
applenumber_plate4++;
}
