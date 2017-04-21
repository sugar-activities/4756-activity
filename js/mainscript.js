//Declaration of the variables
var currentfield = 1;	//Field at the beginning
var movevalue;
var diceresult;
var cx;
var cy;
var bananacounter = 0;	//Bananamount at the beginning
var moneycounter = 0;   //Moneyamount at the beginning
var filename;
var goldentered = false;	//Checks if a golden field has been entered
var blackentered = false;	//Checks if a black field has been entered
var endofround = false;		//Checks if a round is over
var round = 1;
var dicethrown = false;		//Checks if the dice has already been thrown
var deletearrow = true;		//Checks if the arrow at the beginning needs to be deleted
var rounds_played = 1;		//Counts the number of played rounds
var entered;		//Used to specify if the caracter has entered a field

//Variables that are neeeded at the end of the game

var number_correct_answered = 0;
var number_wrong_answered = 0;

//==========================================

var width = 1200;
var height = 820;

var circleData;	//Stores all the positions for the selected level

//Circle Data Set for the first level
var level1 = [
  { "cx": 50, "cy": 770, "radius": 30, "color" : "snow", "fontcolor" : "black", "number" : 1 },
  { "cx": 120, "cy": 700, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 2}, 
  { "cx": 190, "cy": 700, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 3},
  { "cx": 260, "cy": 700, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 4},
  { "cx": 330, "cy": 720, "radius": 30, "color" : "greenyellow", "fontcolor" : "black", "number" : 5},
  { "cx": 400, "cy": 720, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 6},
  { "cx": 470, "cy": 720, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 7},
  { "cx": 540, "cy": 720, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 8},
  { "cx": 610, "cy": 720, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 9},
  { "cx": 680, "cy": 720, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" :10},
  { "cx": 750, "cy": 700, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 11},
  { "cx": 820, "cy": 680, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 12},
  { "cx": 890, "cy": 660, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 13},
  { "cx": 880, "cy": 590, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 14},
  { "cx": 810, "cy": 580, "radius": 30, "color" : "greenyellow", "fontcolor" : "black", "number" : 15},
  { "cx": 740, "cy": 580, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 16},
  { "cx": 670, "cy": 580, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 17},
  { "cx": 600, "cy": 580, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 18},
  { "cx": 530, "cy": 580, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 19},
  { "cx": 460, "cy": 580, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 20},
  { "cx": 390, "cy": 580, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 21},
  { "cx": 320, "cy": 580, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 22},
  { "cx": 320, "cy": 510, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 23},
  { "cx": 390, "cy": 500, "radius": 30, "color" : "turquoise", "fontcolor" : "black", "number" : 24},
  { "cx": 460, "cy": 500, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 25},
  { "cx": 525, "cy": 500, "radius": 30, "color" : "salmon", "fontcolor" : "black", "number" : 26},
  { "cx": 590, "cy": 500, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 27},
  { "cx": 660, "cy": 500, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 28},
  { "cx": 730, "cy": 500, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 29},
  { "cx": 800, "cy": 500, "radius": 30, "color" : "chocolate", "fontcolor" : "white", "number" : 30},
  { "cx": 870, "cy": 500, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 31},
  { "cx": 950, "cy": 480, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 32},
  { "cx": 1020, "cy": 460, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 33},
  { "cx": 1070, "cy": 390, "radius": 30, "color" : "turquoise", "fontcolor" : "black", "number" : 34},
  { "cx": 1090, "cy": 320, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 35},
  { "cx": 1070, "cy": 250, "radius": 30, "color" : "gold", "fontcolor" : "black", "number" : 36},
  { "cx": 1050, "cy": 180, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 37},
  { "cx": 980, "cy": 140, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 38},
  { "cx": 920, "cy": 110, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 39},
  { "cx": 850, "cy": 100, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 40},
  { "cx": 780, "cy": 100, "radius": 30, "color" : "chocolate", "fontcolor" : "white", "number" : 41},
  { "cx": 550, "cy": 170, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 42},
  { "cx": 620, "cy": 170, "radius": 30, "color" : "salmon", "fontcolor" : "black", "number" : 43},
  { "cx": 690, "cy": 170, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 44},
  { "cx": 760, "cy": 170, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 45},
  { "cx": 830, "cy": 180, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 46},
  { "cx": 900, "cy": 190, "radius": 30, "color" : "turquoise", "fontcolor" : "black", "number" : 47},
  { "cx": 970, "cy": 220, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 48},
  { "cx": 970, "cy": 290, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 49},
  { "cx": 920, "cy": 340, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 50},
  { "cx": 850, "cy": 340, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 51},
  { "cx": 780, "cy": 330, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 52},
  { "cx": 710, "cy": 330, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 53},
  { "cx": 640, "cy": 330, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 54},
  { "cx": 570, "cy": 330, "radius": 30, "color" : "black", "fontcolor" : "white", "number" : 55},
  { "cx": 500, "cy": 330, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 56},
  { "cx": 430, "cy": 330, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 57},
  { "cx": 360, "cy": 330, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 58},
  { "cx": 290, "cy": 350, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 59},
  { "cx": 220, "cy": 420, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 60},
  { "cx": 170, "cy": 490, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 61},
  { "cx": 130, "cy": 560, "radius": 30, "color" : "blue", "fontcolor" : "white", "number" : 62},
  { "cx": 140, "cy": 630, "radius": 30, "color" : "snow", "fontcolor" : "black", "number" : 63}];

//Datas for the second level
var level2 = [
  { "cx": 50, "cy": 770, "radius": 30, "color" : "snow", "fontcolor" : "black", "number" : 1 },
  { "cx": 70, "cy": 660, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 2}, 
  { "cx": 70, "cy": 590, "radius": 30, "color" : "khaki", "fontcolor" : "black", "number" : 3},
  { "cx": 70, "cy": 520, "radius": 30, "color" : "dodgerblue", "fontcolor" : "white", "number" : 4},
  { "cx": 70, "cy": 450, "radius": 30, "color" : "salmon", "fontcolor" : "white", "number" : 5},
  { "cx": 70, "cy": 380, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 6},
  { "cx": 70, "cy": 310, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 7},
  { "cx": 70, "cy": 240, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 8},
  { "cx": 140, "cy": 210, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 9},
  { "cx": 210, "cy": 210, "radius": 30, "color" : "green", "fontcolor" : "white", "number" :10},
  { "cx": 230, "cy": 280, "radius": 30, "color" : "chocolate", "fontcolor" : "white", "number" : 11},
  { "cx": 240, "cy": 350, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 12},
  { "cx": 240, "cy": 420, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 13},
  { "cx": 240, "cy": 490, "radius": 30, "color" : "skyblue", "fontcolor" : "black", "number" : 14},
  { "cx": 240, "cy": 570, "radius": 30, "color" : "dodgerblue", "fontcolor" : "black", "number" : 15},
  { "cx": 240, "cy": 640, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 16},
  { "cx": 310, "cy": 670, "radius": 30, "color" : "turquoise", "fontcolor" : "black", "number" : 17},
  { "cx": 380, "cy": 670, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 18},
  { "cx": 450, "cy": 670, "radius": 30, "color" : "red", "fontcolor" : "black", "number" : 19},
  { "cx": 520, "cy": 670, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 20},
  { "cx": 590, "cy": 670, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 21},
  { "cx": 660, "cy": 670, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 22},
  { "cx": 730, "cy": 670, "radius": 30, "color" : "salmon", "fontcolor" : "black", "number" : 23},
  { "cx": 800, "cy": 670, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "white", "number" : 24},
  { "cx": 870, "cy": 670, "radius": 30, "color" : "khaki", "fontcolor" : "black", "number" : 25},
  { "cx": 950, "cy": 670, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 26},
  { "cx": 950, "cy": 600, "radius": 30, "color" : "black", "fontcolor" : "white", "number" : 27},
  { "cx": 950, "cy": 530, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 28},
  { "cx": 880, "cy": 530, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 29},
  { "cx": 810, "cy": 500, "radius": 30, "color" : "chocolate", "fontcolor" : "white", "number" : 30},
  { "cx": 860, "cy": 430, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 31},
  { "cx": 930, "cy": 400, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 32},
  { "cx": 1000, "cy": 350, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 33},
  { "cx": 1070, "cy": 300, "radius": 30, "color" : "gold", "fontcolor" : "black", "number" : 34},
  { "cx": 1070, "cy": 230, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 35},
  { "cx": 1000, "cy": 200, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 36},
  { "cx": 930, "cy": 180, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 37},
  { "cx": 860, "cy": 180, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 38},
  { "cx": 790, "cy": 160, "radius": 30, "color" : "skyblue", "fontcolor" : "black", "number" : 39},
  { "cx": 720, "cy": 180, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 40},
  { "cx": 650, "cy": 220, "radius": 30, "color" : "dodgerblue", "fontcolor" : "white", "number" : 41},
  { "cx": 580, "cy": 240, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 42},
  { "cx": 510, "cy": 260, "radius": 30, "color" : "khaki", "fontcolor" : "black", "number" : 43},
  { "cx": 440, "cy": 280, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 44},
  { "cx": 370, "cy": 270, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 45},
  { "cx": 370, "cy": 200, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 46},
  { "cx": 440, "cy": 150, "radius": 30, "color" : "dodgerblue", "fontcolor" : "white", "number" : 47},
  { "cx": 530, "cy": 150, "radius": 30, "color" : "salmon", "fontcolor" : "white", "number" : 48},
  { "cx": 600, "cy": 150, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 49},
  { "cx": 670, "cy": 120, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 50},
  { "cx": 720, "cy": 50, "radius": 30, "color" : "snow", "fontcolor" : "black", "number" : 51},];

//Datas for the third level
var level3 = [
  { "cx": 50, "cy": 770, "radius": 30, "color" : "snow", "fontcolor" : "black", "number" : 1 },
  { "cx": 120, "cy": 770, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 2}, 
  { "cx": 190, "cy": 770, "radius": 30, "color" : "purple", "fontcolor" : "white", "number" : 3},
  { "cx": 280, "cy": 770, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 4},
  { "cx": 350, "cy": 770, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 5},
  { "cx": 420, "cy": 770, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 6},
  { "cx": 490, "cy": 770, "radius": 30, "color" : "purple", "fontcolor" : "black", "number" : 7},
  { "cx": 520, "cy": 700, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 8},
  { "cx": 530, "cy": 630, "radius": 30, "color" : "purple", "fontcolor" : "white", "number" : 9},
  { "cx": 520, "cy": 560, "radius": 30, "color" : "red", "fontcolor" : "white", "number" :10},
  { "cx": 450, "cy": 520, "radius": 30, "color" : "pink", "fontcolor" : "black", "number" : 11},
  { "cx": 380, "cy": 520, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 12},
  { "cx": 310, "cy": 520, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 13},
  { "cx": 240, "cy": 520, "radius": 30, "color" : "gold", "fontcolor" : "black", "number" : 14},
  { "cx": 170, "cy": 520, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 15},
  { "cx": 120, "cy": 450, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 16},
  { "cx": 120, "cy": 380, "radius": 30, "color" : "chocolate", "fontcolor" : "black", "number" : 17},
  { "cx": 120, "cy": 310, "radius": 30, "color" : "khaki", "fontcolor" : "black", "number" : 18},
  { "cx": 120, "cy": 240, "radius": 30, "color" : "salmon", "fontcolor" : "black", "number" : 19},
  { "cx": 190, "cy": 240, "radius": 30, "color" : "purple", "fontcolor" : "white", "number" : 20},
  { "cx": 260, "cy": 240, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 21},
  { "cx": 330, "cy": 240, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 22},
  { "cx": 400, "cy": 240, "radius": 30, "color" : "purple", "fontcolor" : "white", "number" : 23},
  { "cx": 470, "cy": 240, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 24},
  { "cx": 540, "cy": 210, "radius": 30, "color" : "turquoise", "fontcolor" : "black", "number" : 25},
  { "cx": 610, "cy": 180, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 26},
  { "cx": 680, "cy": 150, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 27},
  { "cx": 700, "cy": 80, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 28},
  { "cx": 770, "cy": 60, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 29},
  { "cx": 840, "cy": 60, "radius": 30, "color" : "purple", "fontcolor" : "black", "number" : 30},
  { "cx": 910, "cy": 60, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 31},
  { "cx": 1070, "cy": 150, "radius": 30, "color" : "silver", "fontcolor" : "black", "number" : 32},
  { "cx": 1000, "cy": 200, "radius": 30, "color" : "mediumaquamarine", "fontcolor" : "black", "number" : 33},
  { "cx": 930, "cy": 190, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 34},
  { "cx": 860, "cy": 190, "radius": 30, "color" : "lavender", "fontcolor" : "black", "number" : 35},
  { "cx": 820, "cy": 260, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 36},
  { "cx": 820, "cy": 350, "radius": 30, "color" : "khaki", "fontcolor" : "black", "number" : 37},
  { "cx": 890, "cy": 350, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 38},
  { "cx": 960, "cy": 350, "radius": 30, "color" : "black", "fontcolor" : "white", "number" : 39},
  { "cx": 1030, "cy": 350, "radius": 30, "color" : "salmon", "fontcolor" : "black", "number" : 40},
  { "cx": 1080, "cy": 400, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 41},
  { "cx": 1080, "cy": 470, "radius": 30, "color" : "greenyellow", "fontcolor" : "black", "number" : 42},
  { "cx": 1080, "cy": 540, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 43},
  { "cx": 1080, "cy": 610, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 44},
  { "cx": 1010, "cy": 650, "radius": 30, "color" : "khaki", "fontcolor" : "black", "number" : 45},
  { "cx": 940, "cy": 640, "radius": 30, "color" : "greenyellow", "fontcolor" : "black", "number" : 46},
  { "cx": 870, "cy": 630, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 47},
  { "cx": 800, "cy": 630, "radius": 30, "color" : "orange", "fontcolor" : "black", "number" : 48},
  { "cx": 780, "cy": 560, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 49},
  { "cx": 710, "cy": 540, "radius": 30, "color" : "midnightblue", "fontcolor" : "white", "number" : 50},
  { "cx": 640, "cy": 540, "radius": 30, "color" : "red", "fontcolor" : "white", "number" : 51},
{ "cx": 640, "cy": 610, "radius": 30, "color" : "green", "fontcolor" : "white", "number" : 52},
{ "cx": 640, "cy": 680, "radius": 30, "color" : "yellow", "fontcolor" : "black", "number" : 53},
{ "cx": 640, "cy": 750, "radius": 30, "color" : "snow", "fontcolor" : "black", "number" : 54}];

/*==============================
Draw the gameboard
===============================*/
function drawgameboard(){

//Add circles to the svgContainer
var circles = svgContainer.selectAll("circle")
                           .data(circleData)
                           .enter()
                           .append("circle");

//Add the circle attributes
var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; }).attr("stroke","black");

//Add the SVG Text Element to the svgContainer
var text = svgContainer.selectAll("text")
                        .data(circleData)
                        .enter()
                        .append("text");

//Add SVG Text Element Attributes
var textLabels = text
                 .attr("x", function(d) { if(d.number < 10){return d.cx-5;}else{ return d.cx-10;} })
                 .attr("y", function(d) { return d.cy+5; })
                 .text(function(d) { return d.number; })
                 .attr("font-family", "Chalkboard")
                 .attr("font-size", "20px")
                 .attr("fill", function(d) { return d.fontcolor; });

//Adding an image
svgContainer.append("svg:image")
      .attr("xlink:href", filename).attr("id", "Lion")	//Filename is specified in the mainscript
      .attr("width", 100)
      .attr("height", 100).attr("x", 0).attr("y",680);

//Adding the image in the top right cornert - imgae to go back to the main game
svgContainer.append("svg:image")
      .attr("onclick","espalda_clicked()")
      .attr("xlink:href", "./images/paper_corner.png")
      .attr("width", 260)
      .attr("height", 120).attr("x", 1000).attr("y",0);


//Adding the cube
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/cube.png").attr("onclick","throwdice()").attr("id", "maingame_cube")
      .attr("width", 100)
      .attr("height", 100).attr("x", 20).attr("y",20);

//Adding the arrow that shows that you need to click on the dice
svgContainer.append("svg:image").attr("id", "click_arrow")
      .attr("xlink:href", "./images/arrow.png")
      .attr("width", 200)
      .attr("height", 200).attr("x", 150).attr("y",0);

//=============================================
//Section at the RIGHT BOTTOM
//=============================================


//Adding the bananaimage
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/bananas.png")
      .attr("width", 80)
      .attr("height", 80).attr("x", width-130).attr("y",height-120);

//Adding the Bananatext
svgContainer.append("text").attr("id", "bananaamount")
      .attr("x", width-240)
      .attr("y", height-50)
      .text("0 :")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

//Adding the moneyimage
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/money.png")
      .attr("width", 80)
      .attr("height", 80).attr("x", width-360).attr("y",height-120);

//Adding the moneytext
svgContainer.append("text").attr("id", "moneyamount")
      .attr("x", width-440)
      .attr("y", height-50)
      .text("0 :")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

}

/*===========================================================================================
Function that is used to set the filename of the character - called by the selectionscreen.js
=============================================================================================*/
function setfilename($file){
 filename = $file;		//Set the filepath of the character
}

/*==========================================================================
Function that is called when continuebutton on the startscreendiv is clicked
===========================================================================*/
function selectionscreen_continueclicked(){

$("#startscreendiv").hide();
sound_introeffect.play();
sound_intromusic.play();
$("#caracterselection").show();

}

/*======================================
Throw the dice
=======================================*/
function throwdice(){

sound_diceroll.play();	//Play the sound for the diceroll

if(deletearrow){		//Defines if the arrow at the begining needs to be deleted
var arrow = document.getElementById("click_arrow");
arrow.parentNode.removeChild(arrow);
deletearrow = false;
}

if(dicethrown == false){	//Throw the dice only when the caracter is not moving

if(entered){	//Call Methods at the beginning of each dice throw
remove();
}

diceresult = Math.floor(Math.random() * 6) + 1;	//Simulates the dice throw

var filename;
//Draw the corresponding image to the diceresult
switch(diceresult){
case 1:
	filename = "One";
break;
case 2:
	filename = "Two";
break;
case 3:
	filename = "Three";
break;
case 4:
	filename = "Four";
break;
case 5:
	filename = "Five";
break;
case 6:
	filename = "Six";
break;
}

var mainscript_operators = ['+','-','*','/'];

//Change the level_operator
switch(level_operator){

case "+":
level_operator = "-";
break;
case "-":
level_operator = "+";
break;
case "*":
level_operator = "/";
break;
case "/":
level_operator = "*";
break;

}

drawcube(filename);

movevalue=currentfield;
move();
}//End if
}

/*======================================================
Function that is responsible for moving the character
======================================================*/
function move(){

  dicethrown = true;

  if(movevalue<(currentfield+diceresult) && goldentered == false && endofround == false && blackentered == false){
    window.setTimeout("move()",1000);
    movevalue++;

    cx = circleData[movevalue-1].cx;	//Read the x coordinate of the next field
    cy = circleData[movevalue-1].cy;	//Read the y coordinate of the next field

    //Delete the lion
    delete_character();

    //Draw the lion
    draw_character(cx,cy);

    if(circleData[movevalue-1].color == "gold"){	//Detect if we entered a gold field
	goldentered = true;
    }

    if(circleData[movevalue-1].color == "black"){	//Detect if we entered a black field
	blackentered = true;
    }

    if(circleData[movevalue-1].number >= circleData.length){	//Detect if we are at the End of the round
	endofround = true;
    }
  }
  else{
  
  //Needs to be the first ifStatement otherwise it will not work
  if(!goldentered && !endofround && !blackentered){
  currentfield = diceresult + currentfield;
  }

  if(blackentered){	//The character has passed a black field
  currentfield = movevalue;
  blackentered = false; //Because we are going to leave the gold field
  }
  
  if(endofround == true){	//The round is over
  currentfield = 1;		//Set the next field to 1
  endofround = false;
  }

  if(goldentered){
  currentfield = movevalue;
  goldentered = false; //Because we are going to leave the gold field
  }
  
  removedicedisplay();	//Remove the dicedisplay
  checkfield();		//Check the field we are standing on
  dicethrown = false;
 }
}

/*====================================================
Function that is responsible for drawing the lion
====================================================*/
function draw_character($cx, $cy){

//Play the move sound
sound_blop.play();

//Append the lion to the svg container
svgContainer.append("svg:image")
      .attr("xlink:href", filename).attr("id", "Lion")
      .attr("width", 100)
      .attr("height", 100).attr("x", $cx-50).attr("y",$cy-90);
}

/*====================================================
Function that is responsible for deleteing the lion
====================================================*/
function delete_character(){

var lion = document.getElementById("Lion");
lion.parentNode.removeChild(lion);
}

/*===================================================
Function that is responsible for drawing the cube
===================================================*/
function drawcube($filename){

//Draw the texts and the cube according to the currentfield and the thrown number

svgContainer.append("svg:image")
      .attr("xlink:href", "./images/" + $filename +".png").attr("id", "diceimage")
      .attr("width", 100)
      .attr("height", 100).attr("x", 290).attr("y",30);

svgContainer.append("text").attr("id", "dicetextone")
      .attr("x", 160)
      .attr("y", 100)
      .text(currentfield + " + ")
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

svgContainer.append("text").attr("id", "diceresult")
      .attr("x", 420)
      .attr("y", 100)
      .text("= " + (currentfield+diceresult))
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

}

/*==================================================
Remove the dice display in the middle of the window
===================================================*/
function removedicedisplay(){

var dicetextone = document.getElementById("dicetextone");
var diceimage = document.getElementById("diceimage");
var diceresult = document.getElementById("diceresult");

//remove the elements
dicetextone.parentNode.removeChild(dicetextone);
diceimage.parentNode.removeChild(diceimage);
diceresult.parentNode.removeChild(diceresult);
}

/*=================================================================================
Hide function at the beginning of the game - Hide the not used elements
===================================================================================*/
function hide(){


$("#shopdiv").hide();
$("#maingamesvg").hide();
$("#krokodiv").hide();
$("#formgame").hide();
$("#endresultgame").hide();
$("#whatisnextgame").hide();
$("#cheese").hide();
$("#tengame").hide();
$("#divisiongame").hide();
$("#bananadelivery").hide();
$("#slidergame").hide();
$("#wallgame").hide();
$("#endofround").hide();
$("#sourcediv").hide();
$("#circlegame").hide();
$("#multiplikationtablediv").hide();
$("#gridaddition").hide();
$("#sharinggame").hide();
$("#memorygame").hide();
$("#castlegame").hide();
$("#bossquiz").hide();
$("#tigerdiv").hide();
$("#progress_buttondiv").hide();
$("#caracterselection").hide();
$("#newleveldiv").hide();
$("#gamerules").hide();
$("#minigameresultdiv").hide();
$("#adventuregame_endresultdiv").hide();
}

/*=================================================================================
Function that detects on which field the caracter is standing
===================================================================================*/
function checkfield(){

var currentcolor = circleData[currentfield-1].color;	//Read the current color the character is standing on

//Stop the sound corresponding to the level
switch(selected_level){

case "level1":
sound_backgroundmusic_level1.pause();
break;
case "level2":
sound_level2.pause();
break;
case "level3":
sound_level3.pause();
break;

}

//Say which method needs to be called. Corresponding to the color the caracter is standing on.
switch(currentcolor){
case "green":
  green();
break;
case "red":
  red();
break;
case "blue":		//Blue = Shop Game
  //Hide the main game
  $("#maingamesvg").hide();
  sound_background2.play();	//Play the background music for the shopgame
  $("#shopdiv").show();
createexercise();
break;
case "yellow":		//Yellow = Krokogame
  $("#maingamesvg").hide();
  createkrokogame();
  sound_background_krokogame.play();
  $("#krokodiv").show();
break;
case "orange":		//Orange == formgame
  $("#maingamesvg").hide();
  sound_background2.play();
  createformsgame();
  $("#formgame").show();
break;
case "purple":		//Purple == Endresultgame
  $("#maingamesvg").hide();
  sound_background2.play();
  createendresultgame();
  $("#endresultgame").show();
break;
case "pink":		//Pink == whatisnextgame
  $("#maingamesvg").hide();
  sound_background2.play();
  nextsvg_drawexercise();
  $("#whatisnextgame").show();
break;
case "lavender":	//Lavender == Cheesegame
  $("#maingamesvg").hide();
  sound_background2.play();
  initialisecheesegame();
  $("#cheese").show();
break;
case "skyblue":		//Skyblue == Tengame
  $("#maingamesvg").hide();
  sound_background2.play();
  initialisetennumber();
  $("#tengame").show();
break;
case "mediumaquamarine":	//Mediumaquamarine == Sortgame
  $("#maingamesvg").hide();
  sound_background2.play();
  initialisedivisiongame();
  $("#divisiongame").show();
break;
case "gold":		//Gold - Dliver the bananas
  $("#maingamesvg").hide();
  sound_monkey.play();
  sound_monkeybackground.play();
  initialise_delivery_screen();
  $("#bananadelivery").show();
break;
case "khaki":	   	//Khaki - Slidergame
  $("#maingamesvg").hide();
  sound_background2.play();
  initialiseslidergame();
  $("#slidergame").show();
break;
case "midnightblue":	//Midnightblue fields - Wallgame
  $("#maingamesvg").hide();
  sound_background2.play();
  initialisewallgame();
  $("#wallgame").show();
break;
case "snow":
  if(rounds_played == adventuregame_number_of_rounds){		//The game is finished
	$("#maingamesvg").hide();
	initialise_endresultscreen();
	$("#adventuregame_endresultdiv").show();	  
  }
  else{
  rounds_played++;
  $("#maingamesvg").hide();
  $("#endofround").show();
  }
break;
case "turquoise":	//Turquoise fields - Circlegame
  $("#maingamesvg").hide();
  sound_background2.play();
  initialisecirclegame();
  $("#circlegame").show();
break;
case "salmon":	//Salmon fields - Mathtable
  $("#maingamesvg").hide();
  sound_background2.play();
  initialise_math_table();
  $("#multiplikationtablediv").show();
break;
case "greenyellow":		//Greenyellow fields => Grid addition
  $("#maingamesvg").hide();
  sound_background2.play();
  initialise_grid_adi_game();
  $("#gridaddition").show();
break;
case "dodgerblue":		//Dodgerblue fields => Share game
  $("#maingamesvg").hide();
  initialise_sharinggame();
  sound_background2.play();
  $("#sharinggame").show();
break;
case "chocolate":		//Chocolate fields => Memorygame
  $("#maingamesvg").hide();
  sound_background2.play();
  initialise_memory_game();
  $("#memorygame").show();
break;
case "silver":			//Silver fields => Castlegame
  $("#maingamesvg").hide();
  sound_castlebackground.play();
  castlegame_resetlives();
  castlegame_initialise();
  $("#castlegame").show();
break;
case "black":			//Check the black fields
  $("#maingamesvg").hide();
  sound_tigerbackground1.play();
  initialise_tiger_div();
  $("#tigerdiv").show();
break;

}
}


/*=================================================================================
Function for green fields
===================================================================================*/
function green(){
minigameresult_greenfields(3, true);

switch(selected_level){
case "level1":
sound_backgroundmusic_level1.pause();
break;
case "level2":
sound_level2.pause();
break;
case "level3":
sound_level3.pause();
break;
}

$("#maingamesvg").hide();
$("#minigameresultdiv").show();

}

/*=================================================================================
Remove the images from the display
===================================================================================*/
function remove(){

var plusbananaimage = document.getElementById("bananaimage");
var plusbananatext = document.getElementById("bananatext");

//remove the elements
plusbananaimage.parentNode.removeChild(plusbananaimage);
plusbananatext.parentNode.removeChild(plusbananatext);

entered = false;
}


/*=================================================================================
Function for red fields
===================================================================================*/

//Display function
function red(){
minigameresult_redfields(3, false);

switch(selected_level){
case "level1":
sound_backgroundmusic_level1.pause();
break;
case "level2":
sound_level2.pause();
break;
case "level3":
sound_level3.pause();
break;
}

$("#maingamesvg").hide();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for blue fields (Shopgame)
===================================================================================*/

function correctblue(){
initialiseminigameresultscreen(10, true);
hideblue();
}

function wrongblue(){
initialiseminigameresultscreen(10, false);
hideblue();
}

function hideblue(){
$("#shopdiv").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for yellow fields (Krokogame)
===================================================================================*/

function checkkrokoanswers($number_correct){

switch($number_correct){

case 0:
  initialiseminigameresultscreen(10, false);
break;
case 1:
  initialiseminigameresultscreen(5, true);
break;
case 2:
  initialiseminigameresultscreen(10, true);
break;
case 3:
  initialiseminigameresultscreen(15, true);
break;
}

hideyellow();

}

function hideyellow(){
  $("#krokodiv").hide();
  sound_background_krokogame.pause();
  $("#minigameresultdiv").show();
}

/*=================================================================================
Function for orange fields
===================================================================================*/

function checkorangefields($correct){

if($correct){
  initialiseminigameresultscreen(10, true);
}
else{
  initialiseminigameresultscreen(10, false);
}

hideorange();

}

function hideorange(){
$("#formgame").hide();
  sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for purple fields
===================================================================================*/

function checkpurplefields($correct){
if($correct){
  initialiseminigameresultscreen(20, true);
}
else{
  initialiseminigameresultscreen(5, false);
}

hidepurple();

}

function hidepurple(){
$("#endresultgame").hide();
  sound_background2.pause();
$("#minigameresultdiv").show();
}


/*=================================================================================
Function for pink fields
===================================================================================*/
function checkpinkfields($is_correct){

hidepink();

if($is_correct){
  initialiseminigameresultscreen(10,true);
}
else{
  initialiseminigameresultscreen(10,false);
}

}

function hidepink(){
$("#whatisnextgame").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for lavender fields
===================================================================================*/
function checklavenderfields($correct){

if($correct){
  initialiseminigameresultscreen(10,true);
}
else{
  initialiseminigameresultscreen(10,false);
}

hidelavender();

}

function hidelavender(){
$("#cheese").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}


/*=================================================================================
Function for skyblue fields
===================================================================================*/
function checkskybluefields($is_correct){

hideskyblue();

if($is_correct){
  initialiseminigameresultscreen(10,true);
}
else{
  initialiseminigameresultscreen(10,false);
}

}

function hideskyblue(){
$("#tengame").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for mediumaquamarine fields
===================================================================================*/
function checkmediumaquamarinefields($is_correct){

hidemediumaquamarine();

if($is_correct){
  initialiseminigameresultscreen(10,true);
}
else{
  initialiseminigameresultscreen(10,false);
}

}

function hidemediumaquamarine(){
$("#divisiongame").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for golden fields
===================================================================================*/
function checkgoldenfields($deliver){

if($deliver){
   initialiseminigame_money_recived(true);
}
else
{
   initialiseminigame_money_recived(false);
}

hidegold();

}

function hidegold(){
$("#bananadelivery").hide();
sound_monkeybackground.pause();
$("#minigameresultdiv").show();

}


/*=================================================================================
Function for khaki fields
===================================================================================*/
function checkkhakifields($correct){

if($correct){
  initialiseminigameresultscreen(10,true);
}
else{
  initialiseminigameresultscreen(10,false);
}

hidekhaki();

}

function hidekhaki(){
$("#slidergame").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for midnightblue fields
===================================================================================*/
function checkmidnightbluefields($correct){

if($correct){
  initialiseminigameresultscreen(10,true);
}
else
{
  initialiseminigameresultscreen(10,false);
}

hidekmidnightblue();

}

function hidekmidnightblue(){
$("#wallgame").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for snow fields
===================================================================================*/
function hidesnowfield(){
$("#endofround").hide();
initialiseminigameresultscreen(10,true);
sound_buttonclicked.play();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for turqois fields
===================================================================================*/
function checkturquoisfields($correct){

if($correct){
  initialiseminigameresultscreen(10,true);
}
else
{
  initialiseminigameresultscreen(10, false);
}

hideturquois();

}

function hideturquois(){
$("#circlegame").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function to check the salmon fields
===================================================================================*/
function checksalmonfields($correct){

if($correct){
  initialiseminigameresultscreen(10,true);
}
else
{
  initialiseminigameresultscreen(10, false);
}

hidesalmon();

}

function hidesalmon(){
$("#multiplikationtablediv").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function to check the greenyellow fields
===================================================================================*/
function checkgreenyellowfields($correct){

if($correct){
  initialiseminigameresultscreen(10,true);
}
else{
  initialiseminigameresultscreen(10,false);
}

hidegreenyellow();

}

function hidegreenyellow(){
$("#gridaddition").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function to check the dodgerblue fields
===================================================================================*/
function checkdodgerblue($correct){

if($correct){
  initialiseminigameresultscreen(10,true);
}
else
{
  initialiseminigameresultscreen(10, false);
}

hidedodgerblue();

}

function hidedodgerblue(){
$("#sharinggame").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function to check the chocolate fields
===================================================================================*/
function checkchocolate($correct, $number){

if($correct){
  initialiseminigameresultscreen($number,true);
}
else
{
  initialiseminigameresultscreen($number, false);
}

hidechocolate();

}

function hidechocolate(){
$("#memorygame").hide();
sound_background2.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for silver fields
===================================================================================*/
function checksilver($is_correct){

if($is_correct){
  initialiseminigameresultscreen(10,true);
}
else{
  initialiseminigameresultscreen(10,false);
}

hidesilver();

}

function hidesilver(){
$("#castlegame").hide();
sound_castlebackground.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for tiger game	/ Black fields
===================================================================================*/
function checkblackfields($result){

switch($result){

case -1:
initialiseminigameresultscreen(30, false);
break;
case 0:
initialiseminigameresultscreen(10, false);
break;
case 1:
initialiseminigameresultscreen(0, true);
break;

}

hideblack();

}

function hideblack(){
$("#tigerdiv").hide();
sound_tigerbackground1.pause();
$("#minigameresultdiv").show();
}

/*=================================================================================
Function for drawing the banana
===================================================================================*/
function drawimage($amount, $positive){

//Play the sound corresponding to the level
switch(selected_level){

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

//Display banana
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/bananas.png").attr("id", "bananaimage")
      .attr("width", 100)
      .attr("height", 100).attr("x", 290).attr("y",30);


if($positive){


//Plus
svgContainer.append("text").attr("id", "bananatext")
      .attr("x", 160)
      .attr("y", 100)
      .text(" + " + $amount)
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

var bananaamount = document.getElementById("bananaamount");
bananacounter = bananacounter + $amount;
bananaamount.textContent = bananacounter + " :";
}
else{


//Minus
svgContainer.append("text").attr("id", "bananatext")
      .attr("x", 160)
      .attr("y", 100)
      .text(" - " + $amount)
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "red");

var bananaamount = document.getElementById("bananaamount");
if(bananacounter -$amount < 0){
bananacounter = 0;
}
else{
bananacounter = bananacounter - $amount;
}
}

bananaamount.textContent = bananacounter + " :";
entered = true;
}

/*=================================================================================
Function for drawing the money
===================================================================================*/
function drawmoney($amount, $positive){

//Display banana
svgContainer.append("svg:image")
      .attr("xlink:href", "./images/money.png").attr("id", "bananaimage")
      .attr("width", 100)
      .attr("height", 100).attr("x", 290).attr("y",30);


if($positive){


//Plus
svgContainer.append("text").attr("id", "bananatext")
      .attr("x", 160)
      .attr("y", 100)
      .text(" + " + 1)
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", item_display_color);

var moneyamount = document.getElementById("moneyamount");
moneycounter = moneycounter + $amount;
moneyamount.textContent = "+ " + moneycounter;

if(moneycounter >= 3){

switch(selected_level){

case "level1":

if(level != "2" && level != "3"){
localStorage.setItem("level", 2);	//Set the amount of levels
document.getElementById("unlockedtext").innerHTML = "Has desbloqueado Universo Matemático";
sound_newlevel.play();
level = "2";
$( "#newleveldiv" ).dialog( "open" );
}
break;
case "level2":
if(level != "3"){
localStorage.setItem("level", 3);
level = "3";
document.getElementById("unlockedtext").innerHTML = "Has desbloqueado Viejo Oeste Matemático";
sound_newlevel.play();
$( "#newleveldiv" ).dialog( "open" );
}
break;
case "level3":
if(charakter_locked == "0"){		//Check if the character is already playable
localStorage.setItem("character", 1);	//Unlock the character
charakter_locked = 1;
document.getElementById("unlockedtext").innerHTML = "Has desbloqueado hipopótamo";
sound_newlevel.play();
$( "#newleveldiv" ).dialog( "open" );

}
break;
}
}

//Reduce the bananas

var bananaamount = document.getElementById("bananaamount");
bananacounter = bananacounter - 50;
bananaamount.textContent =  bananacounter + " :";

}
else{

//Minus
svgContainer.append("text").attr("id", "moneytext")
      .attr("x", 160)
      .attr("y", 100)
      .text(" - " + $amount)
      .attr("font-family", "Chalkboard")
      .attr("font-size", "50px")
      .attr("fill", "red");

var moneyamount = document.getElementById("moneyamount");
if(moneycounter > 0){
moneycounter = moneycounter - $amount;
	}
}

moneyamount.textContent = moneycounter + " :";
entered = true;
}

/*==================================================================
Function that shows the sources
=======================================================*/
function showsources(){
$("#caracterselection").hide();
$("#sourcediv").show();
}

function backfromsource(){
$("#sourcediv").hide();
$("#caracterselection").show();
}

/*===============================================================
Function for the Game rules
=========================================================*/
function showgamerules(){
$("#caracterselection").hide();
$("#gamerules").show();
}

function backfromgamerules(){
$("#gamerules").hide();
$("#caracterselection").show();
}

/*=============================================================
Function that is called by the Espalda Button
=================================================*/
function espalda_clicked(){
if(dicethrown == false){
if (confirm('De verdad quieres volver a la pantalla de inicio?')) {
    $("#maingamesvg").hide();
    initialise_levels_selectionsscreen();
    $("#caracterselection").show();

//Play the sound corresponding to the level
switch(selected_level){

case "level1":
sound_backgroundmusic_level1.pause();
break;
case "level2":
sound_level2.pause();
break;
case "level3":
sound_level3.pause();
break;

} // End Switch Case

sound_intromusic.play();

reset_maingamesvg();

  }
 }
}

/*==========================================
Function that resets the maingamesvg
===========================================*/
function reset_maingamesvg(){

//Clear all images from maingamesvg
$("#maingamesvg").empty();

//Reset the necessary variables
banacounter = 0;
moneycounter = 0;
currentfield = 1;
entered = false;
deletearrow = true;
rounds_played = 1;
number_correct_answered = 0;
number_wrong_answered = 0;

}


/*=======================================
Function that resets the saved values
========================================*/
function reset_saved_score(){

if (confirm('Tu desea restablecer las puntuaciones')) {

localStorage.removeItem("level");

localStorage.removeItem("correct_level1");
localStorage.removeItem("wrong_level1");

localStorage.removeItem("correct_level2");
localStorage.removeItem("wrong_level2");

localStorage.removeItem("correct_level3");
localStorage.removeItem("wrong_level3");

localStorage.removeItem("character");	//Unlock the character

initialise_levels_selectionsscreen();

}


}








