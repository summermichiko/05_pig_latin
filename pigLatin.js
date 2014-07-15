var translate = function(word) {
	var pigla = "ay";
	var vowels = ["a", "e", "i", "o", "u"]; //use?
	var firstLetter = word.slice(0,1);
	var firstTwoLetters = word.slice(0,2);
	var firstThreeLetters = word.slice(0,3);
	var s = "";
	var ending;

	if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u"){
		s = word + pigla;
		return s; //1
	}

	if (firstLetter != "a" || firstLetter != "e" || firstLetter != "i" || firstLetter != "o" || firstLetter != "u"){
		s = word.substring(1) + firstLetter + pigla;
		console.log(word.substring(1));
		return s; //2
	}

	if (firstTwoLetters != "a" || firstTwoLetters != "e" || firstTwoLetters != "i" || firstTwoLetters != "o" || firstTwoLetters != "u") {
		s = word.substring(2) + firstTwoLetters + pigla;
		console.log(word.substring(2));
		return s; //5? should be 3
	}

	if (firstThreeLetters != "a" || firstThreeLetters != "e" || firstThreeLetters != "i" || firstThreeLetters != "o" || firstThreeLetters != "u") {
		s = word.substring(3) + firstThreeLetters + pigla;
		console.log(word.substring(3)); //should be 5
		return s;
	}
	
};






