var stackList = [];

function generateStack(stackList) {
	var i;
	var hexString;
	var zero = "00";
	var final;
	for (i = 1; i < 257; i++) {
		hexString = i.toString(16);
		final = hexString + ":" + zero;
		stackList.push(final);
	}
} 