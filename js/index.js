var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var colorCouples = [["#EF4444", "#009F75"], ["#FAA31B", "#88C6ED"], ["#FFF000", "#394BA0"], ["#82C341", "#D54799"], ["#fff", "#000"]];
var fontType = ['Roboto', 'Roboto Slab',  'Roboto Mono', 'PT Sans Caption'];

var containerSpan = document.getElementById("container"),
  firstSpan = document.getElementById("letterOne"),
  secondSpan = document.getElementById("letterTwo");


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


function randomMaker() {

var eitherOneOrZero = randomIntFromInterval(0,1),
		theOtherValue = (eitherOneOrZero == 0 ? 1 : 0);

var colorPairing = randomIntFromInterval(0,colorCouples.length - 1),
		fontNumber = randomIntFromInterval(0,fontType.length - 1);

	containerSpan.style.backgroundColor = colorCouples[colorPairing][eitherOneOrZero];

	firstSpan.innerHTML = letters[(randomIntFromInterval(0,letters.length - 1))];
	firstSpan.style.color = colorCouples[colorPairing][theOtherValue];
	firstSpan.style.fontFamily = fontType[fontNumber];

	secondSpan.innerHTML = letters[(randomIntFromInterval(0,letters.length - 1))];
	secondSpan.style.color = colorCouples[colorPairing][theOtherValue];
	secondSpan.style.fontFamily = fontType[fontNumber];
	
}

randomMaker();

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        randomMaker();
    }
}
