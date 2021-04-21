var stackList = [];
var i;
var hexString;
var zero = "00";
var final;
var txt = "";

function generateStack(stackList) {
	for (i = 255; i >= 0; i--) {
		if (i <= 15) {
			hexString = "0" + i.toString(16);
		}
		else {
			hexString = i.toString(16);
		}
		hexString = hexString.toUpperCase();
		final = hexString + ":" + zero;
		stackList.push(final);
	}
}

function newLineArray(value) {
    txt = txt + value + '\n';
}

generateStack(stackList);
stackList.forEach(newLineArray);
document.getElementById("stack").innerHTML = txt;