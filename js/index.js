var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var colorCouples = [["#fff", "#000"]];
var fontType = ['Roboto', 'Roboto Mono', 'PT Sans Caption'];

var containerSpan = document.getElementById("container"),
  firstSpan = document.getElementById("letterOne"),
  secondSpan = document.getElementById("letterTwo"),
  thirdSpan = document.getElementById("letterThree");


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function letterSet (spanName, colorValue, numberValue, fontValue) {
	spanName.innerHTML = letters[(randomIntFromInterval(0,letters.length - 1))];
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

// Picks either 1 or 0 to get the first or second color from the array
var eitherOneOrZero = randomIntFromInterval(0,1),
		theOtherValue = (eitherOneOrZero == 0 ? 1 : 0);

// Picks a color pair from colorCouples array
var colorPairing = randomIntFromInterval(0,colorCouples.length - 1),
// Picks a font from fontType array
		fontNumber = randomIntFromInterval(0,fontType.length - 1);

// Picks a color for the background
	containerSpan.style.backgroundColor = colorCouples[colorPairing][eitherOneOrZero];

	letterSet(firstSpan, colorPairing, theOtherValue, fontNumber);
	letterSet(secondSpan, colorPairing, theOtherValue, fontNumber);

	eitherOneOrZero == 0 ? letterSet(thirdSpan, colorPairing, theOtherValue, fontNumber) : null;

	// letterSet(thirdSpan, colorPairing, theOtherValue, fontNumber);
	
}

randomMaker();

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        randomMaker();
    }
}
