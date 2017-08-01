function testStringPad(str, len, pad) {
	console.log(str,len,pad, "L", JSON.stringify(str.padStart(len, pad)));
	console.log(str,len,pad, "R", JSON.stringify(str.padEnd(len, pad)));

}



testStringPad("cow", 20);
testStringPad("cow", 20, ' ');
testStringPad("cow", 20, 'cat ');
testStringPad("cow", 1);
testStringPad("cow", 1, 'cat ');
