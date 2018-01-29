var Fizzbuzz = function() {};

Fizzbuzz.prototype.go = function (number) {
  if (this._isDivisibleBy(3, number)) {
    return 'Fizz'
  }
};

Fizzbuzz.prototype._isDivisibleBy = function(divisor, number) {
  return (number % divisor === 0);
};
