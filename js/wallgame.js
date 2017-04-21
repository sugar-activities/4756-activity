var wallgame_result;
var firstlivalue;
var secondlivalue;
var wallgame_firstliselected = false;
var wallgame_secondliselected = false;
var id1;
var id2;
var wallgame_counter;
var numberoflis;
var wallgame_intentos;

/*======================================
Initialise the wallgame
=======================================*/
function initialisewallgame(){

wallgame_intentos = 0;
document.getElementById("wallgame_intentos").innerHTML = "Intentos: " +  wallgame_intentos;

numberoflis = 6;
var exerciserange = 12;

wallgame_result = new Array(numberoflis);
wallgame_counter = 0;

switch(level_operator){

case "*","/":
exerciserange = 12;
break;
case "+", "-":
exerciserange = 50;
break;

}

//For loop for the first elements
for(var i=1; i<=numberoflis; i++){

do{		//We want only division with whole number results

var moduloiszero = false;	//Make sure that we have only exercises with whole number as results

var number1 = Math.floor(Math.random() * exerciserange) + 1;
var number2 = Math.floor(Math.random() * exerciserange) + 1;

if(number1 % number2 == 0 && number1 - number2 > 0){
moduloiszero = true;
}

}
while(moduloiszero == false);

var li = document.getElementById("wallgameli1_" + i);

li.innerHTML = number1 + " " + level_operator + " " + number2;		//Create the exercise
li.setAttribute("result", operators[level_operator](number1,number2));	//Set the result as attribute

$("#" + li.getAttribute("id")).show();

wallgame_result[i-1] = operators[level_operator](number1,number2);

 }//End for loop

randomizeresultarray();

//Set the results to the list on the right side
for(var i = 1; i<=numberoflis; i++){
var li = document.getElementById("wallgameli2_" + i);
li.innerHTML = wallgame_result[i-1];
li.setAttribute("result", wallgame_result[i-1]);
$("#" + li.getAttribute("id")).show();

}

}

/*==============================================
Function to randomize the order in the array
===============================================*/
function randomizeresultarray(){

for(var i = 0; i<20; i++){
  var randomnumber1 = Math.floor(Math.random() * numberoflis) + 1;
  var randomnumber2 = Math.floor(Math.random() * numberoflis) + 1;

  var temp = wallgame_result[randomnumber1-1];		//The temp variable stores the value before it is overwritten
  wallgame_result[randomnumber1-1] = wallgame_result[randomnumber2-1];
  wallgame_result[randomnumber2-1] = temp;
}

}

/*==============================================
Function that is called if a li is selected
==============================================*/
function liselected($ulone, $index){

if($ulone){
wallgame_firstliselected = true;

var ol1 = document.getElementById("selectable1").children;

child1 = ol1[$index];

firstlivalue = child1.getAttribute("result");
id1 = child1.getAttribute("id");

}//End first if
else{

wallgame_secondliselected = true;

var ol2 = document.getElementById("selectable2").children;
var child2 = ol2[$index];
id2 = child2.getAttribute("id");

secondlivalue = child2.getAttribute("result");
}

if(wallgame_firstliselected == true && wallgame_secondliselected == true){	//Check if both are selectd

wallgame_intentos++;	//Inkrement the number of trys
document.getElementById("wallgame_intentos").innerHTML = "Intentos: " +  wallgame_intentos;

  if(firstlivalue == secondlivalue){	//The correct pair has been selected
    wallgame_firstliselected = false;
    wallgame_secondliselected = false;

    sound_blop.play();

    //Hide the two elements
    $("#" + id1).hide();
    $("#" + id2).hide();

    wallgame_counter++;	//Inkrement the wallgame counter
  }

  if(wallgame_counter == numberoflis){	//The game is finished
 	if(wallgame_intentos <= 8){	
	checkmidnightbluefields(true);	//Call checkmidnightbluefields located in the mainscript.js
	}
	else{
	checkmidnightbluefields(false); //Call checkmidnightbluefields located in the mainscript.js
	}
  }
}

}

