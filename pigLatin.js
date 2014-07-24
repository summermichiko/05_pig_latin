function translate(sentence){
 var vowels = 'aeiou';
 var index = 0;
 var finalWordsArray = [];
 
 var sentenceArray = sentence.split(" ");
 console.log(sentenceArray);
    
    sentenceArray.forEach(function(word){ //can't use break statement
        for(var i = 0; i < word.length; i++){
            if(vowels.search(word[i]) !== -1){
                if(word[i] != "u" || (word[i] === "u" && word[i - 1] != 'q') ){
                    index = i ;
                    break;
                }       
            }     
        }   
        finalWordsArray.push(word.substring(index, word.length) + word.substring(0, index) + 'ay');
                                                       //apple            "" + 'ay" === appleay
                                                       //erry        + 'ch' + "ay"
                                                       //iet       + qu   + ietquay
    })
    return finalWordsArray.join(" ");
}


