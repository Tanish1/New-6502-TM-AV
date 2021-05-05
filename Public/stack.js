var stackList = [];
var i;
var hexString;
var zero = "00";
var final;
var txt = "";
var two = "";

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

function updateStack(memory, regSP) {
	stackList = [];
	txt = "";
	for (i = 255; i >= 0; i--) {
		if (i <= 15) {
			hexString = "0" + i.toString(16);
		}
		else {
			hexString = i.toString(16);
		}
		hexString = hexString.toUpperCase();
		two = memory.get(0x100 + i).toString(16);
		if (two.length == 1) {
			two = "0" + two;
		}
		final = hexString + ":" + two;
		if (regSP == i) {
			final = final + " <--";
		}
		stackList.push(final);
	}
	stackList.forEach(newLineArray);
	document.getElementById("stack").innerHTML = txt;
}