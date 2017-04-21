var corners_data = [90, 45, 180, 200, 220, 10, 20, 50, 60, 75, 90, 15, 25, 90, 180, 45];  //45, 90, 180 occur multiple times because they are more important than oder corners
var used_corner_date = new Array(4); //In this array we will store all the Numbers that are already used

//Attention!!! Important to make sure that each one is only used once
/*==============================================================
Function that initialises the circlegames
==============================================================*/
function initialisecirclegame(){

var exists;	//With the help of this boolean we make sure that each number is only once displayed

for(var i=0; i < used_corner_date.length; i++){
do{

exists = false;

var randomnumber = Math.floor(Math.random() * corners_data.length);

//Second for loop that ensure that each value is only used once
for(var j = 0; j< used_corner_date.length; j++){
	if(used_corner_date[j] == corners_data[randomnumber]){
		exists = true;
		break;	
	}

}//End second for

if(exists == false){
used_corner_date[i] = corners_data[randomnumber];	//Add the actual used value to the already used values
var kendocircle = document.getElementById("circleh1_" + (i+1));
kendocircle.innerHTML = corners_data[randomnumber] + "°";	//Set the text to the kendocircle
}

}while(exists == true);

}//End first for

//Reset the values to 0
$('.dial')
    .val(0)
    .trigger('change');

}//End of the function


/*==============================================================
Function for checking the circlegame
==============================================================*/
function checkcirclegame(){

sound_buttonclicked.play();

var everything_correct = true;

for(var i = 0; i< used_corner_date.length; i++){	//Check for each circle if the values are correct
var value = document.getElementById("kendocircle" +(i+1)).value;

if(value != used_corner_date[i]){	//If only one is false the whole exercise is wrong
everything_correct = false;
break;
}
} //End for loop

checkturquoisfields(everything_correct);	//Call the check method. This method is located in the mainscript.js

}
