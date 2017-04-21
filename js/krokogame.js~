var krokoresult1;
var krokoresult2;
var kroko_correctanswered = 0;
var kroko_buttonclicked = false;
var kroko_questioncounter = 0;

/*=====================================================
   Function that creates the Krokogame
=====================================================*/
function createkrokogame(){

if(kroko_questioncounter == 2){	//This means that there will not be a next question

var continuebutton = document.getElementById("krokocontinue");	//Get the bottom from the bottom of the page

//Reset the questioncounter
kroko_questioncounter = 0;

continuebutton.innerHTML = "Continuar o jogo";
continuebutton.setAttribute("onclick", "finishkrokogame()");
}

//Append the left rectangle to the krokosvg - In this rectangles we will put the fishes
kroksvg.append("rect")
                            .attr("x", 150)
                            .attr("y", 10)
                            .attr("width", 250)
                            .attr("height", 550).attr("fill","lightblue").attr("fill-opacity", "0.5").attr("stroke","black");

//Append the right rectangle to the krokosvg - In this rectangles we will also put the fishes

		kroksvg.append("rect")
                            .attr("x", 800)
                            .attr("y", 10)
                            .attr("width", 250)
                            .attr("height", 550).attr("fill","lightblue").attr("fill-opacity", "0.5").attr("stroke","black");



//Adding the Text for the multiplikations (leftside)
		kroksvg.append("text").attr("id", "multiplier1")
      			.attr("x", 0)
      			.attr("y", 300)
      			.text("1 x")
      			.attr("font-family", "Chalkboard")
      			.attr("font-size", "50px")
      			.attr("fill", "black");

//Adding the Text for the multiplikations (rightside)
		kroksvg.append("text").attr("id", "multiplier2")
      			.attr("x", 1060)
      			.attr("y", 300)
      			.text("1 x")
      			.attr("font-family", "Chalkboard")
      			.attr("font-size", "50px")
      			.attr("fill", "black");



//Using multiplications inside 12x12. For reasons see the documentation
var multiplier1 = Math.floor(Math.random() * 12) + 1;
var fishes1 = Math.floor(Math.random() * 12) + 1;
var multiplier2 = Math.floor(Math.random() * 12) + 1;
var fishes2 = Math.floor(Math.random() * 12) + 1;

krokoresult1 = multiplier1 * fishes1;
krokoresult2 = multiplier2 * fishes2;

//Change the text of the multipliers
var multipliertext1 = document.getElementById("multiplier1");
var multipliertext2 = document.getElementById("multiplier2");

multipliertext1.textContent = multiplier1 + " x";
multipliertext2.textContent = "x " + multiplier2;

//Create the variables for the image position
var x_fish = 180;
var y_fish = -80;

//Draw the fishes for the first water hole
for(var i=0; i<fishes1; i++){

if(i%2 == 0){
x_fish = 180;
y_fish = y_fish+90;
}
else{
x_fish = 290;
}

//Append the fishimage to the krokosvg on the left side
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/Fish.png").attr("id", "fish1" + i)
      .attr("width", 80)
      .attr("height", 80).attr("x", x_fish).attr("y",y_fish);
}

x_fish = 830;
y_fish = -80;

//Draw the fishes for the second water hole
for(var i=0; i<fishes2; i++){

if(i%2 == 0){	//Row is full - draw the next fish on a row below
x_fish = 830;
y_fish = y_fish+90;
}
else{
x_fish = 940;
}

//Append the fishimage to the krokosvg on the right side
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/Fish.png").attr("id", "fish2" + i)
      .attr("width", 80)
      .attr("height", 80).attr("x", x_fish).attr("y",y_fish);
}

} //End of CreateKrokogamefunction

/*===========================================
  Function for finishing the Krokogame
============================================*/
function finishkrokogame(){

sound_buttonclicked.play();

checkkrokoanswers(kroko_correctanswered);
$("#krokosvg").empty();
kroko_buttonclicked = false;

var continuebutton = document.getElementById("krokocontinue");
continuebutton.innerHTML = "Siguiente Pergunta";
continuebutton.setAttribute("onclick", "nextquestion()");

kroko_correctanswered = 0;
}

/*===========================================
  Function for drawing the croco
============================================*/
function drawcroco($sign){

if(kroko_buttonclicked == false){
sound_fishbutton.play(); //Play the fishbutton sound

switch ($sign){		//Perform an action corresponding to the clicked sign

case ">":
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/crocoleft.png").attr("id", "crocoleft")
      .attr("width", 200)
      .attr("height", 150).attr("x", 490).attr("y",250);
break;
case "<":
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/crocoright.png").attr("id", "crocoleft")
      .attr("width", 200)
      .attr("height", 150).attr("x", 490).attr("y",250);
break;
case "=":
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/crocoleft.png").attr("id", "crocoleft")
      .attr("width", 200)
      .attr("height", 150).attr("x", 490).attr("y",150);

kroksvg.append("svg:image")
      .attr("xlink:href", "./images/Krokogame/crocoright.png").attr("id", "crocoleft")
      .attr("width", 200)
      .attr("height", 150).attr("x", 490).attr("y",300);
break;
 }
kroko_buttonclicked = true;
checkkrokoresult($sign);
}
else{
alert("Click en el button 'Siguiente Pergunta'");
}
}//End of drawcroco method

/*===========================================
  Function to check the krokoresult
============================================*/
function checkkrokoresult($answer){

var kroko_correct = false;
var text;

switch($answer){

case ">":
if(krokoresult1 > krokoresult2){
	kroko_correct = true;
}
break;
case "=":
if(krokoresult1 == krokoresult2){
	kroko_correct = true;
}
break;
case "<":
if(krokoresult1 < krokoresult2){
	kroko_correct = true;

}
break;
}

//Create the display text
if(krokoresult1 > krokoresult2){
 text = krokoresult1 + " > " + krokoresult2;
}

if(krokoresult1 == krokoresult2){
 text = krokoresult1 + " = " + krokoresult2;
}

if(krokoresult1 < krokoresult2){
 text = krokoresult1 + " < " + krokoresult2;
}


if(kroko_correct){
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/good.png").attr("id", "crocoleft")
      .attr("width", 100)
      .attr("height", 100).attr("x", 440).attr("y",50);

//Inkrement the correct answered variable
kroko_correctanswered++;

}
else{		//Answer was not correct
kroksvg.append("svg:image")
      .attr("xlink:href", "./images/bad.png").attr("id", "crocoleft")
      .attr("width", 100)
      .attr("height", 100).attr("x", 440).attr("y",50);
}


kroksvg.append("text")
      			.attr("x", 550)
      			.attr("y", 100)
      			.text(text)
      			.attr("font-family", "Chalkboard")
      			.attr("font-size", "50px")
      			.attr("fill", "black");


}

/*======================================================
Function that is responsible for displaying the next question
=======================================================*/
function nextquestion(){

sound_buttonclicked.play();

//Clear everything from the svg
$("#krokosvg").empty();
kroko_buttonclicked = false;
kroko_questioncounter++;
 createkrokogame();
}
