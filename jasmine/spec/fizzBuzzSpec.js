describe('Fizzbuzz', function(){

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
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
