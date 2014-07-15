var translate = function(word) {
	var pigla = "ay";
	var vowels = ["a", "e", "i", "o", "u"];
	var firstLetter = word.slice(0,1);
	var secondLetter = word.slice(0,2);
	var s = "";
	var ending;

	if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u"){
		s = word + pigla;
		return s;
	}

	if (firstLetter != "a" || firstLetter != "e" || firstLetter != "i" || firstLetter != "o" || firstLetter != "u"){
		s = word.substr(1) + firstLetter + pigla;
		return s;
	}

	if (firstLetter && secondLetter != "a" || firstLetter && secondLetter != "e" || firstLetter && secondLetter != "i" || firstLetter && secondLetter != "o" || firstLetter && secondLetter != "u"){
		ending = firstLetter + secondLetter + pigla;
		s = word.substr(2) + ending;
		return s;
	}

	//1, 2, 5 are working!

	
};






