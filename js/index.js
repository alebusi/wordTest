//var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersC = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
var lettersV = ["a","e","i","o","u"];
var lettersVn = ["a","e","i","o"];
		 
var colorCouples = [["#000", "#000"]];
var fontType = ['Roboto Mono 500', 'PT Sans Caption'];

var containerSpan = document.getElementById("container"),
  firstSpan = document.getElementById("letterOne"),
  secondSpan = document.getElementById("letterTwo"),
  thirdSpan = document.getElementById("letterThree");
  fourSpan = document.getElementById("letterFour");


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function letterSetC (spanName, colorValue, numberValue, fontValue) {
	spanName.innerHTML = lettersC[(randomIntFromInterval(0,lettersC.length - 1))];
	spanName.style.color = colorCouples[colorValue][numberValue];
	spanName.style.fontFamily = fontType[fontValue];
}

function letterSetV (spanName, colorValue, numberValue, fontValue) {
	spanName.innerHTML = lettersV[(randomIntFromInterval(0,lettersV.length - 1))];
	spanName.style.color = colorCouples[colorValue][numberValue];
	spanName.style.fontFamily = fontType[fontValue];
}

function resetSpan (spanName) {
	spanName.innerHTML = ""
}

function randomMaker() {
	resetSpan(firstSpan);
	resetSpan(secondSpan);
	resetSpan(thirdSpan);
	// resetSpan(fourSpan);

// Picks either 1 or 0 to get the first or second color from the array
var eitherOneOrZero = 0, //randomIntFromInterval(0,1),
         numletters = randomIntFromInterval(0,1),
		theOtherValue = (eitherOneOrZero == 0 ? 1 : 0);

// Picks a color pair from colorCouples array
var colorPairing = randomIntFromInterval(0,colorCouples.length - 1),
// Picks a font from fontType array
		fontNumber = randomIntFromInterval(0,fontType.length - 1);

// Picks a color for the background
	containerSpan.style.backgroundColor = colorCouples[colorPairing][eitherOneOrZero];

	letterSetC(firstSpan, colorPairing, theOtherValue, fontNumber);
	letterSetV(secondSpan, colorPairing, theOtherValue, fontNumber);
        letterSetC(thirdSpan, colorPairing, theOtherValue, fontNumber);
        letterSetV(fourSpan, colorPairing, theOtherValue, fontNumber);

	//numletters == 0 ? letterSet(thirdSpan, colorPairing, theOtherValue, fontNumber) : null;	
}

randomMaker();

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        randomMaker();
    }
}
function aggiorna() {
    location.reload();
};
