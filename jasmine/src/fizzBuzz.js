var Fizzbuzz = function() {};

Fizzbuzz.prototype.isDivisibleBy = function(divisor, number) {
  return (number % divisor === 0);
};
