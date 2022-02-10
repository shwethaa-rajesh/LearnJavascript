let sentence = "Hi hello Hi hello";
function findDuplicateWords(sentence) {
   let words = sentence.split(" ");
   let res = [];
   for(let i = 0; i < words.length; i++){
      if(words.indexOf(words[i]) !== words.lastIndexOf(words[i])){
         if(!res.includes(words[i])){
            res.push(words[i]);
         }
      }
   }
   if(res.length===0)
        return "No duplicates found"
   return res.join(" , ").concat(" is repeated");
}
console.log(findDuplicateWords(sentence));