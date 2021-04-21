var stackList = [];
var i;
var hexString;
var zero = "00";
var final;
var txt = "";

function generateStack(stackList) {
	for (i = 0; i < 256; i++) {
		hexString = i.toString(16);
		
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