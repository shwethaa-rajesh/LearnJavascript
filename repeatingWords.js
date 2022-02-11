let sentence = "Hi hello Hi hello";
function getWords(sentence)
{
    return sentence.split(" ");
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
   let words = getWords(sentence)
   duplicates=getDuplicateWords(words)
   if(duplicates.length===0)
        return "No duplicates found"
   return duplicates.join(" , ").concat(" is repeated");
}
console.log(ifDuplicateWords(sentence));