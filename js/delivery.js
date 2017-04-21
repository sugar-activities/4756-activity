var deliverybutton1;	//Stores the button
var deliver;	//Boolean
var bananadelivery_speechbuble;	//Stores the speechbuble

function getdeliveryelements(){
deliverybutton1 = document.getElementById("deliverybutton1");	//Get the deliverybutton
bananadelivery_speechbuble = document.getElementById("bananadelivery_speechbubble");	//Get the speecbubble
}

/*=============================================================
Function for not delivering bananas (Executed when "Yes" clicked)
==============================================================*/
function initialise_delivery_screen(){

getdeliveryelements();
bananadelivery_speechbubble.innerHTML = "Me encantan los platanos.<br /> Me puedes dar 50? ";	//Set the welcome text of the monkey into the spechbubble
}

function deliverbananas(){

sound_buttonclicked.play();
sound_monkey.play();

if(bananacounter >= 50){	//Bananas can only be delivered if the amount is bigger than 50

bananadelivery_speechbubble.innerHTML = "Gracias, <br /> toma este oro.";
deliver = true;			//Bananas has been delivered
}
else{

bananadelivery_speechbubble.innerHTML = "Lo siento, <br /> no tienes suficientes plátanos. <br /> Inténtalo de nuevo más tarde.";
deliver = false;		//Delivery failed
}

//Hide the secon button
$("#deliverybutton2").hide();	//Hide the second button

//Change the first button
deliverybutton1.innerHTML = "Ok";
deliverybutton1.setAttribute("onclick", "deliveryokclicked()");	//Change the onclick function of the first button

}

/*=============================================================
Function for not delivering bananas (Executed when "No" clicked)
==============================================================*/
function notdeliverbananas(){	

sound_buttonclicked.play();
sound_monkey.play();

getdeliveryelements();


bananadelivery_speechbubble.innerHTML = "Okay. <br /> Nos vemos más tarde.";

deliver = false;

//Change the first button
deliverybutton1.innerHTML = "Ok";
deliverybutton1.setAttribute("onclick", "deliveryokclicked()");	//Change the onclick function of the first button

//Hide the secon button
$("#deliverybutton2").hide();
}

/*=============================================================
Function that is called if the delivery ok button is clicked
==============================================================*/
function deliveryokclicked(){

sound_buttonclicked.play();

delivery_revertchanges();

if(deliver){
checkgoldenfields(true);
}
else{
checkgoldenfields(false);
}
}

/*=============================================================
Function that reverts the changes
==============================================================*/
function delivery_revertchanges(){
//Revert all the changes
deliverybutton1.innerHTML = "Si";
$("#deliverybutton2").show();
deliverybutton1.setAttribute("onclick", "deliverbananas()");
}
