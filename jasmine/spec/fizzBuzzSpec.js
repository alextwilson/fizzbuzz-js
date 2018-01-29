describe('Fizzbuzz', function(){

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('when playing returns', function() {

    describe('Fizz for multiples of 3', function() {

      it('Fizz when given 3', function() {
        expect(fizzbuzz.go(3)).toEqual('Fizz');
      });

      it('Fizz when given 6', function() {
        expect(fizzbuzz.go(6)).toEqual('Fizz');
      });
    });

    describe('Buzz for multiples of 5', function() {

      it('Fizz when given 5', function() {
        expect(fizzbuzz.go(5)).toEqual('Buzz');
      });

      it('Fizz when given 10', function() {
        expect(fizzbuzz.go(10)).toEqual('Buzz');
      });
    });

    describe('FizzBuzz for multiples of 15', function() {

      it('Fizz when given 15', function() {
        expect(fizzbuzz.go(15)).toEqual('FizzBuzz');
      });

      it('Fizz when given 30', function() {
        expect(fizzbuzz.go(30)).toEqual('FizzBuzz');
      });
    });
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz._isDivisibleBy(3, 3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz._isDivisibleBy(5, 10)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz._isDivisibleBy(15, 30)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz._isDivisibleBy(3, 1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz._isDivisibleBy(5, 1)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz._isDivisibleBy(15, 1)).toBe(false);
    });
  });
});
