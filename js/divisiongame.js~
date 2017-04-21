var divisionrange = 20;
var divisionnumberoflis = 7;
var resultarray = new Array(divisionnumberoflis);


function initialisedivisiongame(){

for(var z = 1; z<=divisionnumberoflis; z++){

var moduloiszero = false;

do{		//We want only division with whole number results

var divisor = Math.floor(Math.random() * divisionrange) + 1;
var divident = Math.floor(Math.random() * divisionrange) + 1;

if(divisor % divident == 0){
var alreadyexists = false;

//Make sure that the result of this devision does not already exists
for(var j = 0; j<resultarray.length; j++){
  if(resultarray[j] == (divisor / divident)){
   	alreadyexists =true;
	break;
  }
}

if(!alreadyexists){
  moduloiszero = true;
}
}//End if
}while(moduloiszero == false);

resultarray[z-1] = divisor / divident;

var divisionli = document.getElementById("divisionli" + z);
divisionli.innerHTML = divisor + " / " + divident;
divisionli.setAttribute("result", divisor/divident);

 }//End for loop
}//End function

/*====================================================================
Function for reseting the arrays
=====================================================================*/
function resetdivisiongame(){
resultarray.length = 0;
}


/*====================================================================
Function for controlling the results
=====================================================================*/
function controldivisiongame(){

//Sort the numbers
resultarray.sort(function(a, b){return a-b});

var correct = true;

//Itearte through the Li elements
var ul = document.getElementById("sortable");
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  if(items[i].getAttribute("result") != resultarray[i]){
  correct = false;
  }
}

if(correct){
checkmediumaquamarinefields(true);
}
else
{
checkmediumaquamarinefields(false);
}
}

