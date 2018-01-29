var Fizzbuzz = function() {};

Fizzbuzz.prototype._isDivisibleBy = function(divisor, number) {
  return (number % divisor === 0);
};
