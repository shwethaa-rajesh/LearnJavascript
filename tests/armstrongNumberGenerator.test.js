// Armstrong Generator
const obj = require('../armstrongNumberGenerator')

/* IsArmstrongNumber function
Success cases:
 Should return true if its an armstrong number
 Should return false if its not an armstrong number
// Failure cases:
  Input is not a number -> Invalid input
  Negative number-> Input number should be positive

*/

describe('IsArmstrongNumber function', function() {
    it('Should return true if its an armstrong number', function() {
        const   isArmstrongNumberResult = obj.isArmstrong(153)
                expect(isArmstrongNumberResult).toBe(true)
    })
    it('Should return false if its not an armstrong number', function() {
        const   isArmstrongNumberResult = obj.isArmstrong(20)
                expect(isArmstrongNumberResult).toBe(false)
    })
    it('should throw invalid input when input is not a number', function() {
        expect(() => obj.isArmstrong("string")).toThrow('Invalid input type');
    })
    it('should throw invalid input when input is not a number', function() {
        expect(() => obj.isArmstrong([1,2,3,4])).toThrow('Invalid input type');
    })
    it('should throw invalid input when input is not positive', function() {
        expect(() => obj.isArmstrong(-49)).toThrow('Input type should be positive');
    })
})

// GenerateArmstrongNums function

// Success cases:
// Should print all armstrong numbers until the input number
// Failure cases:
// Should throw invalid input when input is negative
// Should throw invalid input when input is non-numerical
// Should throw invalid input when input is too large
describe('printArmstrong function', function() {
    it('Should print all armstrong numbers until the input number', function() {
        const generateArmstrongNumsArray = obj.printArmstrong(20)
        expect(generateArmstrongNumsArray).toStrictEqual([0,1,2,3,4,5,6,7,8,9])
    })
    it('Should throw invalid input when input is negative', function() {
        expect(() => obj.printArmstrong(-3)).toThrow('Range should be positive');
    })
    it('Should throw invalid input when input is non-numerical', function() {
        expect(() => obj.printArmstrong('hello')).toThrow('Invalid input type');
    })
    it('Should throw invalid input when input is too large', function() {
        expect(() => obj.printArmstrong(23456782374664738928282920298373733839893986533877334567893564879047383920939494984773737380938765567333)).toThrow('Integer range exceeded');
    })
})