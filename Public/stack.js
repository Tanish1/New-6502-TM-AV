var stackList = [];
var i;
var hexString;
var zero = "00";
var final;
var txt = "";
var temp;
var finStr = "";

function generateStack() {
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

function updateStack(memory) {
	stackList = [];
	txt = "";
	//console.log("Hello!")
	for (i = 255; i >= 0; i--) {
		if (i <= 15) {
			hexString = "00" + i.toString(16);
		}
		else {
			hexString = i.toString(16);
		}
		hexString = hexString.toUpperCase();
		final = hexString + ":" + memory.get(0x100 + i).toString(16);
		stackList.push(final);
	}

function showStackP (SP) {
	temp = SP;
	finStr = stackList[temp] + " <--";
	stackList[temp] = finStr;
}

generateStack();
stackList.forEach(newLineArray);
document.getElementById("stack").innerHTML = txt;