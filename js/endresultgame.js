var endgame_operators = ["+","-"];
var endgame_colors = ["blue", "green", "red", "yellow", "orange"];	//Random colors that are used for the color of the numbers
var endgame_result = 0;
var endresultgame_operators;
var endresultgame_numbers = [0,0,0,0];

/*================================================
	Create the Endresultgame
================================================*/
function createendresultgame(){

cleaninputs();

//Store the references for the fields that represent the numbers
var elements = [document.getElementById("number1"),document.getElementById("number2"),document.getElementById("number3"),document.getElementById("number4")];  

//Variable to store the operators
endresultgame_operators = new Array(3);	//This array stores the operators

//Set the operators
for(var i = 0; i<endresultgame_operators.length; i++){
  var randomoperator = Math.floor(Math.random()* endgame_operators.length) + 1;	//Randomly choose an operator
  endresultgame_operators[i] = endgame_operators[randomoperator-1];
}

//Set the values
for(var i = 0; i< elements.length; i++){
var number = Math.floor(Math.random() * 12) + 1;

var randomcolor = Math.floor(Math.random() * endgame_colors.length) + 1;

elements[i].setAttribute("color", endgame_colors[randomcolor]);
elements[i].innerHTML = number;
endresultgame_numbers[i] = number;
} //End for loop

//------------Calculate the endgame_result --------------------

endgame_result = endresultgame_numbers[0];

for(var i = 0; i<endresultgame_operators.length; i++){
  
switch(endresultgame_operators[i]){

case "+":
 endgame_result = endgame_result + endresultgame_numbers[i+1];
break;
case "-":
 endgame_result = endgame_result - endresultgame_numbers[i+1];
break;
}//End Switch case
}

//Set the result
var randomcolor = Math.floor(Math.random() * endgame_colors.length) + 1;

var result = document.getElementById("endgame_result");

result.setAttribute("color", endgame_colors[randomcolor]);
result.innerHTML = endgame_result;
}


/*================================================
	Function that cleans the inputs
================================================*/
function cleaninputs(){

sound_buttonclicked.play();

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");

input1.value = "";
input2.value = "";
input3.value = "";

}


/*================================================
	Function that checks the results
================================================*/
function endgame_checkresults(){

sound_buttonclicked.play();

var inputs = [document.getElementById("input1").value, document.getElementById("input2").value, document.getElementById("input3").value];

var userresult = endresultgame_numbers[0];	//Set the first value as result

for(var i = 0; i < inputs.length; i++){

switch(inputs[i]){
case "+":
userresult += endresultgame_numbers[i+1];	//Add the next number to the result
break;
case "-":
userresult -= endresultgame_numbers[i+1];	//Subtract the next number from the result
break;
}

}

if(endgame_result == userresult){
checkpurplefields(true);	//Call the checkpurplefields method with true located in the mainscript.js
}
else{
checkpurplefields(false);	//Call the checkpurplefields method with false located in the mainscript.js
}
}
