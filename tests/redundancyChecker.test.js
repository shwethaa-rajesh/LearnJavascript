const obj = require('../redundancyChecker')

/* getWords
Success cases:
 Should return split words of a sentence
 Should return empty list if sentence is an empty string
// Failure cases:
  Input is not a string -> Invalid input

*/

describe('getWords function', function() {
    it('Should return split words of a sentence', function() {
        const   words = obj.getWords('Multiple words in a sentence'," ")
                expect(words).toStrictEqual(['multiple','words','in','a','sentence'])
    })
    it('Should return empty list if sentence is an empty string', function() {
        const   words = obj.getWords('',' ')
                expect(words).toStrictEqual([""])
    })
    it('should throw invalid input when input is not a string', function() {
        expect(() => obj.getWords(1234," ")).toThrow('Invalid input type');
    })
})

// getDuplicateWords function

// Success cases:
// Should return empty list if no repetition is there
// Should return redundant words 

describe('getDuplicatewords function', function() {
    it('Should return empty list if no repetition is there', function() {
        const duplicateWords = obj.getDuplicateWords(["list", "of", "words"])
        expect(duplicateWords).toStrictEqual([])
    })
    it('Should return redundant words for a sentence in same casing', function() {
        const duplicateWords = obj.getDuplicateWords(['hi', 'hi', 'Hello', 'Hello', 'hey'])
      
        expect(duplicateWords).toStrictEqual(['hi','Hello'])
    })
   
})

// ifDuplicateWords function

// Success cases:
// Should return empty list if no repetition is there
// Should return redundant words for same casing 
// Should return redundant words for different casing

// Failure cases:
//Input is not a string -> Invalid input

describe('ifDuplicatewords function', function() {
    it('Should return empty list if no repetition is there', function() {
        const duplicateWords = obj.ifDuplicateWords("list of words")
        expect(duplicateWords).toStrictEqual([])
    })
    it('Should return redundant words for a sentence in same casing', function() {
        const duplicateWords = obj.ifDuplicateWords('hi hi Hello Hello hey')
      
        expect(duplicateWords).toStrictEqual(['hi','hello'])
    })
    it('Should return redundant words for a sentence in different casing', function() {
        const duplicateWords = obj.ifDuplicateWords('hi hi HelLO hEllo hey')
      
        expect(duplicateWords).toStrictEqual(['hi','hello'])
    })
    it('should throw invalid input when input is not a string', function() {
        expect(() => obj.ifDuplicateWords(1234," ")).toThrow('Invalid input type');
    })
})
