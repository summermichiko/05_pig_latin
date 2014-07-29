function translate(sentence){
    var vowels = "aeiou";
    var index = 0;
    var finalWordsArray = [];
 
    var sentenceArray = sentence.split(" "); //changing sentence string into an array
    
    sentenceArray.forEach(function(word){ //looping over each word
        console.log(word);

        for(var i = 0; i < word.length; i++){ //looping over each letter in each word
            console.log(word[i]);
            if(vowels.search(word[i]) !== -1){ //if word[i] is not in the string vowels, it will return -1, otherwise it will return the index number
                //i has an index of 2
                if(word[i] !== "u" || (word[i] === "u" && word[i - 1] !== 'q') ){
                   index = i ;
                   break; //stops executing code at this point
                }       
            }     
        }   
        finalWordsArray.push(word.substring(index, word.length) + word.substring(0, index) + 'ay');
                                                       //apple            "" + 'ay" === appleay
                                                       //erry        + 'ch' + "ay"
                                                       //iet       + qu   + ietquay
    });
    return finalWordsArray.join(" ");
}


