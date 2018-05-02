const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');


// normal case: input test on Range
describe('fizzBuzzer', function() {
	// test the normal case
	it('should be devidable by 15 and return fizz-buzz', function() {
        [15, 30, 45].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
          });
    });
    
    it('should be devidable by 5 and return buzz', function() {
        [10, 20, 25].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('buzz');
          });
    });
    
    it('should be devidable by 3 and return fizz', function() {
        [3, 6, 9].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
          });
    });

    it('should return num if not devidable by 3 or 5', function(){
        [1, 4, 23].forEach(function(input){
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });
    
    it('should produce error if input isn\'t number', function() {
        [true, false, 'cat', function() {}, [1, 2, 3]].forEach(function(input) {
            expect(fizzBuzzer(input)).to.throw(Error);
        });
      });
	});