let sentence = "Hi hello hi hello";
console.log(getWords(""," "))
function getWords(sentence,delimitor)
{
   if(typeof sentence !== 'string')
   {
      throw new Error("Invalid input type")
   }

    sentence=sentence.toLowerCase()
    return sentence.split(delimitor);
}
function getDuplicateWords(words)
{
   let duplicates = [];
   for(let i = 0; i < words.length; i++){
      if(words.indexOf(words[i]) !== words.lastIndexOf(words[i])){
         if(!duplicates.includes(words[i])){
            duplicates.push(words[i]);
         }
      }
   }
   return duplicates
}
function ifDuplicateWords(sentence) {
   if(typeof sentence !== 'string')
   {
      throw new Error("Invalid input type")
   }
   let words = getWords(sentence," ")
   let duplicateWords=getDuplicateWords(words)
   /*if(duplicateWords.length===0)
        return duplicateWords
   return duplicateWords.join(" , ").concat(" is repeated");
   */
   return duplicateWords
}
console.log(ifDuplicateWords(sentence));

module.exports = {
   getWords,
   getDuplicateWords,
   ifDuplicateWords
}