//
//
//
//
//

// unit test

var expect = chai.expect;
// imports chai's expect method

describe('MyFunctions', function() {
	describe('#doSomething', function() {
		it('should concatenate the two parameters', function() {
			var x = doSomething('Hello', 5);
			expect(x).to.equal('Hello5');
				// allowed to be read and written in
				// almost plain English in mocha and chai
		})
		it('should throw an error if first parameter is not a string', function() {
			expect(function() {
				doSomething(5, 5);
			}).to.throw(Error);
		})
	})
})
