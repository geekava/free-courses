(function encryptCesar() {
	const argumentList = process.argv;
	const arguments = argumentList.slice(2,argumentList.length);

	if (arguments.length === 2) {
		let text = arguments[0];
		let shift = Number(arguments[1]); 
		
		let result = "";
	 
		for (var i = 0; i < text.length; i++) {
			
			if (text[i] == text[i].toUpperCase()) {
				result += String.fromCharCode((text[i].charCodeAt(0)+shift-65)%26 +65);
			} else {
				
				result += String.fromCharCode((text[i].charCodeAt(0)+shift-97)%26 +97);
			}
		}
	 
		process.stdout.write(`${result}`);

		return result;
	} 

}());