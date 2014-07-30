function translate(phrase){
    var vowels = "aeiou";
    var index = 0;
    var finalWordsArray = [];
    var phraseArray = phrase.split(" "); //changing a string into an array
    
    phraseArray.forEach(function(word){ //foreach is called on an array (phraseArray) and performs the function on each element in the array
        console.log(word);
        for(var i = 0; i < word.length; i++){ //looping over each letter in each word
          console.log(word[i]);
            if(vowels.search(word[i]) !== -1){ //if word[i] does contain a vowel
                //if word[i] is not in the string vowels, it will return -1, otherwise it will return the index number
                //i has an index of 2
                if(word[i] !== "u" || (word[i] === "u" && word[i - 1] !== 'q') ){
                   index = i ;
                   break; //stops executing code at this point
                }       
            }     
        }   
        finalWordsArray.push(word.substring(index, word.length) + word.substring(0, index) + 'ay'); //substring extracts start to end, not including end
                                                       //apple            "" + 'ay" === appleay
                                                       //erry        + 'ch' + "ay"
                                                       //iet       + qu   + ietquay
    });
    return finalWordsArray.join(" "); //join elements of an array into a string
}

// function translate(wordString){
//   var vowel = "aeiou";
//   var index = 0;
//   var wordArr = wordString.split(" ");
//   var wordArray = [];

//   wordArr.forEach(function(word){
//     for(var i = 0; i < word.length; i++){
//       if(vowel.search(word[i]) !== -1){
//         if(word[i] !== "u" || (word[i] === "u" && word[i -1] !== "q")){
//           index = i;
//           break;
//         }
//       }
//     }
//     wordArray.push(word.substring(index, word.length) + word.substring(0, index) + 'ay');
//     console.log(word.substring(index, word.length) + word.substring(0, index) + 'ay');
//   });

//   return wordArray.join(" ");
// }
