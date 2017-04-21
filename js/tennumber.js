var numberoftenbutton = 20;

/*==============================================
Initialise the Tennumber game
=============================================*/
function initialisetennumber(){

revertbuttoncolors();		//Revert the button colors

//Get the elements
var firsttennumber = document.getElementById("firsttennumber");
var secondtennumber = document.getElementById("secondtennumber");
var thirdtennumber = document.getElementById("thirdtennumber");
var fourthtennumber = document.getElementById("fourthtennumber");
var fifthtennumber = document.getElementById("fifthtennumber");
var sixthtennumber = document.getElementById("sixthtennumber");
var seventhtennumber = document.getElementById("seventhtennumber");
var eighttennumber = document.getElementById("eighttennumber");
var ninthtennumber = document.getElementById("ninthtennumber");
var tenthtennumber = document.getElementById("tenthtennumber");

var randomnumber = Math.floor(Math.random() * 99) + 1;

//Initialise the elements
firsttennumber.innerHTML = randomnumber + " * 1";
secondtennumber.innerHTML = "= " + randomnumber;
thirdtennumber.innerHTML = randomnumber + " * 1";
fourthtennumber.innerHTML = "= " + randomnumber;
fifthtennumber.innerHTML = randomnumber + " * 1";
sixthtennumber.innerHTML = "= " + randomnumber;
seventhtennumber.innerHTML = randomnumber + " * 1";
eighttennumber.innerHTML = "= " + randomnumber;
ninthtennumber.innerHTML = randomnumber + " * 1";
tenthtennumber.innerHTML = "= " + randomnumber;

}

/*==============================================
Revert the buttoncolors
=============================================*/
function revertbuttoncolors(){

for(var i = 1; i<=numberoftenbutton; i++){
var button = document.getElementById("tenbutton" + i);
button.setAttribute("sign","?");
button.style.backgroundColor='Grey';
button.innerHTML = "?";
}

}

/*==============================================
Function is called if a "?" button is clicked
=============================================*/
function tenbuttonclicked($id, $sign){

sound_blop.play();

var button = document.getElementById($id);

if($sign == "0"){
button.innerHTML = "?";
button.style.backgroundColor='Grey';
button.setAttribute("sign","?");
}
else{
button.innerHTML = 0;
button.style.backgroundColor='Blue';
button.setAttribute("sign","0");
}

}

/*=====================================================
Function is called if a the continue button is clicked
======================================================*/
function tencontinuebuttonclicked(){

sound_buttonclicked.play();

var correct = true;

for(var i=1; i<=20; i++){

var button = document.getElementById("tenbutton" + i);

switch(i){
case 1:
case 2:
case 3:
case 4:
case 6:
case 7:
case 8:
case 11:
case 12:
case 16:
if(button.innerHTML == "0"){
correct = false;
}
break;

case 5:
case 9:
case 10:
case 13:
case 14:
case 15:
case 17:
case 18:
case 19:
case 20:
if(button.innerHTML == "?"){
correct = false;
}
break;
}

}

if(correct){
checkskybluefields(true);	//Call the checkskybluefields located in the mainscript.js
}
else{
checkskybluefields(false);	//Call the checkskybluefields located in the mainscript.js
}

}
